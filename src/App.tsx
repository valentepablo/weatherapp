import FechaHora from './components/FechaHora/FechaHora';
import InputField from './components/InputField/InputField';
import ResultContainer from './components/ResultContainer/ResultContainer';

function App() {
  return (
    <div className='py-3 flex flex-col'>
      <InputField />
      <ResultContainer />
      <FechaHora />
    </div>
  );
}

export default App;
