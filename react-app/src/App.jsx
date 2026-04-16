import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import websiteImg from './assets/WEBSITE.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const pages = ['Page 1: Get Started', 'Page 2: Next Steps', 'Page 3: Resources', 'Page 4: Website']

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let newPage = 1
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          if (section.id === 'center') {
            newPage = 1
          } else if (section.id === 'next-steps') {
            newPage = 2
          } else if (section.id === 'website-page') {
            newPage = 4
          }
        }
      })
      setCurrentPage(newPage)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.95)', color: '#00ff00', padding: '10px 20px', zIndex: 1000, textAlign: 'center', borderBottom: '2px solid #00ff00' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px' }}>
          {pages.map((page, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                backgroundColor: currentPage === idx + 1 ? '#00ff00' : 'rgba(0,255,0,0.3)',
                color: currentPage === idx + 1 ? '#000' : '#00ff00',
                padding: '4px 10px',
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '14px',
                minWidth: '30px',
                textAlign: 'center'
              }}>
                {idx + 1}
              </div>
              {idx < pages.length - 1 && <span style={{ color: '#00ff00', opacity: 0.5 }}>|</span>}
            </div>
          ))}
        </div>
        <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>📍 Currently on: {pages[currentPage - 1]}</p>
      </nav>
      <section id="center" style={{ paddingTop: '50px' }}>
              <div style={{ textAlign: 'center', paddingTop: '100px', paddingBottom: '20px', backgroundColor: 'rgba(0,0,0,0.1)', borderBottom: '2px solid #ccc', margin: '0 0 20px 0' }}>
                <h2 style={{ margin: '10px 0', fontSize: '28px', fontWeight: 'bold' }}>📖 Page 1</h2>
              </div>
              <section id="center" style={{ paddingTop: '20px' }}>
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <div style={{ textAlign: 'center', padding: '30px 20px', backgroundColor: 'rgba(0,0,0,0.1)', borderBottom: '2px solid #ccc', margin: '20px 0' }}>
        <h2 style={{ margin: '10px 0', fontSize: '28px', fontWeight: 'bold' }}>📖 Page 2</h2>
      </div>
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      <div style={{ textAlign: 'center', padding: '30px 20px', backgroundColor: 'rgba(0,0,0,0.1)', borderBottom: '2px solid #ccc', margin: '20px 0' }}>
        <h2 style={{ margin: '10px 0', fontSize: '28px', fontWeight: 'bold' }}>📖 Page 4: Website</h2>
      </div>
      <section id="spacer"></section>
      <section id="website-page" style={{ backgroundImage: `url(${websiteImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh', marginTop: '20px' }}>
      </section>
      </section>
    </>
  )
}

export default App
