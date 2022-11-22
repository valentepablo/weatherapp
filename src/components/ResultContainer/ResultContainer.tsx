import ProximosDias from './ProximosDias';
import ResultadoClima from './ResultadoClima';

const ResultContainer = () => {
  return (
    <div className='m-3 mt-10 space-y-14'>
      <ResultadoClima />
      <ProximosDias />
    </div>
  );
};

export default ResultContainer;
