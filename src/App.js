import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default App;
