import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-rating-stars',
  imports: [IonicModule, CommonModule],
  template: `
    <span class="stars" aria-label="rating">
      <ion-icon *ngFor="let s of [1,2,3,4,5]"
        [name]="s <= rounded ? 'star' : 'star-outline'"></ion-icon>
      <span class="num">{{ value }}</span>
    </span>
  `,
  styles: [`
    .stars{ display:inline-flex; align-items:center; gap:2px; color:#0F172A; }
    ion-icon{ font-size:16px; }
    .num{ margin-left:6px; font-size:13px; color:#475569; }
  `]
})
export class RatingStarsComponent {
  @Input() value = 0;
  get rounded() { return Math.round(this.value); }
}
