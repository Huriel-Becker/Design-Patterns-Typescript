import { Customer } from './customer';

export class EnterPriseCustomer implements Customer {
  constructor(public name: string) {}
}
