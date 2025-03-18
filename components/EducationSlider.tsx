"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EducationCard } from "./EducationCard"

const educationContent = [
  {
    title: "How to Plant Fonday",
    description: "Learn the best practices for planting this nutritious local crop.",
    sponsor: "UNDP",
    imageUrl: "/millet.jpg?height=160&width=280&text=Fundai+Planting",
  },
  {
    title: "Benefits of Crop Rotation",
    description: "Discover how rotating crops can improve soil health and yield.",
    sponsor: "FAO",
    imageUrl: "/crop-rotation.jpg?height=160&width=280&text=Crop+Rotation",
  },
  {
    title: "Water Conservation Techniques",
    description: "Simple methods to save water in your farm.",
    sponsor: "Sierra Leone Agricultural Research Institute",
    imageUrl: "/water-conservation.jpg?height=160&width=280&text=Water+Conservation",
  },
  {
    title: "Organic Pest Control",
    description: "Natural ways to protect your crops from pests and diseases.",
    sponsor: "World Bank",
    imageUrl: "/pest-and-disease.jpg?height=160&width=280&text=Organic+Pest+Control",
  },
  {
    title: "Post-Harvest Storage",
    description: "Learn how to properly store your harvest to reduce losses.",
    sponsor: "USAID",
    imageUrl: "/harvest.jpg?height=160&width=280&text=Post-Harvest+Storage",
  },
]

export function EducationSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)

  const updateButtonVisibility = () => {
    if (sliderRef.current) {
      setShowLeftButton(sliderRef.current.scrollLeft > 0)
      setShowRightButton(sliderRef.current.scrollLeft < sliderRef.current.scrollWidth - sliderRef.current.clientWidth)
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener("scroll", updateButtonVisibility)
      return () => slider.removeEventListener("scroll", updateButtonVisibility)
    }
  }, [sliderRef]) // Added sliderRef to dependencies

  const scroll = (direction: "left" | "right") => {
    const container = sliderRef.current
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative py-2">
      <h2 className="text-xl font-semibold text-green-800 mb-4">Educational Resources</h2>
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {educationContent.map((content, index) => (
            <div key={index} className="snap-start">
              <EducationCard {...content} />
            </div>
          ))}
        </div>
        {showLeftButton && (
          <Button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-green-600 rounded-full shadow-md p-2"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        )}
        {showRightButton && (
          <Button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-green-600 rounded-full shadow-md p-2"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        )}
      </div>
    </div>
  )
}