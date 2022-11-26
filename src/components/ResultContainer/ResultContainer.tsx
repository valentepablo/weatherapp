import { CurrentWeatherProps } from '../../interfaces/CurrentWeatherProps';
import { HourlyWeatherProps } from '../../interfaces/HourlyWeatherProps';
import FechaHora from '../FechaHora/FechaHora';
import PronosticoDiario from './PronosticoDiario';
import ResultadoClima from './ResultadoClima';

type Props = {
  currentWeather: CurrentWeatherProps | null;
  hourlyWeather: HourlyWeatherProps[];
};

const ResultContainer: React.FC<Props> = ({ currentWeather, hourlyWeather }) => {
  return (
    <div className='mx-3 md:mt-10'>
      <FechaHora currentWeather={currentWeather} />
      <ResultadoClima currentWeather={currentWeather} />
      <PronosticoDiario hourlyWeather={hourlyWeather} />
    </div>
  );
};

export default ResultContainer;
