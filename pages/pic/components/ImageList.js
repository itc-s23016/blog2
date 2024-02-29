import React from 'react'

const ImageList = props => {
  const { images, maxImages } = props

  const displayImages = maxImages ? images.slice(0, maxImages) : images

  const imageElements = displayImages.map(image => (
    <a
      href={image.pageURL}
      key={image.id}
      target='_blank'
      rel='noopener noreferrer'
      className='ui medium image'
    >
      <img src={image.webformatURL} alt={image.tags} />
    </a>
  ))

  return <div>{imageElements}</div>
}

export default ImageList
