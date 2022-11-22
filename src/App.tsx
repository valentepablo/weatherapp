import FechaHora from './components/FechaHora/FechaHora';
import InputField from './components/InputField/InputField';
import ResultContainer from './components/ResultContainer/ResultContainer';

function App() {
  return (
    <div className='py-3 md:py-10 max-h-screen'>
      <InputField />
      <ResultContainer />
      <FechaHora />
    </div>
  );
}

export default App;
