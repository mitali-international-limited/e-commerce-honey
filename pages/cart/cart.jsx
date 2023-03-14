import { useState } from "react";
import styles from "./Cart.module.css";
import { MdClose } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const tableHeader = [" ", " ", "Name", "Price", "Quantity", "Sub Total"];
const tableData = [
  {
    id: 1,
    close: "",
    image: "/images/banner/banner-1.jpg",
    product: "Product 1",
    price: 10,
    quantity: 2,
    total: 20,
  },
  {
    id: 2,
    close: "",
    image: "/images/banner/banner-2.jpg",
    product: "Product 2",
    price: 15,
    quantity: 1,
    total: 15,
  },
  {
    id: 3,
    close: "",
    image: "/images/banner/banner-3.jpg",
    product: "Product 3",
    price: 20,
    quantity: 3,
    total: 60,
  },
  {
    id: 3,
    close: "",
    image: "/images/banner/banner-4.jpg",
    product: "Product 4",
    price: 20,
    quantity: 3,
    total: 60,
  },
];

export default function Cart() {
  const [data, setData] = useState(tableData);
  const calculateTotalCost = () => {
    let totalCost = 0;
    tableData.forEach((item) => {
      totalCost += item.total;
    });
    return totalCost;
  };
  return (
    <div className="relative top-36 md:top-48">
      <div className={styles.container}>
        <h1 className="text-center font-bold">Shopping Cart</h1>

        <table className={styles.table}>
          <thead>
            <tr className="">
              {tableHeader.map((header) => (
                <th className="p-2 text-center text-secondary" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border border-l-0 border-r-0 border-gray"
              >
                <td className="py-5 px-2 text-center flex justify-center items-center text-gray">
                  <span className="mx-4 font-bold cursor-pointer hover:text-primary-red">
                    <MdClose />
                  </span>
                  {item.close}
                </td>
                <td className="p-2 h-16 w-24 shadow-sm">
                  <img className="w-full h-full bg-center" src={item.image} />
                </td>
                <td className="py-5 px-2 text-center">{item.product}</td>
                <td className="py-5 px-2 text-center">
                  ${item.price.toFixed(2)}
                </td>
                <td className="py-5 px-2 text-center flex justify-center items-center">
                  <span className="mx-4 font-bold cursor-pointer hover:bg-honey border border-gray">
                    <AiOutlineMinus />
                  </span>
                  {item.quantity}
                  <span className="mx-4 font-bold cursor-pointer hover:bg-honey border border-gray">
                    <AiOutlinePlus />
                  </span>
                </td>
                <td className="py-5 px-2 text-center pr-0">
                  ${item.total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot className="font-bold">
            <tr>
              <td colSpan="5" className="text-center text-secondary font-bold">
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
