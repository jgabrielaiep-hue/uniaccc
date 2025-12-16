import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { FiltersState } from '../../services/filters';


@Component({
  standalone: true,
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class FiltersPage {
  @Input() current: FiltersState = {};
  state: FiltersState = { services: [], maxDistanceKm: 10, order: 'distance' };

  brands = ['Yamaha', 'Honda', 'Suzuki', 'Kawasaki', 'Bajaj'];
  services = ['Cambio de aceite', 'Frenos', 'Cadena', 'Diagnóstico', 'Neumáticos'];

  constructor(private modalCtrl: ModalController) {}

  ionViewWillEnter() {
    this.state = {
      brand: this.current?.brand ?? null,
      services: this.current?.services ?? [],
      maxDistanceKm: this.current?.maxDistanceKm ?? 10,
      order: this.current?.order ?? 'distance',
    };
  }

  close() { this.modalCtrl.dismiss(); }
  clear() { this.modalCtrl.dismiss({ action: 'clear' }); }
  apply() { this.modalCtrl.dismiss({ action: 'apply', filters: this.state }); }
}
