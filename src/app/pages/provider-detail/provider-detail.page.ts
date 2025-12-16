import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.page.html',
  styleUrls: ['./provider-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProviderDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
