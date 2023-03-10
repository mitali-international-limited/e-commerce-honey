import { useState } from "react";
import Head from "next/head";
import styles from "./Cart.module.css";

const tableHeader = ["Image", "Product", "Price", "Quantity", "Total"];
const tableData = [
  {
    id: 1,
    image: "/images/Image1.jpg",
    product: "Product 1",
    price: 10,
    quantity: 2,
    total: 20,
  },
  {
    id: 2,
    image: "/images/Image1.jpg",
    product: "Product 2",
    price: 15,
    quantity: 1,
    total: 15,
  },
  {
    id: 3,
    image: "/images/Image1.jpg",
    product: "Product 3",
    price: 20,
    quantity: 3,
    total: 60,
  },
];

const calculateTotalCost = () => {
  let totalCost = 0;
  tableData.forEach((item) => {
    totalCost += item.total;
  });
  return totalCost;
};

export default function Cart() {
  const [data, setData] = useState(tableData);

  return (
    <div className="relative top-36 md:top-48">
      <Head>
        <title>Shopping Cart</title>
      </Head>

      <div className={styles.container}>
        <h1 className="text-center">Shopping Cart</h1>

        <table className={styles.table}>
          <thead>
            <tr>
              {tableHeader.map((header) => (
                <th
                  className="p-2 text-center border border-solid border-gray bg-secondary"
                  key={header}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="p-2 h-16 w-24 shadow-sm">
                  <img className="w-full h-full bg-center" src={item.image} />
                </td>
                <td className="p-2 text-center font-bold">{item.product}</td>
                <td className="p-2 text-center font-bold">
                  ${item.price.toFixed(2)}
                </td>
                <td className="p-2 text-center font-bold">{item.quantity}</td>
                <td className="p-2 text-center font-bold">
                  ${item.total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="font-bold">
            <tr>
              <td colSpan="4" className="text-center text-secondary font-bold">
                Total:
              </td>
              <td className="text-center text-secondary">
                ${calculateTotalCost().toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
