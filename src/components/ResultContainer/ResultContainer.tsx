import { CurrentWeatherProps } from '../../interfaces/CurrentWeatherProps';
import { HourlyWeatherProps } from '../../interfaces/HourlyWeatherProps';
import FechaHora from '../FechaHora/FechaHora';
import PronosticoDiario from './PronosticoDiario';
import ResultadoClima from './ResultadoClima';

type Props = {
  currentWeather: CurrentWeatherProps | null;
  hourlyWeather: HourlyWeatherProps[];
  localTime: string;
};

const ResultContainer: React.FC<Props> = ({ currentWeather, hourlyWeather, localTime }) => {
  return (
    <div className='mx-3 md:mt-10'>
      <FechaHora localTime={localTime} />
      <ResultadoClima currentWeather={currentWeather} />
      <PronosticoDiario hourlyWeather={hourlyWeather} />
    </div>
  );
};

export default ResultContainer;
