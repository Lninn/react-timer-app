import './Root.css'

import { Outlet, Link } from 'react-router-dom'

export default function Root() {
  return (
    <div>
      <header className='header'>
        <h2>时间统计</h2>
        <nav>
          <Link to={'/'}>主页</Link>
        </nav>
      </header>
      <main className='main-content'>
        <Outlet />
      </main>
    </div>
  )
}
