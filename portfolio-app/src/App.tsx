import './App.scss';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
