import { useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { HourlyWeatherProps } from '../../interfaces/HourlyWeatherProps';
import { API_ICON_URL } from '../../utils/api';
import { DateTime } from 'luxon';

type Props = {
  hourlyWeather: HourlyWeatherProps[];
};

const PronosticoDiario: React.FC<Props> = ({ hourlyWeather }) => {
  const scrollSection = useRef<HTMLDivElement>(null!);

  let scrollAmount = 0;

  const scrollLeft = () => {
    let scrollPerClick = scrollSection.current.clientWidth + 50;
    scrollSection.current?.scrollTo({
      left: (scrollAmount -= scrollPerClick),
      behavior: 'smooth',
    });

    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
  };

  const scrollRight = () => {
    let scrollPerClick = scrollSection.current.clientWidth + 50;

    if (scrollAmount <= scrollSection.current.scrollWidth - scrollSection.current.clientWidth) {
      scrollSection.current?.scrollTo({
        left: (scrollAmount += scrollPerClick),
        behavior: 'smooth',
      });
    }
  };

  const dt = DateTime.local().setLocale('es-AR').toLocaleString({ weekday: 'long' });

  return (
    <div className='relative md:max-w-2xl mx-auto mt-8'>
      <p className='uppercase text-sm font-semibold text-violet-300 mb-2'>Pronostico diario</p>
      <div ref={scrollSection} className='flex gap-2 scroll-x-hidden'>
        {hourlyWeather.map((item) => (
          <div className='bg-violet-900/5 rounded-md p-4 px-8 text-center' key={item.dt_txt}>
            <p className='text-xs text-violet-300 whitespace-nowrap capitalize'>{dt}</p>
            <p className='text-sm'>{item.dt_txt.slice(11, 16)}</p>
            <img
              src={`${API_ICON_URL}${item.weather[0].icon}.png`}
              alt='Weather icon'
              className='mt-1'></img>
            <p className='text-2xl mt-3'>{item.main.temp.toFixed()}&deg;</p>
          </div>
        ))}
      </div>
      <div className='hidden absolute -left-12 -right-12 top-1/2 -translate-y-[50%] md:flex justify-between text-white'>
        <button onClick={scrollLeft}>
          <HiChevronLeft className='w-10 h-10 hover:scale-105' />
        </button>
        <button onClick={scrollRight}>
          <HiChevronRight className='w-10 h-10 hover:scale-105' />
        </button>
      </div>
    </div>
  );
};

export default PronosticoDiario;

// new Date(item.dt_txt).toLocaleDateString('es-ES', { weekday: 'long' }).toString()
