import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Input } from "..";
import { ICar } from "@/interfaces/car";
import {AiOutlinePlus} from "react-icons/ai"
type FormProps = {
  onAdd: (car: ICar) => void;
};

const Form = ({ onAdd }: FormProps) => {
  const [value, setValue] = useState<string>("");
  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    e.target.reset();
    onAdd({id:5,name:value});
  };
  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };
  return (
    <form
      onSubmit={onHandleSubmit}
      className="flex justify-between items-center p-2"
    >
      <Input onChange={onHandleChange} />
      <Button primary>
        <AiOutlinePlus/> 
      </Button>
    </form>
  );
};

export default Form;
