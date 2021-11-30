import 'styles/styles.css';
import Index from 'pages/index';
import RhodesianInfoPage from 'pages/rhodesian';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Layout from 'layouts/Layout';
import BorderCollie from 'pages/borderCollie';


function App() {

     

  return (
      <div className="App">
          <Router>
            <Layout>
              <Routes>
                <Route path='/boderCollie' element={<BorderCollie />} exact/>
                <Route path='/rhodesian' element={<RhodesianInfoPage />} exact/>   
                <Route path='/' element={<Index />} exact/>              
              </Routes>
            </Layout>
          </Router>  
      </div>   
  );
}

export default App;

