import "./App.css";
import InputForm from './InputForm'
import { useId } from "react";



function App() {

  const id = useId()

  return (
    <div className="App">
        <InputForm label='firstName' id={id} type='text' />
        <InputForm label='lastName'id={id} type='text' />
        <InputForm label='email'id={id} type='email'  />


    </div>
  );
}

export default App;
