import Accordion from './components/Accordion/Accordion';
import { items } from './data/items';
import './App.css';

function App() {

  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default App
