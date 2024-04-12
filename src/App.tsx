import './App.css'

import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  return (
    <div className='home'>
      <h1 className='home_title'>{ t("pages.home.title") }</h1>

      <div className="home_button">
        <button onClick={() => i18n.changeLanguage('en-us')}>Ingles</button>
        <button  onClick={() => i18n.changeLanguage('pt-br')}>Portugues</button>
        <button  onClick={() => i18n.changeLanguage('CN')}>Chines</button>
      </div>
    </div>
  )
}

export default App
