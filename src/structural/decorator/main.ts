import { ProductCustomizedDecorator } from './product/product-customized-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { Tshirt } from './product/t-shirt';

const tShirt = new Tshirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const customizardTShirt = new ProductCustomizedDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(customizardTShirt.getPrice(), customizardTShirt.getName());
