import axios from 'axios';
import { useEffect, useState } from 'react';
import InputField from './components/InputField/InputField';
import ResultContainer from './components/ResultContainer/ResultContainer';
import { CurrentWeatherProps } from './interfaces/CurrentWeatherProps';
import { HourlyWeatherProps } from './interfaces/HourlyWeatherProps';
import { API_FORECAST, API_KEY, API_TIME, API_URL } from './utils/api';

function App() {
  const [cityName, setCityName] = useState('Buenos Aires');
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherProps | null>(null);
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherProps[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get<CurrentWeatherProps>(
        `${API_URL}q=${cityName}&appid=${API_KEY}`
      );
      const { timezone, main, name, sys, weather, wind } = response.data;
      const result = { timezone, main, name, sys, weather, wind };
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

  return (
    <div className='py-3 md:py-10'>
      <InputField setCityName={setCityName} />
      <ResultContainer currentWeather={currentWeather} hourlyWeather={hourlyWeather} />
    </div>
  );
}

export default App;
