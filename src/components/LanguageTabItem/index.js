import './index.css'

const LanguageTabItem = props => {
  const {languageDetails, changeLanguage, isActive} = props
  const {id, buttonText} = languageDetails

  const activeBtnClassName = isActive
    ? 'language-button active'
    : 'language-button'

  const onClickLanguage = () => {
    changeLanguage(id)
  }

  return (
    <li className="language-item">
      <button
        type="button"
        className={activeBtnClassName}
        onClick={onClickLanguage}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageTabItem
