import React from 'react';
import Image from 'next/image'
import {item , count} from "../ConteinerList/ConteinerList";
import { useState } from 'react'

interface carProps{
    car: item;
    onDeleteCar: (id:number)=> void;
}

export default function ListCarrito({
    car,
    onDeleteCar,
}:carProps) {
  return car &&(
    <div 
    className="container border border-black d-flex flex-column p-3 m-0"
    >

        <div className="container d-flex justify-content-between p-0">
            <div className="p-0 d-flex ">
            <Image
            src={car.img}
            width={200}
            height={200}
            alt="img"
            />
            </div>

            <div className="align-items-center p-0 justify-content-center" >
            
                <h4 className="justify-content-center ">${car.costo}</h4>
                <h4 >{car.titulo}</h4>

                <div className="border border-black d-flex p-0 justify-content-between"
                style={{
                    maxHeight:"70px", 
                    maxWidth:"160px" 
                    }}
                >
                    <div>
                        <h4 className='p-3 m-0' style={{minWidth:"50px"}}>-</h4>
                    </div>
                    <div>
                        <h4 className='p-3 m-0' style={{minWidth:"50px"}}>{count}</h4>
                    </div>
                    <div>
                        <h4 className='p-3 m-0' style={{minWidth:"50px"}}>+</h4>
                    </div>
                </div>

                <button className="m-2 rounded fs-5 "type="button" 
                style={{
                    background:"#ffffff",
                    border:"1px solid #0077D5",
                    color: "#0077D5" 
                    }}
                onClick={()=>onDeleteCar(car.id)}
                >
                    borrar
                </button>

            </div>

            <div className="d-flex flex-column align-content-center justify-content-center p-1" >
                
                

            </div>
        </div>
    </div>
  )
}
