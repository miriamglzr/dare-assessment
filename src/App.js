import './App.css';

function App () {
  return (
    <div className="App">
      <header>
        <p>
          This app was created as an API Request App
        </p>
      </header>
      <form className="container">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Enter id
          </label>
          <input
            type="text"
            className="form-control"
            id="client-id"
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
            id="exampleInputPassword1"
            defaultValue="s3cr3t"
          />
          <div id="passwordHelp" className="form-text">
            Please enter the s3cr3t password.
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;
