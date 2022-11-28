import axios from 'axios';
import { useEffect, useState } from 'react';
import InputField from './components/InputField/InputField';
import ResultContainer from './components/ResultContainer/ResultContainer';
import { CurrentWeatherProps } from './interfaces/CurrentWeatherProps';
import { HourlyWeatherProps } from './interfaces/HourlyWeatherProps';
import { API_FORECAST, API_KEY, API_TIME, API_TIMEKEY, API_URL } from './utils/api';
import { DateTime } from 'luxon';

function App() {
  const [cityName, setCityName] = useState('Buenos Aires');
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherProps | null>(null);
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherProps[]>([]);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    (async () => {
      const response = await axios.get<CurrentWeatherProps>(
        `${API_URL}q=${cityName}&appid=${API_KEY}`
      );
      const { coord, main, name, sys, weather, wind } = response.data;
      const result = { coord, main, name, sys, weather, wind };
      setCurrentWeather(result);
    })();

    (async () => {
      const response = await axios.get(`${API_FORECAST}q=${cityName}&appid=${API_KEY}`);
      const result = response.data.list.map((item: HourlyWeatherProps) => ({
        main: item.main,
        weather: item.weather,
        dt_txt: item.dt_txt,
      }));
      setHourlyWeather(result);
    })();
  }, [cityName]);

  useEffect(() => {
    currentWeather &&
      (async () => {
        const response = await axios.get(
          `${API_TIME}lat=${currentWeather!.coord.lat}&lon=${
            currentWeather!.coord.lon
          }&appid=${API_TIMEKEY}`
        );
        const tz = response.data.timezone;
        const dt = DateTime.local()
          .setZone(tz)
          .setLocale('es-AR')
          .toLocaleString({ day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });

        setLocalTime(dt);
      })();
  }, [currentWeather]);

  return (
    <div className='py-3 md:py-10'>
      <InputField setCityName={setCityName} />
      <ResultContainer
        currentWeather={currentWeather}
        hourlyWeather={hourlyWeather}
        localTime={localTime}
      />
    </div>
  );
}

export default App;
