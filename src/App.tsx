import { useState } from 'react'
import { supabase } from './lib/supabase'

export default function App() {
  const [status, setStatus] = useState('Not tested yet')
  const [loading, setLoading] = useState(false)

  const testConnection = async () => {
    setLoading(true)
    setStatus('Testing...')
    
    const { error } = await supabase.from('test').select('*').limit(1)
    
    setStatus(error ? `❌ ${error.message}` : '✅ Connected to Supabase!')
    setLoading(false)
  }

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Caesar Test</h1>
      <button onClick={testConnection} disabled={loading}>
        {loading ? 'Testing...' : 'Test Supabase Connection'}
      </button>
      <p>{status}</p>
    </div>
  )
}