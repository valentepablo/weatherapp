import { FaTemperatureLow } from 'react-icons/fa';
import { BiDroplet } from 'react-icons/bi';
import { FiWind } from 'react-icons/fi';
import { CurrentWeatherProps } from '../../interfaces/CurrentWeatherProps';
import { API_ICON_URL } from '../../utils/api';

type Props = {
  currentWeather: CurrentWeatherProps | null;
};

const ResultadoClima: React.FC<Props> = ({ currentWeather }) => {
  if (currentWeather === null) return <div></div>;

  return (
    <div className='text-center mb-4'>
      <p className='text-3xl mb-4 font-bold uppercase tracking-wider text-violet-300'>
        {currentWeather.name}, {currentWeather.sys.country}
      </p>
      <p className='text-7xl md:text-[100px] font-semibold relative'>
        {currentWeather.main.temp.toFixed()}
        <span className='absolute top-4 text-4xl'>&#8451;</span>
      </p>
      <div className='mt-4 text-violet-300/60 max-w-md mx-auto flex items-center text-xs justify-between'>
        <div>
          <img src={`${API_ICON_URL}${currentWeather.weather[0].icon}.png`} alt='Weather icon' />
        </div>
        <div className='flex items-center gap-1'>
          <FaTemperatureLow />
          <p>
            ST{' '}
            <span className='font-semibold'>{currentWeather.main.feels_like.toFixed()}&deg;</span>
          </p>
        </div>
        <div className='flex items-center gap-1'>
          <BiDroplet />
          <p>
            Humedad <span className='font-semibold'>{currentWeather.main.humidity}%</span>
          </p>
        </div>
        <div className='flex items-center gap-1'>
          <FiWind />
          <p>
            Viento <span className='font-semibold'>{currentWeather.wind.speed.toFixed()} km/h</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultadoClima;
