import {Component} from 'react'

import LanguageTabItem from './components/LanguageTabItem'
import LanguageGreetingItem from './components/LanguageGreetingItem'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  changeLanguage = id => {
    this.setState({activeTabId: id})
  }

  getFilteredList = () => {
    const {activeTabId} = this.state
    const filteredLanguage = languageGreetingsList.filter(
      each => each.id === activeTabId,
    )
    return filteredLanguage
  }

  render() {
    const {activeTabId} = this.state
    const filteredData = this.getFilteredList()
    return (
      <div className="Multilingual-greetings-container">
        <h1 className="heading">Multilingual Greetings</h1>

        <ul className="tabs-list">
          {languageGreetingsList.map(eachLanguage => (
            <LanguageTabItem
              key={eachLanguage.id}
              languageDetails={eachLanguage}
              changeLanguage={this.changeLanguage}
              isActive={activeTabId === eachLanguage.id}
            />
          ))}
        </ul>

        <ul className="language-greetings-list">
          {filteredData.map(eachItem => (
            <LanguageGreetingItem
              key={eachItem.id}
              languageGreetingDetails={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
