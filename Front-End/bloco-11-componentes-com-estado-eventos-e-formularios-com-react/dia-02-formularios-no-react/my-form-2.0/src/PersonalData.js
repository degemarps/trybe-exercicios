import React from "react";
import './PersonalData.css';
import estados from "./Estados";

class PersonalData extends React.Component {
  render() {
    return (
      <fieldset className="container">
        <label>
          Nome
          <input type="text" name="nome" maxLength="40" style={{ textTransform: "uppercase" }} required />
        </label>

        <label>
          Email
          <input type="email" name="email" maxLength="50" required />
        </label>

        <label>
          CPF
          <input type="text" name="cpf" maxLength="11" required />
        </label>

        <label>
          Endereço
          <input type="text" name="endereco" maxLength="200" required />
        </label>

        <label>
          Cidade
          <input type="text" name="cidade" maxLength="28" required />
        </label>

        <label>
          Estado
          <select name="estado" >
            {estados.map((estado, index) => <option key={index} value={estado} >{estado}</option>)}
          </select>
        </label>

        Tipo
        <label>
          <input type="radio" name="residencia" value="casa" required />casa
        </label>
        <label>
          <input type="radio" name="residencia" value="apartamento" />Apartamento
        </label>
      </fieldset>
    );
  }
}

export default PersonalData;