import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { BottomNav } from "./components/BottomNav"

const data = [
  { name: "Mon", soilMoisture: 65, temperature: 28, humidity: 70 },
  { name: "Tue", soilMoisture: 59, temperature: 32, humidity: 69 },
  { name: "Wed", soilMoisture: 80, temperature: 27, humidity: 72 },
  { name: "Thu", soilMoisture: 81, temperature: 29, humidity: 70 },
  { name: "Fri", soilMoisture: 56, temperature: 31, humidity: 68 },
  { name: "Sat", soilMoisture: 55, temperature: 30, humidity: 69 },
  { name: "Sun", soilMoisture: 40, temperature: 33, humidity: 71 },
]

export default function IoTDashboard() {
  return (
    <div className="min-h-screen bg-green-50 p-4">
      <h1 className="text-2xl font-bold text-green-800 mb-4">IoT Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card className="p-4 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Soil Moisture</h2>
          <p className="text-3xl font-bold">65%</p>
          <p className="text-sm text-gray-500">Optimal range: 50-75%</p>
        </Card>
        <Card className="p-4 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Temperature</h2>
          <p className="text-3xl font-bold">28°C</p>
          <p className="text-sm text-gray-500">Optimal range: 20-30°C</p>
        </Card>
      </div>

      <Card className="p-4 bg-white rounded-xl shadow mb-4">
        <h2 className="text-lg font-semibold mb-4">Weekly Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="soilMoisture" stroke="#8884d8" />
            <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
            <Line type="monotone" dataKey="humidity" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <br />
        <br />
        <br />
        
      <BottomNav />
    </div>
  )
}

