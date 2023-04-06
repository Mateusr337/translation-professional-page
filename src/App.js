import Footer from "./components/footer";
import FormBox from "./components/form-box";
import "./styles/app.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="body">
          <div className="content">
            <div className="image-app" />
            <FormBox />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
