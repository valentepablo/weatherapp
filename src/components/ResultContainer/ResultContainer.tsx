import ProximosDias from './ProximosDias';
import ResultadoClima from './ResultadoClima';

const ResultContainer = () => {
  return (
    <div className='m-3 md:mt-10 space-y-2 md:space-y-14 grow'>
      <ResultadoClima />
      <ProximosDias />
    </div>
  );
};

export default ResultContainer;
