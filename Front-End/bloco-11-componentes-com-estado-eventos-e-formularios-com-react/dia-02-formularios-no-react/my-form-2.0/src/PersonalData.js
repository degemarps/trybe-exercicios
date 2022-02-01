import React from 'react';
import './PersonalData.css';
import estados from './Estados';

class PersonalData extends React.Component {
  render() {
    const { personalName, personalEmail, personalCpf, personalStreet, personalCity, onChangeHandler } = this.props;
    return (
      <fieldset className="container">
        <label>
          Nome
          <input type="text" name="personalName" value={ personalName } maxLength="40" style={{ textTransform: 'uppercase' }} onChange={ onChangeHandler } required />
        </label>
        <label>
          Email
          <input type="email" name="personalEmail" value={ personalEmail } maxLength="50" onChange={ onChangeHandler } required />
        </label>
        <label>
          CPF
          <input type="text" name="personalCpf" value={ personalCpf } maxLength="11" onChange={ onChangeHandler } required />
        </label>
        <label>
          Endereço
          <input type="text" name="personalStreet" value={ personalStreet } maxLength="200" onChange={ onChangeHandler } required />
        </label>
        <label>
          Cidade
          <input type="text" name="personalCity" value={ personalCity } maxLength="28" onChange={ onChangeHandler } required />
        </label>
        <label>
          Estado
          <select name="personalState" onChange={ onChangeHandler }>
            {estados.map((estado, index) => (
              <option key={index} value={estado}>
                {estado}
              </option>
            ))}
          </select>
        </label>
        Tipo
        <label>
          <input type="radio" name="personalResidence" value="casa" onChange={ onChangeHandler } required />
          casa
        </label>
        <label>
          <input type="radio" name="personalResidence" value="apartamento" onChange={ onChangeHandler } />
          Apartamento
        </label>
      </fieldset>
    )
  }
}

export default PersonalData
