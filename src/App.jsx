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
import leavesBackground from '../Background/leaves.png'
import mushroomBackground from '../Background/Mushroom.png'
import scaryBackground from '../Background/scary.png'
import bookImage from '../Background/book.png'

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

const storyFifteenQuestion =
  "2. Nang maging ibon ka't sa pakpak na angkin Ay nalilipad na ang ibig liparin, Sa mga tagumpay lubos kang nalasing; Pugad na nilakha'y tinangkang gibain. Ang Pakpak ng Buhay ni Jose G. Katindig. Ano ang sinisimbolo ng saknong na ito?"

const storyFifteenAnswers = [
  'Ito ay literal na paglipad ng ibon sa kalangitan bilang tanda ng kalayaan sa kalikasan.',
  'Ito ay pagnanais ng makata na maglakbay at tuklasin ang mundo sa pamamagitan ng kanyang mga pangarap.',
  'Ito ay pagnanais ng makata na lumipad tungo sa kalayaan at kalimutan ang mga alalahanin sa buhay.',
  'Ito ay babala laban sa pagkalasing sa tagumpay-na kapag ang tao\'y nakamit na ang kalayaan, madalas niyang nakalilimutan ang ugat ng kanyang pag-unlad.',
]

const storySixteenQuestion =
  '3. Ang maghapo\'y tila isang tanikala na kala-kaladkad ng paang madugo ang buong magdamag ay kulambong luksa ng kabaong waring lungga ng bilanggo. - Isang Dipang Langit ni Amado V. Hernandez. Ano-ano ang sinisimbolo ng mga salitang nakasalungguhit?'

const storySixteenAnswers = [
  'Ang “tanikala” ay palamuti sa bilangguan at ang “tanikala” ay metapora ng pagkakaisa ng mga mamamayan.',
  'Ang “tanikala” ang pagnanais ng makata na manatili sa bilangguan upang makapagmuni-muni, at ang “kulambong luksa” ay simbolo ng katahimikan.',
  'Ang “tanikala” ay pagkakagapos sa kalayaan, at ang “kulambong luksa” ay kalungkutan at kamatayan.',
  'Ang “tanikala” ay simbolo ng matibay na ugnayan sa pagitan ng tao at lipunan at ang “kulambong luksa” ang pagdiriwang ng tagumpay matapos ang mahabang paghihirap.',
]

const storySeventeenQuestion =
  '4. Luwalhati ni Rebecca T. Añonuevo. Sa kalsada ng lungsod, naghihintay ang mga kamay na walang hawak, maliliit na bata, malalaking pangarap, at ang tiyan ay nagsasalita ng sariling wika. Anong panlipunang isyu ang inilalahad ng saknong na ito?'

const storySeventeenAnswers = [
  'Ang problema ng polusyon at basura sa mga kalye ng lungsod.',
  'Ang pangangailangan ng mga bata para sa mas maraming paaralan at guro.',
  'Ang kahirapan at kawalan ng pagkain lalo na sa mga batang nagsasalitang gutom sa lansangan.',
  'Ang hindi pagkakaunawaan sa pagitan ng mga manlalaro at ng pamahalaan.',
]

const storyEighteenQuestion =
  '5. Kung Tutuusin ni Virgilio S. Almario (Rio Alma) Kung tutuusin, lahat ng tula ay isang pag-ibig na nangahas lumabas sa dibdib, huminga, at maghanap ng kating na puso. Alin sa mga sumusunod ang pinakamalapit na kahulugan ng saknong na ito?'

const storyEighteenAnswers = [
  'Ang tula ay isang uri ng liham na ipinapadala sa mahal sa buhay.',
  'Ang tula ay ginagawa lamang para sa mga pormal na okasyon tulad ng kasal at kaarawan.',
  'Ang bawat tula ay nagmumula sa damdamin ng pagmamahal at naghahanap ng isa pang pusong makakaramdam nito.',
  'Ang manunulat ay nagsasabing ang pagmamahal ay mas mahalaga kaysa sa tula.',
]

const storyTwentyThreeText = (
  <>
    Ang mga punong dati'y tuyot ay naging luntian. Ang mga punit-punit na papel ay naging buo.
    Ang mga salitang <span className="story-term-highlight">Tanikala</span> na isang simpleng kadena o
    gapos ay nagiging pagkakagapos sa kalayaan at <span className="story-term-highlight">Kulambong Luksa</span>{' '}
    na isang simpleng itim na tela lamang na nagiging simbolo ng kalungkutan at kamatayan.
  </>
)

