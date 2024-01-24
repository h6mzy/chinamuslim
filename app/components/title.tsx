import { CSSProperties } from 'react'

const Title = ({ title, style }: { title: string, style?: CSSProperties  }) => {
  
  const prep = (
    title
      .replace('[', `<span class="font-color-primary">`)
      .replace(']', `</span>`)
  )

  return (
    <h1 className='title' style={style}><strong dangerouslySetInnerHTML={{ __html: prep }} /></h1>
  )
}

export default Title