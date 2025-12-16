import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Booking } from '../../models/booking';

@Component({
  standalone: true,
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ReviewPage {
  @Input() booking!: Booking;

  rating = 5;
  comment = '';

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss({ action: 'close' });
  }

  submit() {
    // Demo: aquí podrías guardar en storage / enviar API
    this.modalCtrl.dismiss({
      action: 'submitted',
      payload: { rating: this.rating, comment: this.comment },
    });
  }
}

