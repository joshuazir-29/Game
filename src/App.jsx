import { useEffect, useMemo, useRef, useState } from 'react'
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
import forestBackground from '../Background/forest.png'
import stageThreeCompleteBackground from '../Background/c.png'
import stageFourDialogueBackground from '../Background/a.png'
import stageFourLibraryBackground from '../Background/lib.png'
import hawiCharacterImage from '../Background/hawi.png'
import bangCharacterImage from '../Background/bang.png'
import liwaywayWritingImage from '../Background/z.png'
import liwaywaySmileImage from '../Background/smile.png'
import backgroundMusicTrack from '../Background/Audio/Funny Cartoon Kids Background Music For Videos - Background Music for Videos.mp3'
import { isSupabaseConfigured, supabase } from './supabaseClient'

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

const stageTwoLeftPrompts = [
  'Halikayo sa kulo ko, sa marupok na tahanan na pakiming nangungubli sa malilim sa sagingan.',
  'Kapag aking naririnig sa pagbubukang-liwayway ang awit ng mga ibon ay nanagig sa isipan na ang mundoy hindi isang larangan ng luha\'l lumbay, ikaw\'y walang kabuluhan sa ibon ng aking bukid ni sa rosas ng hardin kong mabulaklak at tahimik.',
  'Halikayo at pumasok sa hamak na aking bahay at masayang inoyo sa malinim na sagingan, ang bandy ko kahit pawid at marupok na kawayan ay may yamang ihahandog ang diwa ng aking bayan.',
]

const stageTwoChoices = [
  {
    id: 'two-lines',
    text: 'Ang saknong ay binubuo ng dalawang taludtod. Tugmaang katinig na may mahinang tunog na may ayos na a-a',
  },
  {
    id: 'pattern-abacd',
    text: 'Ang tula ay may labing-anim na pantig sa limang taludtod may ayos na a-b-a-c-d.',
  },
  {
    id: 'pattern-abbbb',
    text: 'Ang tula ay may labing-anim na pantig sa limang taludtod. May tugmaang katinig na may mahinang tunog at ayos na a-b-b-b-b.',
  },
  {
    id: 'tone-sad',
    text: 'Ang tono ng tula ay malungkot at desperado, na nagpapahayag ng damdamin ng kawalan ng pag-asa sa buhay.',
  },
  {
    id: 'tone-fear',
    text: 'Ang tono ng tula ay puno ng takot at pangamba, na nagpapahayag ng damdamin ng pagkabalisa sa kapaligiran.',
  },
  {
    id: 'tone-positive',
    text: 'Ang tono ng tula ay mapagnilay at positibo, na nagpapahayag ng damdamin ng kasiyahan at kuntento sa payak na pamumuhay.',
  },
  { id: 'first-person', text: 'Ang tulang ito ay nasa unang panauhan' },
  { id: 'second-person', text: 'Ang tulang ito ay nasa ikalawang panauhan' },
  { id: 'third-person', text: 'Ang tulang ito ay nasa ikatlong panauhan' },
  {
    id: 'talinghaga-cultural',
    text: 'Ang saknong ay may talinghagang hindi literal na yaman (pera o ari-arian), kundi tumutukoy sa yaman ng kultura, damdamin, at pagpapahalaga sa pagiging Pilipino.',
  },
  {
    id: 'talinghaga-material',
    text: 'Ang saknong ay may talinghagang tumutukoy sa kayamanang materyal tulad ng pera at ari-arian bilang sukatan ng tagumpay.',
  },
  {
    id: 'talinghaga-power',
    text: 'Ang saknong ay may talinghagang nagpapakita ng yaman bilang kapangyarihan laban sa kapwa.',
  },
]

const stageTwoCorrectBySlot = [
  'two-lines',
  'pattern-abacd',
  'pattern-abbbb',
  'tone-positive',
  'first-person',
  'talinghaga-cultural',
]
const STAGE_TWO_BOTTOM_SLOT_COUNT = 3
const STAGE_TWO_TOTAL_SLOT_COUNT = stageTwoLeftPrompts.length + STAGE_TWO_BOTTOM_SLOT_COUNT

const stageThreeLeftPrompts = [
  'Sa pugad ng isang pag-ibig na wagas, Nilang kang inakay na buto at balat; Ikaw\'y naruga\'t minahal nang ganap, Isip mo\'y nilinang, buto\'y pinaligás, Kaya\'t naging ibong matibay ang pakpak.',
  'Nang maging ibon ka\'t sa pakpak na angkin Ay nalilipad na ang ibig liparin, Sa mga tagumpay lubos kang nalasing; Pugad na nilakha\'y tinangkang gibain, Ang nagpalang kamay ibig pang tukain.',
  'Sa ganyang gawa mo\'y dapat matalas Na di naman laging iyo ang taas; Bagwis, pag nasira\'t nabalis sa lipad, Ikaw at ang madlang papuri\'t palakpak, Sa lupa\'y pasubsob na magsisilipak.',
  'Sa pagkahibang mo sa lakas na angkin, Nagbigay ng lakas, disnua\'t inuring, Nilimot mo\'ng epa na iyang sawikaing: SA PINANGGALINGAN, ANG HINDI LUMINGON SA PAROROONAN\'Y DI MAKARARATING.',
]

const stageThreeChoices = [
  { id: 'pattern-abcad', text: 'Ang saknong na ito ay mayroong tugmaang katinig na may malakas na tunog, na may ayos na a-b-c-a-d.' },
  { id: 'pattern-aabaa', text: 'Ang saknong na ito ay mayroong tugmaang katinig na may mahinang tunog, na may ayos na a-a-b-a-a.' },
  { id: 'bagwis-fall', text: 'Ang saknong na ito ay gumagamit ng pagkabali ng bagwis upang ipakita na ang labis na kapalaluan at panandaliang tagumpay ay maaaring humantong sa biglaang pagbagsak at pagkawala ng dangal.' },
  { id: 'pattern-abbab', text: 'Ang saknong na ito ay mayroong tugmaang katinig na may mahinang tunog, na may ayos na a-b-b-a-b.' },
  { id: 'stanza-five', text: 'Ang bawat saknong ng tula ay binubuo ng limang taludtod.' },
  { id: 'stanza-six', text: 'Ang bawat saknong ng tula ay binubuo ng anim na taludtod.' },
  { id: 'tone-sad-calm', text: 'Ang tono ng tula ay malungkot ngunit payapa, na nagpapahayag ng damdamin ng ganap na pagtanggap sa nakaraan at pagpapahalaga sa katahimikan hatid ng pag-iisa.' },
  { id: 'tone-bright', text: 'Ang tono ng tula ay maliwanag at mapagtiwala, na nagpapahayag ng damdamin ng ganap na kapanatagan sa gitna ng paghihintay at pagpapahalaga sa bawat sinag ng bagong umaga.' },
  { id: 'tone-convincing', text: 'Ang tono ng tula ay mapanghikayat at puno ng pag-asa, na nagpapahayag ng damdamin ng matatag na determinasyon na magpatuloy sa buhay sa kabila ng anumang pagsubok.' },
  { id: 'first-person-stage3', text: 'Ang tulang ito ay nasa unang panauhan.' },
  { id: 'second-person-stage3', text: 'Ang tulang ito ay nasa ikalawang panauhan.' },
  { id: 'third-person-stage3', text: 'Ang tulang ito ay nasa ikatlong panauhan.' },
  { id: 'meter-11', text: 'Ang mga saknong na ito ay mayroong tig-11 na sukat.' },
  { id: 'meter-12', text: 'Ang mga saknong na ito ay mayroong tig-12 na sukat.' },
  { id: 'meter-13', text: 'Ang mga saknong na ito ay mayroong tig-13 na sukat.' },
  { id: 'stanza-four-lines', text: 'Ang bawat saknong ng tula ay binubuo ng apat na taludtod.' },
]

const stageThreeCorrectBySlot = [
  'pattern-abcad',
  'pattern-aabaa',
  'bagwis-fall',
  'pattern-abbab',
  'stanza-five',
  'tone-convincing',
  'second-person-stage3',
]

const STAGE_THREE_BOTTOM_SLOT_COUNT = 3
const STAGE_THREE_TOTAL_SLOT_COUNT = stageThreeLeftPrompts.length + STAGE_THREE_BOTTOM_SLOT_COUNT
const stageFourLeftPrompts = [
  'Isang basong puting sa langis ay tigib Ang ilaw ng aming maliit na altar;',
  'Sa hihip ng hangi\'y dumilat-pumikit Ang ningas na munting basong liwan.',
  'Minsang isang gabi na lubhang pusikit Ilaw naming ito ay biglang namatay',
  'Aywan ko kung isa lamang panaginip Ang tinig na noo\'y aking napakinggan',
  'Napabangon ako\'t noon ay nagkiskis Ng posporo... ilaw\'y aking sinindihan.',
  'Sa sinag ng ilaw na biglang gumuhit Ang mukha ng Kristo\'y aking natanawan -',
  '“Kung ang narinig ko\'y ang banal Mong tinig... Nanalang akong kami\'y iyong mahal!”',
]

const stageFourMiddleSlots = ['', 'SAGOT', 'SAGOT', '', '', 'SAGOT', '']

const stageFourRightChoices = [
  'Ang mga saknong ay gumamit ng Ikalawang Panauhan na Persona',
  'Ang mga saknong ay gumamit ng Unang Panauhan na Persona',
  'Ang mga saknong ay gumamit ng Ikatlong Panauhan na Persona',
  'Ang mga saknong na ito ay may tig-12 na sukat',
  'Ang mga saknong na ito ay may tig-11 na sukat',
  'Ang mga saknong na ito ay may tig-10 na sukat',
  'Ang bawat saknong ng tula ay may quatrain na taludtod',
  'Ang bawat saknong ng tula ay may tercet na taludtod',
  'Ang bawat saknong ng tula ay may couplet na taludtod',
  'Karikitan Ang saknong na ito ay may ayos na a-b. Ito ay nagpapakita ng karikitan at imahen sa masining na paglalarawan ng ningas ng ilawan.',
  'Tono at Damdamin Ang saknong na ito ay may ayos na a-b. Ito ay nagpapahayag ng tono at damdamin na may lungkot at pangamba.',
  '',
  '',
  'Karikitan Ang saknong na ito ay may ayos na a-b. Ito ay nagpapakita ng mahusay na paggamit ng mga salitang naglalarawan sa mukha ni Kristo.',
]
const stageFourLeftSlotRows = [1, 2, 5]
const STAGE_FOUR_BOTTOM_SLOT_COUNT = 3
const STAGE_FOUR_TOTAL_SLOT_COUNT = stageFourLeftSlotRows.length + STAGE_FOUR_BOTTOM_SLOT_COUNT
const stageFourChoices = stageFourRightChoices
  .filter((text) => text && text.trim().length > 0)
  .map((text, index) => ({ id: `stage4-choice-${index + 1}`, text }))
const stageFourTopCorrectBySlot = ['stage4-choice-10', 'stage4-choice-11', 'stage4-choice-12']
const stageFourBottomCorrectIds = ['stage4-choice-2', 'stage4-choice-4', 'stage4-choice-9']
const STAGE_FOUR_TOTAL_CORRECT = stageFourTopCorrectBySlot.length + stageFourBottomCorrectIds.length
const storyThirtyTwoTextTop = 'Pagtapos nito\'y unti-unti nang bumalik ang kaniyang malinaw at maliwanag na paningin, ngunit hindi ibig sabihin nito\'y nakaalis na siya sa pagkakasakop ng hamog, kundi dahil ay natutuhan na niyang tumingin sa mga salitang lagpas sa panlabas na anyo nito.'
const storyThirtyTwoTextBottom = 'Habang palalim nang palalim ang kaniyang pang-unawa at paglalakbay sa loob ng hamog na ito ay muling nahati ang daanan-may paparating pang pagsubok.'
const storyThirtyThreeText = 'Ang huling pagsubok, Liwayway -hindi mo na aayusin ang tula ng iba. Isusulat mo na ang iyong sarili.'
const storyThirtyFourText = 'May paksa ang naghihintay sa iyo sa loob ng limang kahon. Gamitin ang lahat ng natutunan mo — at ang iyong sariling damdamin.'
const storyThirtyFiveText = 'Tulungan si Liwayway na bumuo ng isang tula batay sa paksang kanyang mabubunot mula sa limang sikretong kahon. Ang bawat kahon ay naglalaman ng isang paksa na magiging inspirasyon sa gagawing tula. Basahing mabuti ang paksang mabubunot at gamitin ito bilang pangunahing ideya ng inyong likhang tula.'
const storyFortyThreeIntro = 'Nang maisulat ni Liwayway ang huling linya, ang pahina sa kanyang kamay ay nagkumpleto:'
const storyFortyThreeQuote = 'Kung ang salita ay mawawala, saan dadalhin ang damdamin-sa tula. Doon ito palaging naghihintay.'
const storyFortyThreeOutro = 'Lumiwanag ang buong aklatan. Lumabas si Lolo Buhawi sa hamog.'
const storyFortyFourText = 'Sino ang sumulat ng unang dalawang linya, sa tingin mo?'
const storyFortyFiveText = 'Napatigil si Liwayway. Tumingin sa kaniyang sulat-kamay.'
const storyFortySixText = 'Ikaw — sa gabing sinubukan mong sumuko, ngunit hindi pa rin tumitigil ang iyong kamay.'
const storyFortySevenText = 'Ngumiti si Liwayway. Sa unang pagkakataon mula nang magsimula ang lahat-tunay na ngumiti.'
const storyFortyEightTitle = 'Tagumpay!'
const storyFortyEightMessage = 'Natapos ni Liwayway ang kaniyang tula at muling nabuhay ang hardin ng mga salita. Ang iyong pag-unawa, damdamin, at tinig ang nagdala sa kanya rito.'
const stageThreeBoxTopics = [
  'Pagkakamali at pagkatuto',
  'Pagmamahal sa sariling wika at kultura',
  'Pangarap na propesiyon',
  'Epekto ng social media sa kabataan',
  'Kahalagahan ng edukasyon sa buhay',
]
const stageThreeTopicMaterials = {
  'Pagkakamali at pagkatuto': ['Aral', 'Pagbabago', 'Pag-asa'],
  'Pagmamahal sa sariling wika at kultura': ['Wika', 'Kultura', 'Pagkakakilanlan'],
  'Pangarap na propesiyon': ['Pangarap', 'Sipag', 'Tagumpay'],
  'Epekto ng social media sa kabataan': ['Responsableng paggamit', 'Epekto', 'Pagpapahalaga sa oras'],
  'Kahalagahan ng edukasyon sa buhay': ['Edukasyon', 'Kinabukasan', 'Pag-unlad'],
}
const GAME_PROGRESS_STORAGE_KEY = 'aklatang-luntian-progress-v1'
const POEM_SUBMISSIONS_STORAGE_KEY = 'aklatang-luntian-poem-submissions-v1'
const PLAYER_ANSWERS_STORAGE_KEY = 'aklatang-luntian-player-answers-v1'
const PLAYER_SESSION_STORAGE_KEY = 'aklatang-luntian-player-session-v1'
const ADMIN_PANEL_PIN = '1234'
const CANONICAL_STAGE_LABELS = ['Stage I', 'Stage II', 'Stage III', 'Stage IV']

