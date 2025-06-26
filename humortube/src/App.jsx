import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const apple = 1

  return (
          <div className="center_div">
        <h1>유머튜브</h1>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/Y3nuVjtioAE?si=ndE6-r8e0eb-1OQw&amp;start=43" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/Le1JPvEcUuQ?si=BMkpz3NaZLx56Dv6&amp;start=188" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>  
  )
}

export default App
