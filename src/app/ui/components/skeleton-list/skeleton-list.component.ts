import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-skeleton-list',
  imports: [IonicModule, CommonModule],
  template: `
    <ion-list>
      <ion-item *ngFor="let _ of items">
        <ion-thumbnail slot="start">
          <ion-skeleton-text animated style="width:64px;height:64px"></ion-skeleton-text>
        </ion-thumbnail>
        <ion-label>
          <h2><ion-skeleton-text animated style="width:70%"></ion-skeleton-text></h2>
          <p><ion-skeleton-text animated style="width:45%"></ion-skeleton-text></p>
        </ion-label>
      </ion-item>
    </ion-list>
  `
})
export class SkeletonListComponent {
  @Input() count = 6;
  get items() { return Array.from({ length: this.count }); }
}
