// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Todo} from "./MyComponents/TodoItem";
import {Footer} from "./MyComponents/Footer";




function App() {
  let todos=[
    {
    sno:1,
    title:"Go To The Market",
    description:"Please go to the market to get the job done"
  },
  {
    sno:2,
    title:"Go To The Club",
    description:"Please go to the market to get the job done"
  },
  {
    sno:3,
    title:"Go To The Comic Con",
    description:"Please go to the market to get the job done"
  },
]
  return (
    <>
      <Header title="My ToDos List" searchBar={false} />
      <Todos todos={todos}/>
      <Todo/>
      <Footer/>
    </>  
  );
}

export default App;
