import React, {useState} from 'react';

export interface item{
    id:number;
    titulo:string;
    description:string;
    costo:number;
}

const listaArray: item[] =[

    {
        id: 1,
        titulo: "Ingrida",
        description: "bla bla bla",
        costo: 500,
    },
    {
        id: 2,
        titulo: "doodes",
        description: "bla bla bla nkvh",
        costo: 1300,
    }

];

export default function ConteinerList() {
  return (
    <div>ConteinerList</div>
  )
}
