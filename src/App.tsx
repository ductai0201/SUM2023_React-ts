import { useState } from "react";
import "./App.css";
import { Form } from "./components";
import List from "./components/List";
import { ICar } from "./interfaces/car";

function App() {
  const carsData = [
    { id: 1, name: "Car A", price: 100 },
    { id: 2, name: "Car B", price: 200 },
    { id: 3, name: "Car C", price: 300 },
  ];
  const [cars, setCars] = useState<ICar[]>(carsData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error,setError] = useState<string>('')
  const onHandleAddCar = (car: ICar)=>{
    setCars([...cars, car])
  }
  const onHandleRemoveCar = (id:number)=>{
    setCars(cars.filter((car)=>car.id !== id))
  }
  return (
    <>
      <div className="w-96 border border-red-500 mx-auto my-5">
        <Form onAdd={onHandleAddCar}/>
        <List cars={cars} onRemove={onHandleRemoveCar}/>
      </div>
    </>
  );
}

export default App;
