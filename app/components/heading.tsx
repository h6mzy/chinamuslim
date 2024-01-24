import { CSSProperties } from 'react'

const Heading = ({
  title,
  weak,
  style = {}
}: { 
  title: string, 
  weak?: boolean, 
  style?: CSSProperties 
}) => {
  return (
    <h2 
      className={`heading ${weak ? 'font-color-secondary' : ''}`}
      style={style}
    >
      <strong>{title}</strong>
    </h2>
  )
}

export default Heading