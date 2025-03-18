"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "AI-Powered Farming Insights",
    description: "Get personalized recommendations for your crops using our advanced AI technology.",
    image: "/ai-farming.jpg",
  },
  {
    title: "IoT Integration",
    description: "Monitor your farm's conditions in real-time with our IoT devices.",
    image: "/iot-integration.jpg",
  },
  {
    title: "Community & Knowledge Sharing",
    description: "Connect with other farmers and share sustainable farming practices.",
    image: "/community-sharing.jpg",
  },
]

export default function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-green-50 p-6">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-8">Welcome to FarmWise</h1>

        <div className="relative w-full h-64 mb-8">
          <Image
            src={features[currentSlide].image || "/placeholder.svg"}
            alt={features[currentSlide].title}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">{features[currentSlide].title}</h2>
          <p className="text-gray-600">{features[currentSlide].description}</p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <Button onClick={prevSlide} variant="outline" className="p-2">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="flex space-x-2">
            {features.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${index === currentSlide ? "bg-green-600" : "bg-gray-300"}`}
              />
            ))}
          </div>
          <Button onClick={nextSlide} variant="outline" className="p-2">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <Button className="w-full max-w-md py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-300">
        Get Started
      </Button>
    </div>
  )
}