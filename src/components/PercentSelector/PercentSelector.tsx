import { numbers } from './helper'
import './PercentSelector.scss'
import Tip from './parts/Tip/Tip'
import TipInput from './parts/TipInput/TipInput'
import { PercentSelectorProps } from './PercentSelector.props'

const PercentSelector = ({setTip, tip, setCustomTip = ()=>{}, customTipEnabled}:PercentSelectorProps):JSX.Element => {
    return (
        <div className='percent-selector'>
            <span className='percent-selector__label'>Select Tip %</span>
            <div className='percent-selector__number-container'>
                {numbers.map((number) => (<Tip setCustomTip={setCustomTip} customTipEnabled={customTipEnabled} setTip={setTip} tip={tip} tipNumber={number} key={number} />))}
                <TipInput setCustomTip={setCustomTip}/>
            </div>
        </div>
    )
}

export default PercentSelector