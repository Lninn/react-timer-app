import './App.css'

import { useRef, useState } from 'react'
import { format } from 'date-fns'
import Modal from 'react-modal';
import { useApp } from './AppContext';
import { EmojioneV1CancellationX } from './components/EmojioneV1CancellationX';

function App() {

  const [running, setRunning] = useState(false)
  const [inPause, setInPause] = useState(false)
  const [milliseconds, setMilliseconds] = useState(0)

  const timerIdRef = useRef(-1)

  const {settingOpen, toggleSettingOpen } = useApp()

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

  function closeModal() {
    toggleSettingOpen(false)
  }

  const currentTime = format(milliseconds, 'mm:ss')

  return (
    <>
      <p className='time'>{currentTime}</p>

      <div className='control-bar'>
        <button onClick={onStart}>
          {running ? '结束' : '开始'}
        </button>
        <button onClick={onPause} disabled={!running} >暂停</button>
      </div>

      <Modal
        isOpen={settingOpen}
        contentLabel="Example Modal"
        style={{ content: { width: 300, margin: '0 auto' } }}
        className={'setting-modal'}
      >
        <div className='setting-header'>
          <p>SETTING</p>
          <EmojioneV1CancellationX onClick={closeModal} />
        </div>
        <div className='settting-content'>
          <label>
            <span>分钟：</span>
            <input type='number' defaultValue={10} />
          </label>
        </div>
      </Modal>
    </>
  )
}

export default App
