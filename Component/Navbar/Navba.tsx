import { ReactNode } from "react";
import ConteinerList from "@/Component/ConteinerList/ConteinerList";

export default function Navba({children}:{children:ReactNode}) {
  return (
    <nav className="navbar bg-body-tertiary fixed-top" >
        <div className="container-fluid" >
            <a className="navbar-brand" href="#">Carrito de compras</a>
            <button className="bi bi-cart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
                <div className="offcanvas-header" >
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Carrito de compras</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-1 align-items-center " style={{minWidth:"350px"}}>
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-1">
                        {children}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}
