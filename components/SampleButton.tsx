import {FC} from 'react';

type Props = {
  onClick?:() => void
  bgc?:string
  label:string
}

const SampleButton:FC<Props> = (props) => {
  const {onClick,label,bgc = '#4752ff'} = props
  return (
    <button style={{backgroundColor: bgc, padding: '10px 30px', color: 'white'}} onClick={onClick}>
      {label}
    </button>
  );
};

export default SampleButton;
