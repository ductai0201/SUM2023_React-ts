import { useState } from "react";
import "./App.css";
import { Button, Hello } from "@/components";

function App() {
  const [info] = useState({
    name: "Anh",
    age: 20,
    children:[
        {id:1,name: "Minh",age:16},
        {id:2,name: "Linh",age:16},
    ]
  })
 const onHandleLog = ()=>{
    console.log('hi button');
  }
  return (
    <>
      <Hello name="Dat" age={30} info={info}/>
      <Button color="fff" background="black" text="Nút 1" onLog={onHandleLog}/>
      <Button color="fff" background="green" text="Nút 2" />
    </>
  );
}

export default App;
