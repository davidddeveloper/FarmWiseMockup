"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState("")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-800">FarmWise</h1>
        <Input
          type="tel"
          placeholder="Enter your mobile number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
        />
        <Button className="w-full py-2 text-white bg-green-600 rounded-lg hover:bg-green-700">Login</Button>
      </div>
    </div>
  )
}

