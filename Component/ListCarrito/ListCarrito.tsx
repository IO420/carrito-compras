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
    style={{maxWidth:"50vh"}}
    >
        <div className="d-flex flex-column  border-bottom border-black ">
            <h2>
                Carrito de compras
            </h2>
        </div>
        <div className="border container d-flex justify-content-between">
            <div className="p-1">
            <Image
            src={car.img}
            width={50}
            height={50}
            alt="img"
            />
            </div>

            <div className="align-items-center p-1 justify-content-center" >
            
            <h6 style = {{flex: 1}}>${car.costo}</h6>
            <h6 style = {{flex: 1}}>{car.titulo}</h6>

            </div>

            <div className="d-flex flex-column align-content-center justify-content-center p-1" >
                
                <button className="m-2 rounded fs-5 "type="button" style={{background:"#ffffff",border:"1px solid #0077D5",color: "#0077D5" }}>borrar</button>

            </div>
        </div>
    </div>
  )
}
