import React, {Component} from 'react';
import './App.css';
import {loginUser, getClients, getPolicies} from './routes/routes.js';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      login: false,
      view: false,
      table: [],
      name: '',
    };
  }

  handleFormSubmit = async e => {
    e.preventDefault ();
    var client_id = document.getElementById ('client_id').value;
    var client_secret = document.getElementById ('client_secret').value;
    if (client_id !== '' && client_secret !== '') {
      //  console.log (client_id + '  ' + client_secret);
      await loginUser ({client_id, client_secret});
      this.setState ({
        login: true,
      });
    }
  };

  openNotification = async arg => {
    //console.log (arg);
    if (arg === 'getClients') {
      // console.log ('clients');
      const data = await getClients ();
      this.setState ({
        view: true,
        table: data,
        name: 'Client Table',
      });
    } else {
      // console.log ('policies');
      const data = await getPolicies ();
      this.setState ({
        view: true,
        table: data,
        name: 'Policies Table',
      });
    }
  };

  logOut = () => {
    localStorage.removeItem ('token');
    this.setState ({
      login: false,
      view: false,
      table: [],
      name: '',
    });
  };

  render () {
    const {view, table, name, login} = this.state;
    return (
      <div className="App">
        <header>
          <h2 className="mt-4">
            This app was created as an API REST App
          </h2>
        </header>
        {!login &&
          <div className="m-4">
            <form
              className="container w-50"
              onSubmit={this.handleFormSubmit}
              id="signIn"
            >
              <div className="mb-3 ">
                <label className="form-label">
                  Enter id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="client_id"
                  defaultValue="dare"
                />
                <div id="idHelp" className="form-text">
                  Please dare enter the user id.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="client_secret"
                  defaultValue="s3cr3t"
                />
                <div id="passwordHelp" className="form-text">
                  Please enter the s3cr3t password.
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={data => this.handleFormSubmit (data)}
              >
                Submit
              </button>
            </form>
          </div>};
        {login &&
          <div className="m-4">
            <button
              type="button"
              className="btn btn-success m-3"
              onClick={() => this.openNotification ('getClients')}
            >
              See clients
            </button>
            <button
              type="button"
              className="btn btn-warning m-3"
              onClick={() => this.openNotification ('getPolicies')}
            >
              See policies
            </button>
            <button
              type="button"
              className="btn btn-link ml-4 btn-sm"
              onClick={() => this.logOut ()}
            >
              Log out
            </button>
            {view &&
              table.lenght !== 0 &&
              <div className="container">
                <button
                  type="button"
                  className="btn btn-danger m-3 btn-sm float-right"
                  onClick={() =>
                    this.setState ({view: false, table: [], name: ''})}
                >
                  x
                </button>
                <h5>{name}</h5>
                <table className="table">

                  <tbody>
                    {table.map ((e, i) => {
                      const keys = Object.keys (e);
                      return (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>
                          {keys.map ((p, j) => (
                            <td key={j}>
                              {p + ': ' + e[p]}
                            </td>
                          ))}

                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>}{' '}
          </div>}
      </div>
    );
  }
}

export default App;
