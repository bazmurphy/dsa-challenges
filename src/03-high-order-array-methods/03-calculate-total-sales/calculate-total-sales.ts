export default function calculateTotalSalesWithTax(
  products: { name: string; price: number; quantity: number }[],
  taxRate: number,
): number {
  return products.reduce((accumulator, currentProduct) => {
    const itemTotal = currentProduct.price * currentProduct.quantity;
    const addedTax = itemTotal * (taxRate / 100);
    const itemTotalWithTax = itemTotal + addedTax;
    return accumulator + itemTotalWithTax;
  }, 0);
}
