import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-white font-sans">
      <header className="p-4 border-b border-white/10 flex justify-between items-center bg-obsidian/80 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-neonBlue to-neonPink bg-clip-text text-transparent">
          Nexus AI
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">GenAI Observability</span>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neonBlue to-neonPink"></div>
        </div>
      </header>
      <main className="p-6">
        <Dashboard />
      </main>
    </div>
  )
}

export default App
