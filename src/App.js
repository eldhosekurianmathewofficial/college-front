import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import NavBar from './components/NavBar';
import AddStudents from './components/AdminAddStudents';
import AdminAddStudents from './components/AdminAddStudents';
import StudentLogin from './components/StudentLogin';
import StudentAddMarks from './components/StudentAddMarks';
import NavStudent from './components/NavStudent';
import Viewmymarks from './components/Viewmymarks';
import AdminViewAllStudents from './components/AdminViewAllStudents';
import AdminViewAllwithMark from './components/AdminViewAllwithMark';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

<Route path ="/" element={<><AdminLogin/></>} />
<Route path ="/addstudent" element={<><NavBar/><AdminAddStudents/></>} />
<Route path ="/studentlogin" element={<><StudentLogin/></>} />
<Route path ="/studentmark" element={<><NavStudent/><StudentAddMarks/></>} />
<Route path ="/viewmymarks" element={<><NavStudent/><Viewmymarks/></>} />
<Route path ="/viewallstudents" element={<><NavBar/><AdminViewAllStudents/></>} />
<Route path ="/viewallstudentswithmark" element={<><NavBar/><AdminViewAllwithMark/></>} />



      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
