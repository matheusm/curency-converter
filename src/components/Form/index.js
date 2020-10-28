import React, { useState, useEffect } from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import api from "../../services/api";

export default function Form() {
  const [currencys, setCurrencys] = useState([]);
  const [currencyA, setCurrencyA] = useState("");
  const [currencyB, setCurrencyB] = useState("");

  useEffect(() => {
    let novoEstado = currencys;
    async function getMoedas() {
      try {
        const { data } = await api.get("");
        const { rates } = data;
        Object.entries(rates).forEach((entry) => {
          const [key] = entry;
          novoEstado = [...novoEstado, key];
        });
      } catch (error) {
        alert(error);
      }
      setCurrencys(novoEstado);
    }

    getMoedas();
    // eslint-disable-next-line
  }, []);
  return (
    <form className="app-form">
      <TextField
        id="standard-basic"
        className="app-form-control "
        label="Digite o valor"
      />

      <FormControl className="app-form-control">
        <InputLabel id="demo-simple-select-label">Moeda A</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currencyA}
          onChange={(event) => {
            setCurrencyA(event.target.value);
          }}
        >
          {currencys.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl className="app-form-control">
        <InputLabel id="demo-simple-select-label">Moeda B</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currencyB}
          onChange={(event) => {
            setCurrencyB(event.target.value);
          }}
        >
          {currencys.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </form>
  );
}
