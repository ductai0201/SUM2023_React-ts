import { ICar } from "@/interfaces/car";
import React from "react";
import { Button } from "..";
import { GoTrash } from "react-icons/go";
import  style from "./item.module.css"
type ItemProps = {
  car: ICar;
  onRemove: (id: number) => void;
};

const Item = ({ car, onRemove }: ItemProps) => {
  return (
    <li className={style.item}>
      {car.name}
      <Button danger onClick={() => onRemove(car.id!)}>
        <GoTrash />
      </Button>
    </li>
  );
};

export default Item;
