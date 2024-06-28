import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import Shart from './Sharts/Shart';
import Teachers from './Sharts/Teachers';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Navbar />
      <Teachers />

    </div>
  );
}

export default App;
