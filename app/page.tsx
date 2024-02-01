import Layout from "@/Component/Layout/Layout";
import ConteinerList from "@/Component/ConteinerList/ConteinerList";
import ListCarrito from "@/Component/ListCarrito/ListCarrito";
import BootstrapClient from "@/Component/BootstrapClient/BootstrapClient";

export default function Home() {
  return (
    
    <Layout>
      <BootstrapClient/>
        <h1>Compras</h1>
        <ConteinerList/>
    </Layout>
  );
}
