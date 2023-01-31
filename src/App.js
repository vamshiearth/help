import './App.css'
import Image from './img.jpeg'
function App() {
  return (
    <div className='home'>
      <div className='home__leftContainer'>
        <div className='home__leftContainerTop'>
          <div className='home__leftContainer_img'>
            <img src={Image} alt='' className='img' />
          </div>
          Top
        </div>
        <div className='home__leftContainerMiddle'>Middle</div>
        <div className='home__leftContainerBottom'>Bottom</div>
      </div>
      <div className='home__rightContainer'>Right</div>
    </div>
  )
}

export default App
