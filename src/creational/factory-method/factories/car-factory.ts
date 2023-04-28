import { VehicleFactory } from './vehicle-factory';
import { Vehicle } from '../vehicles/vehicle';
import { Car } from '../vehicles/car';

export class CarFacotry extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
