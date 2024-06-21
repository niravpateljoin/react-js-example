import { BrowserRouter as Router } from 'react-router-dom';
import NavbarComponent from './components/Navbar/NavbarComponent';
import SectionComponent from './components/Section/SectionComponent';

function App () {
  return (
    <Router>
      <NavbarComponent />
      <SectionComponent />
    </Router>
  );
}

export default App;
