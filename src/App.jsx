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
import quizSuccessBackground from '../Background/B.png'
import liwaImage from '../Background/Liwa.png'
import websiteBackground from '../Background/WEBSITE.jpg'
import clickImage from '../Background/Click.png'

const characterName = 'Liwayway'
const TOTAL_LEVELS = 5

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

const storyTwelveText = 'Ang kwento ay patuloy... Sa bawat pahina, may bagong umaabot na kahulugan.'

const storyThirteenText = 'Tulungan si Liwayway na alamin ang kahulugan ng mga nakaasalungguhit na matalinghagang salita. Piliin sa mga pagpipilian ang pinaka-TAMANG sagot batay sa kung paano ginagamit ang matalinghagang salita sa saknog ng tula.'

const storyFourteenQuestion = '1. Ikinulong ako sa kutang malupit: bato, bakal, punlo, balasik ng bantay; lubos na tiwalag sa buong daigdig at inaring kahit buhay man ay patay - Isang Dipang Langit ni Amado V. Hernandez. Ano ang sinisimbolo ng saknong na ito?'

const storyFourteenAnswers = [
  'Ito ay tanda ng pag-ibig at pag-aalaga ng lipunan sa mga mamamayan.',
  'Ito ang pagnanais ng makata na magtago sa mundo upang makamit ang kapayapaan.',
  'Ito ay sagisag ng matinding paghinigpit, at ng takot at kontrol ng awtoridad.',
  'Ito ang kagandahan ng kalikasan sa loob ng bilangguan at pagnanais ng makata na makakalay.'
]

