import { useMemo, useState } from 'react'
import './App.css'
import settingIcon from '../Background/Icon/setting.png'
import audioIcon from '../Background/Icon/audio.png'
import menuIcon from '../Background/Icon/menu.png'
import infoIcon from '../Background/Icon/info.png'
import homeIcon from '../Background/Icon/home.png'
import liwaywayImage from '../Background/Liwayway.png'
import angryLiwaywayImage from '../Background/Angry.png'
import titleImage from '../Background/First.png'
import nameTagImage from '../Background/Name Tag-transparent.png'
import storyTwoNameTagImage from '../Background/nametag2.png'
import pageTwoBackground from '../Background/Background2.jpg'
import pageThreeBackground from '../Background/Background3.png'
import pageFourBackground from '../Background/Background 4.png'
import storyTwoBackground from '../Background/Story2.png'
import storyLastBackground from '../Background/Storyy2.png'
import storyFinalBackground from '../Background/Storryyy2.png'
import buhawiImage from '../Background/Buhawi.png'
import buhawiPostImage from '../Background/Buhawi post.png'
import buhawiiImage from '../Background/Buhawii.png'
import buhawiSmartImage from '../Background/Buyawi smart.png'
import buhawiTagImage from '../Background/Buhawi Tag.png'
import liwaImage from '../Background/Liwa.png'

const characterName = 'Liwayway'

const storyText = (
  <>
    May takdang-aralin si{' '}
    <span className="name-tag" aria-label={characterName}>
      <img src={nameTagImage} alt={characterName} />
    </span>
    , gumawa ng tula tungkol sa kanyang sarili. Tatlong beses siyang nagsimula. Tatlong beses na
    tinanggal ang lahat.
  </>
)

const storyTwoText = 'Anong silbi ng tula? Hindi ko naman ito maintindihan kahit kailan.'
const storyThreeText =
  'Binuhat niya ang bag at nagpunta sa school library—hindi para mag-aral, kundi para lang makalayo sa blangkong papel na parang laging nakatingin sa kanya.'
const storyFourIntro =
  'Tahimik. Amoy lumang papel. At sa isang sulok ng mesa—isang papel na may dalawang linya lamang:'
const storyFourQuote = 'Kung ang salita ay mawawala, saan dadalhin ang damdamin...'
const storyFourOutro = 'Hinawakan niya ito. At sa sandaling iyon—nawalan siya ng malay.'
const storyFiveText = (
  <>
    Nagmulat si Liwayway ng mata sa gitna ng isang napakalaking hardin.
    <br />
    Ang mga puno ay may mga sanga na gawa sa nakatiklop na papel.
    <br />
    Ang hangin ay may dalang mga bulong ng mga salita.
    <br />
    <br />
    Sa harap niya, isang matandang lalaki na may maputing buhok at
    <br />
    matang parang puno ng libu-libong kwento.
  </>
)
const storySixText =
  'Maligayang pagdating, Liwayway. Ako ang Tagapag-alaga ng Aklatang Luntian. Ang hardin ay naghihingalo, limang ugat ng tula ang kailangang ibalik. Ikaw ang pinili.'
const storySevenText =
  'Bakit ako? Hindi nga ako marunong sa tula.'
const storyEightText = 'Kaya nga.'
const storyNineText = {
  introBefore: 'Lumipad si ',
  introMiddle: '. Sumunod si ',
  introAfter: ', wala na siyang ibang pagpipilian.',
  body:
    'Habang lumalakad sila, napansin ni Liwayway ang mga puno. Sa bawat sanga ay may nakasabit na punit-punit na papel, mga tulang walang buhay sapagkat nawalan ito ng kahulugan, mga taludtod na para bang kailangang alamin ang halaga at konteksto.',
}

const storyTenText =
  'Mga tulang hindi naunawaan, at tulad ng iyong sinimulan, hindi rin sila nabuo. Ikaw ang mag-aayos at aalam ng kanilang saysay, isa-isa.'

const storyElevenText = {
  before: 'Lumiwanag ang isang papel at lumapit sa kamay ni ',
  after: '. Nagsimula na.',
}

