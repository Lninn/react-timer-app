import './Root.css'

import { Outlet } from 'react-router-dom'
import { TypcnFlowSwitch } from './TypcnFlowSwitch'
import { useApp } from '../AppContext'

export default function Root() {
  const { toggleSettingOpen } = useApp()

  return (
    <div>
      <header className='header'>
        <h2>计时器</h2>
        <nav className='nav'>
          <TypcnFlowSwitch onClick={() => toggleSettingOpen(true)} />
        </nav>
      </header>
      <main className='main-content'>
        <Outlet />
      </main>
    </div>
  )
}
