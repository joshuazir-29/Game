import { useMemo, useState } from 'react'
import './App.css'
import settingIcon from '../Background/Icon/setting.png'
import audioIcon from '../Background/Icon/audio.png'
import menuIcon from '../Background/Icon/menu.png'
import infoIcon from '../Background/Icon/info.png'
import homeIcon from '../Background/Icon/home.png'
import liwaywayImage from '../Background/Liwayway.png'

const storyText =
  'May takdang-aralin si Liwayway, gumawa ng tula tungkol sa kanyang sarili. Tatlong beses siyang nagsimula. Tatlong beses na tinanggal ang lahat.'

function App() {
  const [screen, setScreen] = useState('menu')

  const content = useMemo(() => {
    if (screen === 'play') {
      return (
        <main className="story-screen" aria-label="Story scene">
          <h1 className="story-title">Story 1</h1>

          <div className="story-controls" aria-label="Scene controls">
            <button type="button" aria-label="Settings" onClick={() => setScreen('settings')}>
              <img className="control-icon" src={settingIcon} alt="" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Sound">
              <img className="control-icon" src={audioIcon} alt="" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Menu">
              <img className="control-icon" src={menuIcon} alt="" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Info">
              <img className="control-icon" src={infoIcon} alt="" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Home" onClick={() => setScreen('menu')}>
              <img className="control-icon" src={homeIcon} alt="" aria-hidden="true" />
            </button>
          </div>

          <section className="story-center" aria-label="Character art">
            <img className="story-character" src={liwaywayImage} alt="Liwayway writing in her notebook" />
          </section>

          <section className="story-box" aria-label="Story text">
            {storyText}
          </section>
        </main>
      )
    }

    if (screen === 'settings') {
      return (
        <main className="settings-screen" aria-label="Settings screen">
          <section className="settings-panel">
            <h1>Settings</h1>

            <div className="setting-item">
              <span>Music</span>
              <button type="button">On</button>
            </div>

            <div className="setting-item">
              <span>Sound Effects</span>
              <button type="button">On</button>
            </div>

            <div className="setting-item">
              <span>Text Size</span>
              <button type="button">Medium</button>
            </div>

            <button type="button" className="back-link" onClick={() => setScreen('menu')}>
              Back to Menu
            </button>
          </section>
        </main>
      )
    }

    return (
      <main className="menu-screen" aria-label="Main menu">
        <section className="menu-panel">
          <img
            className="menu-title-image"
            src="../Background/First.png"
            alt="Aklatang Luntian: Ang Hardin ng mga Taludtod"
          />

          <div className="menu-actions" aria-label="Menu controls">
            <button type="button" onClick={() => setScreen('play')}>
              Play
            </button>
            <button type="button" onClick={() => setScreen('settings')}>
              Settings
            </button>
          </div>
        </section>
      </main>
    )
  }, [screen])

  return <>{content}</>
}

export default App
