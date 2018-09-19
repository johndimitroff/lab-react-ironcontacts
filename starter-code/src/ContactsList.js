import React from "react";
import contacts from "./contacts.json";
import "./App.css";

class ContactsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: contacts.slice(0, 5)
    };
  }

  addActor() {
    const randomActorIndex = Math.floor(Math.random() * contacts.length);
    const randomActor = contacts[randomActorIndex];

    const { actors } = this.state;

    actors.push(randomActor);

    this.setState({ actors });
  }

  render() {
    const { actors } = this.state;
    return (
      <div className="Content">
        <button onClick={() => this.addActor()}>Add a Random Contact</button>
        <table align="center">
          <thead>
            <tr>
              <th> Picture </th>
              <th> Name </th>
              <th> Popularity </th>
            </tr>
          </thead>
          <tbody>
            {actors.map((oneContact, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={oneContact.pictureUrl}
                    height="100px"
                    width="70px"
                  />
                </td>
                <td>
                  <h3>{oneContact.name}</h3>
                </td>
                <td>
                  <p>{oneContact.popularity}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactsList;
