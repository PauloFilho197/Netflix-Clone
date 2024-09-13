import './App.css';
import Row from "./components/Row.js"
import categories from './api'
import Banner from './components/Banner.js';
import Nav from './components/Nav.js';



function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
 
    {categories.map((category) => (
    
      <Row 
      key={category.name}
      title={category.title}
      path={category.path}
      isLarge={category.isLarge}
      />
    
    ))}
    </div>
  
  );
}

export default App;
