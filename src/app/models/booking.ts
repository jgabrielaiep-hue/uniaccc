/**
 * Estados posibles de una reserva
 * Se usa como unión de strings para mayor claridad y seguridad
 */
export type BookingStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'COMPLETED'
  | 'CANCELED';

/**
 * Modelo Booking
 * Representa una reserva realizada por un usuario
 */
export interface Booking {
  id: string;

  // Taller / proveedor
  providerId: string;
  providerName: string;

  // Servicio reservado
  serviceName: string;

  // Fecha y hora
  dateISO: string;     // formato: YYYY-MM-DD
  time: string;        // formato: HH:mm

  // Estado de la reserva
  status: BookingStatus;

  // Precio final
  price: number;

  // Indica si el usuario puede dejar una reseña
  canReview: boolean;
}
