import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Input } from "..";
import { ICar } from "@/interfaces/car";
import { AiOutlinePlus } from "react-icons/ai";
type FormProps = {
  onAdd: (car: ICar) => void;
};

const Form = ({ onAdd }: FormProps) => {
  const [value, setValue] = useState("");
  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    form.reset();
    if (value === "") return "";
    onAdd({ id: 5, name: value });
    setValue("");
  };
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form
      onSubmit={onHandleSubmit}
      className="flex justify-between items-center p-2"
    >
      <Input onChange={onChangeInput} />
      <Button type="primary" icon={<AiOutlinePlus />} />
    </form>
  );
};

export default Form;
