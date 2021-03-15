import logo from './logo.svg';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <div className="fixed-top">
        <Navbar />
      </div>
      <div className="content">
        <Banner />
        <Contact />
      </div>
    </div>
  );
}

export default App;
