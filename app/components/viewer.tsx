import { useState } from 'react'
import styles from './gallery.module.sass'
import { Grid, GridProps, Image, ImageViewer } from 'antd-mobile'
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

const Gallery = ({
  images,
  gridProps = { columns: 1, gap: 'var(--adm-gap-sm)' },
  thumbnails = 1,
  thumbnailAspectRatio = 'auto',
  thumbnailFit = 'contain',
}: {
  images: imageProps[],
  gridProps?: GridProps,
  thumbnails?: number
  thumbnailAspectRatio?: 'auto' | [number, number],
  thumbnailFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}) => {

  const len = images.length
  if (len === 0) return

  const [visible, setVisible] = useState(false)
  const [currIndex, setCurrIndex] = useState(0)
  const maxed = thumbnails > len ? len : thumbnails

  const ThumbnailContent = ({ 
    image,
    fit = thumbnailFit,
  }: {
    image: imageProps,
    fit?:  'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  }) => (
    <Image
      src={image.src}
      width='100%'
      height='100%'
      alt={image.title || ''}
      fit={fit}
    />
  )

  const GridItems = () => (
    thumbnailAspectRatio === 'auto'
    ? images.slice(0, maxed).map((image, imageIndex) => (
        <Grid.Item key={imageIndex} className={styles.griditem}>
          <a onClick={() => {
              setCurrIndex(imageIndex)
              setVisible(true)
          }}>
            <ThumbnailContent image={image} />
          </a>
        </Grid.Item>
      ))
    : images.slice(0, maxed).map((image, imageIndex) => (
        <Grid.Item key={imageIndex} className={styles.griditem}>
          <a onClick={() => {
              setCurrIndex(imageIndex)
              setVisible(true)
          }}>
            <FixedAspectRatio ratio={thumbnailAspectRatio}>
              <ThumbnailContent image={image} />
            </FixedAspectRatio>
          </a>
        </Grid.Item>
      ))
  )

  const renderFooter = (image: string, index: number) => {
    return (
      <div className={styles.footer}>
        <div
          className={styles.footerButton}
          onClick={() => {
            console.log('Loading...')
          }}
        >
          Image {index + 1}
        </div>
      </div>
    )
  }

  return (
    <>
      <Grid {...gridProps}>
        <GridItems />
      </Grid>
      <ImageViewer.Multi
        images={images.map(i => i.src)}
        visible={visible}
        defaultIndex={currIndex}
        onClose={() => setVisible(false)}
        onIndexChange={(index) => setCurrIndex(index)}
        renderFooter={renderFooter}
      />
    </>
  )
}

export default Gallery