import { OrderDetail } from "./orderDetail";

export class Order {
    orderId!: number;
    customerId!: number;
    employeeId!: number;
    orderDate!: string;
    shipName!: string;
    shipAddress!: string;
    shipCity!: string;
    shipCountry!: string;
    orderDetails: OrderDetail[] = [];
}