import './Root.css'

import { Outlet } from 'react-router-dom'
import { SolarSettingsLinear } from './SolarSettingsLinear'

export default function Root() {
  return (
    <div>
      <header className='header'>
        <h2>计时器</h2>
        <nav className='nav'>
          <SolarSettingsLinear />
        </nav>
      </header>
      <main className='main-content'>
        <Outlet />
      </main>
    </div>
  )
}
