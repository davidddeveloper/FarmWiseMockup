"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BarChart, Users, Leaf } from "lucide-react"

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-green-50 p-4">
      <h1 className="text-2xl font-bold text-green-800 mb-4">Welcome, Farmer!</h1>

      {/* IoT Dashboard */}
      <Card className="mb-6 p-4 bg-white rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Farm Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Soil Moisture</p>
            <p className="text-2xl font-bold">65%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Temperature</p>
            <p className="text-2xl font-bold">28°C</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="text-2xl font-bold">70%</p>
          </div>
        </div>
      </Card>

      {/* User Posts */}
      <Card className="mb-6 p-4 bg-white rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Community Posts</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">Just harvested my first batch of organic tomatoes!</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-semibold">Jane Smith</p>
              <p className="text-sm text-gray-500">Here's a tip: Use companion planting to naturally deter pests.</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-4">
        <Button className="flex flex-col items-center justify-center h-24 bg-white text-green-600 rounded-xl shadow">
          <BarChart className="h-8 w-8 mb-2" />
          <span>Analytics</span>
        </Button>
        <Button className="flex flex-col items-center justify-center h-24 bg-white text-green-600 rounded-xl shadow">
          <Users className="h-8 w-8 mb-2" />
          <span>Community</span>
        </Button>
        <Button className="flex flex-col items-center justify-center h-24 bg-white text-green-600 rounded-xl shadow">
          <Leaf className="h-8 w-8 mb-2" />
          <span>Tips</span>
        </Button>
      </div>
    </div>
  )
}