const storyTwentyFourTextTop = (
  <>
    Ngunit isang pahina ang hindi nakasabit sa puno - lumulutang ito sa hangin. Nang hawakan ni{' '}
    <span className="name-tag" aria-label={characterName}>
      <img src={nameTagImage} alt={characterName} style={{ width: 'clamp(110px, 10vw, 160px)' }} />
    </span>
    , lumitaw ang mga salita:
  </>
)

const storyTwentyFourQuote = 'Kung ang salita ay mawawala, saan dadalhin ang damdamin.'

const storyTwentyFourTextBottom =
  'Ang tulang hindi pa niya natapos. Bago pa siya makaisip ng anuman, nabalot ng makapal na hamog ang buong hardin. Nawala ang liwanag. Nagbago ang mga salita sa paligid, hindi na malinaw ang ibig sabihin ng bawat isa.'

const storyTwentyFiveText =
  'Naibalik mo ang buhay ng tula. Ngunit hindi pa sapat. Sa susunod mong hakbang - ang mga elemento na ang iyong haharapin.'

const storyTwentySixTopText = (
  <>
    Mahigpit na hinawakan ni{' '}
    <span className="name-tag" aria-label={characterName}>
      <img src={nameTagImage} alt={characterName} style={{ width: 'clamp(120px, 11vw, 170px)' }} />
    </span>{' '}
    ang pahina. At lumakad pasulong.
  </>
)

const storyTwentySixBottomText =
  'Sa loob ng hamog, ang lahat ay nakikita ngunit hindi sigurado. Ang mga salita sa mga libro ay nagkakagulo. Ang isang salitang kalayaan ay isang kedap na naging kulungan.'

const storyTwentySevenText = (
  <>
    Ang tula ay may taglay na mga elemento-<strong>simbolo</strong>, <strong>talinhaga</strong>, at{' '}
    <strong>mensahe</strong>ng nakatago sa likod ng bawat linya. Alamin mo kung ano talaga ang
    sinasabi ng mga makata.
  </>
)

