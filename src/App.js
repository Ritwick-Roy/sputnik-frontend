import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Form from './pages/Form';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import NotFound from './pages/NotFound';
import DoctorDetails from './pages/DoctorDetails';
import Appointments from './pages/Appointments';
import Footer from './pages/Footer'
import Doctors from './pages/Doctors';
import DoctorSignup from './pages/DoctorSignup';
import DoctorLogin from './pages/DoctorLogin';
import PatientSignup from './pages/PatientSignup';
import PatientLogin from './pages/PatientLogin';
import PatientDetails from './pages/PatientDetails';
import UploadFiles from './pages/UploadFiles';


function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />  
      <div className="cont">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/predict" element={<Form/>}/>
          <Route path="/patient/upload" element={<UploadFiles/>}/>
          <Route path="/patient/signup" element={<PatientSignup/>}/>
          <Route path="/patient/login" element={<PatientLogin/>}/>
          {/* <Route path="/patient/:patientId" element={<PatientDetails/>}/> */}
          <Route path="/appointments" element={<Appointments/>}/>
          <Route path="/appointments/create/:doctorId" element={<DoctorDetails/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
          {/* <Route path="/doctor/signup" element={<DoctorSignup/>}/> */}
          {/* <Route path="/doctor/login" element={<DoctorLogin/>}/>  */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
   </Router>
  );
}

export default App;
