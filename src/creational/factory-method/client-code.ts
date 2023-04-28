import { CarFacotry } from './factories/car-factory';
import { randomNumbers } from './factories/utils/random-numbers';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';

const carFactory = new CarFacotry();
const customerNames = ['Ana', 'Mario', 'Helena', 'Lucas'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `NOVO CARRO ${randomNumbers(100)}`);
  newCar.stop();
  console.log('---');
}
