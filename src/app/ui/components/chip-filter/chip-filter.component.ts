import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-chip-filter',
  imports: [IonicModule, CommonModule],
  templateUrl: './chip-filter.component.html',
  styleUrls: ['./chip-filter.component.scss'],
})
export class ChipFilterComponent {

  @Input() brand?: string;
  @Input() services: string[] = [];   // ✅ valor por defecto
  @Input() maxDistanceKm?: number;
  @Input() order?: 'distance' | 'rating' | 'price';

  @Output() open = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();

  get hasFilters(): boolean {
    return !!(
      this.brand ||
      this.services.length > 0 ||
      this.maxDistanceKm ||
      this.order
    );
  }
}
