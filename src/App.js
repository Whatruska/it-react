import './App.css';
import React, { useEffect } from 'react';
import {Recomendation} from "./Recomendation";
import {useState} from "react";
import {Input} from "./Input";

const healthRecomendations = {
  r1: [
    {
      desc: "Рекомендация по питанию",
      value: "2 яблока в день"
    },
    {
      desc: "Рекомендация по спорту",
      value: "23 присядания в секунду"
    },
    {
      desc: "Рекомендация по образу жизни",
      value: "Получайте от жизни максимум! Но"
    }
  ],

  r2: [
    {
      desc: "Рекомендация по питанию",
      value: "1 яблока в день"
    },
    {
      desc: "Рекомендация по спорту",
      value: "41 присядания в секунду"
    },
    {
      desc: "Рекомендация по образу жизни",
      value: "Chill, just chill"
    }
  ]
};

function App() {

  const [recomendation, setRecomendation] = useState(healthRecomendations.r1);
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    if (age > 18) {
      setRecomendation(healthRecomendations.r2);
    } else {
      setRecomendation(healthRecomendations.r1);
    }
  }, [age]);

  return (
    <div>
      <Input placeholder="Возраст" onChange={(value) => setAge(value)} type="text"/>
      <Input placeholder="Вес" onChange={(value) => setWeight(value)} type="text"/>
      <Input placeholder="Рост" onChange={(value) => setHeight(value)} type="text"/>
      {recomendation.map(recomendation => {
        return (
          <Recomendation
            desc={recomendation.desc}
            value={recomendation.value}
          />
        )
      })}
      <div>
        Возраст: {age}
      </div>
      <div>
        Вес: {weight}
      </div>
      <div>
        Рост: {height}
      </div>
    </div>
  );
}

export default App;
