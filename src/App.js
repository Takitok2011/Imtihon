import React from 'react'
import Card from './components/card/Card'
import Img from './assets/images/image 3.png'
import Img2 from './assets/images/image 2.png'
import './App.css'

export default function App() {
  return (
    <div className='App'>
      <div className='section'>
        <h3 className='title'>How to start Tik Tok video download with our service?</h3>
        <p className='description'>To save TikTok video using SaveFrom.net, you need to follow three short steps. Have a look at them:</p>
      </div>
      <div className="card_wrap">
        <Card img={Img} title={"1. Copy the URL"} descrition={"Open the Tik Tok page with a video that you want to save, copy its URL and go back to SaveFrom.net."} />
        <Card img={Img2} title={"2. Paste the URL onto the input field"} descrition={"Paste the URL of the into the input field of the top of the page and click on the right side the button to run the downloading process."} />
        <Card img={Img} title={"3. Click the download button"} descrition={"To notice that by default the best quality will be selected but if you would like a specific quality or format, there are several options you can choose from."} />
      </div>

    </div>
  )
}
