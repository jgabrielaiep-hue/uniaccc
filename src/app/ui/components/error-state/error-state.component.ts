import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-error-state',
  imports: [IonicModule, CommonModule],
  template: `
    <div class="wrap">
      <ion-icon name="warning-outline"></ion-icon>
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <ion-button expand="block" (click)="retry.emit()">Reintentar</ion-button>
    </div>
  `,
  styles: [`
    .wrap{ padding:24px; text-align:center; color:#475569; }
    ion-icon{ font-size:42px; margin-bottom:10px; }
    h3{ margin:0 0 6px; color:#0F172A; font-weight:600; }
    p{ margin:0 0 14px; }
  `]
})
export class ErrorStateComponent {
  @Input() title = 'Ocurrió un error';
  @Input() message = 'Intenta nuevamente.';
  @Output() retry = new EventEmitter<void>();
}
