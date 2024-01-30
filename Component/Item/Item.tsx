import Image from 'next/image'
import React from 'react'
import {item} from "../ConteinerList/ConteinerList";
import indra from '@/imagenes/indra_01.jpg'
import faber1 from '@/imagenes/faber-castell-black-edition-50.png'


//const imagenes = requiere.context('@/imagenes',true)

interface itemProps{
  item: item;
}

export default function Item({item}:itemProps) {
 
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

        <div className="d-flex flex-column align-items-center" style={{minWidth:"100vh"}}>
          <h5 style = {{flex: 1,background:"#ffffff",color:"#000000"}}>titulo</h5>
          <p style = {{flex: 1,background:"#ffffff",color:"#000000"}}>description</p>
          <h6 style = {{flex: 1,background:"#ffffff",color:"#000000"}}>costo</h6>
        </div>

        <div className="d-flex flex-column align-content-center justify-content-center ">
          <button type="button">ver</button>
          <button type="button">Comprar</button>
        </div>
    </div>
  )
}
