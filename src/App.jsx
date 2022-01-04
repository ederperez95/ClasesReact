import 'styles/styles.css';
import Index from 'pages/index';
import BorderCollieInfoPage from 'pages/borderCollie';
import RhodesianInfoPage from 'pages/rhodesian';
import Layout from 'layouts/Layout';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";




function App() {

     

  return (
      <div className="App">
          <Router>
            <Layout>
              <Routes>
                <Route path='/bodercollie' element={<BorderCollieInfoPage/>} exact/>
                <Route path='/rhodesian' element={<RhodesianInfoPage/>} exact/>   
                <Route path='/' element={<Index/>} exact/>              
              </Routes>
            </Layout>
          </Router>  
      </div>   
  );
}

export default App;

