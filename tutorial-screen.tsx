"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Download, Camera, Brain, Leaf, AlertTriangle, Microscope } from "lucide-react"
import Image from "next/image"

const tutorialSteps = [
  {
    title: "Download the App",
    description: "Get started by downloading FarmWise and creating your account.",
    icon: Download,
    image: "/download-app.jpg",
  },
  {
    title: "Snap Soil/Plot Image",
    description: "Take clear photos of your land or soil for analysis.",
    icon: Camera,
    image: "/soil-image.jpg",
  },
  {
    title: "AI Analyzes Data",
    description: "Our advanced AI models assess soil quality and environmental conditions.",
    icon: Brain,
    image: "/ai-analysis.jpg",
  },
  {
    title: "Receive Recommendations",
    description: "Get personalized insights on crop choices and farming practices.",
    icon: Leaf,
    image: "/recommendations.jpg",
  },
  {
    title: "Pest and Disease Detection",
    description: "Upload photos of affected plants for instant diagnosis and treatment suggestions.",
    icon: AlertTriangle,
    image: "/pest-detection.jpg",
  },
  {
    title: "Soil Quality Testing",
    description: "Get instant soil analysis to determine suitability for specific crops.",
    icon: Microscope,
    image: "/soil-testing.jpg",
  },
]

export default function TutorialScreens() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % tutorialSteps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + tutorialSteps.length) % tutorialSteps.length)
  }

  const CurrentIcon = tutorialSteps[currentStep].icon

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-green-50 p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-8">How FarmWise Works</h1>

        <Card className="w-full p-6 mb-8 bg-white rounded-xl shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-green-100 rounded-full">
              <CurrentIcon className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">{tutorialSteps[currentStep].title}</h2>
          <p className="text-gray-600 text-center mb-6">{tutorialSteps[currentStep].description}</p>
          <div className="relative w-full h-48 mb-6">
            <Image
              src={tutorialSteps[currentStep].image || "/placeholder.svg"}
              alt={tutorialSteps[currentStep].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {currentStep === 5 && (
            <div className="bg-green-100 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-green-800 mb-2">Example: Soil Testing for Abu</h3>
              <p className="text-sm text-green-700">
                "Hey Abu, the soil is not suitable for planting corn due to its low nitrogen content and high clay
                composition. Consider amending the soil or choosing alternative crops better suited to these
                conditions."
              </p>
            </div>
          )}
          <div className="flex justify-between items-center">
            <Button onClick={prevStep} variant="outline" className="p-2">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="flex space-x-2">
              {tutorialSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentStep ? "bg-green-600" : "bg-gray-300"}`}
                />
              ))}
            </div>
            <Button onClick={nextStep} variant="outline" className="p-2">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </Card>
      </div>

      <Button className="w-full max-w-md py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-300">
        {currentStep === tutorialSteps.length - 1 ? "Get Started" : "Next"}
      </Button>
    </div>
  )
}

