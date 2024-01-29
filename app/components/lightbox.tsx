'use client'

import { Grid, GridProps, Image, Modal } from 'antd-mobile'

export interface Copyright {
  name: string
  email?: string
  website: string
}

export interface imageProps {
  src: string
  title?: string
  caption?: string
  copyright?: Copyright
}

const Lightbox = ({
  images,
  gridProps = { columns: 1, gap: '.5rem' }
}: {
  images: imageProps[],
  gridProps?: GridProps
}) => {

  const openModal = (imageIndex: number) => {
    Modal.alert({
      className: 'lightbox-modal',
      title: `Image ${imageIndex+1}`,
      content: 
        <Image
          src={images[imageIndex].src}
          width='100%'
          height='auto'
          alt='Photo of Cambridge Certificate'
        />,
      showCloseButton: true,
    })
    return
  }

  const grid = (
    <Grid {...gridProps}>
      {images.map((image, imageIndex) => {
        return (
          <Grid.Item key={imageIndex}>
            <a href='#' onClick={() => openModal(imageIndex)}>
              <Image
                src={image.src}
                width='100%'
                height='auto'
                alt='Photo of Cambridge Certificate'
              />
            </a>
          </Grid.Item>
        )
      })}
    </Grid>
  )

  return (
    <div className='lightbox'>
      {grid}
    </div>
  )
}

export default Lightbox