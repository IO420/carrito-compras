import React from 'react'
import Image from 'next/image'
import {item} from "../ConteinerList/ConteinerList";

interface carProps{
    car: item;
}

export default function ListCarrito({car}:carProps) {
  return car &&(
    <div 
    className="container border border-black "
    style={{minHeight:"100vh",maxWidth:"50vh"}}
    >
        <div className="d-flex flex-column  border-bottom border-black ">
            <h2>
                Carrito de compras
            </h2>
        </div>
        <div className="border ">
            <div className="p-1">
            <Image
            src={car.img}
            width={50}
            height={50}
            alt="img"
            />
            </div>

            <div className="d-flex flex-column align-items-center p-1" >

            <h4 style = {{flex: 1}}>{car.titulo}</h4>
            <h4 style = {{flex: 1}}>${car.costo}</h4>
            </div>
        </div>
    </div>
  )
}
