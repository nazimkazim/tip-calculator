import { TipProps } from "./Tip/TipProps"
import './Tip.scss'

const Tip = ({tipNumber}:TipProps): JSX.Element => {
  return (
    <button className="tip">{tipNumber}%</button>
  )
}

export default Tip