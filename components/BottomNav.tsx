"use client"
import { Home, Users, MessageCircle, BarChart } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { icon: Home, label: "Home", href: "/home" },
  { icon: Users, label: "Community", href: "/community" },
  { icon: MessageCircle, label: "Chat", href: "/chat" },
  { icon: BarChart, label: "Dashboard", href: "/analytics" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-16 h-16 ${
                isActive ? "text-green-600" : "text-gray-600"
              }`}
            >
              <item.icon className={`h-6 w-6 ${isActive ? "text-green-600" : "text-gray-600"}`} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}