import { useState } from 'react';
import { CurrentWeatherProps } from '../../interfaces/CurrentWeatherProps';

type Props = {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
};

const InputField: React.FC<Props> = ({ setCityName }) => {
  const [cityInput, setCityInput] = useState('');

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setCityName(cityInput);
    setCityInput('');
  };

  return (
    <form className='mx-3 md:max-w-lg mt-2 md:mt-10 md:mx-auto' onSubmit={handleSubmit}>
      <div className='bg-violet-900/10 p-3 rounded-lg space-y-1'>
        <label htmlFor='ciudad' className='font-bold tracking-wider uppercase text-violet-200'>
          Busca una ciudad
        </label>
        <input
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          type='text'
          name='ciudad'
          placeholder='ej. Buenos Aires...'
          className='bg-violet-900/10 text-violet-200 rounded-md px-2 py-3 w-full placeholder:text-slate-500/70 focus:outline-none focus:ring focus:ring-violet-800/30'
        />
      </div>
    </form>
  );
};

export default InputField;
