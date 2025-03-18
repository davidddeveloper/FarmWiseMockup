import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BarChart, Users, Leaf } from "lucide-react"
import { EducationSlider } from "./components/EducationSlider"
import { BottomNav } from "./components/BottomNav"

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

      {/* Education Slider */}
      <Card className="mb-6 p-4 bg-white rounded-xl shadow overflow-hidden">
        <EducationSlider />
      </Card>

      {/* User Posts */}
      <Card className=" p-4 bg-white rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Community Posts</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full">
              <img 
                src="profile-pic.png"
                alt="Profile image"
                className="w-10 h-10 object-cover rounded-full" />
            </div>
            <div>
              <p className="font-semibold">David Conteh</p>
              <p className="text-sm text-gray-500">Just harvested my first batch of organic tomatoes!</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full">
              <img 
                src="lukmanaufbau.jpg"
                alt="Profile Picture"
                className="w-10 h-10 object-cover rounded-full"
                />
            </div>
            <div>
              <p className="font-semibold">Lukman Aufbau</p>
              <p className="text-sm text-gray-500">Here's a tip: Use companion planting to naturally deter pests.</p>
            </div>
          </div>
        </div>
      </Card>

      <br />
        <br />
        <br />
        
      <BottomNav />

    </div>
  )
}

