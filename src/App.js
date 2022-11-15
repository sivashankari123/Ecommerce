import "./App.css";
import {Route, Routes} from 'react-router-dom';
import Brands from "./components/brands/Brands";
import Contacts from "./components/contacts/Contacts";
import Layouts from "./components/layout/Layouts";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Layouts/>}  />
          <Route path='/Brands' element={<Brands/>}  />
          <Route path='/Contacts' element={<Contacts/>}  />
      </Routes>
    </div>
  );
}

export default App;
