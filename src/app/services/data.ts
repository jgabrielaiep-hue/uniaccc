import { Injectable } from '@angular/core';
import { Provider } from '../models/provider';

@Injectable({ providedIn: 'root' })
export class DataService {
  // Datos mock (compatibles con tu interfaz Provider)
  getProviders(): Provider[] {
    return [
      {
        id: 'p1',
        name: 'Taller Rápido Moto',
        category: 'Mecánica',
        tags: ['rápido', 'garantía', 'aceite', 'revisión'],
        verified: true,
        rating: 4.6,
        distanceKm: 2.4,
        coverImage: 'https://picsum.photos/seed/moto1/900/600',
        address: 'Av. Central 123, Santiago',
        whatsapp: '+56911112222',
        services: [
          { id: 's1', name: 'Cambio de aceite', priceFrom: 25000, durationMin: 35 },
          { id: 's2', name: 'Revisión general', priceFrom: 18000, durationMin: 45 },
          { id: 's5', name: 'Ajuste de cadena', priceFrom: 12000, durationMin: 20 },
        ],
      },
      {
        id: 'p2',
        name: 'Mecánica 2T Pro',
        category: 'Mecánica',
        tags: ['2T', 'frenos', 'cadena', 'diagnóstico'],
        verified: false,
        rating: 4.2,
        distanceKm: 5.1,
        coverImage: 'https://picsum.photos/seed/moto2/900/600',
        address: 'Los Motores 456, Providencia',
        whatsapp: '+56933334444',
        services: [
          { id: 's3', name: 'Frenos', priceFrom: 30000, durationMin: 60 },
          { id: 's4', name: 'Ajuste cadena', priceFrom: 12000, durationMin: 25 },
          { id: 's6', name: 'Cambio pastillas', priceFrom: 28000, durationMin: 50 },
        ],
      },
      {
        id: 'p3',
        name: 'Lavado & Detailing MotoSpa',
        category: 'Lavado',
        tags: ['detailing', 'encerado', 'full', 'a domicilio'],
        verified: true,
        rating: 4.8,
        distanceKm: 3.7,
        coverImage: 'https://picsum.photos/seed/moto3/900/600',
        address: 'Calle Brillo 77, Ñuñoa',
        whatsapp: '+56955556666',
        services: [
          { id: 's7', name: 'Lavado premium', priceFrom: 15000, durationMin: 30 },
          { id: 's8', name: 'Detailing completo', priceFrom: 45000, durationMin: 90 },
          { id: 's9', name: 'Encerado rápido', priceFrom: 12000, durationMin: 25 },
        ],
      },
      {
        id: 'p4',
        name: 'ElectroMoto Lab',
        category: 'Eléctrica',
        tags: ['batería', 'arranque', 'luces', 'diagnóstico'],
        verified: true,
        rating: 4.5,
        distanceKm: 6.2,
        coverImage: 'https://picsum.photos/seed/moto4/900/600',
        address: 'Ruta Técnica 909, Macul',
        whatsapp: '+56977778888',
        services: [
          { id: 's10', name: 'Diagnóstico eléctrico', priceFrom: 20000, durationMin: 40 },
          { id: 's11', name: 'Revisión de luces', priceFrom: 12000, durationMin: 25 },
          { id: 's12', name: 'Cambio batería', priceFrom: 35000, durationMin: 20 },
        ],
      },
    ];
  }

  // Útil para Provider Detail (si lo estás usando)
  getProviderById(id: string): Provider | undefined {
    return this.getProviders().find((p) => p.id === id);
  }
}
