import Com1 from './Com1';
import Comp from './Comp';
import Components from './Components';
import Navbar from './Navbar';
import './style.css';
function App() {
  return (
    <div>
      {/* passing props */}
      <Navbar 
        title= "Chitkara University"
        links={["Home", "Projects", "Bye-Bye"]}
      />
      <Comp />
      <Com1 />
      <Components />
    </div>
  );
}

export default App;
