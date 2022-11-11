import './App.scss';
// import { Alert, Card, DatePicker } from 'antd'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import projectRoutes from './config/routes';



function App() {
  return (
    <Router>
      <Routes>
        {
          projectRoutes.map((route, index)=>(
            <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component></route.component>
                <h2>Child component</h2>
              </route.layout>
            }
             />
          ))}
      </Routes>
    </Router>
    
  );
}

export default App;
