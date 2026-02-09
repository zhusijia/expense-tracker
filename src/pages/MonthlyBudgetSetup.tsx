import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ChevronLeft,
  House,
  Zap,
  CreditCard,
} from 'lucide-react'

const FIXED_EXPENSES = [
  { id: 'rent', label: 'Rent & Housing', amount: 1200, icon: House },
  { id: 'utilities', label: 'Utilities & Bills', amount: 250, icon: Zap },
  { id: 'subscriptions', label: 'Subscriptions', amount: 45, icon: CreditCard },
]

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export default function MonthlyBudgetSetup() {
  const navigate = useNavigate()
  const [budget, setBudget] = useState('2400.00')
  const [enabledExpenses, setEnabledExpenses] = useState<Record<string, boolean>>({
    rent: true,
    utilities: true,
    subscriptions: false,
  })

  const budgetNum = parseFloat(budget.replace(/,/g, '')) || 0
  const totalFixed = FIXED_EXPENSES.reduce(
    (sum, e) => sum + (enabledExpenses[e.id] ? e.amount : 0),
    0
  )
  const remaining = budgetNum - totalFixed
  const daysRemaining = 22
  const suggestedDaily = remaining > 0 ? remaining / daysRemaining : 0

  const toggleExpense = (id: string) => {
    setEnabledExpenses((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, '')
    setBudget(raw)
  }

  return (
    <div className="min-h-screen bg-[#f6f8f6] font-['Inter',sans-serif]">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center h-16 px-6 bg-[#f6f8f6]/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="text-[#111813]">
          <ChevronLeft size={24} />
        </button>
        <span className="flex-1 text-center text-sm font-semibold text-[#111813] tracking-tight">
          Monthly Budget Setup
        </span>
        <div className="w-6" />
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        {/* Heading */}
        <div className="text-center mt-6">
          <h1 className="text-[32px] font-bold text-[#111813] tracking-tight">
            Set your limit
          </h1>
          <p className="mt-2 text-sm text-[#61896f] leading-5">
            Enter your total monthly allowance to calculate your
            <br />
            daily spend power.
          </p>
        </div>

        {/* Main Input */}
        <div className="mt-10">
          <label className="block text-xs font-bold text-[#61896f] tracking-[1.2px] uppercase mb-2">
            Total Monthly Budget
          </label>
          <div className="flex items-center overflow-hidden">
            <span className="text-2xl sm:text-3xl font-bold text-[#111813]/40 mr-1 shrink-0">$</span>
            <input
              type="text"
              value={budget}
              onChange={handleBudgetChange}
              className="flex-1 min-w-0 text-center text-4xl sm:text-5xl font-bold text-[#111813] bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Suggested Daily Limit Card */}
        <div className="mt-10 bg-white rounded-xl border border-[#dbe6df]/30 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Green gradient background */}
          <div className="relative h-32 bg-gradient-to-br from-[#0d3320] via-[#155c3a] to-[#1a8a52] overflow-hidden">
            {/* Decorative bars */}
            <div className="absolute inset-0 flex items-end justify-around px-4 pb-2 opacity-30">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-[#13ec5b]/60 rounded-t"
                  style={{ height: `${20 + Math.random() * 60}%` }}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
          </div>

          <div className="relative -mt-14 px-6 pb-6 text-center">
            <div className="inline-block bg-[#13ec5b]/20 rounded-full px-3 py-1 mb-3">
              <span className="text-[10px] font-bold text-[#0d7a2f]">
                {daysRemaining} DAYS REMAINING
              </span>
            </div>
            <div className="text-5xl font-extrabold text-[#111813] tracking-tight">
              ${formatCurrency(suggestedDaily)}
            </div>
            <div className="mt-1 text-base font-medium text-[#61896f]">
              Suggested Daily Limit
            </div>
          </div>
        </div>

        {/* Fixed Expenses */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#111813]">Fixed Expenses</h2>
            <button className="text-sm font-semibold text-[#13ec5b]">
              + Add New
            </button>
          </div>

          <div className="space-y-3">
            {FIXED_EXPENSES.map((expense) => {
              const Icon = expense.icon
              const enabled = enabledExpenses[expense.id]
              return (
                <div
                  key={expense.id}
                  className="flex items-center bg-white rounded-xl border border-[#dbe6df]/30 p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#f0f9f3] flex items-center justify-center">
                    <Icon size={20} className="text-[#13ec5b]" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="text-sm font-bold text-[#111813]">
                      {expense.label}
                    </div>
                    <div className="text-xs text-[#61896f]">
                      ${formatCurrency(expense.amount)}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleExpense(expense.id)}
                    className={`w-11 h-6 rounded-full relative transition-colors ${
                      enabled ? 'bg-[#13ec5b]' : 'bg-gray-200'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                        enabled ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Button */}
      <div className="sticky bottom-0 p-6 bg-gradient-to-t from-[#f6f8f6] via-[#f6f8f6]/95 to-transparent">
        <button
          onClick={() => navigate('/daily')}
          className="w-full h-14 bg-[#13ec5b] rounded-xl text-[#102216] font-bold text-base shadow-[0_10px_15px_-3px_rgba(19,236,91,0.2),0_4px_6px_-4px_rgba(19,236,91,0.2)]"
        >
          Start Tracking
        </button>
      </div>
    </div>
  )
}
