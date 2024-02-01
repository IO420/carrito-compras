import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (

        <div className="container-fluid border border-black text-white "style={{background:"#0077D5"}}>
            <ul className="fw-bold fs-5 d-flex align-items-center  justify-content-between nav">
                <li >Carrito compras</li>
                <Image
                  src={'/imagenes/logo.png'}
                  width={250}
                  height={100}
                  alt="img"

                />
                <li><i className="bi bi-cart"></i> </li>
            </ul>

            

        </div>
  )
}
