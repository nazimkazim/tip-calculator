import clsx from 'clsx'
import React from 'react'
import { HalfProps } from './Half.props'
import './Half.scss'

const Half = ({children, background = 'white'}:HalfProps): JSX.Element => {
  return (
    <div className={clsx('half', {
        '--white': background === 'white',
        '--dark-gray': background === 'dark-gray',
    })}>{children}</div>
  )
}

export default Half