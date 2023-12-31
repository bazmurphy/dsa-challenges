interface Product {
  name: string;
  price: number;
  quantity: number;
}

export default function calculateTotalSalesWithTax(
  products: Product[],
  taxRate: number,
): number {
  return parseFloat(
    products
      .reduce((accumulator, currentProduct) => {
        const itemTotal = currentProduct.price * currentProduct.quantity;
        const addedTax = itemTotal * (taxRate / 100);
        const itemTotalWithTax = itemTotal + addedTax;
        return accumulator + itemTotalWithTax;
      }, 0)
      .toFixed(2),
  );
}

// export default function calculateTotalSalesWithTax(
//   products: Product[],
//   taxRate: number,
// ): number {
//   const totalSales = products.reduce(
//     (sum, product) => sum + product.price * product.quantity,
//     0,
//   );
//
//   const taxAmount = (totalSales * taxRate) / 100;

//   const totalSalesWithTax = totalSales + taxAmount;

//   return parseFloat(totalSalesWithTax.toFixed(2));
// }
