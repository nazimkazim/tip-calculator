import { numbers } from './helper'
import './PercentSelector.scss'
import Tip from './parts/Tip/Tip'

const PercentSelector = ():JSX.Element => {
    return (
        <div className='percent-selector'>
            <span className='percent-selector__label'>Select Tip %</span>
            <div className='percent-selector__number-container'>
                {numbers.map((number) => (<Tip tipNumber={number} key={number} />))}
            </div>
        </div>
    )
}

export default PercentSelector