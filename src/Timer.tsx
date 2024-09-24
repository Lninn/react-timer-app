import './Timer.css'

import { useRef, useState } from 'react'
import { format } from 'date-fns'

export default function Timer() {

  const [running, setRunning] = useState(false)
  const [inPause, setInPause] = useState(false)
  const [milliseconds, setMilliseconds] = useState(0)

  const timerIdRef = useRef(-1)

  function onStart() {
    if (!running) {
      setMilliseconds(0)
      setInPause(false)
      
      setRunning(true)
      
      working()
    } else {
      setRunning(false)
      clearInterval(timerIdRef.current)
    }
  }

  function onPause() {
    if (!running) return

    if (inPause) {
      working(milliseconds)
    } else {
      clearInterval(timerIdRef.current)
    }

    setInPause(!inPause)
  }

  function working(initial = 0) {
    let i = initial
    const h = () => {
      i = i + 1000
      
      setMilliseconds(i)
    }
    timerIdRef.current = setInterval(h, 100)
  }

  const currentTime = format(milliseconds, 'mm:ss')

  return (
    <div>
      <p className='time'>{currentTime}</p>

      <div className='control-bar'>
        <button onClick={onStart}>
          {running ? '结束' : '开始'}
        </button>
        <button onClick={onPause} disabled={!running} >暂停</button>
      </div>
    </div>
  )
}
