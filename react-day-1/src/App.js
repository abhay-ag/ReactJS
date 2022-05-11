import Navbar from './Navbar';
import './style.css'
function App() {
  return (
    <div>
      {/* passing props */}
      <Navbar 
        title= "Chitkara University"
        links={["Home", "Projects", "Bye-Bye"]}
      />
    </div>
  );
}

export default App;
