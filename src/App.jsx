import { useState } from 'react'
import './App.css'
import TournamentBracket from './components/TournamentBracket'
import Card from './components/Card'

function App() {

  const [ activeTab, setActiveTab ] = useState('Tab 1')

  function handleChangeTab(tabName) {
    setActiveTab(tabName)
  }

  function renderTabContent() {
    switch(activeTab) {
      case 'Tab 1':
        return <TournamentBracket fase='finais' />
      case 'Tab 2':
        return <TournamentBracket fase='semifinais' />
      case 'Tab 3':
        return <TournamentBracket fase='quartas' />
      case 'Tab 4':
        return <section className='cards'><Card /></section>
    }
  }

  return (
    <>
      <h1>Cidinhos Destilados</h1>
      
      <section className='knockout_table'>
        
        <div className='tabs'>
          <button
            className={ activeTab === 'Tab 1' ? 'active' : '' }
            onClick={() => handleChangeTab('Tab 1')}
          >
            Melhores Bebidas do Momentos
          </button>
          <button
            className={ activeTab === 'Tab 2' ? 'active' : '' }
            onClick={() => handleChangeTab('Tab 2')}
          >
            Bebidas em Mercado
          </button>
          <button
            className={ activeTab === 'Tab 3' ? 'active' : '' }
            onClick={() => handleChangeTab('Tab 3')}
          >
            Bebidas Populares
          </button>
        </div>

        <div className='tab_content'>
          { renderTabContent() }
        </div>

      </section>

    </>
  )
}

export default App
