import './index.css'

const LanguageGreetingItem = props => {
  const {languageGreetingDetails} = props
  const {imageUrl, imageAltText} = languageGreetingDetails

  return (
    <li className="language-greeting-item">
      <img src={imageUrl} alt={imageAltText} className="image" />
    </li>
  )
}

export default LanguageGreetingItem
