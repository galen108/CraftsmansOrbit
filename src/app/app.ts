import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  OnDestroy,
  inject,
  signal
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ARCHETYPES } from './data/archetypes.data';
import { Archetype, ArchetypeSection, ContentBlock } from './models/archetype.model';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatButtonModule, MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly archetypes: Archetype[] = ARCHETYPES;
  protected readonly activeIndex = signal<number>(0);
  protected readonly menuOpen = signal<boolean>(false);
  protected readonly isDark = signal<boolean>(true);

  private readonly doc = inject(DOCUMENT);
  private observer?: IntersectionObserver;

  toggleTheme(): void {
    this.isDark.update(dark => !dark);
    const html = this.doc.documentElement;
    if (this.isDark()) {
      html.classList.remove('light-theme');
    } else {
      html.classList.add('light-theme');
    }
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.id.replace('arc-', ''), 10);
            if (!isNaN(idx)) this.activeIndex.set(idx);
          }
        }
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );
    this.doc.querySelectorAll('[id^="arc-"]').forEach((el) => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  scrollTo(index: number): void {
    const el = this.doc.getElementById(`arc-${index}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.menuOpen.set(false);
  }

  focusMain(): void {
    const el = this.doc.getElementById('main-content');
    if (el) {
      el.focus();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  trackArchetype(_: number, a: Archetype): number {
    return a.index;
  }

  trackSection(_: number, s: ArchetypeSection): string {
    return s.title;
  }

  trackBlock(i: number, _: ContentBlock): number {
    return i;
  }
}
