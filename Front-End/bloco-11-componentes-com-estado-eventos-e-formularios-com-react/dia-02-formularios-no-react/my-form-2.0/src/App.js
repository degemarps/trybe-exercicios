import './App.css'
import React from 'react'
import PersonalData from './PersonalData'
import LastJob from './LastJob'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      personalName: '',
      personalEmail: '',
    }
  }

  render() {
    const { personalName, personalEmail } = this.setState;
    return (
      <form>
        <PersonalData
          name={personalName}
          email={personalEmail}
        />
        <LastJob />
      </form>
    )
  }
}

export default App
