// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, isactive, onclick} = props
  const {id, imageUrl, imageAltText} = imgDetails
  const opacity = !isactive ? 'cover' : ''

  const clickclicked = () => {
    onclick(id)
  }

  return (
    <li>
      <button type="button" onClick={clickclicked}>
        <img
          className={`bottom-img ${opacity}`}
          alt={imageAltText}
          src={imageUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
