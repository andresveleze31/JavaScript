import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero, calcularTotal } from "./helpers";

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pagoMes, setPagoMes] = useState(0);

  useEffect(() => {
    const resultado = calcularTotal(cantidad, meses);
    setTotal(resultado);
  }, [cantidad, meses]);

  useEffect(() => {
    const resultado = total / meses;
    setPagoMes(resultado);
  }, [total]);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) {
    setCantidad(parseInt(e.target.value));
  }

  function handleClickDecremento() {
    if (cantidad - STEP < MIN) {
      alert("Cantidad no valida");
      return;
    }
    setCantidad(cantidad - STEP);
  }

  function handleClickIncremento() {
    if (cantidad + STEP > MAX) {
      alert("Cantidad no valida");
      return;
    }
    setCantidad(cantidad + STEP);
  }

  function handleChangeSelect(e) {
    setMeses(e.target.value);
  }

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="bg-white rounded-2xl p-[5rem] shadow-2xl">
        <Header />

        <div className="flex justify-between">
          <Button operador="-" fn={handleClickDecremento} />
          <Button operador="+" fn={handleClickIncremento} />
        </div>

        <input
          className="w-full h-[5rem] bg-gray-200 accent-lime-500 hover:accent-lime-600"
          type="range"
          onChange={handleChange}
          min={MIN}
          max={MAX}
          step={STEP}
          value={cantidad}
        />

        <p className="text-center font-bold text-[4rem] text-indigo-600">
          {formatearDinero(cantidad)}
        </p>

        <h2 className="text-center font-bold text-gray-500 text-[4rem] ">
          Elige el <span className="text-indigo-600">plazo</span> a pagar
        </h2>

        <select
          className="mt-[2rem] w-full py-[1rem] border border-gray-500 text-gray-500 text-center font-bold"
          onChange={handleChangeSelect}
        >
          <option value="6">6 Meses</option>
          <option value="12">12 Meses</option>
          <option value="24">24 Meses</option>
        </select>

        <div className="mt-[2rem] bg-slate-200 p-[2rem]">
          <h2 className="text-[3rem] font-bold text-gray-500 text-center">
            Resumen <span className="text-indigo-600">de pagos</span>
          </h2>

          <p className="text-gray-500 text-center font-bold"> {meses} Meses</p>
          <p className="text-gray-500 text-center font-bold">
            {" "}
            {total} Total a pagar
          </p>
          <p className="text-gray-500 text-center font-bold">
            {" "}
            {pagoMes} Mensuales
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
