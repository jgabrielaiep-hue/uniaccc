import { Injectable } from '@angular/core';

export interface FiltersState {
  brand?: string | null;
  services?: string[];
  maxDistanceKm?: number;
  order?: 'distance' | 'rating' | 'price';
}

const KEY = 'motokoapp.filters';

@Injectable({ providedIn: 'root' })
export class FiltersService {
  constructor() {}

  async get(): Promise<FiltersState> {
    try {
      const data = localStorage.getItem(KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Error reading filters from localStorage', e);
    }
    // Valores por defecto
    return { 
      services: [], 
      maxDistanceKm: 10, 
      order: 'distance' 
    };
  }

  async set(state: FiltersState): Promise<void> {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Error saving filters to localStorage', e);
    }
  }

  async clear(): Promise<void> {
    try {
      localStorage.removeItem(KEY);
    } catch (e) {
      console.error('Error clearing filters from localStorage', e);
    }
  }
}