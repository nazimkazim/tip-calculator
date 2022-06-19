import { TipInputProps } from './TipInput.props';
import './TipInput.scss';

const TipInput = ({setCustomTip}:TipInputProps):JSX.Element => {
  return (
    <input type={'number'} min='0' onChange={(e) => setCustomTip(Number(e.target.value))} className="tip-input" placeholder="Custom"/>
  )
}

export default TipInput