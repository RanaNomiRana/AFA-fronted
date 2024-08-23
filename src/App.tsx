import { FaArrowLeft, FaArrowRight, FaSyncAlt, FaMinus, FaSquare, FaTimes } from 'react-icons/fa';
import './App.css';
import Navbar from './components/Nabar';
import DataFetch from './components/DataFetch';
import Search from './components/Search';
import TimelineAnalysis from './components/TimelineAnalysis';
import URLAnalysis from './components/URLAnalysis';
import DataCorrelation from './components/DataCorrelation';

function App() {
  // Function to handle close button click
  const handleClose = () => {
    if (window.ipcRenderer) {
      window.ipcRenderer.send('close-window');
    } else {
      console.error('ipcRenderer is not available');
    }
  };

  // Function to handle minimize button click
  const handleMinimize = () => {
    if (window.ipcRenderer) {
      window.ipcRenderer.send('minimize-window');
    } else {
      console.error('ipcRenderer is not available');
    }
  };

  // Function to handle maximize button click
  const handleMaximize = () => {
    if (window.ipcRenderer) {
      window.ipcRenderer.send('maximize-window');
    } else {
      console.error('ipcRenderer is not available');
    }
  };

  // Function to handle back button click
  const handleBack = () => {
    if (window.ipcRenderer) {
      window.ipcRenderer.send('go-back');
    } else {
      console.error('ipcRenderer is not available');
    }
  };

  // Function to handle forward button click
  const handleForward = () => {
    if (window.ipcRenderer) {
      window.ipcRenderer.send('go-forward');
    } else {
      console.error('ipcRenderer is not available');
    }
  };

  // Function to handle reload button click
  const handleReload = () => {
    if (window.ipcRenderer) {
      window.ipcRenderer.send('reload-page');
    } else {
      console.error('ipcRenderer is not available');
    }
  };

  return (
    <>
       <div className="container-fluid border-bottom header position-fixed">
        <div className="row d-flex align-items-center">
          <div className="col b_f_r">
            <button className="control-button border m-1" onClick={handleBack}>
              <FaArrowLeft />
            </button>
            <button className="control-button border m-1" onClick={handleForward}>
              <FaArrowRight />
            </button>
            <button className="control-button border m-1" onClick={handleReload}>
              <FaSyncAlt />
            </button>
          </div>

          <div className="col  bg-black search-container shadow-lg d-flex justify-content-center text-center">
            <p className='footer-text border px-3 rounded fw-bold'>
              Android Forensic Analyzer Tool
            </p>
          </div>

          <div className="col d-flex justify-content-end">
            <button className="control-button border m-1" onClick={handleMinimize}>
              <FaMinus />
            </button>
            <button className="control-button border m-1" onClick={handleMaximize}>
              <FaSquare />
            </button>
            <button className="control-button border m-1" onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
        </div>
      </div>



      <div className="app-container">
            <Navbar />
            <div className="main-content">
                <DataFetch />
                <Search />
                <TimelineAnalysis />
                <URLAnalysis />
                <DataCorrelation />
            </div>
        </div>


      <div className="footer-container">
        <p className='footer-text'>
          &copy; {new Date().getFullYear()} Android Forensic Analyzer Tool developed by Cyber Security Expert Rana Faheem, Ali Raza, Yasir Arfat.
        </p>
      </div>
    </>
  );
}

export default App;
