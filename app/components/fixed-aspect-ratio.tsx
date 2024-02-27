import React, { ReactNode } from 'react'
import styles from './fixed-aspect-ratio.module.sass'

export interface FixedAspectRatioProps {
  ratio?: [number, number]
  children?: ReactNode
}

const FixedAspectRatio = ({
  ratio = [1,1],
  children = <span />,
}: FixedAspectRatioProps) => {

  const [ width, height ] = ratio
  const paddingTop = (height / width) * 100

  return (
    <div className={styles.container} style={{ paddingTop: `${paddingTop}%` }}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default FixedAspectRatio