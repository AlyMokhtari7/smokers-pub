import './App.css'
import {useState} from "react";

function App() {
  const [credit, set_credit] = useState(4);
  return (
    <>
      <h1>{credit}</h1>
      <PunPanel credit={credit} set_credit={set_credit} />
      <SmokePanel credit={credit} set_credit={set_credit} />
    </>
  )
}

function getRandomInteger(min:number, max:number):number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function SmokePanel({credit, set_credit}: {credit: number, set_credit: (credit: number) => void}) {
  const [cigarette_num , set_cigarette_num] = useState(1);

  function handle_cigarettes_num(credit: number) {
    if (credit == 0) return;
    if (credit >= 5) {
      set_credit(credit - 5);
      set_cigarette_num(cigarette_num +1)
    }
  }

  return (
      <>
        <h1>Smoke Panel image {cigarette_num}</h1>
        <button onClick={() => handle_cigarettes_num(credit)}>Take a cigarette</button>
      </>
  )
}

export function PunPanel({credit, set_credit}: {credit: number; set_credit: (credit: number) => void}) {
  let random_num = getRandomInteger(1, 3);

  return(
      <>
        <input type={"text"} placeholder={"Enter a pun to get credits"}/>
        <button onClick={() => set_credit(credit + random_num)}>Pun was good</button>
      </>
  )
}

export default App
