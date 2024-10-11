import { useState } from 'react'
import Layout from './components/layout'
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout>
      <div>
        child
      </div>
    </Layout>
    </>
  )
}