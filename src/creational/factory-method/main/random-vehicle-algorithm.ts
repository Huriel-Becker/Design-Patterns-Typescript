import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFacotry } from '../factories/car-factory';
import { randomNumbers } from '../factories/utils/random-numbers';
import { VanFacotry } from '../factories/van-factory';
import { Vehicle } from '../vehicles/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFacotry();
  const bicycleFactory = new BicycleFactory();
  const vanFactory = new VanFacotry();
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta Preto');
  const van = vanFactory.getVehicle('Van Preta');
  const bicycle = bicycleFactory.getVehicle('Magrela');
  const cars = [car1, car2, bicycle, van];
  return cars[randomNumbers(cars.length)];
}
