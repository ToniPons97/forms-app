import './App.css';
import { CarDetails } from './components/CarDetails';

const car = {
  model: 'Alfa Romeo Spider',
  year: 1967,
  color: 'Red'
};


function App() {
  return <CarDetails initialData={car} />
}

export default App;
