import Accordion from './components/Accordion/Accordion';
import { items } from './data/items';
import './App.css';
import ChipsInput from './components/ChipsInput/ChipsInput';

function App() {

  return (
    <div>
      {/* <Accordion items={items} /> */}
      <ChipsInput />
    </div>
  )
}

export default App
