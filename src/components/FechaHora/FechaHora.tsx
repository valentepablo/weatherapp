import { useState, useEffect } from 'react';
import { CurrentWeatherProps } from '../../interfaces/CurrentWeatherProps';
import * as moment from 'moment';

type Props = {
  currentWeather: CurrentWeatherProps | null;
};

const FechaHora: React.FC<Props> = ({ currentWeather }) => {
  const [horaLocal, setHoraLocal] = useState('');

  useEffect(() => {
    const timezone = currentWeather?.timezone;
    const timezoneInMins = timezone! / 60;
    setHoraLocal(moment().utcOffset(timezoneInMins).format('hh:mm A'));
  }, [currentWeather]);

  if (currentWeather === null) return <div></div>;

  return (
    <div className='mt-6 mb-2 md:mt-20 text-xs text-center text-violet-400'>
      Cambiar fecha, 2022 - {horaLocal}
    </div>
  );
};

export default FechaHora;
