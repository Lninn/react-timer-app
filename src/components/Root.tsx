import './Root.css'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { TypcnFlowSwitch } from './TypcnFlowSwitch'

export default function Root() {
  const { pathname } = useLocation()
  const navigate = useNavigate();

  function toggleApp() {
    const newPathname = pathname === '/timer' ? '/stop-watch' : '/timer'
    navigate(newPathname)
  }

  const title = pathname === '/timer' ? '秒表' : '定时器'

  return (
    <div>
      <header className='header'>
        <h2>{title}</h2>
        <nav className='nav'>
          <TypcnFlowSwitch onClick={toggleApp} />
        </nav>
      </header>
      <main className='main-content'>
        <Outlet />
      </main>
    </div>
  )
}
