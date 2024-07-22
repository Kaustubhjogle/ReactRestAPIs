import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Body />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
