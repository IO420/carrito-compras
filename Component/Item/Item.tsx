import React from 'react'
import Image from 'next/image'
import {item} from "../ConteinerList/ConteinerList";

interface itemProps{
  item: item;
  onAddItem: (item:item)=> void;
}

export default function Item({
  item,
  onAddItem,
}:itemProps) {

 
  return item && (

    <div className="border border-black container d-flex p-0 my-3  rounded justify-content-between "style={{flex: 1,maxWidth:"120vh",maxHeight:"100vh"}}>

        <div className="p-1">
          <Image
          src={item.img}
          width={200}
          height={200}
          alt="img"
          />
        </div>

        <div className="d-flex flex-column align-items-center p-1" >

          <h4 style = {{flex: 1}}>{item.titulo}</h4>
          <p className="fs-5 "style = {{flex: 1}}>{item.description}</p>
          <h4 style = {{flex: 1}}>${item.costo}</h4>
        </div>

        <div className="d-flex flex-column align-content-center justify-content-center p-1" >
          <button className="m-2 rounded fs-1 "type="button" style={{background:"#ffffff",border:"1px solid #0077D5",color: "#0077D5" }}>ver</button>
          <button 
          className="m-2 rounded text-white fs-1 "
          type="button" 
          style={{background:"#0077D5",border:"1px solid #0077D5"}}
          onClick={()=> onAddItem(item)}
          >
            Comprar
          </button>
        </div>
    </div>
  )
}
