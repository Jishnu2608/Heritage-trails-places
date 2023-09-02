import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import './App.css';
import ContentPlaces from "./components/Content/content-places";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <ContentPlaces/>
      <Footer/>
    </div>
  );
}

export default App;
