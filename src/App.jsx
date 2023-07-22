import "../scss/globals.scss";
import '../scss/hero.scss'
import "../scss/curleyButton.scss"
import "../scss/sectionDevider.scss"
import "../scss/footer.scss"
import "../scss/cards.scss"
import "../scss/river.scss"
import "../scss/scroll.scss"
import "../scss/images.scss"
/// icons
import { AiFillGithub } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { LoremIpsum } from "lorem-ipsum";
import { useEffect, useRef } from 'react'


/** 
 * @param range: {min:5, max:30}
 */

function Paragraph({ min, max }) {
  const randRange = Math.floor(
    Math.random() *
      (min && max) ?
      max - min + 1 + min
      :
      (25 - 10 + 1) + 10
  )
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8, min: 4
    }, wordsPerSentence: {
      max: 16, min: 4
    }
  })
  const randText = lorem.generateWords(randRange)
  return <>{randText}</>
}

function Test({ children, }) {
  const hiddenElements = document.querySelectorAll('.hidden')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else { entry.target.classList.remove('show') }
    })
  }); const item = useRef()
  useEffect(() => {
    observer.observe(item.current)
  }, [])
  return <div ref={item} className="hidden">{children}</div>
}

export default function App() {
  return <>
    <header className='hero'>
      <div className='con'>
        <h1 className='logo'>Still Waters</h1>
        <div className='seperator' />
        <p>Im sorry i really dont know what to write in these paragraphs. Thanks for checking
          this out. hope you like the layout!</p>
      </div>
      <div className="btns">
        <button className="curleyBtn about">About</button>
        <button className="curleyBtn whatWeDo">What we do</button>
        <button className="curleyBtn contactUs">Contact us</button>
      </div>
      <div className="custom-shape-divider-bottom-1689875388">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
        </svg>
      </div>
    </header>
    <main>

      <div className='river' />
      <section className='cards'>
        {Array(4).fill(
          <div className="card">
            <h2>Header</h2>
            <p><Paragraph /></p>
          </div>
        ).map(i => i)}
      </section>

      {/* <div className="images">

        <div className="verticalCon">
          <figure>
            <img src="https://picsum.photos/350/300" />
            <figcaption>random image</figcaption>
          </figure>
          <div className='text'>
            <h1>im a filler header</h1>
            <p><Paragraph min={30} max={50} /></p>
          </div>
        </div>
        <div className="verticalCon">
          <figure>
            <img src="https://picsum.photos/351/300" />
            <figcaption>random image</figcaption>
          </figure>
          <div className='text'>
            <h1>im a filler header</h1>
            <p><Paragraph min={30} max={50} /></p>
          </div>
        </div>

        <div className="verticalCon">
          <figure>
            <img src="https://picsum.photos/349/300" />
            <figcaption>random image</figcaption>
          </figure>
          <div className='text'>
            <h1>im a filler header</h1>
            <p><Paragraph min={30} max={50} /></p>
          </div>
        </div>
        <div className="verticalCon">
          <figure>
            <img src="https://picsum.photos/350/301" />
            <figcaption>random image</figcaption>
          </figure>
          <div className='text'>
            <h1>im a filler header</h1>
            <p><Paragraph min={30} max={50} /></p>
          </div>
        </div>

      </div> */}

    </main>
    <footer>
      <div>
        {Array(4).fill(
          <section>
            <h1>filler header</h1>
            <p><Paragraph /></p>
          </section>
        ).map(a => a)}
      </div>
      <h1 className="logo">Still Waters</h1>
      <div className="links">
        <a> <AiFillGithub /> Github</a>
        <a> <AiFillFacebook /> Facebook</a>
        <a> <BsTwitter /> Linkedin</a>
        <a> <AiFillLinkedin /> Twitter</a>
      </div>
    </footer>
  </>
}