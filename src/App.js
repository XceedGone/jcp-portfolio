// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Template} from "./components/Template";
import {Footer} from "./components/Footer";

function App() {
  return (
      <div className="App">
          <NavBar/>
          <Banner/>
          <Template/>
          <Footer/>
      </div>
  );
}

export default App;
