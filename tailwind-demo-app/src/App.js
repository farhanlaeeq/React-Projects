import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="ml-10">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="tw-mr-10 tw-decoration-dotted tw-underline">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button className="w-60" variant="contained">
          HELLO
        </Button>
        <div
          class="
          tw-grid
          tw-grid-cols-4
          tw-gap-4
          hover:tw-grid-cols-6
          tw-border-2
          tw-border-yellow-200
        "
        >
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>09</div>
        </div>
      </header>
    </div>
  );
}

export default App;
