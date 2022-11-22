const InputField = () => {
  return (
    <form className='mx-3 md:max-w-lg md:mt-10 md:mx-auto'>
      <div className='bg-violet-900/10 p-3 rounded-lg space-y-1'>
        <label htmlFor='ciudad' className='font-bold tracking-wider uppercase text-violet-200'>
          Busca una ciudad
        </label>
        <input
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
