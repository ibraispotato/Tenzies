import './App.css';
import Tenziss from "./tenzis/tensizes"
import { GetContext } from './tensizcontext/tensiz';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <GetContext>
          <Routes>
            <Route path={"/Tenzies"} element={<Tenziss />} />
            </Routes>
        </GetContext>
       
        </Router>
    </div>
  );
}

export default App;
