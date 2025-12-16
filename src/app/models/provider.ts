export interface ProviderServiceItem {
  id: string;
  name: string;
  priceFrom: number;
  durationMin: number;
}

export interface Provider {
  id: string;
  name: string;

  category: string;
  tags: string[];         

  verified: boolean;
  rating: number;
  distanceKm: number;

  coverImage: string;
  address: string;
  whatsapp?: string;

  services: ProviderServiceItem[];
}
