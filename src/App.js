import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Todo from "./MyComponents/TodoItem";
import Footer from "./MyComponents/Footer";




function App() {
  return (
    <>
      <Header />
      <Todos/>
      <Todo/>
      <Footer/>
    </>  
  );
}

export default App;
