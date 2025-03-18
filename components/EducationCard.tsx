import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface EducationCardProps {
  title: string
  description: string
  sponsor: string
  imageUrl: string
}

export function EducationCard({ title, description, sponsor, imageUrl }: EducationCardProps) {
  return (
    <Card className="w-[280px] bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <div className="relative h-40">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" />
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-green-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <p className="text-xs text-gray-500">From {sponsor}</p>
      </CardContent>
    </Card>
  )
}