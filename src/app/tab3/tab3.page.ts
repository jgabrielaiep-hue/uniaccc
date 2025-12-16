import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';

interface UserProfile {
  name: string;
  email: string;
  city: string;
  plan: 'Demo' | 'Pro';
  avatarUrl: string;
  coverUrl: string;
  memberSince: string;

  stats: {
    bookings: number;
    savedCLP: number;
    avgRating: number;
  };

  settings: {
    notifications: boolean;
    darkMode: boolean;
    reminders: boolean;
  };
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab3Page implements OnInit {
  loading = true;

  profile!: UserProfile;

  constructor(private toastCtrl: ToastController) {}

  ngOnInit() {
    this.load();
  }

  async load() {
    this.loading = true;

    await new Promise((r) => setTimeout(r, 650));

    this.profile = {
      name: 'Gabriel Molina',
      email: 'gabriel.molina@motokoapp.cl',
      city: 'Santiago, Chile',
      plan: 'Demo',
      avatarUrl: 'https://i.pravatar.cc/300?img=12',
      coverUrl: 'https://picsum.photos/seed/motoko-cover/1200/700',
      memberSince: 'Marzo 2025',
      stats: {
        bookings: 12,
        savedCLP: 85000,
        avgRating: 4.7,
      },
      settings: {
        notifications: true,
        darkMode: true,
        reminders: true,
      },
    };

    this.loading = false;
  }

  async toast(message: string) {
    const t = await this.toastCtrl.create({
      message,
      duration: 1200,
      position: 'bottom',
    });
    await t.present();
  }

  openWhatsAppSupport() {
    // demo: link WA (cambia el número si quieres)
    const phone = '56911112222';
    const text = encodeURIComponent('Hola, necesito ayuda con MotokoApp.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  }

  shareApp() {
    // demo simple (sin plugins)
    navigator.clipboard
      ?.writeText('MotokoApp - Demo IA: https://motokoapp.demo')
      .then(() => this.toast('Link copiado al portapapeles'))
      .catch(() => this.toast('No se pudo copiar el link'));
  }

  onToggle(key: keyof UserProfile['settings'], value: boolean) {
    this.profile.settings[key] = value;

    if (key === 'darkMode') {
      // demo: aplicamos / quitamos la clase 'dark' al body
      document.body.classList.toggle('dark', value);
    }

    this.toast('Preferencia actualizada');
  }
}
