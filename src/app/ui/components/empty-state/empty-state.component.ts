import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-empty-state',
  imports: [IonicModule, CommonModule],
  template: `
    <div class="wrap">
      <ion-icon [name]="icon"></ion-icon>
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
    </div>
  `,
  styles: [`
    .wrap{ padding:24px; text-align:center; color:#475569; }
    ion-icon{ font-size:42px; margin-bottom:10px; }
    h3{ margin:0 0 6px; color:#0F172A; font-weight:600; }
    p{ margin:0; }
  `]
})
export class EmptyStateComponent {
  @Input() icon = 'search-outline';
  @Input() title = 'Sin resultados';
  @Input() message = 'Prueba cambiando tu búsqueda o filtros.';
}
