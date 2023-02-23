import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import ImageSlider from "../components/heroSlider/slider";
import Categories from "../components/Categories";
import Products from "../components/products";
import Gallery from "../components/gallery";
import ProductSection from "../components/HotProduct";
import StoreProduct from "../components/storeProduct";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>honyhut</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ImageSlider />
        {/* <StoreProduct /> */}
        <Categories />
        <Products />
        <ProductSection />
        <Gallery />
      </main>
    </>
  );
}
