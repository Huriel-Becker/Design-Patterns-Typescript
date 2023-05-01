import { Customer } from '../customer/customer';
import { EnterPriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseCar } from '../vehicle/enterprise-car';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';

export class EnterpriseCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new EnterPriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
