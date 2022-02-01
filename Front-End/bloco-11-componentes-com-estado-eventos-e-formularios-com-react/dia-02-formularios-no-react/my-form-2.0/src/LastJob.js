import React from 'react'
import './LastJob.css'

class LastJob extends React.Component {
  render() {
    const { curriculum, position, descriptionPosition, onChangeHandler } = this.props;
    return (
      <fieldset className="container">
        <label>
          Resumo do Currículo
          <textarea maxLength="1000" name="curriculum" value={ curriculum } onChange={ onChangeHandler } required />
        </label>

        <label>
          Cargo
          <textarea maxLength="40" name="position" value={ position } onChange={ onChangeHandler } required />
        </label>

        <label>
          Descrição do Cargo
          <input type="text" maxLength="500" name="descriptionPosition" value={ descriptionPosition } onChange={ onChangeHandler } required />
        </label>
      </fieldset>
    )
  }
}

export default LastJob
