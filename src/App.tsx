import { useState } from 'react'
import Navigation from './components/Navigation'

export default function App() {
  const [activeTab, setActiveTab] = useState('studio')
  const [isRailOpen, setIsRailOpen] = useState(false)

  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh', color: 'white' }}>
      <Navigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isRailOpen={isRailOpen}
        toggleRail={() => setIsRailOpen(!isRailOpen)}
      />
      
      <main style={{ marginLeft: '64px', padding: '40px' }}>
        <h1>{activeTab}</h1>
        <p>This is the {activeTab} page. Click the icons on the left to switch tabs.</p>
      </main>
    </div>
  )
}
