import {
  LayoutGrid,
  BarChart3,
  Plus,
  Wallet,
  Settings,
  UtensilsCrossed,
  Bus,
  ShoppingBag,
  Coffee,
  TrainFront,
  Store,
  Bell,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const QUICK_ADD = [
  { label: 'Food', icon: UtensilsCrossed, bg: 'bg-orange-100', color: 'text-orange-500' },
  { label: 'Transport', icon: Bus, bg: 'bg-blue-100', color: 'text-blue-500' },
  { label: 'Shopping', icon: ShoppingBag, bg: 'bg-purple-100', color: 'text-purple-500' },
]

const TRANSACTIONS = [
  {
    name: 'Starbucks Coffee',
    category: 'Food & Drink',
    time: '08:45 AM',
    amount: -5.5,
    icon: Coffee,
    bg: 'bg-orange-100',
    color: 'text-orange-500',
  },
  {
    name: 'City Transit Tap',
    category: 'Transport',
    time: '09:15 AM',
    amount: -2.75,
    icon: TrainFront,
    bg: 'bg-blue-100',
    color: 'text-blue-500',
  },
  {
    name: 'Whole Foods Market',
    category: 'Shopping',
    time: '12:30 PM',
    amount: -16.25,
    icon: Store,
    bg: 'bg-purple-100',
    color: 'text-purple-500',
  },
]

const NAV_ITEMS = [
  { label: 'Home', icon: LayoutGrid, active: true },
  { label: 'Reports', icon: BarChart3, active: false },
  { label: 'add', icon: Plus, active: false, isCenter: true },
  { label: 'Budget', icon: Wallet, active: false },
  { label: 'Settings', icon: Settings, active: false },
]

function ProgressRing({
  remaining,
  percentage,
}: {
  remaining: number
  percentage: number
}) {
  const size = 256
  const strokeWidth = 16
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const filled = (percentage / 100) * circumference
  const gap = circumference - filled

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={strokeWidth}
        />
        {/* Progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#13ec5b"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${filled} ${gap}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm font-medium text-[#64748b] uppercase tracking-wider">
          Remaining
        </span>
        <span className="text-5xl font-bold text-[#0f172a] mt-1">
          ${remaining.toFixed(2)}
        </span>
        <div className="mt-2 bg-[#13ec5b]/10 rounded-full px-3 py-1">
          <span className="text-xs font-semibold text-[#13ec5b]">
            {percentage}% left
          </span>
        </div>
      </div>
    </div>
  )
}

export default function DailyBudget() {
  const navigate = useNavigate()
  const remaining = 45.5
  const dailyLimit = 70
  const percentage = 65
  const spentToday = 24.5
  const monthlyLeft = 1240

  return (
    <div className="min-h-screen bg-[#f6f8f6] font-['Inter',sans-serif]">
      {/* Top Status Bar */}
      <div className="px-6 pt-6 pb-2 flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-[#64748b]">Monday, Oct 24</p>
          <h1 className="text-xl font-bold text-[#0f172a]">Hello, Alex</h1>
        </div>
        <button className="w-10 h-10 rounded-full bg-[#13ec5b]/20 border border-[#13ec5b]/30 flex items-center justify-center">
          <Bell size={20} className="text-[#13ec5b]" />
        </button>
      </div>

      {/* Main Gauge Section */}
      <div className="flex flex-col items-center mt-4">
        <ProgressRing
          remaining={remaining}
          percentage={percentage}
        />
        <p className="mt-4 text-sm italic text-[#64748b]">
          Daily limit: ${dailyLimit.toFixed(2)}
        </p>
      </div>

      {/* Metric Tiles */}
      <div className="px-6 mt-6 grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl border border-[#f1f5f9] shadow-sm p-4">
          <p className="text-xs font-medium text-[#64748b]">Spent Today</p>
          <p className="mt-1 text-lg font-bold text-[#0f172a]">
            ${spentToday.toFixed(2)}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-[#f1f5f9] shadow-sm p-4">
          <p className="text-xs font-medium text-[#64748b]">Monthly Left</p>
          <p className="mt-1 text-lg font-bold text-[#0f172a]">
            ${monthlyLeft.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Quick Add */}
      <div className="px-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#0f172a]">Quick Add</h2>
          <button className="text-sm font-semibold text-[#13ec5b]">
            Customize
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {QUICK_ADD.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                className="bg-white rounded-xl border border-[#f1f5f9] p-4 flex flex-col items-center"
              >
                <div
                  className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center`}
                >
                  <Icon size={24} className={item.color} />
                </div>
                <span className="mt-3 text-xs font-semibold text-[#0f172a]">
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Today's Activity */}
      <div className="px-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#0f172a]">Today's Activity</h2>
          <button className="text-sm text-[#94a3b8]">See all</button>
        </div>
        <div className="space-y-3">
          {TRANSACTIONS.map((tx) => {
            const Icon = tx.icon
            return (
              <div
                key={tx.name}
                className="flex items-center bg-white rounded-xl border border-[#f1f5f9] p-3"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${tx.bg} flex items-center justify-center`}
                >
                  <Icon size={20} className={tx.color} />
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <p className="text-sm font-bold text-[#0f172a] truncate">
                    {tx.name}
                  </p>
                  <p className="text-xs text-[#64748b]">
                    {tx.category} &bull; {tx.time}
                  </p>
                </div>
                <span className="text-sm font-bold text-[#0f172a] ml-2">
                  -${Math.abs(tx.amount).toFixed(2)}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="sticky bottom-0 bg-white/80 backdrop-blur-lg border-t border-[#e2e8f0] h-20">
        <div className="flex items-center justify-around h-full px-4 relative">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            if (item.isCenter) {
              return (
                <button
                  key={item.label}
                  className="w-12 h-12 -mt-6 bg-[#13ec5b] rounded-full border-4 border-[#f6f8f6] shadow-[0_10px_15px_-3px_rgba(19,236,91,0.4),0_4px_6px_-4px_rgba(19,236,91,0.4)] flex items-center justify-center"
                >
                  <Icon size={24} className="text-white" />
                </button>
              )
            }
            return (
              <button
                key={item.label}
                onClick={
                  item.label === 'Budget'
                    ? () => navigate('/')
                    : undefined
                }
                className="flex flex-col items-center gap-1"
              >
                <Icon
                  size={22}
                  className={item.active ? 'text-[#13ec5b]' : 'text-[#94a3b8]'}
                />
                <span
                  className={`text-[10px] font-bold ${
                    item.active ? 'text-[#13ec5b]' : 'text-[#94a3b8]'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
