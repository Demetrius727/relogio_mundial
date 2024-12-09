
import { useState, useEffect } from "react"
import TimeZoneClock from "./components/TimeZoneClock";

function App() {
  const fusosHorarios = [
    "America/Sao_Paulo",
    "UTC",
    "GMT",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo",
  ];

  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [fusosSelecionados, setFusosSelecionados] = useState([fusoHorarioLocal,]);

  const addFuso = (e) => {
    const novoFuso = e.target.value;
    if (!fusosSelecionados.includes(novoFuso)) {
      setFusosSelecionados([...fusosSelecionados, novoFuso]);
    }
  }

  return (
    <div>
      <h1>Relógio Mundial</h1>
      <select onChange={(e) => addFuso(e)}>
        <option value="" disabled select>Selecione um fuso horário</option>
        {fusosHorarios.map((fuso) => (
          <option key={fuso} value={fuso}>{fuso.replace(/_/g, " ")}</option>
        ))}
      </select>
      <div>
        {fusosSelecionados.map((fuso) => (
          <TimeZoneClock key={fuso} timeZone={fuso}/>
        ))}
      </div>
    </div>
  )
}

export default App
