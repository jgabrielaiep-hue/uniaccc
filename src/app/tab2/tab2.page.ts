import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

type BookingStatus = 'pending' | 'confirmed' | 'completed';

interface Booking {
  id: string;
  providerName: string;
  serviceName: string;
  date: string;
  time: string;
  price: number;
  status: BookingStatus;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab2Page implements OnInit {
  loading = true;

  bookings: Booking[] = [];

  skeletonItems = Array.from({ length: 3 });

  ngOnInit() {
    this.load();
  }

  async load() {
    this.loading = true;

    await new Promise((r) => setTimeout(r, 700));

    // MOCK realista
    this.bookings = [
      {
        id: 'b1',
        providerName: 'Taller Rápido Moto',
        serviceName: 'Cambio de aceite',
        date: '18 Sep 2025',
        time: '10:30',
        price: 25000,
        status: 'confirmed',
      },
      {
        id: 'b2',
        providerName: 'MotoSpa Detailing',
        serviceName: 'Detailing completo',
        date: '22 Sep 2025',
        time: '15:00',
        price: 45000,
        status: 'pending',
      },
      {
        id: 'b3',
        providerName: 'ElectroMoto Lab',
        serviceName: 'Diagnóstico eléctrico',
        date: '05 Sep 2025',
        time: '09:00',
        price: 20000,
        status: 'completed',
      },
    ];

    this.loading = false;
  }

  statusLabel(status: BookingStatus): string {
    switch (status) {
      case 'confirmed':
        return 'Confirmada';
      case 'pending':
        return 'Pendiente';
      case 'completed':
        return 'Completada';
    }
  }

  statusColor(status: BookingStatus): string {
    switch (status) {
      case 'confirmed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'completed':
        return 'medium';
    }
  }
}