function App() {
  const [screen, setScreen] = useState('menu')
  const [storyPage, setStoryPage] = useState(1)
  const [isMusicOn, setIsMusicOn] = useState(true)
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [unlockedLevels, setUnlockedLevels] = useState(1)
  const [isQuizSolved, setIsQuizSolved] = useState(false)

  const startStory = () => {
    setStoryPage(1)
    setIsQuizSolved(false)
    setScreen('play')
  }

  const goToNextPage = () => {
    setStoryPage((page) => Math.min(page + 1, 14))
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

  const handleQuizAnswer = (answerIndex) => {
    if (answerIndex === 2) {
      setIsQuizSolved(true)
      setStoryPage(15)
    } else {
      setIsQuizSolved(false)
      setStoryPage(16)
    }
  }

  const handleNextLevel = () => {
    setIsQuizSolved(false)
    goHome()
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
          onClick={storyPage < 13 ? goToNextPage : undefined}
          style={
            storyPage >= 2
              ? {
                  backgroundImage: `url(${storyPage >= 14 ? websiteBackground : storyPage >= 13 ? websiteBackground : storyPage >= 12 ? websiteBackground : storyPage >= 11 ? pageFourBackground : storyPage >= 9 ? pageThreeBackground : storyPage >= 6 ? storyFinalBackground : storyPage >= 4 ? storyLastBackground : pageTwoBackground})`,
                }
              : undefined
          }
        >
          {storyPage < 14 && (
            <div className="page-indicator">
              📖 Page {storyPage} / 14
            </div>
          )}
          {renderGlobalControls()}
          {renderInfoModal()}

          {(() => {
            if (storyPage === 1) {
              return (
                <>
                  <h1 className="story-title">Story {storyPage}</h1>

                  <section className="story-center" aria-label="Story character">
                    <img className="story-character" src={liwaywayImage} alt="Liwayway" />
                  </section>

                  <section className="story-box" aria-label="Story text">
                    {storyText}
                  </section>
                </>
              )
            }

            if (storyPage < 1) {
              return null
            }

            if (storyPage === 13) {
              return (
                <section className="story-thirteen-layout" aria-label="Stage confirmation screen" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '100vh',
                  backgroundImage: `url(${websiteBackground})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  padding: '40px 20px'
                }}>
                  <h1 style={{
                    color: '#000',
                    fontSize: '48px',
                    fontWeight: 'bold',
                    marginBottom: '40px',
                    marginTop: '0'
                  }}>STAGE I</h1>

                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    border: '3px solid #000',
                    borderRadius: '8px',
                    padding: '30px',
                    maxWidth: '600px',
                    textAlign: 'center',
                    marginBottom: '30px'
                  }}>
                    <p style={{
                      color: '#000',
                      fontSize: '18px',
                      lineHeight: '1.6',
                      margin: '0 0 30px 0'
                    }}>{storyThirteenText}</p>

                    <button
                      onClick={goToNextPage}
                      style={{
                        backgroundColor: '#2d5016',
                        color: '#fff',
                        border: 'none',
                        padding: '15px 50px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        margin: '0 auto',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#1a3309'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#2d5016'}
                    >
                      Got it!
                      <img src={clickImage} alt="Arrow" style={{ width: '30px', height: '30px', objectFit: 'contain', filter: 'invert(81%) sepia(79%) saturate(1376%) hue-rotate(3deg) brightness(104%) contrast(106%)' }} />
                    </button>
                  </div>
                </section>
              )
            }

            if (storyPage === 12) {
              return (
                <section className="story-fourteen-layout" aria-label="Quiz question" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '100vh',
                  backgroundImage: `url(${websiteBackground})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  padding: '40px 20px'
                }}>
                  <h1 style={{
                    color: '#fff',
                    fontSize: '48px',
                    fontWeight: 'bold',
                    textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
                    marginBottom: '60px',
                    marginTop: '0'
                  }}>STAGE I</h1>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '40px',
                    flexWrap: 'wrap',
                    maxWidth: '900px',
                    position: 'relative',
                    zIndex: '10'
                  }}>
                    {Array.from({ length: TOTAL_LEVELS }).map((_, index) => {
                      const levelNum = index + 1
                      const isUnlocked = levelNum <= unlockedLevels

                      return (
                        <div
                          key={levelNum}
                          onClick={() => isUnlocked && setUnlockedLevels(Math.min(levelNum + 1, TOTAL_LEVELS))}
                          style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: isUnlocked ? 'pointer' : 'not-allowed',
                            backgroundColor: isUnlocked ? '#90EE90' : 'rgba(0,0,0,0.5)',
                            border: isUnlocked ? '4px solid #32CD32' : '4px solid #555',
                            fontSize: '48px',
                            fontWeight: 'bold',
                            color: isUnlocked ? '#000' : '#999',
                            position: 'relative',
                            transition: 'all 0.3s ease',
                            transform: isUnlocked ? 'scale(1)' : 'scale(0.9)',
                            boxShadow: isUnlocked ? '0 4px 8px rgba(50,205,50,0.4)' : 'none'
                          }}
                          aria-label={`Level ${levelNum} ${isUnlocked ? 'unlocked' : 'locked'}`}
                        >
                          {isUnlocked ? levelNum : <span style={{ fontSize: 'clamp(14px, 2vw, 22px)', fontWeight: '800', letterSpacing: '0.04em' }}>LOCKED</span>}
                        </div>
                      )
                    })}
                  </div>
                </section>
              )
            }

            if (storyPage === 15 || isQuizSolved) {
                return (
                  <section className="story-fourteen-layout quiz-success-screen" aria-label="Quiz success screen" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    backgroundImage: `url(${quizSuccessBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '18px 18px 24px'
                  }}>
                    <h1 style={{
                      color: '#111',
                      fontSize: 'clamp(28px, 4vw, 48px)',
                      fontWeight: '800',
                      margin: '4px 0 18px',
                      letterSpacing: '0.02em'
                    }}>STAGE I</h1>

                    <section className="quiz-success-panel" style={{
                      width: 'min(96%, 760px)',
                      backgroundColor: 'rgba(230, 233, 185, 0.22)',
                      border: '2px solid rgba(0, 0, 0, 0.95)',
                      boxSizing: 'border-box',
                      padding: '30px 26px 34px',
                      textAlign: 'center',
                      color: '#111',
                      marginTop: '30px'
                    }}>
                      <p style={{
                        margin: '0 0 26px',
                        fontSize: 'clamp(18px, 2vw, 28px)',
                        fontWeight: '700',
                        lineHeight: '1.28'
                      }}>
                        Mahusay! Natumpak mo ang kahulugan ng matalinghagang salita!
                      </p>

                      <button
                        type="button"
                        onClick={handleNextLevel}
                        className="quiz-next-button"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 18px',
                          borderRadius: '999px',
                          border: '0',
                          backgroundColor: '#134f1d',
                          color: '#fff',
                          fontSize: 'clamp(14px, 1.5vw, 20px)',
                          fontWeight: '700',
                          cursor: 'pointer',
                          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                        }}
                      >
                        Next Level
                        <img src={clickImage} alt="" aria-hidden="true" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                      </button>
                    </section>
                  </section>
                )
            }

            if (storyPage === 16) {
              return (
                <section className="story-fourteen-layout quiz-retry-screen" aria-label="Quiz retry screen" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '100vh',
                  backgroundImage: `url(${storyLastBackground})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  padding: '18px 18px 24px'
                }}>
                  <h1 style={{
                    color: '#111',
                    fontSize: 'clamp(28px, 4vw, 48px)',
                    fontWeight: '800',
                    margin: '4px 0 18px',
                    letterSpacing: '0.02em'
                  }}>STAGE I</h1>

                  <section className="quiz-retry-panel" style={{
                    width: 'min(96%, 760px)',
                    backgroundColor: 'rgba(235, 226, 165, 0.2)',
                    border: '2px solid rgba(0, 0, 0, 0.95)',
                    boxSizing: 'border-box',
                    padding: '32px 26px 34px',
                    textAlign: 'center',
                    color: '#111',
                    marginTop: '28px'
                  }}>
                    <p style={{
                      margin: '0 0 26px',
                      fontSize: 'clamp(18px, 2vw, 28px)',
                      fontWeight: '700',
                      lineHeight: '1.28'
                    }}>
                      Hindi pa yata malinaw sa'yo ang kahulugan ng matalinghagang salita, basahin mo muli ito
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setIsQuizSolved(false)
                        setStoryPage(14)
                      }}
                      className="quiz-tryagain-button"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 18px',
                        borderRadius: '999px',
                        border: '0',
                        backgroundColor: '#d9362b',
                        color: '#fff',
                        fontSize: 'clamp(14px, 1.5vw, 20px)',
                        fontWeight: '800',
                        cursor: 'pointer',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      TRY AGAIN
                    </button>
                  </section>
                </section>
              )
            }

            if (storyPage === 14) {
              return (
                <section className="story-fourteen-layout quiz-question-screen" aria-label="Quiz question" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '100vh',
                  backgroundImage: `url(${websiteBackground})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  padding: '18px 18px 24px'
                }}>
                  <h1 className="quiz-stage-title" style={{
                    color: '#111',
                    fontSize: 'clamp(28px, 4vw, 48px)',
                    fontWeight: '800',
                    margin: '4px 0 18px',
                    letterSpacing: '0.02em'
                  }}>STAGE I</h1>

                  <section className="quiz-question-card" style={{
                    width: 'min(96%, 1760px)',
                    backgroundColor: 'rgba(235, 226, 165, 0.5)',
                    border: '2px solid rgba(0, 0, 0, 0.95)',
                    boxSizing: 'border-box',
                    padding: '28px 30px',
                    textAlign: 'center',
                    color: '#111',
                    fontSize: 'clamp(18px, 2.1vw, 32px)',
                    fontWeight: '700',
                    lineHeight: '1.28',
                    marginBottom: '10px'
                  }}>
                    {storyFourteenQuestion}
                  </section>

                  <div className="quiz-answer-grid" style={{
                    width: 'min(96%, 1760px)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '10px',
                    marginTop: '4px'
                  }}>
                    {storyFourteenAnswers.map((answer, index) => (
                      <button
                        key={answer}
                        type="button"
                        onClick={() => handleQuizAnswer(index)}
                        className="quiz-answer-button"
                        style={{
                          minHeight: '62px',
                          padding: '12px 16px',
                          border: '2px solid rgba(0, 0, 0, 0.9)',
                          backgroundColor: 'rgba(234, 230, 197, 0.22)',
                          color: '#111',
                          fontFamily: 'Poppins, system-ui, sans-serif',
                          fontSize: 'clamp(14px, 1.6vw, 22px)',
                          lineHeight: '1.25',
                          textAlign: 'center',
                          cursor: 'pointer',
                          boxSizing: 'border-box'
                        }}
                      >
                        {answer}
                      </button>
                    ))}
                  </div>
                </section>
              )
            }

            if (storyPage === 11) {
              return (
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
              )
            }

            if (storyPage === 10) {
              return (
                <section className="story-ten-layout" aria-label="Final story scene">
                  <img className="story-ten-character" src={buhawiPostImage} alt="Lolo Buhawi" />

                  <section className="story-ten-box" aria-label="Story text">
                    <img className="story-ten-name-tag" src={buhawiTagImage} alt="Lolo Buhawi" />
                    <p>{storyTenText}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 9) {
              return (
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
              )
            }

            if (storyPage === 8) {
              return (
                <section className="story-eight-layout" aria-label="Story scene content">
                  <img className="story-eight-character" src={buhawiSmartImage} alt="Lolo Buhawi" />

                  <section className="story-eight-box" aria-label="Story text">
                    <img className="story-eight-name-tag" src={buhawiTagImage} alt="Lolo Buhawi" />
                    <p>{storyEightText}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 7) {
              return (
                <section className="story-seven-layout" aria-label="Story scene content">
                  <img className="story-seven-character" src={liwaImage} alt="Liwayway" />

                  <section className="story-seven-box" aria-label="Story text">
                    <img className="story-seven-name-tag" src={storyTwoNameTagImage} alt={characterName} />
                    <p>{storySevenText}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 6) {
              return (
                <section className="story-six-layout" aria-label="Story scene content">
                  <img className="story-six-character" src={buhawiImage} alt="Lolo Buhawi" />

                  <section className="story-six-box" aria-label="Story text">
                    <img className="story-six-name-tag" src={buhawiTagImage} alt="Lolo Buhawi" />
                    <p>{storySixText}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 5) {
              return (
                <section className="story-four-layout" aria-label="Story scene content">
                  <section className="story-five-box" aria-label="Story text">
                    <p>{storyFiveText}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 4) {
              return (
                <section className="story-four-layout" aria-label="Story scene content">
                  <section className="story-four-box" aria-label="Story text">
                    <p>{storyFourIntro}</p>
                    <p className="story-four-quote">{storyFourQuote}</p>
                    <p>{storyFourOutro}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 3) {
              return (
                <section className="story-three-layout" aria-label="Story scene content">
                  <section className="story-three-box" aria-label="Story text">
                    <p>{storyThreeText}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 2) {
              return (
                <section className="story-two-layout" aria-label="Story scene content">
                  <section className="story-two-center" aria-hidden="true">
                    <img className="story-two-character" src={angryLiwaywayImage} alt="" />
                  </section>

                  <section className="story-two-box" aria-label="Story text">
                    <img className="story-two-name-tag" src={storyTwoNameTagImage} alt={characterName} />
                    <p>{storyTwoText}</p>
                  </section>
                </section>
              )
            }

            return null
          })()}
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
  }, [isInfoOpen, isMusicOn, isQuizSolved, screen, storyPage, unlockedLevels])

  return <>{content}</>
}

export default App

