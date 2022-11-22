import { Popover } from '@headlessui/react';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  return (
    <div className='flex font-bold text-slate-200 items-center justify-between bg-violet-900/30 backdrop-blur-xl shadow-lg py-3 px-4 fixed inset-x-3 bottom-3 md:bottom-auto md:inset-x-4 md:top-4 rounded-lg'>
      <p className='py-3 md:py-0 md:px-5'>Weather App</p>
      <ul className='hidden md:flex items-center'>
        <li className='hover:bg-slate-500/30 px-5 py-3 rounded-lg cursor-pointer'>Cuenta</li>
        <li className='hover:bg-slate-500/30 px-5 py-3 rounded-lg cursor-pointer'>Link 2</li>
        <li className='hover:bg-slate-500/30 px-5 py-3 rounded-lg cursor-pointer'>Link 3</li>
      </ul>
      <Popover className='md:hidden flex items-center'>
        <Popover.Button className='focus:outline-none'>
          <HiMenu className='w-6 h-6' />
        </Popover.Button>
        <Popover.Panel className='absolute bg-violet-800/30 text-slate-300 shadow-lg p-2 backdrop-blur-xl bottom-20 inset-x-0 rounded-lg overflow-hidden'>
          <ul>
            <li className='block cursor-pointer hover:bg-violet-900/30 p-4 rounded-lg'>Cuenta</li>
            <li className='block cursor-pointer hover:bg-violet-900/30 p-4 rounded-lg'>Link 2</li>
            <li className='block cursor-pointer hover:bg-violet-900/30 p-4 rounded-lg'>Link 3</li>
          </ul>
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default Navbar;
