import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const features = [
  {
    title: "AI-Powered Farming Insights",
    description: "Get personalized recommendations for your crops using our advanced AI technology.",
  },
  {
    title: "IoT Integration",
    description: "Monitor your farm's conditions in real-time with our IoT devices.",
  },
  {
    title: "Community & Knowledge Sharing",
    description: "Connect with other farmers and share sustainable farming practices.",
  },
]

export default function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-green-50 p-8">
      <h1 className="text-3xl font-bold text-green-800">Welcome to FarmWise</h1>
      <div className="flex-1 flex items-center justify-center">
        <Button onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="w-64 mx-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">{features[currentSlide].title}</h2>
          <p className="text-gray-600">{features[currentSlide].description}</p>
        </div>
        <Button onClick={() => setCurrentSlide((prev) => Math.min(features.length - 1, prev + 1))}>
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex space-x-2">
        {features.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentSlide ? "bg-green-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
      <Button className="mt-8 px-8 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700">Get Started</Button>
    </div>
  )
}

