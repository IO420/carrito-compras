import Image from 'next/image'
import React from 'react'
import indra from '@/imagenes/indra_01.jpg'
import faber1 from '@/imagenes/faber-castell-black-edition-50.png'

export interface item{
    id:number;
    titulo:string;
    description:string;
    costo:number;
}

//const imagenes = requiere.context('@/imagenes',true)

export default function Item() {
  return (
    <div className="container d-flex "style={{background:"#E3E0DD"}}>

        <div>
        <Image
        //src={`@/${imgid}.jpg`}
        src={faber1}
        width={200}
        height={200}
        alt="img"
        />

        </div>

        <h5>titulo</h5>
        <p>descripcion</p>
        <h6>costo</h6>
        <button type="button">ver</button>
        <button type="button">Comprar</button>
    </div>
  )
}
