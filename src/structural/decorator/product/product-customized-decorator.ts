import { ProductDecorator } from './product-decorator';

export class ProductCustomizedDecorator extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 50;
  }

  getName(): string {
    return this.product.getName() + ' (Customizado)';
  }
}
