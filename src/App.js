import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
