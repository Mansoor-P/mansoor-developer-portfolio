// src/App.jsx
import Navbar from './components/Navbar'
import './styles/index.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <Navbar />
      <main className="flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the App 🚀</h2>
        <p>Hello Mansoor</p>
      </main>
    </div>
  )
}

export default App
