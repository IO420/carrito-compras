import { ReactNode } from "react";
import Header from '../Header/Header'
import Footer from "../Footer/Footer";

export default function Layout({children}: {children:ReactNode}){

  return (
    <div className="d-flex flex-column align-content-center " style={{maxWidth:"200vh",minHeight:"100vh"}}>
        <Header/>
            <main style = {{flex: 1,background:"#ffffff",color:"#000000"}}>{children}</main>
        <Footer/>
    </div>

  )
}
