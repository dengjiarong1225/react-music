import './index.scss';
import BaseBackground from './components/baseBackground';
import LayoutTop from './components/layoutTop';
import { FirstRoute } from 'src/routes/index'

export default function IndexPage() {
  return (
    <div className="app">
      <BaseBackground />

      <main className="main-container">
        <LayoutTop />
        <FirstRoute />
      </main>
    </div>
  )
}
