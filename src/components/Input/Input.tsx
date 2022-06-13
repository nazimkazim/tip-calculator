import clsx from 'clsx'
import { InputProps } from './Input.props'
import './Input.scss'

const Input = ({ logoPath, label, ...props }: InputProps): JSX.Element => {
    return (
        <div className='input' >
            <span className='input__label'>{label}</span>
            <div className='input__input-holder'>
                <img className='input__icon' src={logoPath} alt='icon'/>
                <input placeholder='0' type={'number'} className={clsx('input__element', {})}  {...props} />
            </div>
        </div>
    )
}

export default Input