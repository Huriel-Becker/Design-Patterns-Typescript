import { ECommerceShoppingCart } from './eccomerce-shopping-cart';

export class DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotal();
  }
}
