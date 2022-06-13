import React from 'react'
import { TypographyProps } from './Typography.props'
import './Typography.scss'
import clsx from 'clsx';

const Typography = ({ children, tag = 'normal', color = 'white', spacing = false, bolded = false }: TypographyProps): JSX.Element => {
  const config = {
    '--white': color === 'white',
    '--gray': color === 'gray',
    '--letter-spaced':spacing,
    '--big': tag === 'big',
    '--normall': tag === 'normal',
    '--bolded': bolded
  }
  return (
    <div className='typograpy'>
      {<p className={clsx('typography__tag', config)}>{children}</p>}
    </div>

  )
}

export default Typography