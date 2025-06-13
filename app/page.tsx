"use client"

import { useState } from "react"
import LandingPage from "@/components/landing-page"
import MenuPage from "@/components/menu-page"
import { AnimatePresence } from "framer-motion"

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(true)
  }

  const handleBackToLanding = () => {
    setShowMenu(false)
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      <AnimatePresence mode="wait">
        {!showMenu ? (
          <LandingPage key="landing" onShowMenu={handleShowMenu} />
        ) : (
          <MenuPage key="menu" onBack={handleBackToLanding} />
        )}
      </AnimatePresence>
    </div>
  )
}
