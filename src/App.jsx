import Accordion from './components/Accordion/Accordion';
import { items } from './data/items';
import './App.css';
import ChipsInput from './components/ChipsInput/ChipsInput';
import HomePage from './pages/HomePage/HomePage';

function App() {

  return (
    <div>
      {/* <Accordion items={items} />
      <ChipsInput /> */}
      <HomePage />
    </div>
  )
}

export default App
