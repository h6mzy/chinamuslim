'use client'

import { Button, ButtonProps, Grid, GridProps, Image, Modal, Popover, Space } from 'antd-mobile'
import { CloseOutline, InformationCircleOutline, LeftOutline, RightOutline } from 'antd-mobile-icons'
import { useState } from 'react'
import FixedAspectRatio from './fixed-aspect-ratio'

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
  gridProps = { columns: 1, gap: 'var(--adm-gap-sm)' },
  thumbnails = 1
}: {
  images: imageProps[],
  gridProps?: GridProps,
  thumbnails?: number
}) => {

  const len = images.length
  const maxed = thumbnails > len ? len : thumbnails

  const [imageIndex, setImageIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  const hasCaption = images[imageIndex].title
  const hasPrev = len > 1 && imageIndex > 0
  const hasNext = len > 1 && imageIndex < len - 1
  
  const grid = (
    <Grid {...gridProps}>
      {images.slice(0, maxed).map((image, imageIndex) => {
        return (
          <Grid.Item key={imageIndex}>
            <a 
              onClick={() => {
                setImageIndex(imageIndex)
                setVisible(true)
              }}
            >
              <FixedAspectRatio>
                <Image
                  src={image.src}
                  width='100%'
                  height='100%'
                  alt='Photo of Cambridge Certificate'
                  fit='cover'
                />
              </FixedAspectRatio>
            </a>
          </Grid.Item>
        )
      })}
    </Grid>
  )

  const btnProps: ButtonProps = {
    block: true,
    style: { 
      borderRadius: 0, 
      height: 'var(--nav-height)',
      background: 'transparent'
    },
  }

  const content = (
    <>
      <Image
        src={images[imageIndex].src}
        width='100vw'
        height='calc(100vh - var(--nav-height))'
        alt={images[imageIndex].title || ''}
        fit='contain'
      />
      <Space
        className='w-100 actions'
        justify='stretch'
        align='center'
        style={{ '--gap': '0px', borderTop: '1px solid var(--adm-color-border)' }}
      >
        <div>
          <div className='web'>
            {hasCaption || <span>&nbsp;</span>}
          </div>
          <div className='mobile'>
            <Popover
              content={hasCaption}
              trigger='click'
              placement='top-start'
            >
              <Button disabled={!hasCaption} {...btnProps}>
                <InformationCircleOutline fontSize={24} />
              </Button>
            </Popover>
          </div>
        </div>
        <Button disabled={!hasPrev} {...btnProps} onClick={() => setImageIndex(imageIndex - 1)}>
          <LeftOutline fontSize={24} />
        </Button>
        <Button disabled={!hasNext} {...btnProps} onClick={() => setImageIndex(imageIndex + 1)}>
          <RightOutline fontSize={24} />
        </Button>
        <Button {...btnProps} onClick={() => setVisible(false)}>
          <CloseOutline fontSize={24} />
        </Button>
      </Space>
    </>
  )

  return (
    <div className='lightbox'>
      {grid}
      <Modal
        visible={visible}
        content={content}
        className='lightbox-modal'
        maskStyle={{ background: 'var(--adm-color-box)' }}
        closeOnMaskClick
      />
    </div>
  )
}

export default Lightbox