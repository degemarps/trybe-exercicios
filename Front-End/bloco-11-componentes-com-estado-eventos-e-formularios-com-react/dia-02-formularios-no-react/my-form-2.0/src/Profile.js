import React from 'react';

class Profile extends React.Component {
  render() {
    const { name, email, cpf, street, city, state, residence, curriculum, position, descriptionPosition } = this.props;
    return (
      <di>
        <h2>{ name }</h2>
        <p>{ email }</p>
        <p>{ cpf }</p>
        <p>{ street }</p>
        <p>{ city }</p>
        <p>{ state }</p>
        <p>{ residence }</p>
        <p>{ curriculum }</p>
        <p>{ position }</p>
        <p>{ descriptionPosition }</p>
      </di>
    );
  }
}

export default Profile;
