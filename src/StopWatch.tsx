import './StopWatch.css'

import { format } from "date-fns"
import { useRef, useState } from "react"
import { LetsIconsStopLight } from './components/LetsIconsStopLight'
import levelUpSound from './assets/level-up-2-199574.mp3'

let init = 10 * 60 * 1000

export default function StopWatch() {
  const [running, setRunning] = useState(false)

  const [milliseconds, setMilliseconds] = useState(init)

  const timerIdRef = useRef(-1)
  
  function onNumberChange(val: string) {
    const num = +val

    const ms = num * 60 * 1000
    init = ms
    setMilliseconds(ms)
  }

  function start() {
    setRunning(true)

    let i = milliseconds
    const h = () => {
      i = i - 1000

      if (i < 0) {
        const a = new Audio(levelUpSound)
        a.play()

        stop()
        return
      }

      setMilliseconds(i)
    }

    timerIdRef.current = setInterval(h, 100)
    
  }
  
  function stop() {
    setRunning(false)
    setMilliseconds(init)
    clearInterval(timerIdRef.current)
  }

  const minutes = milliseconds / 60 / 1000
  const currentTime = format(milliseconds, 'mm:ss')

  function render() {
    if (running) {
      return (
        <div className='content-area'>
          <p className="time">{currentTime}</p>
          <LetsIconsStopLight className='stop-icon' onClick={stop} />
        </div>
      )
    } else {
      return (
        <div>
          <div className="form">
            <label>
              <span>分钟：</span>
              <input type="number" value={minutes} onChange={e => onNumberChange(e.target.value)} />
            </label>
          </div>
          <button onClick={start}>开始</button>
        </div>
      )
    }
  }

  return (
    <div>
      {render()}
    </div>
  )
}
