import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import Shart from './Sharts/Shart';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Navbar />
      <Shart />
    </div>
  );
}

export default App;
