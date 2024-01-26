import Image from 'next/image'
import React from 'react'
import indra from '@/imagenes/indra_01.jpg'

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

        <Image
        //src={`@/${imgid}.jpg`}
        src={indra}
        width={250}
        height={150}
        alt="img"
        />


        <h5>titulo</h5>
        <p>descripcion</p>
        <h6>costo</h6>
        <button type="button">Agregar</button>
    </div>
  )
}
