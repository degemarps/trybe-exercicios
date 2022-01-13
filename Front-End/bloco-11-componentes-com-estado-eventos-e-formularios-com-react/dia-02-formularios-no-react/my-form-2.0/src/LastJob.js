import React from 'react'
import './LastJob.css'

class LastJob extends React.Component {
  render() {
    return (
      <fieldset className="container">
        <label>
          Resumo do Currículo
          <textarea maxLength="1000" name="curriculo" required />
        </label>

        <label>
          Cargo
          <textarea maxLength="40" name="cargi" required />
        </label>

        <label>
          Descrição do Cargo
          <input type="text" maxLength="500" name="descricao-cargo" required />
        </label>
      </fieldset>
    )
  }
}

export default LastJob
