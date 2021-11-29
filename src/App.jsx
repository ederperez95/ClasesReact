import 'styles/styles.css';
import Index from 'pages/index';
import RhodesianInfoPage from 'pages/rhodesian';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";



function App() {

     

  return (
      <div className="App">
          <Router>
                <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path='/rhodesian' element={<RhodesianInfoPage />} />
                </Routes>
          </Router>  
      </div>   
  );
}

export default App;

