import { useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const ProximosDias = () => {
  const scrollSection = useRef<HTMLDivElement>(null!);

  console.log(scrollSection);
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

  return (
    <div className='relative md:max-w-2xl mx-auto'>
      <div ref={scrollSection} className='flex gap-3 scroll-x-hidden'>
        <div className='bg-violet-900/10 rounded-md p-6 text-center'>
          <p>18:00</p>
          <p className='text-3xl mt-5'>ICONO</p>
          <p className='text-lg mt-5'>Soleado</p>
          <p className='text-3xl font-semibold'>30</p>
        </div>
        <div className='bg-violet-900/10 rounded-md p-6 text-center'>
          <p>18:00</p>
          <p className='text-3xl mt-5'>ICONO</p>
          <p className='text-lg mt-5'>Soleado</p>
          <p className='text-3xl font-semibold'>30</p>
        </div>
        <div className='bg-violet-900/10 rounded-md p-6 text-center'>
          <p>18:00</p>
          <p className='text-3xl mt-5'>ICONO</p>
          <p className='text-lg mt-5'>Soleado</p>
          <p className='text-3xl font-semibold'>30</p>
        </div>
        <div className='bg-violet-900/10 rounded-md p-6 text-center'>
          <p>18:00</p>
          <p className='text-3xl mt-5'>ICONO</p>
          <p className='text-lg mt-5'>Soleado</p>
          <p className='text-3xl font-semibold'>30</p>
        </div>
        <div className='bg-violet-900/10 rounded-md p-6 text-center'>
          <p>18:00</p>
          <p className='text-3xl mt-5'>ICONO</p>
          <p className='text-lg mt-5'>Soleado</p>
          <p className='text-3xl font-semibold'>30</p>
        </div>
        <div className='bg-violet-900/10 rounded-md p-6 text-center'>
          <p>18:00</p>
          <p className='text-3xl mt-5'>ICONO</p>
          <p className='text-lg mt-5'>Soleado</p>
          <p className='text-3xl font-semibold'>30</p>
        </div>
        <div className='bg-violet-900/10 rounded-md p-6 text-center'>
          <p>18:00</p>
          <p className='text-3xl mt-5'>ICONO</p>
          <p className='text-lg mt-5'>Soleado</p>
          <p className='text-3xl font-semibold'>30</p>
        </div>
        <div className='bg-violet-900/10 rounded-md p-6 text-center'>
          <p>18:00</p>
          <p className='text-3xl mt-5'>ICONO</p>
          <p className='text-lg mt-5'>Soleado</p>
          <p className='text-3xl font-semibold'>30</p>
        </div>
        <div className='bg-violet-900/10 rounded-md p-6 text-center'>
          <p>18:00</p>
          <p className='text-3xl mt-5'>ICONO</p>
          <p className='text-lg mt-5'>Soleado</p>
          <p className='text-3xl font-semibold'>30</p>
        </div>
        <div className='bg-violet-900/10 rounded-md p-6 text-center'>
          <p>18:00</p>
          <p className='text-3xl mt-5'>ICONO</p>
          <p className='text-lg mt-5'>Soleado</p>
          <p className='text-3xl font-semibold'>30</p>
        </div>
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

export default ProximosDias;
