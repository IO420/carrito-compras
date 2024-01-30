import Image from "next/image";
import Layout from "@/Component/Layout/Layout";
import ConteinerList from "@/Component/ConteinerList/ConteinerList";
import ListCarrito from "@/Component/ListCarrito/ListCarrito";

export default function Home() {
  return (
    
    <Layout>
      <h1>Compras</h1>
        <ConteinerList/>
    </Layout>
  );
}
