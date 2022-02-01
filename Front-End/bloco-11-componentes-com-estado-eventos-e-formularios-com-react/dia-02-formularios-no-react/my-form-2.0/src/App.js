import './App.css';
import React from 'react';
import PersonalData from './PersonalData';
import LastJob from './LastJob';
import Profile from './Profile';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      personalName: '',
      personalEmail: '',
      personalCpf: '',
      personalStreet: '',
      personalCity: '',
      personalState: '',
      personalResidence: '',
      curriculum: '',
      position: '',
      descriptionPosition: '',
      canRender: false,
    }

    this.onHandlerChange = this.onHandlerChange.bind(this);
    this.onHandlerClick = this.onHandlerClick.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  onHandlerChange(event) {
    const { personalName } = this.state;
    this.setState({[event.target.name]: event.target.value});
    console.log(personalName);
  }

  onHandlerClick() {
    this.setState({ canRender: true });
  }

  onClear() {
    this.setState({ 
      canRender: false,
      personalName: '',
      personalEmail: '',
      personalCpf: '',
      personalStreet: '',
      personalCity: '',
      personalState: '',
      personalResidence: '',
      curriculum: '',
      position: '',
      descriptionPosition: '',
     });
  }

  render() {
    const {
      personalName,
      personalEmail,
      personalCpf,
      personalStreet,
      personalCity,
      personalState,
      personalResidence,
      curriculum,
      position,
      descriptionPosition,
      canRender,
    } = this.state;

    return (
      <>
        <form>
          <PersonalData
            personalName={personalName}
            personalEmail={personalEmail}
            personalCpf={personalCpf}
            personalStreet={personalStreet}
            personalCity={personalCity}
            personalState={personalState}
            personalResidence={personalResidence}
            onChangeHandler={this.onHandlerChange}
          />
          <LastJob
            curriculum={curriculum}
            position={position}
            descriptionPosition={descriptionPosition}
            onChangeHandler={this.onHandlerChange}
          />
          <button onClick={ this.onHandlerClick } type="button">Salvar</button>
          <button onClick={ this.onClear } type="button">Limpar</button>
        </form>
        { canRender ? <Profile 
        name={personalName}
        email={personalEmail}
        cpf={personalCpf}
        street={personalStreet}
        city={personalCity}
        state={personalState}
        residence={personalResidence}
        curriculum={curriculum}
        position={position}
        descriptionPosition={descriptionPosition}
        /> : null }
      </>
    )
  }
}

export default App
