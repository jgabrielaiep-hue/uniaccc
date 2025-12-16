import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';

/**
 * BookingService
 * Servicio mock para manejar reservas del usuario
 * En un proyecto real esto se conecta a una API
 */
@Injectable({
  providedIn: 'root',
})
export class BookingService {

  /**
   * Datos simulados de reservas
   */
  private bookings: Booking[] = [
    {
      id: 'b1',
      providerId: 'p1',
      providerName: 'Taller Rápido Moto',
      serviceName: 'Cambio de aceite',
      dateISO: '2025-12-20',
      time: '10:30',
      status: 'CONFIRMED',
      price: 25000,
      canReview: false,
    },
    {
      id: 'b2',
      providerId: 'p2',
      providerName: 'Mecánica 2T Pro',
      serviceName: 'Frenos',
      dateISO: '2025-12-10',
      time: '16:00',
      status: 'COMPLETED',
      price: 30000,
      canReview: true,
    },
  ];

  /**
   * Obtiene todas las reservas del usuario
   */
  getAll(): Booking[] {
    // Se retorna una copia para evitar mutaciones externas
    return [...this.bookings];
  }

  /**
   * Marca una reserva como reseñada
   * (en demo solo desactiva el botón de reseña)
   */
  markReviewed(bookingId: string): void {
    this.bookings = this.bookings.map((b) =>
      b.id === bookingId
        ? { ...b, canReview: false }
        : b
    );
  }

  /**
   * Agrega una nueva reserva (para futuro flujo de confirmación)
   */
  add(booking: Booking): void {
    this.bookings = [...this.bookings, booking];
  }
}
