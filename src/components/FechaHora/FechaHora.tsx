type Props = {
  localTime: string;
};

const FechaHora: React.FC<Props> = ({ localTime }) => {
  return <div className='mt-6 mb-2 md:mt-20 text-sm text-center text-violet-400'>{localTime}</div>;
};

export default FechaHora;
