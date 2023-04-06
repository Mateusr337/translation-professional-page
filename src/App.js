import Footer from "./components/footer";
import FormBox from "./components/form-box";
import "./styles/app.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="body">
          <div className="scroll-box">
            <div className="content">
              <div className="image-app" />
              <FormBox />
            </div>
          </div>
          {/* <header className="App-header">
          <p>
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
          </header> */}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
