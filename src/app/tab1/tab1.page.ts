import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

import { DataService } from '../services/data';
import { Provider } from '../models/provider';

// Opcional: si tienes el modal
// import { FiltersPage } from '../modals/filters/filters.page';

type Category = 'Todos' | 'Mecánica' | 'Lavado' | 'Eléctrica' | 'Pintura';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class Tab1Page implements OnInit {
  query = '';
  loading = true;

  categories: Category[] = ['Todos', 'Mecánica', 'Lavado', 'Eléctrica', 'Pintura'];
  selectedCategory: Category = 'Todos';

  providers: Provider[] = [];
  filtered: Provider[] = [];

  skeletonItems = Array.from({ length: 6 });

  constructor(
    private data: DataService,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.load();
  }

  async load() {
    this.loading = true;

    // Simula carga “real”
    await new Promise((r) => setTimeout(r, 600));

    this.providers = this.data.getProviders();
    this.applyFilters();
    this.loading = false;
  }

  onSearchInput() {
    this.applyFilters();
  }

  clearSearch() {
    this.query = '';
    this.applyFilters();
  }

  selectCategory(cat: Category) {
    this.selectedCategory = cat;
    this.applyFilters();
  }

  /** Convierte tags string -> string[] (split por coma) */
  tagsArray(p: Provider): string[] {
    if (!p.tags) return [];
    const tagsStr = typeof p.tags === 'string' ? p.tags : Array.isArray(p.tags) ? p.tags.join(',') : '';
    return tagsStr
      .split(',')
      .map((x) => x.trim())
      .filter(Boolean);
  }

  applyFilters() {
    const q = this.query.trim().toLowerCase();

    this.filtered = this.providers.filter((p) => {
      const tagsText = (typeof p.tags === 'string' ? p.tags : Array.isArray(p.tags) ? p.tags.join(',') : '').toLowerCase();

      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        tagsText.includes(q) ||
        (p.services ?? []).some((s) => s.name.toLowerCase().includes(q));

      const matchesCategory =
        this.selectedCategory === 'Todos' ||
        (p.category ?? '').toLowerCase() === this.selectedCategory.toLowerCase();

      return matchesQuery && matchesCategory;
    });
  }

  openProvider(p: Provider) {
    this.router.navigate(['/pages/provider-detail', p.id]);
  }

  bookNow(p: Provider) {
    // si tu tab2 es reservas, puedes redirigir ahí con state
    this.router.navigate(['/tabs/tab2'], { state: { providerId: p.id } });
  }

  async openFilters() {
    // Si aún no tienes modal, deja esto comentado y el botón del HTML también.
    /*
    const modal = await this.modalCtrl.create({
      component: FiltersPage,
      breakpoints: [0, 0.5, 0.9],
      initialBreakpoint: 0.5,
    });
    await modal.present();
    */
  }

  trackById(_: number, item: Provider) {
    return item.id;
  }
}
