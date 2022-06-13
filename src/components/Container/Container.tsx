import React from 'react'
import { ContainerProps } from './Container.props'
import './Container.scss'

const Container = ({children}:ContainerProps):JSX.Element => {
  return (
    <div className='container'>{children}</div>
  )
}

export default Container