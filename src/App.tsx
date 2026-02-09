import { Routes, Route } from 'react-router-dom'
import MonthlyBudgetSetup from './pages/MonthlyBudgetSetup'
import DailyBudget from './pages/DailyBudget'

function App() {
  return (
    <div className="relative max-w-md mx-auto">
      <Routes>
        <Route path="/" element={<MonthlyBudgetSetup />} />
        <Route path="/daily" element={<DailyBudget />} />
      </Routes>
    </div>
  )
}

export default App
