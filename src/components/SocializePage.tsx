"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Image, MessageCircle, Heart, Share2 } from "lucide-react"

export default function SocializePage() {
  const [post, setPost] = useState("")

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <h1 className="text-2xl font-bold text-green-800 mb-4">FarmWise Community</h1>

      {/* Create Post */}
      <Card className="mb-6 p-4 bg-white rounded-xl shadow">
        <Input
          type="text"
          placeholder="Share your farming journey..."
          value={post}
          onChange={(e) => setPost(e.target.value)}
          className="mb-4"
        />
        <div className="flex justify-between">
          <Button className="flex items-center space-x-2">
            <Image className="h-5 w-5" />
            <span>Add Photo/Video</span>
          </Button>
          <Button className="bg-green-600 text-white">Post</Button>
        </div>
      </Card>

      {/* Posts */}
      <div className="space-y-6">
        <Card className="p-4 bg-white rounded-xl shadow">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </div>

          <p className="mb-4">
            Just harvested my first batch of organic tomatoes! The sustainable farming techniques I learned from
            FarmWise really paid off. Here's a photo of today's yield:
          </p>
          <img
            src="/placeholder.svg?height=200&width=400"
            alt="Organic tomatoes harvest"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between text-gray-500">
            <Button variant="ghost" className="flex items-center space-x-1">
              <Heart className="h-5 w-5" />
              <span>Like</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-1">
              <MessageCircle className="h-5 w-5" />
              <span>Comment</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-1">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </Button>
          </div>
        </Card>

        <Card className="p-4 bg-white rounded-xl shadow">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-semibold">Jane Smith</p>
              <p className="text-sm text-gray-500">1 day ago</p>
            </div>
          </div>
          <p className="mb-4">
            Here's a quick tip for all FarmWise users: Use companion planting to naturally deter pests. I've had great
            success planting marigolds near my vegetables!
          </p>
          <div className="flex justify-between text-gray-500">
            <Button variant="ghost" className="flex items-center space-x-1">
              <Heart className="h-5 w-5" />
              <span>Like</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-1">
              <MessageCircle className="h-5 w-5" />
              <span>Comment</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-1">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

