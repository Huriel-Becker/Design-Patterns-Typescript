import { VehicleFactory } from './vehicle-factory';
import { Vehicle } from '../vehicles/vehicle';
import { Van } from '../vehicles/van';

export class VanFacotry extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Van(vehicleName);
  }
}
