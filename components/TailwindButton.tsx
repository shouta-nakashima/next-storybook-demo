import {VFC} from 'react';

type Props = {
  onClick?:() => void
  label:string
}

const TailwindButton:VFC<Props> = (props) => {
  const {onClick,label} = props
  return (
    <button className='w-80 h-10 text-yellow-300 bg-black rounded-full' type='button' onClick={onClick}>
      {label}
    </button>
  );
};

export default TailwindButton;
