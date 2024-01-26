import Image from "next/image";
import Layout from "@/Component/Layout/Layout";
import Item from "@/Component/Item/Item";

export default function Home() {
  return (
    
    <Layout>
      <h1>Compras</h1>
      <div className="border border-black container d-flex align-items-center p-0">
        <Item></Item>
      </div>
    </Layout>
  );
}
