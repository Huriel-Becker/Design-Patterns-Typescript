import { ShoppingOrder } from './shopping-order';

const order = new ShoppingOrder(); // Pendente
order.approvePayment(); // Aprovado
order.waitPayment(); // Pendnete
order.shipOrder();
order.rejectPayment(); // Daqui não altera mais o estado
order.approvePayment();
order.waitPayment();
order.approvePayment();
order.shipOrder();