const toCanonicalStageLabel = (stageValue) => {
  if (typeof stageValue !== 'string') {
    return null
  }

  const trimmed = stageValue.trim()
  if (!trimmed) {
    return null
  }

  const normalized = trimmed.toLowerCase().replace(/\s+/g, '')
  if (normalized === 'stagei' || normalized === 'stage1') {
    return 'Stage I'
  }

  if (normalized === 'stageii' || normalized === 'stage2') {
    return 'Stage II'
  }

  if (normalized === 'stageiii' || normalized === 'stage3') {
    return 'Stage III'
  }

  if (normalized === 'stageiv' || normalized === 'stage4') {
    return 'Stage IV'
  }

  return CANONICAL_STAGE_LABELS.includes(trimmed) ? trimmed : null
}

const getStageLabelFromPage = (page) => {
  if (!Number.isInteger(page)) {
    return null
  }

  if (page >= 14 && page <= 22) {
    return 'Stage I'
  }

  if (page >= 23 && page <= 28) {
    return 'Stage II'
  }

  if (page >= 29 && page <= 30) {
    return 'Stage III'
  }

  if (page >= 31 && page <= 48) {
    return 'Stage IV'
  }

  return null
}

const normalizeStageLabel = ({ stage, page }) => {
  const canonicalFromStage = toCanonicalStageLabel(stage)
  if (canonicalFromStage) {
    return canonicalFromStage
  }

  const stageFromPage = getStageLabelFromPage(page)
  if (stageFromPage) {
    return stageFromPage
  }

  if (typeof stage === 'string' && stage.trim().length > 0) {
    return stage.trim()
  }

  return 'Uncategorized'
}

const createShuffledStageTwoChoiceOrder = () => {
  const ids = stageTwoChoices.map((choice) => choice.id)

  for (let index = ids.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const temp = ids[index]
    ids[index] = ids[randomIndex]
    ids[randomIndex] = temp
  }

  return ids
}

const createShuffledStageThreeChoiceOrder = () => {
  const ids = stageThreeChoices.map((choice) => choice.id)

  for (let index = ids.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const temp = ids[index]
    ids[index] = ids[randomIndex]
    ids[randomIndex] = temp
  }

  return ids
}

const createShuffledStageFourChoiceOrder = () => {
  const ids = stageFourChoices.map((choice) => choice.id)

  for (let index = ids.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const temp = ids[index]
    ids[index] = ids[randomIndex]
    ids[randomIndex] = temp
  }

  return ids
}

