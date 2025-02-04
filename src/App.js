// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Template} from "./features/landing_page/Template";
import {Footer} from "./features/landing_page/menu/Footer";

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
