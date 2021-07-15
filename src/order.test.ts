import Order from "./Order";
import Cigar from "./Cigar";
import Beer from "./Beer";
import Water from "./Water";

test("Should calculate order sub total ", function () {
  const order = new Order();
  order.addItem(new Cigar("Malboro", 10));
  order.addItem(new Beer("Itaipava", 5));
  order.addItem(new Water("Indaía", 2));

  const subTotal = order.getSubTotal();
  expect(subTotal).toBe(17);
});

test("Should calculate order taxes", function () {
  const order = new Order();
  order.addItem(new Cigar("Malboro", 10)); //0.2 = 2
  order.addItem(new Beer("Itaipava", 5)); //0.1 = 0.5
  order.addItem(new Water("Indaía", 2)); //0 = 0

  const taxes = order.getTaxes(new Date("2021-07-09"));
  expect(taxes).toBe(2.5);
});

test("Should calculate order holiday taxes", function () {
  const order = new Order();
  order.addItem(new Cigar("Malboro", 10)); //0.2 = 2
  order.addItem(new Beer("Itaipava", 5)); //0.1 = 0.5
  order.addItem(new Water("Indaía", 2)); //0 = 0

  const taxes = order.getTaxes(new Date("2021-01-09"));
  expect(taxes).toBe(1.5);
});

test("Should calculate order total", function () {
  const order = new Order();
  order.addItem(new Cigar("Malboro", 10)); //0.2 = 2
  order.addItem(new Beer("Itaipava", 5)); //0.1 = 0.5
  order.addItem(new Water("Indaía", 2)); //0 = 0

  const total = order.getTotal(new Date("2021-07-09"));
  expect(total).toBe(19.5);
});
