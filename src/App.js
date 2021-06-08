import React, {Component} from 'react';
import './App.css';
import {loginUser, getClients, getPolicies} from './routes/routes.js';

class App extends Component {
  handleFormSubmit = async e => {
    e.preventDefault ();
    var client_id = document.getElementById ('client_id').value;
    var client_secret = document.getElementById ('client_secret').value;
    if (client_id !== '' && client_secret !== '') {
      console.log (client_id + '  ' + client_secret);
      await loginUser ({client_id, client_secret});
    }
  };
  openNotification = async () => {
    // await props.sendNotification ('this is a notification');
    // notification.info ({
    //   message: `Error`,
    //   description: `${notifications.notification ? notifications.notification : 'Error'}`,
    // });
  };

  render () {
    return (
      <div className="App">
        <header>
          <h2>
            This app was created as an API Request App
          </h2>
        </header>
        <div className="m-4">
          <form
            className="container"
            onSubmit={this.handleFormSubmit}
            id="signIn"
          >
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
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
              <label for="exampleInputPassword1" className="form-label">
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
        </div>
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
      </div>
    );
  }
}

export default App;
