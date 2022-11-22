const ResultadoClima = () => {
  return (
    <div className=' rounded-lg text-center '>
      <p className='text-3xl font-bold uppercase tracking-wider text-violet-300'>Buenos Aires</p>
      <p className='text-9xl font-semibold relative'>
        26
        <span className='absolute top-4 text-4xl'>&#8451;</span>
      </p>
      <div className='mt-2 text-violet-300 grid place-items-center'>
        <div className='flex items-center gap-2'>
          <p>ST</p>
          <p className='font-semibold'>28&#8451;</p>
        </div>
        <div className='flex items-center gap-2'>
          <p>Humedad</p>
          <p className='font-semibold'>30%</p>
        </div>
        <div className='flex items-center gap-2'>
          <p>Viento</p>
          <p className='font-semibold'>3 km/h</p>
        </div>
      </div>
    </div>
  );
};

export default ResultadoClima;
