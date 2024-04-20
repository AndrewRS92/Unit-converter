import './App.css';
import Converter from './Components/Converter';
import ConvertedUnitsTable from './Components/ConvertedUnitsTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Converter/>
        <ConvertedUnitsTable/>
      </header>
    </div>
  );
}

export default App;
