import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, Send } from "lucide-react"
import { BottomNav } from "./components/BottomNav"

export default function ChatbotScreen() {
  const [message, setMessage] = useState("")

  return (
    <div className="flex flex-col h-screen bg-green-50">
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Chat messages would go here */}
        <div className="mb-4 p-2 bg-white rounded-lg shadow max-w-xs">
          Hello! How can I assist you with your farming today?
        </div>
        <div className="mb-4 p-2 bg-green-200 rounded-lg shadow max-w-xs ml-auto">
          What's the best time to plant tomatoes?
        </div>
        <div className="mb-4 p-2 bg-white rounded-lg shadow max-w-xs">
          The best time to plant tomatoes is typically in the spring, after the last frost date in your area. This
          ensures warm soil temperatures for optimal growth.
        </div>
      </div>
      <div className="p-4 bg-white border-t">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1"
          />
          <Button className="p-2 bg-green-600 text-white rounded-full">
            <Send className="h-5 w-5" />
          </Button>
          <Button className="p-2 bg-blue-600 text-white rounded-full">
            <Mic className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <br />
        <br />
        <br />

      <BottomNav />
    </div>
  )
}