function App() {
  const [screen, setScreen] = useState('menu')
  const [storyPage, setStoryPage] = useState(1)
  const [isMusicOn, setIsMusicOn] = useState(true)
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [unlockedLevels, setUnlockedLevels] = useState(1)
  const [isQuizSolved, setIsQuizSolved] = useState(false)
  const [quizStep, setQuizStep] = useState(0)

  const startStory = () => {
    setStoryPage(1)
    setIsQuizSolved(false)
    setQuizStep(0)
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
    const isFirstQuestion = quizStep === 0
    const isSecondQuestion = quizStep === 1
    const isThirdQuestion = quizStep === 2
    const isFourthQuestion = quizStep === 3
    const selectedAnswer = isFirstQuestion
      ? storyFourteenAnswers[answerIndex]
      : isSecondQuestion
        ? storyFifteenAnswers[answerIndex]
        : isThirdQuestion
          ? storySixteenAnswers[answerIndex]
          : isFourthQuestion
            ? storySeventeenAnswers[answerIndex]
            : storyEighteenAnswers[answerIndex]
    const isCorrect = isFirstQuestion
      ? selectedAnswer?.startsWith('Ito ay sagisag ng matinding paghinigpit')
      : isSecondQuestion
        ? selectedAnswer?.startsWith('Ito ay babala laban sa')
        : isThirdQuestion
          ? selectedAnswer?.includes('pagkakagapos sa kalayaan')
          : isFourthQuestion
            ? selectedAnswer?.startsWith('Ang kahirapan at kawalan ng pagkain')
            : selectedAnswer?.startsWith('Ang bawat tula ay nagmumula sa damdamin')

    if (isCorrect) {
      if (isFirstQuestion) {
        setQuizStep(1)
        setStoryPage(15)
      } else if (isSecondQuestion) {
        setQuizStep(2)
        setStoryPage(17)
      } else if (isThirdQuestion) {
        setQuizStep(3)
        setStoryPage(19)
      } else if (isFourthQuestion) {
        setQuizStep(4)
        setStoryPage(21)
      } else {
        setIsQuizSolved(true)
        setStoryPage(22)
      }
    } else {
      setIsQuizSolved(false)
      setStoryPage(16)
    }
  }

  const handleNextLevel = () => {
    setIsQuizSolved(false)
    setQuizStep(0)
    setStoryPage(23)
  }

  const handleStoryScreenClick = () => {
    if (storyPage < 13) {
      goToNextPage()
      return
    }

    if (storyPage === 23) {
      setStoryPage(24)
      return
    }

    if (storyPage === 24) {
      setStoryPage(25)
      return
    }

    if (storyPage === 25) {
      setStoryPage(26)
      return
    }

    if (storyPage === 26) {
      setStoryPage(27)
      return
    }

    if (storyPage === 27) {
      setStoryPage(28)
    }
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
          onClick={handleStoryScreenClick}
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
                      onClick={() => {
                        setQuizStep(0)
                        setStoryPage(14)
                      }}
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

            if (storyPage === 15) {
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
                    {storyFifteenQuestion}
                  </section>

                  <div className="quiz-answer-grid" style={{
                    width: 'min(96%, 1760px)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '10px',
                    marginTop: '4px'
                  }}>
                    {storyFifteenAnswers.map((answer, index) => (
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

            if (storyPage === 17) {
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
                    {storySixteenQuestion}
                  </section>

                  <div className="quiz-answer-grid" style={{
                    width: 'min(96%, 1760px)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '10px',
                    marginTop: '4px'
                  }}>
                    {storySixteenAnswers.map((answer, index) => (
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

            if (storyPage === 19) {
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
                    {storySeventeenQuestion}
                  </section>

                  <div className="quiz-answer-grid" style={{
                    width: 'min(96%, 1760px)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '10px',
                    marginTop: '4px'
                  }}>
                    {storySeventeenAnswers.map((answer, index) => (
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

            if (storyPage === 21) {
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
                    {storyEighteenQuestion}
                  </section>

                  <div className="quiz-answer-grid" style={{
                    width: 'min(96%, 1760px)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '10px',
                    marginTop: '4px'
                  }}>
                    {storyEighteenAnswers.map((answer, index) => (
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

            if (storyPage === 22 || isQuizSolved) {
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
                      margin: '4px 0 10px',
                      letterSpacing: '0.02em'
                    }}>STAGE I COMPLETE</h1>

                    <p style={{
                      margin: '0 0 16px',
                      color: '#111',
                      fontSize: 'clamp(14px, 1.6vw, 22px)',
                      fontWeight: '700',
                      textAlign: 'center',
                      letterSpacing: '0.03em'
                    }}>Nakumpleto mo ang 5/5 tanong.</p>

                    <section className="quiz-success-panel" style={{
                      width: 'min(96%, 760px)',
                      backgroundColor: 'rgba(230, 233, 185, 0.3)',
                      border: '2px solid rgba(0, 0, 0, 0.95)',
                      boxSizing: 'border-box',
                      padding: '30px 26px 34px',
                      textAlign: 'center',
                      color: '#111',
                      marginTop: '10px'
                    }}>
                      <p style={{
                        margin: '0 0 12px',
                        fontSize: 'clamp(18px, 2vw, 28px)',
                        fontWeight: '700',
                        lineHeight: '1.28'
                      }}>
                        Mahusay! Natapos mo ang Stage I.
                      </p>

                      <p style={{
                        margin: '0 0 24px',
                        fontSize: 'clamp(14px, 1.5vw, 20px)',
                        fontWeight: '600',
                        lineHeight: '1.32'
                      }}>
                        Handa ka na para sa susunod na antas ng pag-unawa sa tula.
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
                        Continue
                        <img src={clickImage} alt="" aria-hidden="true" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                      </button>
                    </section>
                  </section>
                )
            }

            if (storyPage === 23) {
              return (
                <section
                  className="story-stage-two-preview"
                  aria-label="Stage transition story"
                  style={{
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
                  }}
                >
                  <div className="page-indicator">📖 Page 23 / 28</div>

                  <section
                    style={{
                      width: 'min(96%, 1680px)',
                      backgroundColor: 'rgba(195, 233, 171, 0.52)',
                      border: '0',
                      borderRadius: '14px',
                      padding: '34px 30px',
                      textAlign: 'center',
                      color: '#111',
                      fontSize: 'clamp(24px, 2.25vw, 40px)',
                      fontWeight: '500',
                      lineHeight: '1.34',
                      backdropFilter: 'blur(1px)'
                    }}
                  >
                    {storyTwentyThreeText}
                  </section>
                </section>
              )
            }

            if (storyPage === 24) {
              return (
                <section
                  className="story-stage-two-preview"
                  aria-label="Story continuation"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    backgroundImage: `url(${leavesBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '18px 18px 24px'
                  }}
                >
                  <div className="page-indicator">📖 Page 24 / 28</div>

                  <section
                    style={{
                      width: 'min(96%, 1680px)',
                      backgroundColor: 'rgba(195, 233, 171, 0.52)',
                      border: '0',
                      borderRadius: '14px',
                      padding: '30px 28px',
                      textAlign: 'center',
                      color: '#111',
                      fontSize: 'clamp(18px, 2.05vw, 36px)',
                      fontWeight: '500',
                      lineHeight: '1.34',
                      backdropFilter: 'blur(1px)'
                    }}
                  >
                    <p style={{ margin: '0 0 10px' }}>{storyTwentyFourTextTop}</p>
                    <p
                      style={{
                        margin: '0 0 12px',
                        color: '#da6c0e',
                        fontFamily: 'Cinzel, serif',
                        fontStyle: 'italic',
                        fontWeight: '700',
                        fontSize: 'clamp(24px, 2.3vw, 44px)',
                        lineHeight: '1.2'
                      }}
                    >
                      {storyTwentyFourQuote}
                    </p>
                    <p style={{ margin: 0 }}>{storyTwentyFourTextBottom}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 25) {
              return (
                <section
                  className="story-stage-two-preview"
                  aria-label="Lolo Buhawi dialogue"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '100vh',
                    backgroundImage: `url(${mushroomBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '16px 16px 22px'
                  }}
                >
                  <div className="page-indicator">📖 Page 25 / 28</div>

                  <img
                    src={buhawiPostImage}
                    alt="Lolo Buhawi"
                    style={{
                      position: 'absolute',
                      right: '2.8%',
                      top: 'auto',
                      bottom: 'calc(2.2% + 10%)',
                      width: 'min(39vw, 460px)',
                      maxHeight: '72vh',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 8px 14px rgba(0, 0, 0, 0.3))',
                      zIndex: 4
                    }}
                  />

                  <section
                    aria-label="Dialogue box"
                    style={{
                      position: 'absolute',
                      left: '2.2%',
                      right: '2.2%',
                      bottom: '2.2%',
                      minHeight: '26%',
                      padding: '72px 20px 20px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(184, 222, 166, 0.92)',
                      color: '#101a12',
                      textAlign: 'center',
                      fontFamily: 'Poppins, system-ui, sans-serif',
                      fontSize: 'clamp(19px, 2vw, 36px)',
                      lineHeight: '1.34',
                      boxShadow: '0 10px 20px rgba(16, 37, 23, 0.16)',
                      zIndex: 2
                    }}
                  >
                    <img
                      src={buhawiTagImage}
                      alt="Lolo Buhawi"
                      style={{
                        position: 'absolute',
                        left: '10px',
                        top: '0',
                        width: 'clamp(170px, 20vw, 280px)',
                        transform: 'translateY(-46%)',
                        filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.28))'
                      }}
                    />
                    <p style={{ margin: 0 }}>{storyTwentyFiveText}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 26) {
              return (
                <section
                  className="story-stage-two-preview"
                  aria-label="Fog narrative"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    backgroundImage: `url(${scaryBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '18px 18px 24px'
                  }}
                >
                  <div className="page-indicator">📖 Page 26 / 28</div>

                  <img
                    src={bookImage}
                    alt="Magic book"
                    style={{
                      width: 'min(36vw, 360px)',
                      maxHeight: '34vh',
                      objectFit: 'contain',
                      marginBottom: '-8px',
                      filter: 'drop-shadow(0 8px 12px rgba(0, 0, 0, 0.28))',
                      zIndex: 3
                    }}
                  />

                  <section
                    aria-label="Story text"
                    style={{
                      width: 'min(96%, 1720px)',
                      backgroundColor: 'rgba(204, 166, 214, 0.68)',
                      border: '0',
                      borderRadius: '14px',
                      padding: '24px 20px',
                      textAlign: 'center',
                      color: '#161019',
                      fontFamily: 'Poppins, system-ui, sans-serif',
                      fontSize: 'clamp(19px, 2.05vw, 36px)',
                      lineHeight: '1.35',
                      backdropFilter: 'blur(1px)',
                      zIndex: 2
                    }}
                  >
                    <p style={{ margin: '0 0 12px' }}>{storyTwentySixTopText}</p>
                    <p style={{ margin: 0 }}>{storyTwentySixBottomText}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 27) {
              return (
                <section
                  className="story-stage-two-preview"
                  aria-label="Lolo Buhawi guidance"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '100vh',
                    backgroundImage: `url(${scaryBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '14px 14px 18px'
                  }}
                >
                  <div className="page-indicator">📖 Page 27 / 28</div>

                  <img
                    src={bookImage}
                    alt="Magic book"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '18%',
                      transform: 'translateX(-50%)',
                      width: 'min(40vw, 430px)',
                      maxHeight: '36vh',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 8px 12px rgba(0, 0, 0, 0.3))',
                      zIndex: 2
                    }}
                  />

                  <img
                    src={buhawiPostImage}
                    alt="Lolo Buhawi"
                    style={{
                      position: 'absolute',
                      right: '3.2%',
                      top: 'auto',
                      bottom: 'calc(3% + 11%)',
                      width: 'min(33vw, 370px)',
                      maxHeight: '68vh',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 8px 14px rgba(0, 0, 0, 0.32))',
                      zIndex: 4
                    }}
                  />

                  <section
                    aria-label="Lolo dialogue"
                    style={{
                      position: 'absolute',
                      left: '2.4%',
                      right: '2.4%',
                      bottom: '3%',
                      minHeight: '24%',
                      padding: '74px 20px 20px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(203, 165, 222, 0.78)',
                      color: '#140f18',
                      textAlign: 'center',
                      fontFamily: 'Poppins, system-ui, sans-serif',
                      fontSize: 'clamp(18px, 2vw, 34px)',
                      lineHeight: '1.34',
                      boxShadow: '0 10px 18px rgba(0, 0, 0, 0.18)',
                      zIndex: 2
                    }}
                  >
                    <img
                      src={buhawiTagImage}
                      alt="Lolo Buhawi"
                      style={{
                        position: 'absolute',
                        left: '10px',
                        top: '0',
                        width: 'clamp(170px, 20vw, 280px)',
                        transform: 'translateY(-46%)',
                        filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.28))'
                      }}
                    />
                    <p style={{ margin: 0 }}>{storyTwentySevenText}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 28) {
              return (
                <section
                  className="story-stage-two-brief"
                  aria-label="Stage II briefing"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    backgroundImage: `linear-gradient(rgba(34, 32, 43, 0.28), rgba(34, 32, 43, 0.28)), url(${scaryBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '18px 18px 24px'
                  }}
                >
                  <div className="page-indicator">📖 Page 28 / 28</div>

                  <h1 style={{
                    margin: '0 0 22px',
                    color: '#111',
                    fontSize: 'clamp(36px, 4.4vw, 64px)',
                    fontWeight: '800',
                    letterSpacing: '0.02em'
                  }}>STAGE II</h1>

                  <section
                    aria-label="Stage II instructions"
                    style={{
                      width: 'min(92%, 920px)',
                      border: '2px solid rgba(0, 0, 0, 0.85)',
                      backgroundColor: 'rgba(225, 231, 235, 0.28)',
                      padding: '32px 24px 28px',
                      textAlign: 'center',
                      color: '#101314',
                      fontFamily: 'Poppins, system-ui, sans-serif',
                      fontSize: 'clamp(16px, 1.6vw, 30px)',
                      lineHeight: '1.38'
                    }}
                  >
                    <p style={{ margin: '0 auto 18px', maxWidth: '760px', fontWeight: '600' }}>
                      Tulungan si Liwayway na alamin ang mga naglahong elemento ng tula. Ilagay sa mga bakanteng
                      kahon kung ano ang tinutukoy na elemento sa ibinigay na tula. Paalala lamang na hindi lahat
                      ng bakanteng kahon ay may kaakibat na sagot.
                    </p>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation()
                        goHome()
                      }}
                      className="quiz-next-button"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        minWidth: '128px',
                        padding: '10px 18px',
                        border: '0',
                        borderRadius: '999px',
                        backgroundColor: '#0f5a1a',
                        color: '#fff',
                        fontSize: 'clamp(16px, 1.3vw, 22px)',
                        fontWeight: '700',
                        cursor: 'pointer',
                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      Got It!
                      <img
                        src={clickImage}
                        alt=""
                        aria-hidden="true"
                        style={{
                          width: '22px',
                          height: '22px',
                          objectFit: 'contain',
                          filter: 'invert(81%) sepia(79%) saturate(1376%) hue-rotate(3deg) brightness(104%) contrast(106%)'
                        }}
                      />
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
                        setStoryPage(
                          quizStep === 4
                            ? 21
                            : quizStep === 3
                              ? 19
                              : quizStep === 2
                                ? 17
                                : quizStep === 1
                                  ? 15
                                  : 14
                        )
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
                    <img className="story-seven-name-tag" src={nameTagImage} alt={characterName} />
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
                    <img className="story-two-name-tag" src={nameTagImage} alt={characterName} />
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

