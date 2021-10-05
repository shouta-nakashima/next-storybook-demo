import {FC} from 'react';
import styles from '../styles/sample_button.module.scss'

type Props = {
  onClick?:() => void
  bgc?:string
  label:string
}

const SampleButton:FC<Props> = (props) => {
  const {onClick,label,bgc = '#4752ff'} = props
  return (
    <button className={styles.sample} style={{backgroundColor: bgc}} onClick={onClick}>
      {label}
    </button>
  );
};

export default SampleButton;