function App() {
  const [screen, setScreen] = useState('menu')
  const [storyPage, setStoryPage] = useState(1)
  const [isMusicOn, setIsMusicOn] = useState(true)
  const [isInfoOpen, setIsInfoOpen] = useState(false)

  const startStory = () => {
    setStoryPage(1)
    setScreen('play')
  }

  const goToNextPage = () => {
    setStoryPage((page) => Math.min(page + 1, 11))
  }

  const openSettings = () => {
    setIsInfoOpen(false)
    setScreen('settings')
  }

  const goHome = () => {
    setIsInfoOpen(false)
    setScreen('menu')
  }

  const toggleInfo = () => {
    setIsInfoOpen((state) => !state)
  }

  const toggleMusic = () => {
    setIsMusicOn((state) => !state)
  }

  const renderGlobalControls = () => (
    <div className="story-controls" aria-label="Scene controls" onClick={(event) => event.stopPropagation()}>
      <button type="button" aria-label="Settings" onClick={openSettings}>
        <img className="control-icon" src={settingIcon} alt="" aria-hidden="true" />
      </button>
      <button type="button" aria-label={isMusicOn ? 'Turn music off' : 'Turn music on'} onClick={toggleMusic}>
        <img className="control-icon" src={audioIcon} alt="" aria-hidden="true" />
      </button>
      <button type="button" aria-label="Menu" onClick={goHome}>
        <img className="control-icon" src={menuIcon} alt="" aria-hidden="true" />
      </button>
      <button type="button" aria-label="Info" onClick={toggleInfo}>
        <img className="control-icon" src={infoIcon} alt="" aria-hidden="true" />
      </button>
      <button type="button" aria-label="Home" onClick={goHome}>
        <img className="control-icon" src={homeIcon} alt="" aria-hidden="true" />
      </button>
    </div>
  )

  const renderInfoModal = () => {
    if (!isInfoOpen) {
      return null
    }

    return (
      <section className="story-info-modal" aria-label="Story information" onClick={(event) => event.stopPropagation()}>
        <h2>Info</h2>
        {screen === 'play' ? (
          <p>Tap/click the scene to go to the next page.</p>
        ) : (
          <p>Use Play from the menu to start the story.</p>
        )}
        <p>Use Settings to open game options.</p>
        <p>Use Home or Menu to return to the main menu.</p>
        <button type="button" onClick={() => setIsInfoOpen(false)}>
          Close
        </button>
      </section>
    )
  }

  const content = useMemo(() => {
    if (screen === 'play') {
      return (
        <main
          className={`story-screen ${storyPage === 2 ? 'story-screen-two' : ''}`.trim()}
          aria-label="Story scene"
          onClick={storyPage < 11 ? goToNextPage : undefined}
          style={
            storyPage >= 2
              ? {
                  backgroundImage: `url(${storyPage >= 11 ? pageFourBackground : storyPage >= 9 ? pageThreeBackground : storyPage >= 6 ? storyFinalBackground : storyPage >= 5 ? storyLastBackground : storyPage >= 4 ? storyTwoBackground : pageTwoBackground})`,
                }
              : undefined
          }
        >
          {renderGlobalControls()}
          {renderInfoModal()}

          {storyPage >= 2 ? (
            storyPage === 11 ? (
              <section className="story-eleven-layout" aria-label="Last story scene">
                <section className="story-eleven-box" aria-label="Story text">
                  <p>
                    {storyElevenText.before}
                    <span className="story-eleven-name-tag">
                      <img src={nameTagImage} alt="Liwayway" />
                    </span>{storyElevenText.after}
                  </p>
                </section>
              </section>
            ) : storyPage === 10 ? (
              <section className="story-ten-layout" aria-label="Final story scene">
                <img className="story-ten-character" src={buhawiPostImage} alt="Lolo Buhawi" />

                <section className="story-ten-box" aria-label="Story text">
                  <img className="story-ten-name-tag" src={buhawiTagImage} alt="Lolo Buhawi" />
                  <p>{storyTenText}</p>
                </section>
              </section>
            ) : storyPage === 9 ? (
              <section className="story-nine-layout" aria-label="Story scene content">
                <section className="story-nine-box" aria-label="Story text">
                  <p className="story-nine-intro">
                    {storyNineText.introBefore}
                    <span className="story-nine-name-chip story-nine-name-chip-lolo">
                      <img src={buhawiiImage} alt="Lolo Buhawi" />
                    </span>{storyNineText.introMiddle}
                    <span className="story-nine-name-chip story-nine-name-chip-liwayway">
                      <img src={nameTagImage} alt="Liwayway" />
                    </span>{storyNineText.introAfter}
                  </p>
                  <p className="story-nine-body">{storyNineText.body}</p>
                </section>
              </section>
            ) : storyPage === 8 ? (
              <section className="story-eight-layout" aria-label="Story scene content">
                <img className="story-eight-character" src={buhawiSmartImage} alt="Lolo Buhawi" />

                <section className="story-eight-box" aria-label="Story text">
                  <img className="story-eight-name-tag" src={buhawiTagImage} alt="Lolo Buhawi" />
                  <p>{storyEightText}</p>
                </section>
              </section>
            ) : storyPage === 7 ? (
              <section className="story-seven-layout" aria-label="Story scene content">
                <img className="story-seven-character" src={liwaImage} alt="Liwayway" />

                <section className="story-seven-box" aria-label="Story text">
                  <img className="story-seven-name-tag" src={storyTwoNameTagImage} alt={characterName} />
                  <p>{storySevenText}</p>
                </section>
              </section>
            ) : storyPage === 6 ? (
              <section className="story-six-layout" aria-label="Story scene content">
                <img className="story-six-character" src={buhawiImage} alt="Lolo Buhawi" />

                <section className="story-six-box" aria-label="Story text">
                  <img className="story-six-name-tag" src={buhawiTagImage} alt="Lolo Buhawi" />
                  <p>{storySixText}</p>
                </section>
              </section>
            ) : storyPage === 5 ? (
              <section className="story-four-layout" aria-label="Story scene content">
                <section className="story-five-box" aria-label="Story text">
                  <p>{storyFiveText}</p>
                </section>
              </section>
            ) : storyPage === 4 ? (
              <section className="story-four-layout" aria-label="Story scene content">
                <section className="story-four-box" aria-label="Story text">
                  <p>{storyFourIntro}</p>
                  <p className="story-four-quote">"{storyFourQuote}"</p>
                  <p>{storyFourOutro}</p>
                </section>
              </section>
            ) : storyPage === 3 ? (
              <section className="story-three-layout" aria-label="Story scene content">
                <section className="story-three-box" aria-label="Story text">
                  <p>{storyThreeText}</p>
                </section>
              </section>
            ) : (
              <section className="story-two-layout" aria-label="Story scene content">
                <img className="story-two-character" src={angryLiwaywayImage} alt="Liwayway looking frustrated" />

                <section className="story-two-box" aria-label="Story text">
                  <img className="story-two-name-tag" src={storyTwoNameTagImage} alt={characterName} />
                  <p>{storyTwoText}</p>
                </section>
              </section>
            )
          ) : (
            <>
              <h1 className="story-title">Story {storyPage}</h1>

              <section className="story-center" aria-label="Story character">
                <img className="story-character" src={liwaywayImage} alt="Liwayway" />
              </section>

              <section className="story-box" aria-label="Story text">
                {storyText}
              </section>
            </>
          )}
        </main>
      )
    }

    if (screen === 'settings') {
      return (
        <main className="settings-screen" aria-label="Settings screen">
          {renderGlobalControls()}
          {renderInfoModal()}

          <section className="settings-panel">
            <h1>Settings</h1>

            <div className="setting-item">
              <span>Music</span>
              <button type="button" onClick={toggleMusic}>{isMusicOn ? 'On' : 'Off'}</button>
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
        {renderGlobalControls()}
        {renderInfoModal()}

        <section className="menu-panel">
          <img
            className="menu-title-image"
            src={titleImage}
            alt="Aklatang Luntian: Ang Hardin ng mga Taludtod"
          />

          <div className="menu-actions" aria-label="Menu controls">
            <button
              type="button"
              onClick={startStory}
            >
              Play
            </button>
            <button type="button" onClick={() => setScreen('settings')}>
              Settings
            </button>
          </div>
        </section>
      </main>
    )
  }, [isInfoOpen, isMusicOn, screen, storyPage])

  return <>{content}</>
}

export default App