function App() {
  const backgroundMusicRef = useRef(null)
  const [playerSessionId] = useState(() => {
    try {
      const existingSessionId = localStorage.getItem(PLAYER_SESSION_STORAGE_KEY)
      if (existingSessionId) {
        return existingSessionId
      }

      const generatedSessionId = `player-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
      localStorage.setItem(PLAYER_SESSION_STORAGE_KEY, generatedSessionId)
      return generatedSessionId
    } catch {
      return `player-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    }
  })
  const [screen, setScreen] = useState('menu')
  const [storyPage, setStoryPage] = useState(1)
  const [isMusicOn, setIsMusicOn] = useState(true)
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [unlockedLevels, setUnlockedLevels] = useState(1)
  const [isQuizSolved, setIsQuizSolved] = useState(false)
  const [quizStep, setQuizStep] = useState(0)
  const [stageTwoSlots, setStageTwoSlots] = useState(Array(STAGE_TWO_TOTAL_SLOT_COUNT).fill(null))
  const [stageTwoChoiceOrder, setStageTwoChoiceOrder] = useState(() => createShuffledStageTwoChoiceOrder())
  const [stageTwoSelectedChoiceId, setStageTwoSelectedChoiceId] = useState(null)
  const [isStageTwoCompleteNoticeOpen, setIsStageTwoCompleteNoticeOpen] = useState(false)
  const [stageThreeSlots, setStageThreeSlots] = useState(Array(STAGE_THREE_TOTAL_SLOT_COUNT).fill(null))
  const [stageThreeChoiceOrder, setStageThreeChoiceOrder] = useState(() => createShuffledStageThreeChoiceOrder())
  const [stageThreeSelectedChoiceId, setStageThreeSelectedChoiceId] = useState(null)
  const [isStageThreeCompleteNoticeOpen, setIsStageThreeCompleteNoticeOpen] = useState(false)
  const [stageFourSlots, setStageFourSlots] = useState(Array(STAGE_FOUR_TOTAL_SLOT_COUNT).fill(null))
  const [stageFourChoiceOrder, setStageFourChoiceOrder] = useState(() => createShuffledStageFourChoiceOrder())
  const [stageFourSelectedChoiceId, setStageFourSelectedChoiceId] = useState(null)
  const [isStageFourCompleteNoticeOpen, setIsStageFourCompleteNoticeOpen] = useState(false)
  const [selectedStageThreeTopic, setSelectedStageThreeTopic] = useState(null)
  const stageThreePlayerNameRef = useRef('')
  const stageThreePoemDraftRef = useRef('')
  const [isStageThreeSubmitEnabled, setIsStageThreeSubmitEnabled] = useState(false)
  const [poemSubmissions, setPoemSubmissions] = useState([])
  const [playerAnswerLogs, setPlayerAnswerLogs] = useState([])
  const [activeAdminSubmissionId, setActiveAdminSubmissionId] = useState(null)
  const [isPoemSubmitPopupOpen, setIsPoemSubmitPopupOpen] = useState(false)
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)
  const [isAdminAuthPromptOpen, setIsAdminAuthPromptOpen] = useState(false)
  const [adminPinInput, setAdminPinInput] = useState('')
  const [adminAuthError, setAdminAuthError] = useState('')
  const [hasLoadedProgress, setHasLoadedProgress] = useState(false)
  const [cloudSyncError, setCloudSyncError] = useState('')

  const updateStageThreeSubmitEnabled = ({ nextPlayerName = null, nextPoemDraft = null } = {}) => {
    const resolvedPlayerName = nextPlayerName ?? stageThreePlayerNameRef.current
    const resolvedPoemDraft = nextPoemDraft ?? stageThreePoemDraftRef.current
    const nextEnabled = Boolean(resolvedPlayerName.trim() && resolvedPoemDraft.trim())

    setIsStageThreeSubmitEnabled((prevEnabled) => (prevEnabled === nextEnabled ? prevEnabled : nextEnabled))
  }

  const startStory = () => {
    setStoryPage(1)
    setIsQuizSolved(false)
    setQuizStep(0)
    setStageTwoSlots(Array(STAGE_TWO_TOTAL_SLOT_COUNT).fill(null))
    setStageTwoChoiceOrder(createShuffledStageTwoChoiceOrder())
    setStageTwoSelectedChoiceId(null)
    setIsStageTwoCompleteNoticeOpen(false)
    setStageThreeSlots(Array(STAGE_THREE_TOTAL_SLOT_COUNT).fill(null))
    setStageThreeChoiceOrder(createShuffledStageThreeChoiceOrder())
    setStageThreeSelectedChoiceId(null)
    setIsStageThreeCompleteNoticeOpen(false)
    setStageFourSlots(Array(STAGE_FOUR_TOTAL_SLOT_COUNT).fill(null))
    setStageFourChoiceOrder(createShuffledStageFourChoiceOrder())
    setStageFourSelectedChoiceId(null)
    setIsStageFourCompleteNoticeOpen(false)
    setSelectedStageThreeTopic(null)
    stageThreePlayerNameRef.current = ''
    stageThreePoemDraftRef.current = ''
    setIsStageThreeSubmitEnabled(false)
    setIsPoemSubmitPopupOpen(false)
    setScreen('play')
  }

  const goToNextPage = () => {
    setStoryPage((page) => Math.min(page + 1, 14))
  }

  const openSettings = () => {
    setIsInfoOpen(false)
    if (screen === 'play') {
      setStoryPage((page) => Math.max(page - 1, 1))
      return
    }
    setScreen('menu')
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

  const openAdminPanel = () => {
    setIsInfoOpen(false)
    if (isAdminAuthenticated) {
      setScreen('admin')
      return
    }

    setAdminPinInput('')
    setAdminAuthError('')
    setIsAdminAuthPromptOpen(true)
  }

  const closeAdminAuthPrompt = () => {
    setAdminPinInput('')
    setAdminAuthError('')
    setIsAdminAuthPromptOpen(false)
  }

  const submitAdminPin = (event) => {
    event.preventDefault()

    if (adminPinInput.trim() === ADMIN_PANEL_PIN) {
      setIsAdminAuthenticated(true)
      setAdminAuthError('')
      setIsAdminAuthPromptOpen(false)
      setScreen('admin')
      return
    }

    setAdminAuthError('Incorrect PIN.')
  }

  const lockAdminPanel = () => {
    setIsAdminAuthenticated(false)
    setAdminPinInput('')
    setAdminAuthError('')
    setIsAdminAuthPromptOpen(false)
    setScreen('menu')
  }

  const logPlayerAnswer = ({
    stage,
    activity,
    answerText,
    isCorrect = null,
    page = null,
    topic = null,
    extra = null,
    id = null,
    submittedAt = null,
  }) => {
    const resolvedStage = normalizeStageLabel({ stage, page })

    const logEntry = {
      id: id || `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
      playerSessionId,
      stage: resolvedStage,
      activity,
      answerText,
      isCorrect,
      page,
      topic,
      extra,
      submittedAt: submittedAt || new Date().toISOString(),
    }

    setPlayerAnswerLogs((prev) => [logEntry, ...prev].slice(0, 1200))

    void (async () => {
      if (!isSupabaseConfigured || !supabase) {
        return
      }

      const { error } = await supabase.from('player_answers').insert({
        id: logEntry.id,
        player_session_id: logEntry.playerSessionId,
        stage: logEntry.stage,
        activity: logEntry.activity,
        answer_text: logEntry.answerText,
        is_correct: logEntry.isCorrect,
        story_page: logEntry.page,
        topic: logEntry.topic,
        extra: logEntry.extra,
        submitted_at: logEntry.submittedAt,
      })

      if (error) {
        console.error('Failed to sync player answer to Supabase:', error.message)
      }
    })()
  }

  const handleStageThreeDone = () => {
    const playerName = stageThreePlayerNameRef.current.trim()
    const poem = stageThreePoemDraftRef.current.trim()
    if (!playerName || !poem) {
      return
    }

    const topic = selectedStageThreeTopic || stageThreeBoxTopics[0]
    const submission = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      playerName,
      poem,
      topic,
      submittedAt: new Date().toISOString(),
    }

    setPoemSubmissions((prev) => [submission, ...prev])
    setActiveAdminSubmissionId(submission.id)
    logPlayerAnswer({
      id: submission.id,
      stage: 'Stage III',
      activity: 'Final poem submission',
      answerText: submission.poem,
      isCorrect: true,
      page: 42,
      topic: submission.topic,
      submittedAt: submission.submittedAt,
      extra: {
        playerName: submission.playerName,
        source: 'stage-five-done',
      },
    })

    void (async () => {
      if (!isSupabaseConfigured || !supabase) {
        return
      }

      let { error } = await supabase.from('poem_submissions').insert({
        id: submission.id,
        player_name: submission.playerName,
        poem: submission.poem,
        topic: submission.topic,
        submitted_at: submission.submittedAt,
      })

      if (error && typeof error.message === 'string') {
        const message = error.message.toLowerCase()

        if (message.includes('player_name')) {
          const fallbackInsert = await supabase.from('poem_submissions').insert({
            id: submission.id,
            poem: submission.poem,
            topic: submission.topic,
            submitted_at: submission.submittedAt,
          })

          error = fallbackInsert.error
        }
      }

      if (error && typeof error.message === 'string') {
        const message = error.message.toLowerCase()

        if (message.includes('topic')) {
          const fallbackInsert = await supabase.from('poem_submissions').insert({
            id: submission.id,
            poem: submission.poem,
            submitted_at: submission.submittedAt,
          })

          error = fallbackInsert.error
        }
      }

      if (error) {
        // Keep local submission even if remote sync fails.
        console.error('Failed to sync submission to Supabase:', error.message)
      }
    })()

    setIsPoemSubmitPopupOpen(true)
  }

  const continueAfterPoemSubmit = () => {
    setIsPoemSubmitPopupOpen(false)
    setStoryPage(43)
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

    logPlayerAnswer({
      stage: 'Stage I',
      activity: `Quiz question ${quizStep + 1}`,
      answerText: selectedAnswer ?? '',
      isCorrect: Boolean(isCorrect),
      page: storyPage,
      extra: {
        answerIndex,
      },
    })

    if (isCorrect) {
      if (isFirstQuestion) {
        setIsQuizSolved(false)
        setQuizStep(1)
        setStoryPage(22)
      } else if (isSecondQuestion) {
        setIsQuizSolved(false)
        setQuizStep(2)
        setStoryPage(22)
      } else if (isThirdQuestion) {
        setIsQuizSolved(false)
        setQuizStep(3)
        setStoryPage(22)
      } else if (isFourthQuestion) {
        setIsQuizSolved(false)
        setQuizStep(4)
        setStoryPage(22)
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

  const handleStageOneSuccessContinue = () => {
    if (isQuizSolved) {
      handleNextLevel()
      return
    }

    setStoryPage(
      quizStep === 4
        ? 21
        : quizStep === 3
          ? 19
          : quizStep === 2
            ? 17
            : 15,
    )
  }

  const openStageThreeTopicSection = (topicIndex) => {
    const safeIndex = Math.min(Math.max(topicIndex, 0), stageThreeBoxTopics.length - 1)
    setSelectedStageThreeTopic(stageThreeBoxTopics[safeIndex])
    setStoryPage(37 + safeIndex)
  }

  const handleStoryScreenClick = () => {
    // Stage III post-instruction pages are fully interactive and should not auto-advance on background clicks.
    if (storyPage >= 35) {
      return
    }

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
      return
    }

    if (storyPage === 32) {
      setStoryPage(33)
      return
    }

    if (storyPage === 33) {
      setStoryPage(34)
      return
    }

    if (storyPage === 34) {
      setStoryPage(35)
    }
  }

  const placeStageTwoChoice = (slotIndex, choiceId) => {
    const isTopSlot = slotIndex < stageTwoLeftPrompts.length
    const isCorrect = isTopSlot
      ? choiceId === stageTwoCorrectBySlot[slotIndex]
      : stageTwoCorrectBySlot.slice(stageTwoLeftPrompts.length).includes(choiceId)

    const selectedChoiceText = stageTwoChoices.find((choice) => choice.id === choiceId)?.text ?? choiceId
    logPlayerAnswer({
      stage: 'Stage II',
      activity: `Placed choice in slot ${slotIndex + 1}`,
      answerText: selectedChoiceText,
      isCorrect,
      page: 28,
      extra: {
        choiceId,
        slotIndex,
      },
    })

    setStageTwoSlots((prev) => {
      const next = prev.map((id) => (id === choiceId ? null : id))
      next[slotIndex] = choiceId
      return next
    })
    setStageTwoSelectedChoiceId(null)
  }

  const clearStageTwoSlot = (slotIndex) => {
    setStageTwoSlots((prev) => {
      const next = [...prev]
      next[slotIndex] = null
      return next
    })
  }

  const placeStageThreeChoice = (slotIndex, choiceId) => {
    const isTopSlot = slotIndex < stageThreeLeftPrompts.length
    const isCorrect = isTopSlot
      ? choiceId === stageThreeCorrectBySlot[slotIndex]
      : stageThreeCorrectBySlot.slice(stageThreeLeftPrompts.length).includes(choiceId)

    const selectedChoiceText = stageThreeChoices.find((choice) => choice.id === choiceId)?.text ?? choiceId
    logPlayerAnswer({
      stage: 'Stage III',
      activity: `Placed choice in slot ${slotIndex + 1}`,
      answerText: selectedChoiceText,
      isCorrect,
      page: 29,
      extra: {
        choiceId,
        slotIndex,
      },
    })

    setStageThreeSlots((prev) => {
      const next = prev.map((id) => (id === choiceId ? null : id))
      next[slotIndex] = choiceId
      return next
    })
    setStageThreeSelectedChoiceId(null)
  }

  const clearStageThreeSlot = (slotIndex) => {
    setStageThreeSlots((prev) => {
      const next = [...prev]
      next[slotIndex] = null
      return next
    })
  }

  const placeStageFourChoice = (slotIndex, choiceId) => {
    const isTopSlot = slotIndex < stageFourLeftSlotRows.length
    const isCorrect = isTopSlot
      ? choiceId === stageFourTopCorrectBySlot[slotIndex]
      : stageFourBottomCorrectIds.includes(choiceId)

    const selectedChoiceText = stageFourChoices.find((choice) => choice.id === choiceId)?.text ?? choiceId
    logPlayerAnswer({
      stage: 'Stage IV',
      activity: `Placed choice in slot ${slotIndex + 1}`,
      answerText: selectedChoiceText,
      isCorrect,
      page: 31,
      extra: {
        choiceId,
        slotIndex,
      },
    })

    setStageFourSlots((prev) => {
      const next = prev.map((id) => (id === choiceId ? null : id))
      next[slotIndex] = choiceId
      return next
    })
    setStageFourSelectedChoiceId(null)
  }

  const clearStageFourSlot = (slotIndex) => {
    setStageFourSlots((prev) => {
      const next = [...prev]
      next[slotIndex] = null
      return next
    })
  }

  const stageTwoOrderLookup = new Map(stageTwoChoiceOrder.map((id, index) => [id, index]))
  const stageTwoAvailableChoices = stageTwoChoices
    .filter((choice) => !stageTwoSlots.includes(choice.id))
    .sort(
      (leftChoice, rightChoice) =>
        (stageTwoOrderLookup.get(leftChoice.id) ?? Number.MAX_SAFE_INTEGER) -
        (stageTwoOrderLookup.get(rightChoice.id) ?? Number.MAX_SAFE_INTEGER),
    )
  const stageTwoTopSlotCount = stageTwoLeftPrompts.length
  const stageTwoTopPlacedCorrect = stageTwoSlots.slice(0, stageTwoTopSlotCount).reduce(
    (count, choiceId, index) => (choiceId && choiceId === stageTwoCorrectBySlot[index] ? count + 1 : count),
    0,
  )
  const stageTwoBottomCorrectIds = stageTwoCorrectBySlot.slice(stageTwoTopSlotCount)
  const stageTwoBottomPlacedCorrect = stageTwoSlots
    .slice(stageTwoTopSlotCount)
    .filter(Boolean)
    .reduce((count, choiceId) => (stageTwoBottomCorrectIds.includes(choiceId) ? count + 1 : count), 0)
  const stageTwoPlacedCorrect = stageTwoTopPlacedCorrect + stageTwoBottomPlacedCorrect
  const isStageTwoSolved = stageTwoPlacedCorrect === stageTwoCorrectBySlot.length
  const stageThreeOrderLookup = new Map(stageThreeChoiceOrder.map((id, index) => [id, index]))
  const stageThreeAvailableChoices = stageThreeChoices
    .filter((choice) => !stageThreeSlots.includes(choice.id))
    .sort(
      (leftChoice, rightChoice) =>
        (stageThreeOrderLookup.get(leftChoice.id) ?? Number.MAX_SAFE_INTEGER) -
        (stageThreeOrderLookup.get(rightChoice.id) ?? Number.MAX_SAFE_INTEGER),
    )
  const stageThreeTopSlotCount = stageThreeLeftPrompts.length
  const stageThreeTopPlacedCorrect = stageThreeSlots.slice(0, stageThreeTopSlotCount).reduce(
    (count, choiceId, index) => (choiceId && choiceId === stageThreeCorrectBySlot[index] ? count + 1 : count),
    0,
  )
  const stageThreeBottomCorrectIds = stageThreeCorrectBySlot.slice(stageThreeTopSlotCount)
  const stageThreeBottomPlacedCorrect = stageThreeSlots
    .slice(stageThreeTopSlotCount)
    .filter(Boolean)
    .reduce((count, choiceId) => (stageThreeBottomCorrectIds.includes(choiceId) ? count + 1 : count), 0)
  const stageThreePlacedCorrect = stageThreeTopPlacedCorrect + stageThreeBottomPlacedCorrect
  const isStageThreeSolved = stageThreePlacedCorrect === stageThreeCorrectBySlot.length
  const stageFourOrderLookup = new Map(stageFourChoiceOrder.map((id, index) => [id, index]))
  const stageFourAvailableChoices = stageFourChoices
    .filter((choice) => !stageFourSlots.includes(choice.id))
    .sort(
      (leftChoice, rightChoice) =>
        (stageFourOrderLookup.get(leftChoice.id) ?? Number.MAX_SAFE_INTEGER) -
        (stageFourOrderLookup.get(rightChoice.id) ?? Number.MAX_SAFE_INTEGER),
    )
  const stageFourTopSlotCount = stageFourLeftSlotRows.length
  const stageFourTopPlacedCorrect = stageFourSlots.slice(0, stageFourTopSlotCount).reduce(
    (count, choiceId, index) => (choiceId && choiceId === stageFourTopCorrectBySlot[index] ? count + 1 : count),
    0,
  )
  const stageFourBottomPlacedCorrect = stageFourSlots
    .slice(stageFourTopSlotCount)
    .filter(Boolean)
    .reduce((count, choiceId) => (stageFourBottomCorrectIds.includes(choiceId) ? count + 1 : count), 0)
  const stageFourPlacedCorrect = stageFourTopPlacedCorrect + stageFourBottomPlacedCorrect
  const isStageFourSolved = stageFourPlacedCorrect === STAGE_FOUR_TOTAL_CORRECT

  const proceedToStageThree = () => {
    setStageTwoSelectedChoiceId(null)
    setIsStageTwoCompleteNoticeOpen(false)
    setStoryPage(29)
  }

  const proceedToStageCompletePage = () => {
    setStageThreeSelectedChoiceId(null)
    setIsStageThreeCompleteNoticeOpen(false)
    setStoryPage(30)
  }

  const proceedToStageFive = () => {
    setStageFourSelectedChoiceId(null)
    setIsStageFourCompleteNoticeOpen(false)
    setStoryPage(32)
  }

  useEffect(() => {
    const music = new Audio(backgroundMusicTrack)
    music.loop = true
    music.volume = 0.35
    music.preload = 'auto'
    backgroundMusicRef.current = music

    return () => {
      music.pause()
      music.currentTime = 0
      backgroundMusicRef.current = null
    }
  }, [])

  useEffect(() => {
    const music = backgroundMusicRef.current
    if (!music) {
      return
    }

    if (isMusicOn) {
      // Browsers may block autoplay until a user gesture; ignore that expected rejection.
      music.play().catch(() => {})
      return
    }

    music.pause()
  }, [isMusicOn])

  useEffect(() => {
    const tryStartMusic = () => {
      const music = backgroundMusicRef.current
      if (!music || !isMusicOn) {
        return
      }

      music.play().catch(() => {})
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        tryStartMusic()
      }
    }

    window.addEventListener('pointerdown', tryStartMusic)
    window.addEventListener('keydown', tryStartMusic)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('pointerdown', tryStartMusic)
      window.removeEventListener('keydown', tryStartMusic)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isMusicOn])

  useEffect(() => {
    if (screen === 'admin' && !isAdminAuthenticated) {
      setScreen('menu')
    }
  }, [isAdminAuthenticated, screen])

  useEffect(() => {
    if (poemSubmissions.length === 0) {
      if (activeAdminSubmissionId !== null) {
        setActiveAdminSubmissionId(null)
      }
      return
    }

    if (!activeAdminSubmissionId || !poemSubmissions.some((item) => item.id === activeAdminSubmissionId)) {
      setActiveAdminSubmissionId(poemSubmissions[0].id)
    }
  }, [activeAdminSubmissionId, poemSubmissions])

  useEffect(() => {
    if (screen === 'play' && storyPage === 28 && isStageTwoSolved) {
      if (isStageTwoCompleteNoticeOpen) {
        return
      }

      setIsStageTwoCompleteNoticeOpen(true)
      const transitionTimer = setTimeout(() => {
        proceedToStageThree()
      }, 1600)

      return () => clearTimeout(transitionTimer)
    }

    if (!isStageTwoSolved && isStageTwoCompleteNoticeOpen) {
      setIsStageTwoCompleteNoticeOpen(false)
    }
  }, [isStageTwoCompleteNoticeOpen, isStageTwoSolved, screen, storyPage])

  useEffect(() => {
    if (screen === 'play' && storyPage === 29 && isStageThreeSolved) {
      if (isStageThreeCompleteNoticeOpen) {
        return
      }

      setIsStageThreeCompleteNoticeOpen(true)
      const transitionTimer = setTimeout(() => {
        proceedToStageCompletePage()
      }, 1600)

      return () => clearTimeout(transitionTimer)
    }

    if (!isStageThreeSolved && isStageThreeCompleteNoticeOpen) {
      setIsStageThreeCompleteNoticeOpen(false)
    }
  }, [isStageThreeCompleteNoticeOpen, isStageThreeSolved, screen, storyPage])

  useEffect(() => {
    if (screen === 'play' && storyPage === 31 && isStageFourSolved) {
      if (!isStageFourCompleteNoticeOpen) {
        setIsStageFourCompleteNoticeOpen(true)
      }
      return
    }

    if (!isStageFourSolved && isStageFourCompleteNoticeOpen) {
      setIsStageFourCompleteNoticeOpen(false)
    }
  }, [isStageFourCompleteNoticeOpen, isStageFourSolved, screen, storyPage])

  useEffect(() => {
    try {
      const rawState = localStorage.getItem(GAME_PROGRESS_STORAGE_KEY)
      if (!rawState) {
        setHasLoadedProgress(true)
        return
      }

      const savedState = JSON.parse(rawState)
      if (savedState && typeof savedState === 'object') {
        if (savedState.screen === 'play' || savedState.screen === 'menu' || savedState.screen === 'admin') {
          setScreen(savedState.screen)
        }

        if (Number.isInteger(savedState.storyPage)) {
          setStoryPage(Math.min(Math.max(savedState.storyPage, 1), 33))
        }

        if (typeof savedState.isMusicOn === 'boolean') {
          setIsMusicOn(savedState.isMusicOn)
        }

        if (typeof savedState.isInfoOpen === 'boolean') {
          setIsInfoOpen(savedState.isInfoOpen)
        }

        if (Number.isInteger(savedState.unlockedLevels)) {
          setUnlockedLevels(Math.min(Math.max(savedState.unlockedLevels, 1), TOTAL_LEVELS))
        }

        if (typeof savedState.isQuizSolved === 'boolean') {
          setIsQuizSolved(savedState.isQuizSolved)
        }

        if (Number.isInteger(savedState.quizStep)) {
          setQuizStep(Math.min(Math.max(savedState.quizStep, 0), 4))
        }

        if (Array.isArray(savedState.stageTwoSlots) && savedState.stageTwoSlots.length === STAGE_TWO_TOTAL_SLOT_COUNT) {
          setStageTwoSlots(savedState.stageTwoSlots.map((item) => (typeof item === 'string' ? item : null)))
        }

        const validStageTwoChoiceIds = new Set(stageTwoChoices.map((choice) => choice.id))
        if (
          Array.isArray(savedState.stageTwoChoiceOrder) &&
          savedState.stageTwoChoiceOrder.length === stageTwoChoices.length &&
          savedState.stageTwoChoiceOrder.every((id) => typeof id === 'string' && validStageTwoChoiceIds.has(id))
        ) {
          setStageTwoChoiceOrder(savedState.stageTwoChoiceOrder)
        }

        if (Array.isArray(savedState.stageThreeSlots) && savedState.stageThreeSlots.length === STAGE_THREE_TOTAL_SLOT_COUNT) {
          setStageThreeSlots(savedState.stageThreeSlots.map((item) => (typeof item === 'string' ? item : null)))
        }

        const validStageThreeChoiceIds = new Set(stageThreeChoices.map((choice) => choice.id))
        if (
          Array.isArray(savedState.stageThreeChoiceOrder) &&
          savedState.stageThreeChoiceOrder.length === stageThreeChoices.length &&
          savedState.stageThreeChoiceOrder.every((id) => typeof id === 'string' && validStageThreeChoiceIds.has(id))
        ) {
          setStageThreeChoiceOrder(savedState.stageThreeChoiceOrder)
        }

        if (Array.isArray(savedState.stageFourSlots) && savedState.stageFourSlots.length === STAGE_FOUR_TOTAL_SLOT_COUNT) {
          setStageFourSlots(savedState.stageFourSlots.map((item) => (typeof item === 'string' ? item : null)))
        }

        if (Array.isArray(savedState.poemSubmissions)) {
          setPoemSubmissions(
            savedState.poemSubmissions
              .filter(
                (item) =>
                  item &&
                  typeof item === 'object' &&
                  typeof item.id === 'string' &&
                  typeof item.poem === 'string' &&
                  typeof item.topic === 'string' &&
                  typeof item.submittedAt === 'string',
              )
              .slice(0, 300),
          )
        }

        const validStageFourChoiceIds = new Set(stageFourChoices.map((choice) => choice.id))
        if (
          Array.isArray(savedState.stageFourChoiceOrder) &&
          savedState.stageFourChoiceOrder.length === stageFourChoices.length &&
          savedState.stageFourChoiceOrder.every((id) => typeof id === 'string' && validStageFourChoiceIds.has(id))
        ) {
          setStageFourChoiceOrder(savedState.stageFourChoiceOrder)
        }
      }
    } catch {
      // Ignore corrupt local state and continue with defaults.
    } finally {
      setHasLoadedProgress(true)
    }
  }, [])

  useEffect(() => {
    if (!hasLoadedProgress) {
      return
    }

    const progressState = {
      screen,
      storyPage,
      isMusicOn,
      isInfoOpen,
      unlockedLevels,
      isQuizSolved,
      quizStep,
      stageTwoSlots,
      stageTwoChoiceOrder,
      stageThreeSlots,
      stageThreeChoiceOrder,
      stageFourSlots,
      stageFourChoiceOrder,
      poemSubmissions,
    }

    try {
      localStorage.setItem(GAME_PROGRESS_STORAGE_KEY, JSON.stringify(progressState))
    } catch {
      // Ignore storage write failures.
    }
  }, [
    hasLoadedProgress,
    isInfoOpen,
    isMusicOn,
    isQuizSolved,
    quizStep,
    screen,
    stageThreeChoiceOrder,
    stageThreeSlots,
    stageFourChoiceOrder,
    stageTwoChoiceOrder,
    stageTwoSlots,
    storyPage,
    unlockedLevels,
    poemSubmissions,
  ])

  useEffect(() => {
    try {
      localStorage.setItem(POEM_SUBMISSIONS_STORAGE_KEY, JSON.stringify(poemSubmissions))
    } catch {
      // Ignore storage write failures.
    }
  }, [poemSubmissions])

  useEffect(() => {
    try {
      localStorage.setItem(PLAYER_ANSWERS_STORAGE_KEY, JSON.stringify(playerAnswerLogs.slice(0, 1200)))
    } catch {
      // Ignore storage write failures.
    }
  }, [playerAnswerLogs])

  useEffect(() => {
    try {
      const rawSubmissions = localStorage.getItem(POEM_SUBMISSIONS_STORAGE_KEY)
      if (!rawSubmissions) {
        return
      }

      const parsed = JSON.parse(rawSubmissions)
      if (Array.isArray(parsed)) {
        setPoemSubmissions(
          parsed
            .filter(
              (item) =>
                item &&
                typeof item === 'object' &&
                typeof item.id === 'string' &&
                typeof item.poem === 'string' &&
                (typeof item.playerName === 'string' || typeof item.playerName === 'undefined') &&
                typeof item.topic === 'string' &&
                typeof item.submittedAt === 'string',
            )
            .map((item) => ({
              ...item,
              playerName: typeof item.playerName === 'string' ? item.playerName : 'Unknown player',
            }))
            .slice(0, 300),
        )
      }
    } catch {
      // Ignore corrupt submission storage.
    }
  }, [])

  useEffect(() => {
    try {
      const rawAnswers = localStorage.getItem(PLAYER_ANSWERS_STORAGE_KEY)
      if (!rawAnswers) {
        return
      }

      const parsed = JSON.parse(rawAnswers)
      if (Array.isArray(parsed)) {
        setPlayerAnswerLogs(
          parsed
            .filter(
              (item) =>
                item &&
                typeof item === 'object' &&
                typeof item.id === 'string' &&
                typeof item.playerSessionId === 'string' &&
                typeof item.stage === 'string' &&
                typeof item.activity === 'string' &&
                typeof item.answerText === 'string' &&
                typeof item.submittedAt === 'string',
            )
            .slice(0, 1200),
        )
      }
    } catch {
      // Ignore corrupt local answer logs.
    }
  }, [])

  useEffect(() => {
    let isCancelled = false
    let pollIntervalId = null
    let throttledReloadTimeoutId = null

    const mergeById = (localRows, cloudRows, limit) => {
      const merged = [...cloudRows]
      const existingIds = new Set(cloudRows.map((row) => row.id))

      for (const localRow of localRows) {
        if (!existingIds.has(localRow.id)) {
          merged.push(localRow)
        }
      }

      return merged.slice(0, limit)
    }

    const mapSupabasePoemSubmissions = (rows) =>
      rows
        .filter(
          (item) =>
            item &&
            typeof item.id === 'string' &&
            (typeof item.player_name === 'string' || typeof item.player_name === 'undefined') &&
            typeof item.poem === 'string' &&
            (typeof item.topic === 'string' || typeof item.topic === 'undefined') &&
            typeof item.submitted_at === 'string',
        )
        .map((item) => ({
          id: item.id,
          playerName: typeof item.player_name === 'string' && item.player_name.trim() ? item.player_name : 'Unknown player',
          poem: item.poem,
          topic: typeof item.topic === 'string' && item.topic.trim() ? item.topic : 'No topic',
          submittedAt: item.submitted_at,
        }))

    const mapSupabasePlayerAnswers = (rows) =>
      rows
        .filter(
          (item) =>
            item &&
            typeof item.id === 'string' &&
            typeof item.player_session_id === 'string' &&
            typeof item.activity === 'string' &&
            typeof item.answer_text === 'string' &&
            typeof item.submitted_at === 'string',
        )
        .map((item) => ({
          id: item.id,
          playerSessionId: item.player_session_id,
          stage: normalizeStageLabel({
            stage: typeof item.stage === 'string' ? item.stage : null,
            page: Number.isInteger(item.story_page) ? item.story_page : null,
          }),
          activity: item.activity,
          answerText: item.answer_text,
          isCorrect: typeof item.is_correct === 'boolean' ? item.is_correct : null,
          page: Number.isInteger(item.story_page) ? item.story_page : null,
          topic: typeof item.topic === 'string' ? item.topic : null,
          extra: item.extra && typeof item.extra === 'object' ? item.extra : null,
          submittedAt: item.submitted_at,
        }))

    const loadPoemSubmissionsFromSupabase = async () => {
      const poemSelectVariants = [
        'id, player_name, poem, topic, submitted_at',
        'id, poem, topic, submitted_at',
        'id, player_name, poem, submitted_at',
        'id, poem, submitted_at',
      ]

      let poemResult = null

      for (const selectClause of poemSelectVariants) {
        poemResult = await supabase
          .from('poem_submissions')
          .select(selectClause)
          .order('submitted_at', { ascending: false })
          .limit(300)

        if (!poemResult.error) {
          break
        }

        const message =
          poemResult.error && typeof poemResult.error.message === 'string'
            ? poemResult.error.message.toLowerCase()
            : ''
        const isMissingOptionalColumn = message.includes('player_name') || message.includes('topic')

        if (!isMissingOptionalColumn) {
          break
        }
      }

      if (isCancelled) {
        return
      }

      if (poemResult.error) {
        setCloudSyncError(`Poem sync error: ${poemResult.error.message}`)
        console.error('Failed to load submissions from Supabase:', poemResult.error.message)
        return
      }

      if (Array.isArray(poemResult.data)) {
        setCloudSyncError('')
        const mappedCloudRows = mapSupabasePoemSubmissions(poemResult.data)
        setPoemSubmissions((prev) => mergeById(prev, mappedCloudRows, 300))
      }
    }

    const loadPlayerAnswersFromSupabase = async () => {
      const answerResult = await supabase
        .from('player_answers')
        .select('id, player_session_id, stage, activity, answer_text, is_correct, story_page, topic, extra, submitted_at')
        .order('submitted_at', { ascending: false })
        .limit(1200)

      if (isCancelled) {
        return
      }

      if (answerResult.error) {
        setCloudSyncError(`Answer sync error: ${answerResult.error.message}`)
        console.error('Failed to load player answers from Supabase:', answerResult.error.message)
        return
      }

      if (Array.isArray(answerResult.data)) {
        setCloudSyncError('')
        const mappedCloudRows = mapSupabasePlayerAnswers(answerResult.data)
        setPlayerAnswerLogs((prev) => mergeById(prev, mappedCloudRows, 1200))
      }
    }

    const loadSupabaseAdminData = async () => {
      if (!isSupabaseConfigured || !supabase) {
        setCloudSyncError('Supabase is not configured. Create a .env file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.')
        return
      }

      const [poemLoad, answerLoad] = await Promise.allSettled([
        loadPoemSubmissionsFromSupabase(),
        loadPlayerAnswersFromSupabase(),
      ])

      if (poemLoad.status === 'rejected') {
        setCloudSyncError('Unexpected poem sync error. Check browser console for details.')
        console.error('Unexpected error while loading submissions from Supabase:', poemLoad.reason)
      }

      if (answerLoad.status === 'rejected') {
        setCloudSyncError('Unexpected answer sync error. Check browser console for details.')
        console.error('Unexpected error while loading player answers from Supabase:', answerLoad.reason)
      }
    }

    if (!isSupabaseConfigured || !supabase) {
      setCloudSyncError('Supabase is not configured. Create a .env file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.')
      return () => {
        isCancelled = true
      }
    }

    const reloadFromCloud = () => {
      if (isCancelled) {
        return
      }

      void loadSupabaseAdminData()
    }

    const reloadFromCloudThrottled = () => {
      if (throttledReloadTimeoutId) {
        return
      }

      throttledReloadTimeoutId = setTimeout(() => {
        throttledReloadTimeoutId = null
        reloadFromCloud()
      }, 250)
    }

    const handleVisibilityOrFocus = () => {
      if (document.visibilityState === 'visible') {
        reloadFromCloud()
      }
    }

    const handleStorageSync = (event) => {
      if (!event || event.storageArea !== localStorage || typeof event.key !== 'string') {
        return
      }

      if (event.key === POEM_SUBMISSIONS_STORAGE_KEY || event.key === PLAYER_ANSWERS_STORAGE_KEY) {
        reloadFromCloudThrottled()
      }
    }

    void loadSupabaseAdminData()

    const realtimeChannel = supabase
      .channel(`admin-live-${Date.now()}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'player_answers' },
        () => {
          reloadFromCloudThrottled()
        },
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'poem_submissions' },
        () => {
          reloadFromCloudThrottled()
        },
      )
      .subscribe()

    window.addEventListener('focus', handleVisibilityOrFocus)
    document.addEventListener('visibilitychange', handleVisibilityOrFocus)
    window.addEventListener('storage', handleStorageSync)

    if (screen === 'admin') {
      pollIntervalId = setInterval(() => {
        reloadFromCloud()
      }, 5000)
    }

    return () => {
      isCancelled = true
      if (pollIntervalId) {
        clearInterval(pollIntervalId)
      }
      if (throttledReloadTimeoutId) {
        clearTimeout(throttledReloadTimeoutId)
      }
      window.removeEventListener('focus', handleVisibilityOrFocus)
      document.removeEventListener('visibilitychange', handleVisibilityOrFocus)
      window.removeEventListener('storage', handleStorageSync)
      void supabase.removeChannel(realtimeChannel)
    }
  }, [screen])

  const renderGlobalControls = () => (
    <div className="story-controls" aria-label="Scene controls" onClick={(event) => event.stopPropagation()}>
      <button type="button" aria-label="Back" onClick={openSettings}>
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
        ) : screen === 'admin' ? (
          <p>Review submitted poems from players here.</p>
        ) : (
          <p>Use Play from the menu to start the story.</p>
        )}
        <p>Use Back to return to the previous page.</p>
        <p>Use Home or Menu to return to the main menu.</p>
        <button type="button" onClick={() => setIsInfoOpen(false)}>
          Close
        </button>
      </section>
    )
  }

  const renderAdminAccessButton = () => {
    if (screen !== 'menu') {
      return null
    }

    return (
      <button
        type="button"
        className="admin-access-fab"
        aria-label="Open admin panel"
        onClick={(event) => {
          event.stopPropagation()
          openAdminPanel()
        }}
      >
        <img className="admin-access-fab-icon" src={settingIcon} alt="" aria-hidden="true" />
        <span className="admin-access-fab-label">Admin</span>
      </button>
    )
  }

  const renderAdminAuthPrompt = () => {
    if (!isAdminAuthPromptOpen) {
      return null
    }

    return (
      <div
        className="admin-auth-overlay"
        onClick={() => closeAdminAuthPrompt()}
        role="presentation"
      >
        <section
          className="admin-auth-card"
          aria-label="Admin security"
          onClick={(event) => event.stopPropagation()}
        >
          <h2>Admin Security</h2>
          <p>Enter PIN to open Admin panel.</p>

          <form onSubmit={submitAdminPin}>
            <input
              type="password"
              value={adminPinInput}
              onChange={(event) => setAdminPinInput(event.target.value)}
              placeholder="Enter PIN"
              autoFocus
            />

            {adminAuthError ? <p className="admin-auth-error">{adminAuthError}</p> : null}

            <div className="admin-auth-actions">
              <button type="button" onClick={closeAdminAuthPrompt}>
                Cancel
              </button>
              <button type="submit">Unlock</button>
            </div>
          </form>
        </section>
      </div>
    )
  }

  const content = useMemo(() => {
    if (screen === 'play') {
      return (
        <main
          className={`story-screen ${storyPage === 2 ? 'story-screen-two' : ''}`.trim()}
          aria-label="Story scene"
          onClick={storyPage >= 35 ? undefined : handleStoryScreenClick}
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
              const isStageOneComplete = isQuizSolved
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
                    }}>{isStageOneComplete ? 'STAGE I COMPLETE' : 'STAGE I'}</h1>

                    {isStageOneComplete && (
                      <p style={{
                      margin: '0 0 16px',
                      color: '#111',
                      fontSize: 'clamp(14px, 1.6vw, 22px)',
                      fontWeight: '700',
                      textAlign: 'center',
                      letterSpacing: '0.03em'
                      }}>Nakumpleto mo ang 5/5 tanong.</p>
                    )}

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
                        {isStageOneComplete
                          ? 'Mahusay! Natapos mo ang Stage I.'
                          : 'Mahusay! Natumpak mo ang kahulugan ng matalinghagang salita!'}
                      </p>

                      <p style={{
                        margin: '0 0 24px',
                        fontSize: 'clamp(14px, 1.5vw, 20px)',
                        fontWeight: '600',
                        lineHeight: '1.32'
                      }}>
                        {isStageOneComplete
                          ? 'Handa ka na para sa susunod na antas ng pag-unawa sa tula.'
                          : 'Pindutin ang Next Level para magpatuloy sa susunod na tanong.'}
                      </p>

                      <button
                        type="button"
                        onClick={handleStageOneSuccessContinue}
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
                  className="story-stage-two-game"
                  aria-label="Stage II game board"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    minHeight: '100vh',
                    backgroundImage: `linear-gradient(rgba(34, 32, 43, 0.28), rgba(34, 32, 43, 0.28)), url(${scaryBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '12px 10px 18px'
                  }}
                >
                  <div className="page-indicator">📖 Page 28 / 28</div>

                  <h1 style={{
                    margin: '6px 0 12px',
                    color: '#111',
                    fontSize: 'clamp(34px, 4.2vw, 60px)',
                    fontWeight: '800',
                    letterSpacing: '0.02em'
                  }}>STAGE II</h1>

                  <section
                    aria-label="Stage II puzzle grid"
                    style={{
                      width: 'min(98%, 1820px)',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px',
                      marginBottom: '12px'
                    }}
                  >
                    <section
                      style={{
                        border: '2px solid rgba(0, 0, 0, 0.9)',
                        backgroundColor: 'rgba(208, 220, 232, 0.18)',
                        padding: '6px',
                        display: 'grid',
                        gap: '6px'
                      }}
                    >
                      {stageTwoLeftPrompts.map((leftText, index) => (
                        <div key={`left-row-${index}`} style={{ display: 'grid', gridTemplateColumns: '1fr minmax(100px, 130px)', gap: '6px' }}>
                          <div
                            style={{
                              border: '2px solid rgba(0, 0, 0, 0.9)',
                              backgroundColor: 'rgba(212, 228, 241, 0.25)',
                              minHeight: '72px',
                              padding: '8px 10px',
                              textAlign: 'center',
                              fontSize: 'clamp(10px, 1vw, 17px)',
                              lineHeight: '1.3',
                              fontWeight: '600',
                              color: '#14171a',
                              display: 'grid',
                              placeItems: 'center'
                            }}
                          >
                            {leftText}
                          </div>
                          <div
                            onDragOver={(event) => {
                              event.preventDefault()
                              event.stopPropagation()
                            }}
                            onDrop={(event) => {
                              event.preventDefault()
                              event.stopPropagation()
                              const choiceId = event.dataTransfer.getData('text/stage-two-choice-id')
                              if (choiceId) {
                                placeStageTwoChoice(index, choiceId)
                              }
                            }}
                            onClick={(event) => {
                              event.stopPropagation()
                              if (stageTwoSelectedChoiceId) {
                                placeStageTwoChoice(index, stageTwoSelectedChoiceId)
                                return
                              }
                              if (stageTwoSlots[index]) {
                                clearStageTwoSlot(index)
                              }
                            }}
                            style={{
                              border: '2px solid rgba(0, 0, 0, 0.9)',
                              backgroundColor: 'rgba(180, 239, 236, 0.35)',
                              minHeight: '72px',
                              fontSize: stageTwoSlots[index] ? 'clamp(10px, 0.95vw, 15px)' : 'clamp(16px, 1.55vw, 30px)',
                              lineHeight: stageTwoSlots[index] ? '1.25' : '1.1',
                              fontWeight: stageTwoSlots[index] ? '600' : '800',
                              color: '#111',
                              cursor: 'pointer',
                              display: 'grid',
                              placeItems: 'center',
                              textAlign: 'center',
                              padding: '8px',
                              overflowWrap: 'anywhere',
                              wordBreak: 'break-word'
                            }}
                          >
                            {stageTwoSlots[index]
                              ? stageTwoChoices.find((choice) => choice.id === stageTwoSlots[index])?.text
                              : 'SAGOT'}
                          </div>
                        </div>
                      ))}
                    </section>

                    <section
                      style={{
                        border: '2px solid rgba(0, 0, 0, 0.9)',
                        backgroundColor: 'rgba(208, 220, 232, 0.18)',
                        padding: '6px',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '6px'
                      }}
                    >
                      {stageTwoAvailableChoices.map((choice, index) => (
                        <button
                          key={choice.id}
                          type="button"
                          draggable
                          onDragStart={(event) => {
                            event.stopPropagation()
                            event.dataTransfer.setData('text/stage-two-choice-id', choice.id)
                          }}
                          onClick={(event) => {
                            event.stopPropagation()
                            setStageTwoSelectedChoiceId(choice.id)
                          }}
                          style={{
                            border: '2px solid rgba(0, 0, 0, 0.9)',
                            backgroundColor:
                              stageTwoSelectedChoiceId === choice.id
                                ? 'rgba(255, 238, 145, 0.68)'
                                : index % 2 === 0
                                  ? 'rgba(177, 245, 245, 0.35)'
                                  : 'rgba(212, 228, 241, 0.25)',
                            minHeight: '72px',
                            padding: '8px 10px',
                            textAlign: 'center',
                            fontSize: 'clamp(10px, 0.95vw, 16px)',
                            lineHeight: '1.25',
                            fontWeight: '600',
                            color: '#14171a',
                            cursor: 'grab'
                          }}
                        >
                          {choice.text}
                        </button>
                      ))}
                    </section>
                  </section>

                  <section
                    aria-label="Bottom answer bins"
                    style={{
                      width: 'min(98%, 1820px)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                      gap: '10px',
                      marginBottom: '8px'
                    }}
                  >
                    {Array.from({ length: STAGE_TWO_BOTTOM_SLOT_COUNT }).map((_, slot) => {
                      const slotIndex = stageTwoLeftPrompts.length + slot
                      return (
                      <div
                        key={`bottom-visual-slot-${slot}`}
                        onDragOver={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                        }}
                        onDrop={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                          const choiceId = event.dataTransfer.getData('text/stage-two-choice-id')
                          if (choiceId) {
                            placeStageTwoChoice(slotIndex, choiceId)
                          }
                        }}
                        onClick={(event) => {
                          event.stopPropagation()
                          if (stageTwoSelectedChoiceId) {
                            placeStageTwoChoice(slotIndex, stageTwoSelectedChoiceId)
                            return
                          }
                          if (stageTwoSlots[slotIndex]) {
                            clearStageTwoSlot(slotIndex)
                          }
                        }}
                        style={{
                          border: '2px solid rgba(0, 0, 0, 0.9)',
                          backgroundColor: 'rgba(212, 228, 241, 0.25)',
                          minHeight: '74px',
                          display: 'grid',
                          placeItems: 'center',
                          textAlign: 'center',
                          color: '#111',
                          fontSize: stageTwoSlots[slotIndex] ? 'clamp(10px, 0.95vw, 16px)' : 'clamp(20px, 2vw, 34px)',
                          fontWeight: stageTwoSlots[slotIndex] ? '600' : '700',
                          lineHeight: stageTwoSlots[slotIndex] ? '1.25' : '1.1',
                          padding: '8px 10px',
                          overflowWrap: 'anywhere',
                          wordBreak: 'break-word',
                          cursor: 'pointer'
                        }}
                      >
                        {stageTwoSlots[slotIndex]
                          ? stageTwoChoices.find((choice) => choice.id === stageTwoSlots[slotIndex])?.text
                          : 'Sagot'}
                      </div>
                    )})}
                  </section>

                  <p
                    style={{
                      margin: '0 0 6px',
                      color: '#14171a',
                      fontWeight: '700',
                      fontSize: 'clamp(11px, 1vw, 16px)'
                    }}
                  >
                    Tip: Sa mobile, i-tap muna ang choice sa kanan, tapos i-tap ang kahong SAGOT sa kaliwa.
                  </p>

                  <p
                    style={{
                      margin: '8px 0 0',
                      color: '#14171a',
                      fontWeight: '700',
                      fontSize: 'clamp(12px, 1.1vw, 18px)'
                    }}
                  >
                    Tamang sagot: {stageTwoPlacedCorrect} / {stageTwoCorrectBySlot.length}
                  </p>

                  {isStageTwoCompleteNoticeOpen && (
                    <div
                      role="status"
                      aria-live="polite"
                      onClick={(event) => {
                        event.stopPropagation()
                        proceedToStageThree()
                      }}
                      style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(10, 18, 28, 0.58)',
                        display: 'grid',
                        placeItems: 'center',
                        padding: '18px',
                        zIndex: 30,
                        cursor: 'pointer'
                      }}
                    >
                      <section
                        style={{
                          width: 'min(92%, 760px)',
                          border: '2px solid rgba(0, 0, 0, 0.92)',
                          backgroundColor: 'rgba(238, 252, 236, 0.95)',
                          borderRadius: '14px',
                          padding: '24px 22px',
                          textAlign: 'center',
                          color: '#102014',
                          boxShadow: '0 10px 24px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        <h2
                          style={{
                            margin: '0 0 10px',
                            fontSize: 'clamp(24px, 2.4vw, 38px)',
                            fontWeight: '800',
                            letterSpacing: '0.02em'
                          }}
                        >
                          Congratulations!
                        </h2>
                        <p
                          style={{
                            margin: 0,
                            fontSize: 'clamp(16px, 1.6vw, 24px)',
                            fontWeight: '600',
                            lineHeight: '1.35'
                          }}
                        >
                          Kumpleto at tama ang sagot mo. Lilipat na sa susunod na level.
                        </p>
                        <p
                          style={{
                            margin: '12px 0 0',
                            fontSize: 'clamp(13px, 1.2vw, 18px)',
                            fontWeight: '700',
                            opacity: 0.86
                          }}
                        >
                          I-click ang screen para magpatuloy.
                        </p>
                      </section>
                    </div>
                  )}
                </section>
              )
            }

            if (storyPage === 29) {
              return (
                <section
                  className="story-stage-three-game"
                  aria-label="Stage II level two game"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    minHeight: '100vh',
                    backgroundImage: `linear-gradient(rgba(34, 32, 43, 0.28), rgba(34, 32, 43, 0.28)), url(${scaryBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '12px 10px 18px'
                  }}
                >
                  <div className="page-indicator">📖 Page 29 / 30</div>
                  <h1 style={{
                    margin: '6px 0 12px',
                    color: '#111',
                    fontSize: 'clamp(34px, 4.2vw, 60px)',
                    fontWeight: '800',
                    letterSpacing: '0.02em'
                  }}>STAGE II</h1>

                  <section
                    aria-label="Stage II level 2 puzzle grid"
                    style={{
                      width: 'min(98%, 1820px)',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px',
                      marginBottom: '12px'
                    }}
                  >
                    <section
                      style={{
                        border: '2px solid rgba(0, 0, 0, 0.9)',
                        backgroundColor: 'rgba(208, 220, 232, 0.18)',
                        padding: '6px',
                        display: 'grid',
                        gap: '6px'
                      }}
                    >
                      {stageThreeLeftPrompts.map((leftText, index) => (
                        <div key={`stage3-left-row-${index}`} style={{ display: 'grid', gridTemplateColumns: '1fr minmax(100px, 130px)', gap: '6px' }}>
                          <div
                            style={{
                              border: '2px solid rgba(0, 0, 0, 0.9)',
                              backgroundColor: 'rgba(212, 228, 241, 0.25)',
                              minHeight: '72px',
                              padding: '8px 10px',
                              textAlign: 'center',
                              fontSize: 'clamp(10px, 1vw, 17px)',
                              lineHeight: '1.3',
                              fontWeight: '600',
                              color: '#14171a',
                              display: 'grid',
                              placeItems: 'center'
                            }}
                          >
                            {leftText}
                          </div>
                          <div
                            onDragOver={(event) => {
                              event.preventDefault()
                              event.stopPropagation()
                            }}
                            onDrop={(event) => {
                              event.preventDefault()
                              event.stopPropagation()
                              const choiceId =
                                event.dataTransfer.getData('text/stage-three-choice-id') ||
                                event.dataTransfer.getData('text/plain') ||
                                stageThreeSelectedChoiceId
                              if (choiceId) {
                                placeStageThreeChoice(index, choiceId)
                              }
                            }}
                            onClick={(event) => {
                              event.stopPropagation()
                              if (stageThreeSelectedChoiceId) {
                                placeStageThreeChoice(index, stageThreeSelectedChoiceId)
                                return
                              }
                              if (stageThreeSlots[index]) {
                                clearStageThreeSlot(index)
                              }
                            }}
                            style={{
                              border: '2px solid rgba(0, 0, 0, 0.9)',
                              backgroundColor: 'rgba(180, 239, 236, 0.35)',
                              minHeight: '72px',
                              fontSize: stageThreeSlots[index] ? 'clamp(10px, 0.95vw, 15px)' : 'clamp(16px, 1.55vw, 30px)',
                              lineHeight: stageThreeSlots[index] ? '1.25' : '1.1',
                              fontWeight: stageThreeSlots[index] ? '600' : '800',
                              color: '#111',
                              cursor: 'pointer',
                              display: 'grid',
                              placeItems: 'center',
                              textAlign: 'center',
                              padding: '8px',
                              overflowWrap: 'anywhere',
                              wordBreak: 'break-word'
                            }}
                          >
                            {stageThreeSlots[index]
                              ? stageThreeChoices.find((choice) => choice.id === stageThreeSlots[index])?.text
                              : 'SAGOT'}
                          </div>
                        </div>
                      ))}
                    </section>

                    <section
                      style={{
                        border: '2px solid rgba(0, 0, 0, 0.9)',
                        backgroundColor: 'rgba(208, 220, 232, 0.18)',
                        padding: '6px',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '6px'
                      }}
                    >
                      {stageThreeAvailableChoices.map((choice, index) => (
                        <button
                          key={choice.id}
                          type="button"
                          draggable
                          onDragStart={(event) => {
                            event.stopPropagation()
                            event.dataTransfer.setData('text/stage-three-choice-id', choice.id)
                            event.dataTransfer.setData('text/plain', choice.id)
                          }}
                          onClick={(event) => {
                            event.stopPropagation()
                            setStageThreeSelectedChoiceId(choice.id)
                          }}
                          style={{
                            border: '2px solid rgba(0, 0, 0, 0.9)',
                            backgroundColor:
                              stageThreeSelectedChoiceId === choice.id
                                ? 'rgba(255, 238, 145, 0.68)'
                                : index % 2 === 0
                                  ? 'rgba(177, 245, 245, 0.35)'
                                  : 'rgba(212, 228, 241, 0.25)',
                            minHeight: '72px',
                            padding: '8px 10px',
                            textAlign: 'center',
                            fontSize: 'clamp(10px, 0.95vw, 16px)',
                            lineHeight: '1.25',
                            fontWeight: '600',
                            color: '#14171a',
                            cursor: 'grab'
                          }}
                        >
                          {choice.text}
                        </button>
                      ))}
                    </section>
                  </section>

                  <section
                    aria-label="Stage II level 2 bottom answer bins"
                    style={{
                      width: 'min(98%, 1820px)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                      gap: '10px',
                      marginBottom: '8px'
                    }}
                  >
                    {Array.from({ length: STAGE_THREE_BOTTOM_SLOT_COUNT }).map((_, slot) => {
                      const slotIndex = stageThreeLeftPrompts.length + slot
                      return (
                        <div
                          key={`stage3-bottom-slot-${slot}`}
                          onDragOver={(event) => {
                            event.preventDefault()
                            event.stopPropagation()
                          }}
                          onDrop={(event) => {
                            event.preventDefault()
                            event.stopPropagation()
                            const choiceId =
                              event.dataTransfer.getData('text/stage-three-choice-id') ||
                              event.dataTransfer.getData('text/plain') ||
                              stageThreeSelectedChoiceId
                            if (choiceId) {
                              placeStageThreeChoice(slotIndex, choiceId)
                            }
                          }}
                          onClick={(event) => {
                            event.stopPropagation()
                            if (stageThreeSelectedChoiceId) {
                              placeStageThreeChoice(slotIndex, stageThreeSelectedChoiceId)
                              return
                            }
                            if (stageThreeSlots[slotIndex]) {
                              clearStageThreeSlot(slotIndex)
                            }
                          }}
                          style={{
                            border: '2px solid rgba(0, 0, 0, 0.92)',
                            backgroundColor: 'rgba(226, 233, 241, 0.16)',
                            minHeight: '76px',
                            display: 'grid',
                            placeItems: 'center',
                            textAlign: 'center',
                            color: '#111',
                            fontSize: stageThreeSlots[slotIndex] ? 'clamp(10px, 0.95vw, 16px)' : 'clamp(30px, 2.3vw, 42px)',
                            fontWeight: stageThreeSlots[slotIndex] ? '600' : '700',
                            lineHeight: stageThreeSlots[slotIndex] ? '1.25' : '1',
                            padding: '8px 10px',
                            overflowWrap: 'anywhere',
                            wordBreak: 'break-word',
                            cursor: 'pointer'
                          }}
                        >
                          {stageThreeSlots[slotIndex]
                            ? stageThreeChoices.find((choice) => choice.id === stageThreeSlots[slotIndex])?.text
                            : 'Sagot'}
                        </div>
                      )
                    })}
                  </section>

                  <p
                    style={{
                      margin: '0 0 6px',
                      color: '#14171a',
                      fontWeight: '700',
                      fontSize: 'clamp(11px, 1vw, 16px)'
                    }}
                  >
                    Tip: Sa mobile, i-tap muna ang choice sa kanan, tapos i-tap ang kahong SAGOT sa kaliwa o ibaba.
                  </p>

                  <p
                    style={{
                      margin: '8px 0 0',
                      color: '#14171a',
                      fontWeight: '700',
                      fontSize: 'clamp(12px, 1.1vw, 18px)'
                    }}
                  >
                    Tamang sagot: {stageThreePlacedCorrect} / {stageThreeCorrectBySlot.length}
                  </p>

                  {isStageThreeCompleteNoticeOpen && (
                    <div
                      role="status"
                      aria-live="polite"
                      onClick={(event) => {
                        event.stopPropagation()
                        proceedToStageCompletePage()
                      }}
                      style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(10, 18, 28, 0.58)',
                        display: 'grid',
                        placeItems: 'center',
                        padding: '18px',
                        zIndex: 30,
                        cursor: 'pointer'
                      }}
                    >
                      <section
                        style={{
                          width: 'min(92%, 760px)',
                          border: '2px solid rgba(0, 0, 0, 0.92)',
                          backgroundColor: 'rgba(238, 252, 236, 0.95)',
                          borderRadius: '14px',
                          padding: '24px 22px',
                          textAlign: 'center',
                          color: '#102014',
                          boxShadow: '0 10px 24px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        <h2
                          style={{
                            margin: '0 0 10px',
                            fontSize: 'clamp(24px, 2.4vw, 38px)',
                            fontWeight: '800',
                            letterSpacing: '0.02em'
                          }}
                        >
                          Congratulations!
                        </h2>
                        <p
                          style={{
                            margin: 0,
                            fontSize: 'clamp(16px, 1.6vw, 24px)',
                            fontWeight: '600',
                            lineHeight: '1.35'
                          }}
                        >
                          Kumpleto at tama ang sagot mo. Lilipat na sa susunod na level.
                        </p>
                        <p
                          style={{
                            margin: '12px 0 0',
                            fontSize: 'clamp(13px, 1.2vw, 18px)',
                            fontWeight: '700',
                            opacity: 0.86
                          }}
                        >
                          I-click ang screen para magpatuloy.
                        </p>
                      </section>
                    </div>
                  )}
                </section>
              )
            }

            if (storyPage === 30) {
              return (
                <section
                  className="story-stage-two-next-level"
                  aria-label="Stage II completion"
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
                  <div className="page-indicator">📖 Page 30 / 31</div>
                  <h1 style={{
                    margin: '0 0 14px',
                    color: '#111',
                    fontSize: 'clamp(34px, 4.2vw, 60px)',
                    fontWeight: '800',
                    letterSpacing: '0.02em'
                  }}>LEVEL COMPLETE</h1>
                  <section style={{
                    width: 'min(92%, 920px)',
                    border: '2px solid rgba(0, 0, 0, 0.85)',
                    backgroundColor: 'rgba(225, 231, 235, 0.28)',
                    padding: '28px 24px',
                    textAlign: 'center',
                    color: '#101314',
                    fontFamily: 'Poppins, system-ui, sans-serif',
                    fontSize: 'clamp(16px, 1.6vw, 26px)',
                    lineHeight: '1.38'
                  }}>
                    <p style={{ margin: '0 0 16px', fontWeight: '700' }}>
                      Mahusay! Natapos mo ang level na ito.
                    </p>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation()
                        setStoryPage(31)
                      }}
                      className="quiz-next-button"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        minWidth: '140px',
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
                      Next
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

            if (storyPage === 31) {
              return (
                <section
                  className="story-stage-four-layout"
                  aria-label="Stage III board"
                  style={{
                    minHeight: '100vh',
                    backgroundImage: `linear-gradient(rgba(38, 42, 58, 0.42), rgba(38, 42, 58, 0.42)), url(${scaryBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '18px 16px 20px',
                    display: 'grid',
                    placeItems: 'center'
                  }}
                >
                  <div className="page-indicator">📖 Page 31 / 32</div>

                  <section
                    style={{
                      width: 'min(98%, 1880px)',
                      border: '2px solid rgba(0, 0, 0, 0.92)',
                      backgroundColor: 'rgba(214, 219, 231, 0.16)',
                      padding: '8px',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px'
                    }}
                  >
                    <section style={{ display: 'grid', gap: '6px' }}>
                      {stageFourLeftPrompts.map((text, index) => (
                        <div key={`stage4-left-${index}`} style={{ display: 'grid', gridTemplateColumns: '1fr minmax(120px, 170px)', gap: '6px' }}>
                          <div
                            style={{
                              border: '2px solid rgba(0, 0, 0, 0.92)',
                              minHeight: '104px',
                              padding: '10px 12px',
                              textAlign: 'center',
                              display: 'grid',
                              placeItems: 'center',
                              color: '#101316',
                              fontSize: 'clamp(15px, 1.2vw, 30px)',
                              lineHeight: '1.28',
                              backgroundColor: 'rgba(230, 235, 244, 0.15)'
                            }}
                          >
                            {text}
                          </div>
                          {stageFourMiddleSlots[index] === 'SAGOT' ? (
                            <div
                              onDragOver={(event) => {
                                event.preventDefault()
                                event.stopPropagation()
                              }}
                              onDrop={(event) => {
                                event.preventDefault()
                                event.stopPropagation()
                                const choiceId =
                                  event.dataTransfer.getData('text/stage-four-choice-id') ||
                                  event.dataTransfer.getData('text/plain') ||
                                  stageFourSelectedChoiceId
                                if (choiceId) {
                                  const slotIndex = stageFourLeftSlotRows.indexOf(index)
                                  if (slotIndex !== -1) {
                                    placeStageFourChoice(slotIndex, choiceId)
                                  }
                                }
                              }}
                              onClick={(event) => {
                                event.stopPropagation()
                                const slotIndex = stageFourLeftSlotRows.indexOf(index)
                                if (slotIndex === -1) {
                                  return
                                }
                                if (stageFourSelectedChoiceId) {
                                  placeStageFourChoice(slotIndex, stageFourSelectedChoiceId)
                                  return
                                }
                                if (stageFourSlots[slotIndex]) {
                                  const pickedChoiceId = stageFourSlots[slotIndex]
                                  clearStageFourSlot(slotIndex)
                                  setStageFourSelectedChoiceId(pickedChoiceId)
                                }
                              }}
                              style={{
                                border: '2px solid rgba(0, 0, 0, 0.92)',
                                minHeight: '104px',
                                display: 'grid',
                                placeItems: 'center',
                                color: '#111',
                                fontWeight: '800',
                                fontSize: stageFourSlots[stageFourLeftSlotRows.indexOf(index)] ? 'clamp(11px, 0.95vw, 16px)' : 'clamp(22px, 2.2vw, 40px)',
                                lineHeight: stageFourSlots[stageFourLeftSlotRows.indexOf(index)] ? '1.25' : '1',
                                letterSpacing: '0.03em',
                                backgroundColor: 'rgba(230, 235, 244, 0.12)',
                                textAlign: 'center',
                                padding: '8px',
                                overflowWrap: 'anywhere',
                                wordBreak: 'break-word',
                                cursor: 'pointer'
                              }}
                            >
                              {(() => {
                                const slotIndex = stageFourLeftSlotRows.indexOf(index)
                                return stageFourSlots[slotIndex]
                                  ? stageFourChoices.find((choice) => choice.id === stageFourSlots[slotIndex])?.text
                                  : 'SAGOT'
                              })()}
                            </div>
                          ) : (
                            <div
                              style={{
                                border: '2px solid rgba(0, 0, 0, 0.92)',
                                minHeight: '104px',
                                display: 'grid',
                                placeItems: 'center',
                                color: '#111',
                                fontWeight: '800',
                                fontSize: 'clamp(22px, 2.2vw, 40px)',
                                letterSpacing: '0.03em',
                                backgroundColor: 'rgba(230, 235, 244, 0.12)'
                              }}
                            >
                              {stageFourMiddleSlots[index]}
                            </div>
                          )}
                        </div>
                      ))}
                    </section>

                    <section
                      style={{
                        border: '2px solid rgba(0, 0, 0, 0.9)',
                        backgroundColor: 'rgba(208, 220, 232, 0.18)',
                        padding: '6px',
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '6px'
                      }}
                    >
                      {stageFourAvailableChoices.map((choice) => (
                        <button
                          key={choice.id}
                          type="button"
                          draggable
                          onDragStart={(event) => {
                            event.stopPropagation()
                            event.dataTransfer.setData('text/stage-four-choice-id', choice.id)
                            event.dataTransfer.setData('text/plain', choice.id)
                          }}
                          onClick={(event) => {
                            event.stopPropagation()
                            setStageFourSelectedChoiceId(choice.id)
                          }}
                          style={{
                            border: '2px solid rgba(0, 0, 0, 0.9)',
                            backgroundColor:
                              stageFourSelectedChoiceId === choice.id
                                ? 'rgba(255, 238, 145, 0.68)'
                                : 'rgba(212, 228, 241, 0.25)',
                            minHeight: '82px',
                            padding: '8px 10px',
                            textAlign: 'center',
                            fontSize: 'clamp(10px, 0.95vw, 16px)',
                            lineHeight: '1.25',
                            fontWeight: '600',
                            color: '#14171a',
                            cursor: 'grab'
                          }}
                        >
                          {choice.text}
                        </button>
                      ))}
                    </section>
                  </section>

                  <section
                    aria-label="Stage III bottom sagot bins"
                    style={{
                      width: 'min(98%, 1880px)',
                      marginTop: '12px',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                      gap: '16px'
                    }}
                  >
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div
                        key={`stage4-bottom-${index}`}
                        onDragOver={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                        }}
                        onDrop={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                          const choiceId =
                            event.dataTransfer.getData('text/stage-four-choice-id') ||
                            event.dataTransfer.getData('text/plain') ||
                            stageFourSelectedChoiceId
                          if (choiceId) {
                            const slotIndex = stageFourLeftSlotRows.length + index
                            placeStageFourChoice(slotIndex, choiceId)
                          }
                        }}
                        onClick={(event) => {
                          event.stopPropagation()
                          const slotIndex = stageFourLeftSlotRows.length + index
                          if (stageFourSelectedChoiceId) {
                            placeStageFourChoice(slotIndex, stageFourSelectedChoiceId)
                            return
                          }
                          if (stageFourSlots[slotIndex]) {
                            const pickedChoiceId = stageFourSlots[slotIndex]
                            clearStageFourSlot(slotIndex)
                            setStageFourSelectedChoiceId(pickedChoiceId)
                          }
                        }}
                        style={{
                          border: '2px solid rgba(0, 0, 0, 0.92)',
                          minHeight: '82px',
                          display: 'grid',
                          placeItems: 'center',
                          backgroundColor: 'rgba(226, 233, 241, 0.16)',
                          color: '#111',
                          fontWeight: '800',
                          fontSize: stageFourSlots[stageFourLeftSlotRows.length + index] ? 'clamp(11px, 0.95vw, 16px)' : 'clamp(26px, 2.2vw, 38px)',
                          lineHeight: stageFourSlots[stageFourLeftSlotRows.length + index] ? '1.25' : '1',
                          textAlign: 'center',
                          padding: '8px 10px',
                          overflowWrap: 'anywhere',
                          wordBreak: 'break-word',
                          cursor: 'pointer'
                        }}
                      >
                        {stageFourSlots[stageFourLeftSlotRows.length + index]
                          ? stageFourChoices.find((choice) => choice.id === stageFourSlots[stageFourLeftSlotRows.length + index])?.text
                          : 'Sagot'}
                      </div>
                    ))}
                  </section>

                  <p
                    style={{
                      margin: '10px 0 6px',
                      color: '#14171a',
                      fontWeight: '700',
                      fontSize: 'clamp(11px, 1vw, 16px)'
                    }}
                  >
                    Tip: Sa mobile, i-tap muna ang choice sa kanan, tapos i-tap ang kahong SAGOT sa kaliwa o ibaba.
                  </p>

                  <p
                    style={{
                      margin: '0',
                      color: '#14171a',
                      fontWeight: '700',
                      fontSize: 'clamp(12px, 1.1vw, 18px)'
                    }}
                  >
                    Tamang sagot: {stageFourPlacedCorrect} / {STAGE_FOUR_TOTAL_CORRECT}
                  </p>

                  {isStageFourCompleteNoticeOpen && (
                    <div
                      role="status"
                      aria-live="polite"
                      onClick={(event) => {
                        event.stopPropagation()
                        proceedToStageFive()
                      }}
                      style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(10, 18, 28, 0.58)',
                        display: 'grid',
                        placeItems: 'center',
                        padding: '18px',
                        zIndex: 30,
                        cursor: 'pointer'
                      }}
                    >
                      <section
                        style={{
                          width: 'min(92%, 760px)',
                          border: '2px solid rgba(0, 0, 0, 0.92)',
                          backgroundColor: 'rgba(238, 252, 236, 0.95)',
                          borderRadius: '14px',
                          padding: '24px 22px',
                          textAlign: 'center',
                          color: '#102014',
                          boxShadow: '0 10px 24px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        <h2
                          style={{
                            margin: '0 0 10px',
                            fontSize: 'clamp(24px, 2.4vw, 38px)',
                            fontWeight: '800',
                            letterSpacing: '0.02em'
                          }}
                        >
                          Congratulations!
                        </h2>
                        <p
                          style={{
                            margin: 0,
                            fontSize: 'clamp(16px, 1.6vw, 24px)',
                            fontWeight: '600',
                            lineHeight: '1.35'
                          }}
                        >
                          Kumpleto at tama ang sagot mo. I-click ang screen para magpatuloy sa susunod na pahina.
                        </p>
                      </section>
                    </div>
                  )}
                </section>
              )
            }

            if (storyPage === 32) {
              return (
                <section
                  className="story-stage-five-intro"
                  aria-label="Stage continuation story"
                  style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${leavesBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '18px 16px 20px',
                    display: 'grid',
                    placeItems: 'center'
                  }}
                >
                  <div className="page-indicator">📖 Page 32 / 48</div>
                  <section
                    style={{
                      width: 'min(94%, 1540px)',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(187, 236, 170, 0.45)',
                      padding: '34px 28px',
                      textAlign: 'center',
                      color: '#111',
                      fontFamily: 'Poppins, system-ui, sans-serif',
                      fontSize: 'clamp(20px, 2.1vw, 40px)',
                      lineHeight: '1.38',
                      backdropFilter: 'blur(1px)'
                    }}
                  >
                    <p style={{ margin: '0 0 22px' }}>{storyThirtyTwoTextTop}</p>
                    <p style={{ margin: 0 }}>{storyThirtyTwoTextBottom}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 33) {
              return (
                <section
                  className="story-stage-five-dialogue"
                  aria-label="Lolo Buhawi final guidance"
                  style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${forestBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '16px 16px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}
                >
                  <div className="page-indicator">📖 Page 33 / 48</div>

                  <section
                    aria-label="Dialogue box"
                    style={{
                      position: 'relative',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(184, 227, 164, 0.88)',
                      minHeight: '28%',
                      padding: '74px clamp(18px, 17vw, 320px) 22px 24px',
                      color: '#111',
                      fontSize: 'clamp(22px, 2.3vw, 42px)',
                      lineHeight: '1.34',
                      textAlign: 'center',
                      zIndex: 2,
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <img
                      src={hawiCharacterImage}
                      alt="Hawi"
                      style={{
                        position: 'absolute',
                        right: 'clamp(6px, 6vw, 120px)',
                        bottom: 'calc(100% - 135px)',
                        width: 'clamp(230px, 42vw, 640px)',
                        maxHeight: '78vh',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 10px 18px rgba(0, 0, 0, 0.4))',
                        zIndex: 4,
                        pointerEvents: 'none'
                      }}
                    />

                    <img
                      src={buhawiTagImage}
                      alt="Lolo Buhawi"
                      style={{
                        position: 'absolute',
                        left: '18px',
                        top: '0',
                        width: 'clamp(180px, 22vw, 300px)',
                        transform: 'translateY(-50%)',
                        filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.28))'
                      }}
                    />
                    <p style={{ margin: 0 }}>
                      Ang huling pagsubok,{' '}
                      <span style={{ color: '#67b52e', fontWeight: '800', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Liwayway</span>
                      -hindi mo na aayusin ang tula ng iba. Isusulat mo na ang iyong sarili.
                    </p>
                  </section>
                </section>
              )
            }

            if (storyPage === 34) {
              return (
                <section
                  className="story-stage-five-dialogue"
                  aria-label="Bang final guidance"
                  style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${forestBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '16px 16px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}
                >
                  <div className="page-indicator">📖 Page 34 / 48</div>

                  <section
                    aria-label="Dialogue box"
                    style={{
                      position: 'relative',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(184, 227, 164, 0.88)',
                      minHeight: '28%',
                      padding: '74px 24px 22px',
                      color: '#111',
                      fontSize: 'clamp(22px, 2.3vw, 42px)',
                      lineHeight: '1.34',
                      textAlign: 'center',
                      zIndex: 2,
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <img
                      src={bangCharacterImage}
                      alt="Bang"
                      style={{
                        position: 'absolute',
                        right: 'clamp(12px, 4vw, 72px)',
                        bottom: 'calc(100% - 52px)',
                        width: 'clamp(190px, 30vw, 420px)',
                        maxHeight: '58vh',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 10px 18px rgba(0, 0, 0, 0.4))',
                        zIndex: 4,
                        pointerEvents: 'none'
                      }}
                    />

                    <img
                      src={buhawiTagImage}
                      alt="Lolo Buhawi"
                      style={{
                        position: 'absolute',
                        left: '18px',
                        top: '0',
                        width: 'clamp(150px, 19vw, 250px)',
                        transform: 'translateY(-50%)',
                        filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.28))'
                      }}
                    />
                    <p
                      style={{
                        margin: 0
                      }}
                    >
                      {storyThirtyFourText}
                    </p>
                  </section>
                </section>
              )
            }

            if (storyPage === 35) {
              return (
                <section
                  className="story-stage-three-intro-page"
                  aria-label="Stage III instructions"
                  style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${forestBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '22px 16px 20px',
                    display: 'grid',
                    placeItems: 'center'
                  }}
                >
                  <section className="story-stage-three-intro-content">
                    <h1>STAGE III</h1>

                    <section className="story-stage-three-instruction-card">
                      <p>{storyThirtyFiveText}</p>

                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation()
                          setStoryPage(36)
                        }}
                      >
                        Got It!
                      </button>
                    </section>
                  </section>
                </section>
              )
            }

            if (storyPage === 36) {
              return (
                <section
                  className="stage-three-box-select-page"
                  aria-label="Stage III box selection"
                  style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${forestBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '20px 16px',
                    display: 'grid',
                    placeItems: 'center'
                  }}
                >
                  <section className="stage-three-box-select-content">
                    <div className="stage-three-box-grid" role="group" aria-label="Choose a box">
                      {stageThreeBoxTopics.map((_, index) => (
                        <button
                          key={`stage-three-topic-box-${index + 1}`}
                          type="button"
                          className="stage-three-box-button"
                          onClick={(event) => {
                            event.stopPropagation()
                            openStageThreeTopicSection(index)
                          }}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>

                    <p className="stage-three-box-caption">Choose a box</p>
                  </section>
                </section>
              )
            }

            if (storyPage >= 37 && storyPage <= 41) {
              const topicFromPage = stageThreeBoxTopics[storyPage - 37] || stageThreeBoxTopics[0]
              const activeTopic = selectedStageThreeTopic || topicFromPage

              return (
                <section
                  className="story-stage-three-intro-page"
                  aria-label="Stage III topic instructions"
                  style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${forestBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '22px 16px 20px',
                    display: 'grid',
                    placeItems: 'center'
                  }}
                >
                  <section className="story-stage-three-intro-content">
                    <h1>STAGE III</h1>

                    <section className="story-stage-three-instruction-card">
                      <p>{activeTopic}</p>

                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation()
                          setStoryPage(42)
                        }}
                      >
                        Got It!
                      </button>
                    </section>
                  </section>
                </section>
              )
            }

            if (storyPage === 42) {
              const activeTopic = selectedStageThreeTopic || stageThreeBoxTopics[0]
              const topicMaterials = stageThreeTopicMaterials[activeTopic] || []

              return (
                <section
                  className="stage-three-writing-page"
                  aria-label="Stage III writing workspace"
                  onClick={(event) => event.stopPropagation()}
                  onMouseDown={(event) => event.stopPropagation()}
                  style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${forestBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '12px 14px 16px',
                    display: 'grid',
                    placeItems: 'center'
                  }}
                >
                  <section className="stage-three-writing-layout">
                    <h1>STAGE III</h1>

                    <section className="stage-three-writing-grid">
                      <section className="stage-three-writing-main" aria-label="Poem writing area">
                        <textarea
                          defaultValue={stageThreePoemDraftRef.current}
                          onPointerDown={(event) => event.stopPropagation()}
                          onMouseDown={(event) => event.stopPropagation()}
                          onClick={(event) => event.stopPropagation()}
                          onKeyDown={(event) => event.stopPropagation()}
                          onFocus={(event) => event.stopPropagation()}
                          onChange={(event) => {
                            stageThreePoemDraftRef.current = event.target.value
                            updateStageThreeSubmitEnabled({ nextPoemDraft: event.target.value })
                          }}
                          placeholder="Isulat dito ang iyong tula..."
                        />
                      </section>

                      <aside className="stage-three-writing-side" aria-label="Topic and materials">
                        <section className="stage-three-side-box">
                          <h2>Pangalan</h2>
                          <input
                            type="text"
                            defaultValue={stageThreePlayerNameRef.current}
                            onPointerDown={(event) => event.stopPropagation()}
                            onMouseDown={(event) => event.stopPropagation()}
                            onClick={(event) => event.stopPropagation()}
                            onKeyDown={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            onChange={(event) => {
                              stageThreePlayerNameRef.current = event.target.value
                              updateStageThreeSubmitEnabled({ nextPlayerName: event.target.value })
                            }}
                            placeholder="Ilagay ang pangalan mo"
                            maxLength={80}
                            style={{
                              width: '100%',
                              boxSizing: 'border-box',
                              border: '2px solid rgba(0, 0, 0, 0.8)',
                              backgroundColor: 'rgba(255, 255, 255, 0.9)',
                              padding: '10px 12px',
                              fontSize: '1rem',
                              fontWeight: '600',
                            }}
                          />
                        </section>

                        <section className="stage-three-side-box">
                          <h2>Paksa</h2>
                          <p>{activeTopic}</p>
                        </section>

                        <section className="stage-three-side-box stage-three-materials-box">
                          <h2>Materials</h2>
                          <ul>
                            {topicMaterials.map((material) => (
                              <li key={`topic-material-${material}`}>{material}</li>
                            ))}
                          </ul>
                        </section>

                        <button
                          type="button"
                          className="stage-three-done-button"
                          disabled={!isStageThreeSubmitEnabled}
                          onClick={(event) => {
                            event.stopPropagation()
                            handleStageThreeDone()
                          }}
                        >
                          Done
                        </button>
                      </aside>
                    </section>

                    {isPoemSubmitPopupOpen && (
                      <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Submission successful"
                        style={{
                          position: 'fixed',
                          inset: 0,
                          backgroundColor: 'rgba(10, 18, 28, 0.58)',
                          display: 'grid',
                          placeItems: 'center',
                          padding: '18px',
                          zIndex: 50,
                        }}
                      >
                        <section
                          onClick={(event) => event.stopPropagation()}
                          style={{
                            width: 'min(92%, 760px)',
                            border: '2px solid rgba(0, 0, 0, 0.92)',
                            backgroundColor: 'rgba(238, 252, 236, 0.95)',
                            borderRadius: '14px',
                            padding: '24px 22px',
                            textAlign: 'center',
                            color: '#102014',
                            boxShadow: '0 10px 24px rgba(0, 0, 0, 0.25)',
                          }}
                        >
                          <h2
                            style={{
                              margin: '0 0 10px',
                              fontSize: 'clamp(24px, 2.4vw, 38px)',
                              fontWeight: '800',
                              letterSpacing: '0.02em',
                            }}
                          >
                            Submission Saved
                          </h2>
                          <p
                            style={{
                              margin: '0 0 14px',
                              fontSize: 'clamp(16px, 1.6vw, 24px)',
                              fontWeight: '600',
                              lineHeight: '1.35',
                            }}
                          >
                            Nice work! Your poem has been submitted and is now visible in the Admin panel.
                          </p>
                          <button
                            type="button"
                            onClick={continueAfterPoemSubmit}
                            style={{
                              border: '2px solid rgba(0, 0, 0, 0.82)',
                              backgroundColor: 'rgba(195, 230, 168, 0.9)',
                              color: '#102014',
                              padding: '9px 16px',
                              fontWeight: '700',
                              cursor: 'pointer',
                            }}
                          >
                            Continue
                          </button>
                        </section>
                      </div>
                    )}
                  </section>
                </section>
              )
            }

            if (storyPage === 43) {
              return (
                <section
                  className="story-stage-three-complete-page"
                  aria-label="Stage III poem completion"
                  onClick={(event) => {
                    event.stopPropagation()
                    setStoryPage(44)
                  }}
                  style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${stageThreeCompleteBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '20px 16px 18px',
                    display: 'grid',
                    alignItems: 'start'
                  }}
                >
                  <section className="story-stage-three-complete-content">
                    <h1>Story 4</h1>

                    <section className="story-stage-three-complete-card">
                      <p>{storyFortyThreeIntro}</p>
                      <p className="story-stage-three-complete-quote">{storyFortyThreeQuote}</p>
                      <p>{storyFortyThreeOutro}</p>
                    </section>
                  </section>
                </section>
              )
            }

            if (storyPage === 44) {
              return (
                <section
                  className="story-stage-four-dialogue-page"
                  aria-label="Lolo Buhawi follow-up dialogue"
                  onClick={(event) => {
                    event.stopPropagation()
                    setStoryPage(45)
                  }}
                  style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${stageFourDialogueBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '16px 16px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}
                >
                  <section
                    aria-label="Dialogue box"
                    style={{
                      position: 'relative',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(184, 227, 164, 0.88)',
                      minHeight: '28%',
                      padding: '74px 24px 22px',
                      color: '#111',
                      fontSize: 'clamp(22px, 2.3vw, 42px)',
                      lineHeight: '1.34',
                      textAlign: 'center',
                      zIndex: 2,
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <img
                      src={bangCharacterImage}
                      alt="Lolo Buhawi"
                      style={{
                        position: 'absolute',
                        right: 'clamp(12px, 4vw, 72px)',
                        bottom: 'calc(100% - 52px)',
                        width: 'clamp(190px, 30vw, 420px)',
                        maxHeight: '58vh',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 10px 18px rgba(0, 0, 0, 0.4))',
                        zIndex: 4,
                        pointerEvents: 'none'
                      }}
                    />

                    <img
                      src={buhawiTagImage}
                      alt="Lolo Buhawi"
                      style={{
                        position: 'absolute',
                        left: '18px',
                        top: '0',
                        width: 'clamp(150px, 19vw, 250px)',
                        transform: 'translateY(-50%)',
                        filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.28))'
                      }}
                    />
                    <p style={{ margin: 0 }}>{storyFortyFourText}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 45) {
              return (
                <section
                  className="story-stage-four-reflection-page"
                  aria-label="Liwayway reflection"
                  onClick={(event) => {
                    event.stopPropagation()
                    setStoryPage(46)
                  }}
                  style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${stageFourLibraryBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '16px 18px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}
                >
                  <img
                    src={liwaywayWritingImage}
                    alt="Liwayway"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      bottom: 'calc(26% - 44px)',
                      transform: 'translateX(-50%)',
                      width: 'clamp(260px, 35vw, 450px)',
                      maxHeight: '66vh',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 9px 16px rgba(0, 0, 0, 0.35))',
                      zIndex: 3,
                      pointerEvents: 'none'
                    }}
                  />

                  <section
                    aria-label="Reflection box"
                    style={{
                      position: 'relative',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(184, 227, 164, 0.82)',
                      minHeight: '26%',
                      padding: '30px 24px 28px',
                      color: '#101010',
                      fontSize: 'clamp(22px, 2.35vw, 40px)',
                      lineHeight: '1.34',
                      textAlign: 'left',
                      zIndex: 2,
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.16)'
                    }}
                  >
                    <p style={{ margin: 0 }}>{storyFortyFiveText}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 46) {
              return (
                <section
                  className="story-stage-four-dialogue-page"
                  aria-label="Lolo Buhawi affirmation"
                  onClick={(event) => {
                    event.stopPropagation()
                    setStoryPage(47)
                  }}
                  style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${stageFourDialogueBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '16px 16px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}
                >
                  <section
                    aria-label="Dialogue box"
                    style={{
                      position: 'relative',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(184, 227, 164, 0.88)',
                      minHeight: '28%',
                      padding: '74px 24px 22px',
                      color: '#111',
                      fontSize: 'clamp(22px, 2.3vw, 42px)',
                      lineHeight: '1.34',
                      textAlign: 'center',
                      zIndex: 2,
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <img
                      src={bangCharacterImage}
                      alt="Lolo Buhawi"
                      style={{
                        position: 'absolute',
                        right: 'clamp(4px, 2vw, 22px)',
                        bottom: 'calc(100% - 40px)',
                        width: 'clamp(210px, 28vw, 390px)',
                        maxHeight: '62vh',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 10px 18px rgba(0, 0, 0, 0.4))',
                        zIndex: 4,
                        pointerEvents: 'none'
                      }}
                    />

                    <img
                      src={buhawiTagImage}
                      alt="Lolo Buhawi"
                      style={{
                        position: 'absolute',
                        left: '18px',
                        top: '0',
                        width: 'clamp(150px, 19vw, 250px)',
                        transform: 'translateY(-50%)',
                        filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.28))'
                      }}
                    />
                    <p style={{ margin: 0 }}>{storyFortySixText}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 47) {
              return (
                <section
                  className="story-stage-four-reflection-page"
                  aria-label="Liwayway smile"
                  onClick={(event) => {
                    event.stopPropagation()
                    setStoryPage(48)
                  }}
                  style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${stageFourLibraryBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '16px 18px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}
                >
                  <img
                    src={liwaywaySmileImage}
                    alt="Liwayway"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      bottom: 'calc(26% - 2px)',
                      transform: 'translateX(-50%)',
                      width: 'clamp(220px, 31vw, 390px)',
                      maxHeight: '58vh',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 9px 16px rgba(0, 0, 0, 0.35))',
                      zIndex: 3,
                      pointerEvents: 'none'
                    }}
                  />

                  <section
                    aria-label="Reflection box"
                    style={{
                      position: 'relative',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(184, 227, 164, 0.82)',
                      minHeight: '26%',
                      padding: '30px 24px 28px',
                      color: '#101010',
                      fontSize: 'clamp(22px, 2.35vw, 40px)',
                      lineHeight: '1.34',
                      textAlign: 'center',
                      zIndex: 2,
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.16)'
                    }}
                  >
                    <p style={{ margin: 0 }}>{storyFortySevenText}</p>
                  </section>
                </section>
              )
            }

            if (storyPage === 48) {
              return (
                <section
                  className="story-final-victory-page"
                  aria-label="Final victory screen"
                  style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${stageThreeCompleteBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '18px',
                    display: 'grid',
                    placeItems: 'center'
                  }}
                >
                  <section
                    style={{
                      width: 'min(94%, 1060px)',
                      border: '2px solid rgba(0, 0, 0, 0.88)',
                      borderRadius: '16px',
                      background: 'rgba(237, 243, 214, 0.72)',
                      boxShadow: '0 14px 28px rgba(0, 0, 0, 0.2)',
                      padding: 'clamp(24px, 3vw, 38px)',
                      textAlign: 'center',
                      color: '#111'
                    }}
                  >
                    <h1
                      style={{
                        margin: '0 0 14px',
                        fontSize: 'clamp(34px, 3.6vw, 56px)',
                        fontWeight: '800',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {storyFortyEightTitle}
                    </h1>

                    <p
                      style={{
                        margin: '0 auto',
                        width: 'min(92%, 900px)',
                        fontSize: 'clamp(18px, 1.9vw, 30px)',
                        lineHeight: '1.4',
                        fontWeight: '600'
                      }}
                    >
                      {storyFortyEightMessage}
                    </p>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation()
                        setStoryPage(1)
                        setScreen('menu')
                      }}
                      style={{
                        marginTop: 'clamp(18px, 2.2vw, 26px)',
                        minWidth: '160px',
                        padding: '10px 18px',
                        borderRadius: '12px',
                        border: '2px solid rgba(0, 0, 0, 0.88)',
                        backgroundColor: 'rgba(195, 230, 168, 0.9)',
                        color: '#101010',
                        fontSize: 'clamp(20px, 2vw, 30px)',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      Done
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
                      onClick={(event) => {
                        event.stopPropagation()
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

    if (screen === 'admin') {
      const finalPoemAnswerLogs = playerAnswerLogs.filter(
        (entry) => typeof entry?.activity === 'string' && entry.activity.trim().toLowerCase() === 'final poem submission',
      )
      const fallbackSubmissionsFromAnswers = finalPoemAnswerLogs
        .filter((entry) => typeof entry?.id === 'string' && typeof entry?.answerText === 'string')
        .map((entry) => {
          const fallbackPlayerName =
            entry?.extra && typeof entry.extra === 'object' && typeof entry.extra.playerName === 'string' && entry.extra.playerName.trim()
              ? entry.extra.playerName.trim()
              : 'Unknown player'

          return {
            id: entry.id,
            playerName: fallbackPlayerName,
            poem: entry.answerText,
            topic: typeof entry.topic === 'string' && entry.topic.trim() ? entry.topic : 'No topic',
            submittedAt: entry.submittedAt,
          }
        })
      const adminSubmissions = [...poemSubmissions]
      const adminSubmissionIds = new Set(adminSubmissions.map((submission) => submission.id))

      for (const fallbackSubmission of fallbackSubmissionsFromAnswers) {
        if (!adminSubmissionIds.has(fallbackSubmission.id)) {
          adminSubmissions.push(fallbackSubmission)
          adminSubmissionIds.add(fallbackSubmission.id)
        }
      }

      const activeSubmission =
        adminSubmissions.find((submission) => submission.id === activeAdminSubmissionId) || adminSubmissions[0] || null
      const finalPoemAnswerLogsById = new Map(finalPoemAnswerLogs.map((entry) => [entry.id, entry]))
      const selectedSubmissionAnswerLogs = activeSubmission
        ? finalPoemAnswerLogs.filter(
            (entry) =>
              entry.id === activeSubmission.id ||
              (typeof entry.answerText === 'string' && entry.answerText.trim() === activeSubmission.poem.trim()),
          )
        : []
      const activeSubmissionLog = activeSubmission ? finalPoemAnswerLogsById.get(activeSubmission.id) : null
      const activeSubmissionPlayerName =
        typeof activeSubmission?.playerName === 'string' && activeSubmission.playerName.trim() && activeSubmission.playerName !== 'Unknown player'
          ? activeSubmission.playerName
          : activeSubmissionLog?.extra &&
              typeof activeSubmissionLog.extra === 'object' &&
              typeof activeSubmissionLog.extra.playerName === 'string' &&
              activeSubmissionLog.extra.playerName.trim()
            ? activeSubmissionLog.extra.playerName.trim()
            : 'Unknown player'

      return (
        <main className="menu-screen" aria-label="Admin submissions panel">
          {renderGlobalControls()}
          {renderInfoModal()}

          <section
            style={{
              width: 'min(95vw, 1220px)',
              margin: '20px auto',
              border: '2px solid rgba(0, 0, 0, 0.9)',
              backgroundColor: 'rgba(238, 246, 232, 0.85)',
              padding: '20px',
              color: '#102014',
              boxSizing: 'border-box',
            }}
          >
            <h1 style={{ margin: '0 0 12px', fontSize: 'clamp(30px, 4vw, 52px)' }}>Admin Panel</h1>
            <p style={{ margin: '0 0 14px', fontWeight: '700' }}>
              Poems: {adminSubmissions.length} | Player answers: {finalPoemAnswerLogs.length}
            </p>

            {cloudSyncError && (
              <p
                style={{
                  margin: '0 0 14px',
                  border: '2px solid rgba(118, 22, 22, 0.45)',
                  backgroundColor: 'rgba(255, 233, 224, 0.9)',
                  color: '#5f1010',
                  fontWeight: '700',
                  padding: '8px 10px',
                }}
              >
                {cloudSyncError}
              </p>
            )}

            <button
              type="button"
              onClick={lockAdminPanel}
              style={{
                marginBottom: '14px',
                border: '2px solid rgba(0, 0, 0, 0.86)',
                backgroundColor: 'rgba(255, 255, 255, 0.82)',
                color: '#111',
                fontWeight: '700',
                padding: '8px 14px',
                cursor: 'pointer',
              }}
            >
              Lock Admin
            </button>

            {adminSubmissions.length === 0 ? (
              <p style={{ margin: 0, fontWeight: '600' }}>No poem submissions yet.</p>
            ) : (
              <section
                style={{
                  display: 'grid',
                  gap: '12px',
                }}
              >
                <section
                  role="tablist"
                  aria-label="Submitted poems tabs"
                  style={{
                    display: 'flex',
                    gap: '8px',
                    overflowX: 'auto',
                    paddingBottom: '6px',
                  }}
                >
                  {adminSubmissions.map((submission, index) => {
                    const isActive = submission.id === activeSubmission?.id
                    const submissionPlayerName =
                      typeof submission.playerName === 'string' && submission.playerName.trim()
                        ? submission.playerName.trim()
                        : 'Unknown player'

                    return (
                      <button
                        key={submission.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveAdminSubmissionId(submission.id)}
                        style={{
                          border: '2px solid rgba(0, 0, 0, 0.82)',
                          backgroundColor: isActive ? 'rgba(195, 230, 168, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                          color: '#111',
                          fontWeight: '700',
                          padding: '8px 12px',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <span>Submission {adminSubmissions.length - index}</span>
                        <span style={{ fontSize: '0.85rem', opacity: 0.75 }}>({submissionPlayerName})</span>
                      </button>
                    )
                  })}
                </section>

                {activeSubmission && (
                  <article
                    role="tabpanel"
                    style={{
                      border: '2px solid rgba(0, 0, 0, 0.86)',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      padding: '12px',
                      maxHeight: '60vh',
                      overflowY: 'auto',
                    }}
                  >
                    <p style={{ margin: '0 0 10px', fontWeight: '800' }}>
                      Selected: Submission{' '}
                      {adminSubmissions.length - adminSubmissions.findIndex((item) => item.id === activeSubmission.id)}
                    </p>

                    <section
                      aria-label="Poem metadata"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '8px',
                        marginBottom: '10px',
                      }}
                    >
                      <section
                        style={{
                          border: '1px solid rgba(0, 0, 0, 0.25)',
                          backgroundColor: 'rgba(246, 252, 242, 0.85)',
                          padding: '8px',
                        }}
                      >
                        <p style={{ margin: '0 0 2px', fontSize: '0.8rem', opacity: 0.75 }}>Topic</p>
                        <p style={{ margin: 0, fontWeight: '700' }}>{activeSubmission.topic}</p>
                      </section>
                      <section
                        style={{
                          border: '1px solid rgba(0, 0, 0, 0.25)',
                          backgroundColor: 'rgba(246, 252, 242, 0.85)',
                          padding: '8px',
                        }}
                      >
                        <p style={{ margin: '0 0 2px', fontSize: '0.8rem', opacity: 0.75 }}>Player</p>
                        <p style={{ margin: 0, fontWeight: '700' }}>{activeSubmissionPlayerName}</p>
                      </section>
                      <section
                        style={{
                          border: '1px solid rgba(0, 0, 0, 0.25)',
                          backgroundColor: 'rgba(246, 252, 242, 0.85)',
                          padding: '8px',
                        }}
                      >
                        <p style={{ margin: '0 0 2px', fontSize: '0.8rem', opacity: 0.75 }}>Submitted</p>
                        <p style={{ margin: 0, fontWeight: '700' }}>{new Date(activeSubmission.submittedAt).toLocaleString()}</p>
                      </section>
                    </section>

                    <p style={{ margin: '0 0 6px', fontWeight: '800' }}>Poem</p>
                    <pre
                      style={{
                        margin: 0,
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'Poppins, system-ui, sans-serif',
                        lineHeight: '1.4',
                      }}
                    >
                      {activeSubmission.poem}
                    </pre>

                    <section
                      role="region"
                      aria-label="Player answer logs"
                      style={{
                        marginTop: '12px',
                        borderTop: '1px solid rgba(0, 0, 0, 0.2)',
                        paddingTop: '12px',
                        display: 'grid',
                        gap: '8px',
                      }}
                    >
                      <p style={{ margin: 0, fontWeight: '800' }}>Player Answers</p>
                      {selectedSubmissionAnswerLogs.length === 0 ? (
                        <p style={{ margin: 0, fontSize: '0.95rem' }}>No player answers yet.</p>
                      ) : (
                        selectedSubmissionAnswerLogs.map((entry) => {
                          const playerName =
                            entry?.extra && typeof entry.extra === 'object' && typeof entry.extra.playerName === 'string'
                              ? entry.extra.playerName.trim()
                              : ''
                          const isSameAsSavedPoem =
                            typeof entry.answerText === 'string' &&
                            typeof activeSubmission.poem === 'string' &&
                            entry.answerText.trim() === activeSubmission.poem.trim()

                          return (
                            <section
                              key={entry.id}
                              style={{
                                border: '1px solid rgba(0, 0, 0, 0.35)',
                                padding: '10px',
                                backgroundColor: 'rgba(246, 252, 242, 0.85)',
                              }}
                            >
                              <p style={{ margin: '0 0 6px', fontWeight: '800' }}>Stage III - Final poem submission</p>
                              <p style={{ margin: '0 0 4px', fontSize: '0.95rem' }}>Player: {playerName || 'Unknown player'}</p>
                              <p style={{ margin: '0 0 4px', fontSize: '0.95rem' }}>
                                Session: {entry.playerSessionId} | Page: {entry.page ?? '-'}
                              </p>
                              <p style={{ margin: '0 0 4px', fontSize: '0.95rem' }}>
                                Submitted: {new Date(entry.submittedAt).toLocaleString()} | Correct:{' '}
                                {entry.isCorrect === null ? 'n/a' : entry.isCorrect ? 'yes' : 'no'}
                              </p>
                              {isSameAsSavedPoem ? (
                                <p style={{ margin: 0, fontSize: '0.92rem', opacity: 0.8 }}>
                                  Answer text matches the saved poem above.
                                </p>
                              ) : (
                                <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{entry.answerText}</p>
                              )}
                            </section>
                          )
                        })
                      )}
                    </section>
                  </article>
                )}
              </section>
            )}
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
            <button type="button" onClick={openAdminPanel}>
              Admin
            </button>
            <button type="button" onClick={() => setScreen('settings')}>
              Settings
            </button>
          </div>
        </section>
      </main>
    )
  }, [
    isStageFourCompleteNoticeOpen,
    isStageThreeCompleteNoticeOpen,
    isStageTwoCompleteNoticeOpen,
    isInfoOpen,
    isMusicOn,
    isQuizSolved,
    quizStep,
    screen,
    selectedStageThreeTopic,
    stageFourSelectedChoiceId,
    stageFourSlots,
    stageFourChoiceOrder,
    activeAdminSubmissionId,
    isAdminAuthenticated,
    playerAnswerLogs,
    poemSubmissions,
    stageThreeChoiceOrder,
    stageThreeSelectedChoiceId,
    stageThreeSlots,
    isStageThreeSubmitEnabled,
    isPoemSubmitPopupOpen,
    stageTwoChoiceOrder,
    stageTwoSelectedChoiceId,
    stageTwoSlots,
    storyPage,
    unlockedLevels,
  ])

  return (
    <>
      {content}
      {renderAdminAccessButton()}
      {renderAdminAuthPrompt()}
    </>
  )
}

export default App

