import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import Shart from './Sharts/Shart';
import Teachers from './Sharts/Teachers';
import Students from './Students/Students';
import Courses from './Courses/Courses';
import Classes from './Classes/classes';
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
