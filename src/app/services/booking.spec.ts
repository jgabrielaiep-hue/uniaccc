import { TestBed } from '@angular/core/testing';
import { BookingService } from './booking';

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return bookings', () => {
    const list = service.getAll();
    expect(Array.isArray(list)).toBeTrue();
  });
});
