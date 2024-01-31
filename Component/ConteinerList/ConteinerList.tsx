'use client';
import React, {useState} from 'react';
import Item from '../Item/Item';
import ListCarrito from '../ListCarrito/ListCarrito';

export interface item{
    id:number;
    titulo:string;
    description:string;
    costo:number;
    img: string;
}

const itemArray: item[] =[

    {
        id: 1,
        titulo: "Colores Faber castell Super Soft x 50",
        description: "Presentando la más nueva tecnología en color: Los ecolápices Super Soft de Faber-Castell. Lápices de mina súper suave con colores brillantes que se pueden utilizar tanto en papel negro como en papel blanco, con diseño redondo clásico y resistente. Alta calidad de fabricación",
        costo: 500,
        img: '/imagenes/faber-castell-black-edition-50.png'
    },
    {
        id: 2,
        titulo: "Plumones SuperSoft x 50 Punta Brocha",
        description: "50 Plumones SuperSoft punta pincel ideal para Lettering Punta pincel flexible Ideal para hacer lettering Incluye tonos pasteles y tonos piel Incluye bandeja organizadora Empaque de cartón reciclable",
        costo: 500,
        img: '/imagenes/indra_01.jpg'
    }

];
const carArray: item[] =[];



export default function ConteinerList() {

  const [list, setlist] = useState<item[]>(itemArray);
  const [car, setcar] = useState<item[]>(carArray);
  const [isShowcar,setIsShowCar] = useState<boolean>(false);

  const handleAddCar = (item:item) => {
    console.log(item.id);
    setcar((car)=>{ 
      const updateCar = [...car,item];
      console.log(updateCar);
      return updateCar;
    });
  }

  const HandleShowCar = (): void => {
    setIsShowCar(!isShowcar);
  };

  const handleOnShowCar = (itemToStore:item) =>{
    setcar(
      car.map((item) => {
          if (item.id === itemToStore.id) {
            return itemToStore;
          } else {
            return item;
          }
      })
    );
  };

  return (
    <>
    {list.map((item, index) => (
      <Item
        item={item}
        key={index}
        onAddItem={handleAddCar}
      />
    ))}

    {car.map((car, index) => (
      <ListCarrito
      car={car}
      key={index}
      />
    ))}
  </>
  )
}
