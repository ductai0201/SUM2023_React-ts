import { useState } from "react";
import "./App.css";
import { Form, Table } from "./components";
import List from "./components/List";
import { ICar } from "./interfaces/car";

function App() {
  const carsData = [
    { id: 1, name: "Car A", price: 100 },
    { id: 2, name: "Car B", price: 200 },
    { id: 3, name: "Car C", price: 300 },
  ];

  const config = [
    {
      label: "Name",
      key: "name",
      render: (car: any) => <div className="text-xl">{car.name}</div>,
    },
    {
      label: "Price",
      key: "price",
      render: (car: any) => <div className="text">{car.price}</div>,
    },
  ];

  // data body

  const dataPost = [
    { id: 1, title: "Post 1", body: "Body 1", author: "Datlt" },
    { id: 2, title: "Post 2", body: "Body 2", author: "Kientt" },
    { id: 3, title: "Post 3", body: "Body 3", author: "Lamnt" },
  ];
  const configPost = [
    {
      label: "Tieu de",
      key: "title",
      render: (post: any) => post.title,
    },
    {
      label: "Noi dung",
      key: "body",
      render: (post: any) => <span className="text-red-500">{post.body}</span>,
      header: (post: any) => <span className="bg-green-500">{post.label}</span>,
    },
    {
      label: "Tác giả",
      key: "author",
      render: (post: any) => post.author,
    },
  ];
  const [cars, setCars] = useState<ICar[]>(carsData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const onHandleAddCar = (car: ICar) => {
    setCars([...cars, car]);
  };
  const onHandleRemoveCar = (id: number) => {
    setCars(cars.filter((car) => car.id !== id));
  };
  return (
    <>
      <div className="w-96 border border-red-500 mx-auto my-5">
        <Form onAdd={onHandleAddCar} />
        <List cars={cars} onRemove={onHandleRemoveCar} />
        <Table cars={carsData} config={config} />
        <Table cars={dataPost} config={configPost} />
      </div>
    </>
  );
}

export default App;
