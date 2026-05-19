import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

function App() {
  const [activeRepo, setActiveRepo] = useState<string | null>(null);

  const handleAnalyzeRepo = (repoUrl: string) => {
    // Simulate analyzing repository
    setActiveRepo(repoUrl || 'github.com/example/demo-repo');
  };

  const handleExit = () => {
    setActiveRepo(null);
  };

  return (
    <div className="app">
      {!activeRepo ? (
        <LandingPage onAnalyze={handleAnalyzeRepo} />
      ) : (
        <Dashboard repo={activeRepo} onExit={handleExit} />
      )}
    </div>
  );
}

export default App;
