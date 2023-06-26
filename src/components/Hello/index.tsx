import React from "react";

type HelloProps = {
  name: string;
  age: number;
  info: {
    children: {
      id?: number;
      name: string;
      age: number;
    }[];
  };
};

const Hello = (props: HelloProps) => {
  console.log(props);

  return (
    <div>
      Hello React
      <p>{props.name}</p>
      <p>{props.age} tuổi</p>
      <p>Tao có {props.info.children.length} đứa con</p>
      <p>{props.info.children.length} của tao là:</p>
      <ul>
          {props.info.children.map((child) => {
            return <li>{child.name} age: {child.age} tuổi </li>
          })}
        
      </ul>
    </div>
  );
};

export default Hello;
