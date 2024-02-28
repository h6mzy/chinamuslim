import { ReactNode } from 'react'

const Responsive = ({
  mobile,
  web,
}: {
  mobile: ReactNode,
  web: ReactNode,
}) => {
  return (
    <>
      <div className='hide-on-lg'>
        {mobile}
      </div>
      <div className='show-on-lg'>
        {web}
      </div>
    </>
  )
}

export default Responsive