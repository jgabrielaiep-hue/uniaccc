import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';

import { DataService } from '../../services/data';
import { FiltersService, FiltersState } from '../../services/filters';
import { Provider } from '../../models/provider';

import { SkeletonListComponent } from '../../ui/components/skeleton-list/skeleton-list.component';
import { EmptyStateComponent } from '../../ui/components/empty-state/empty-state.component';

@Component({
  standalone: true,
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    SkeletonListComponent,
    EmptyStateComponent
  ]
})
export class ResultsPage {

  loading = true;
  providers: Provider[] = [];
  filters!: FiltersState;

  constructor(
    private dataSvc: DataService,
    private filtersSvc: FiltersService,
    private nav: NavController
  ) {}

  async ionViewWillEnter() {
    await this.load();
  }

  async load() {
    this.loading = true;

    this.filters = await this.filtersSvc.get();
    this.providers = this.dataSvc.getProviders();

    this.loading = false;
  }

  async clearFilters() {
    await this.filtersSvc.clear();
    await this.load();
  }

  goBack() {
    this.nav.back();
  }
}
