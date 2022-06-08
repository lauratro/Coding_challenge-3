import './App.css';
import Login from "./components/Login/Login"
import CourseList from './components/CourseList/CourseList';
import Header from './components/Header/Header';

function App() {
  return (

 
    <div className="App">
     <Header />
      <Login />
      <CourseList />
     
    </div>
  );
}

export default App;
