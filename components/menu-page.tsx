"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

interface MenuPageProps {
  onBack: () => void
}

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
}

export default function MenuPage({ onBack }: MenuPageProps) {
  const [activeCategory, setActiveCategory] = useState("main")

  const categories = [
    { id: "main", name: "Main Course", icon: "🍽️" },
    { id: "seafood", name: "Seafood", icon: "🦞" },
    { id: "grill", name: "Grill & BBQ", icon: "🥩" },
    { id: "pasta", name: "Pasta & Risotto", icon: "🍝" },
    { id: "asian", name: "Asian Fusion", icon: "🥢" },
    { id: "healthy", name: "Healthy Bowls", icon: "🥗" },
    { id: "small", name: "Small Plates", icon: "🍤" },
    { id: "desserts", name: "Desserts", icon: "🍰" },
    { id: "cocktails", name: "Signature Cocktails", icon: "🍹" },
  ]

  const mainCourses: MenuItem[] = [
    {
      name: "NASI GORENG SEAFOOD",
      description: "Fried rice with fresh seafood, aromatic spices and herbs",
      price: "$18",
      image: "/placeholder.svg?height=200&width=300&text=Nasi+Goreng+Seafood",
    },
    {
      name: "KWETIAUW SEAFOOD",
      description: "Stir-fried flat noodles with seafood, vegetables and soy sauce",
      price: "$19",
      image: "/placeholder.svg?height=200&width=300&text=Kwetiauw+Seafood",
    },
    {
      name: "BREAD & BUTTER",
      description: "Freshly baked artisan bread served with premium butter",
      price: "$7",
      image: "/placeholder.svg?height=200&width=300&text=Artisan+Bread",
    },
    {
      name: "MIE GORENG",
      description: "Indonesian style fried noodles with vegetables and spices",
      price: "$16",
      image: "/placeholder.svg?height=200&width=300&text=Mie+Goreng",
    },
    {
      name: "SALMON SASHIMI",
      description: "Fresh salmon slices served with wasabi and soy sauce",
      price: "$27",
      image: "/placeholder.svg?height=200&width=300&text=Salmon+Sashimi",
    },
    {
      name: "RENDANG BAKAR",
      description: "Grilled beef rendang with traditional Indonesian spices",
      price: "$26",
      image: "/placeholder.svg?height=200&width=300&text=Rendang+Bakar",
    },
  ]

  const seafood: MenuItem[] = [
    {
      name: "GRILLED OCTOPUS",
      description: "Tender octopus grilled with olive oil, lemon and herbs",
      price: "$28",
      image: "/placeholder.svg?height=200&width=300&text=Grilled+Octopus",
    },
    {
      name: "LOBSTER THERMIDOR",
      description: "Lobster meat in creamy sauce, topped with cheese and broiled",
      price: "$42",
      image: "/placeholder.svg?height=200&width=300&text=Lobster+Thermidor",
    },
    {
      name: "SEAFOOD PAELLA",
      description: "Spanish rice dish with assorted seafood and saffron",
      price: "$32",
      image: "/placeholder.svg?height=200&width=300&text=Seafood+Paella",
    },
    {
      name: "GARLIC BUTTER SHRIMP",
      description: "Jumbo shrimp sautéed in garlic butter and white wine",
      price: "$24",
      image: "/placeholder.svg?height=200&width=300&text=Garlic+Butter+Shrimp",
    },
    {
      name: "GRILLED SEA BASS",
      description: "Fresh sea bass with Mediterranean herbs and lemon",
      price: "$30",
      image: "/placeholder.svg?height=200&width=300&text=Grilled+Sea+Bass",
    },
    {
      name: "CRAB CAKES",
      description: "Pan-seared lump crab cakes with spicy remoulade",
      price: "$22",
      image: "/placeholder.svg?height=200&width=300&text=Crab+Cakes",
    },
  ]

  const grill: MenuItem[] = [
    {
      name: "RIBEYE STEAK",
      description: "Prime 12oz ribeye steak with herb butter and truffle fries",
      price: "$38",
      image: "/placeholder.svg?height=200&width=300&text=Ribeye+Steak",
    },
    {
      name: "BBQ RIBS",
      description: "Slow-cooked pork ribs with house BBQ sauce and coleslaw",
      price: "$26",
      image: "/placeholder.svg?height=200&width=300&text=BBQ+Ribs",
    },
    {
      name: "LAMB CHOPS",
      description: "Grilled lamb chops with rosemary, garlic and mint sauce",
      price: "$34",
      image: "/placeholder.svg?height=200&width=300&text=Lamb+Chops",
    },
    {
      name: "GRILLED CHICKEN",
      description: "Herb-marinated chicken breast with roasted vegetables",
      price: "$22",
      image: "/placeholder.svg?height=200&width=300&text=Grilled+Chicken",
    },
    {
      name: "WAGYU BURGER",
      description: "Premium wagyu beef burger with truffle aioli and aged cheddar",
      price: "$24",
      image: "/placeholder.svg?height=200&width=300&text=Wagyu+Burger",
    },
    {
      name: "MIXED GRILL PLATTER",
      description: "Selection of premium meats with chimichurri sauce",
      price: "$45",
      image: "/placeholder.svg?height=200&width=300&text=Mixed+Grill+Platter",
    },
  ]

  const pasta: MenuItem[] = [
    {
      name: "TRUFFLE RISOTTO",
      description: "Creamy arborio rice with wild mushrooms and truffle oil",
      price: "$26",
      image: "/placeholder.svg?height=200&width=300&text=Truffle+Risotto",
    },
    {
      name: "LOBSTER LINGUINE",
      description: "Linguine pasta with fresh lobster in spicy tomato sauce",
      price: "$32",
      image: "/placeholder.svg?height=200&width=300&text=Lobster+Linguine",
    },
    {
      name: "PAPPARDELLE BOLOGNESE",
      description: "Wide ribbon pasta with slow-cooked beef ragu",
      price: "$24",
      image: "/placeholder.svg?height=200&width=300&text=Pappardelle+Bolognese",
    },
    {
      name: "SQUID INK RISOTTO",
      description: "Black risotto with calamari and seafood",
      price: "$28",
      image: "/placeholder.svg?height=200&width=300&text=Squid+Ink+Risotto",
    },
    {
      name: "CACIO E PEPE",
      description: "Classic Roman pasta with pecorino cheese and black pepper",
      price: "$20",
      image: "/placeholder.svg?height=200&width=300&text=Cacio+e+Pepe",
    },
    {
      name: "SEAFOOD RISOTTO",
      description: "Creamy risotto with mixed seafood and saffron",
      price: "$30",
      image: "/placeholder.svg?height=200&width=300&text=Seafood+Risotto",
    },
  ]

  const asian: MenuItem[] = [
    {
      name: "PEKING DUCK",
      description: "Crispy duck served with pancakes, scallions and hoisin sauce",
      price: "$36",
      image: "/placeholder.svg?height=200&width=300&text=Peking+Duck",
    },
    {
      name: "KOREAN BBQ RIBS",
      description: "Marinated beef short ribs with kimchi and pickled vegetables",
      price: "$28",
      image: "/placeholder.svg?height=200&width=300&text=Korean+BBQ+Ribs",
    },
    {
      name: "THAI GREEN CURRY",
      description: "Aromatic curry with coconut milk, vegetables and your choice of protein",
      price: "$24",
      image: "/placeholder.svg?height=200&width=300&text=Thai+Green+Curry",
    },
    {
      name: "SUSHI PLATTER",
      description: "Chef's selection of premium nigiri and maki rolls",
      price: "$32",
      image: "/placeholder.svg?height=200&width=300&text=Sushi+Platter",
    },
    {
      name: "SZECHUAN BEEF",
      description: "Spicy wok-fried beef with Szechuan peppercorns and vegetables",
      price: "$26",
      image: "/placeholder.svg?height=200&width=300&text=Szechuan+Beef",
    },
    {
      name: "VIETNAMESE PHO",
      description: "Traditional beef noodle soup with herbs and bean sprouts",
      price: "$22",
      image: "/placeholder.svg?height=200&width=300&text=Vietnamese+Pho",
    },
  ]

  const healthyBowls: MenuItem[] = [
    {
      name: "SIGNATURE SALAD",
      description: "Chef's special salad with premium ingredients and house vinaigrette",
      price: "$16",
      image: "/placeholder.svg?height=200&width=300&text=Signature+Salad",
    },
    {
      name: "SALAD ESCOBAR",
      description: "Premium salad with avocado, quinoa and special citrus dressing",
      price: "$17",
      image: "/placeholder.svg?height=200&width=300&text=Avocado+Salad",
    },
    {
      name: "GINGER SALAD",
      description: "Asian inspired salad with fresh ginger sesame dressing",
      price: "$18",
      image: "/placeholder.svg?height=200&width=300&text=Ginger+Salad",
    },
    {
      name: "FRUIT SALAD",
      description: "Fresh seasonal fruits with honey lime dressing",
      price: "$17",
      image: "/placeholder.svg?height=200&width=300&text=Fruit+Salad",
    },
    {
      name: "SEVEN HEAVEN SALAD",
      description: "Seven different greens with pomegranate and nuts",
      price: "$19",
      image: "/placeholder.svg?height=200&width=300&text=Seven+Heaven+Salad",
    },
    {
      name: "POWER BOWL",
      description: "Quinoa, sweet potato, kale and tahini dressing",
      price: "$20",
      image: "/placeholder.svg?height=200&width=300&text=Power+Bowl",
    },
  ]

  const smallPlates: MenuItem[] = [
    {
      name: "TRUFFLE FRIES",
      description: "Crispy fries with truffle oil and parmesan cheese",
      price: "$17",
      image: "/placeholder.svg?height=200&width=300&text=Truffle+Fries",
    },
    {
      name: "CRISPY CALAMARI",
      description: "Golden fried calamari rings with spicy aioli dip",
      price: "$18",
      image: "/placeholder.svg?height=200&width=300&text=Calamari",
    },
    {
      name: "SPRING ROLLS",
      description: "Fresh vegetable spring rolls with peanut dipping sauce",
      price: "$16",
      image: "/placeholder.svg?height=200&width=300&text=Spring+Rolls",
    },
    {
      name: "CHEESE PLATTER",
      description: "Selection of artisan cheeses with crackers and honey",
      price: "$22",
      image: "/placeholder.svg?height=200&width=300&text=Cheese+Platter",
    },
    {
      name: "BRUSCHETTA",
      description: "Toasted sourdough with tomatoes, basil and mozzarella",
      price: "$15",
      image: "/placeholder.svg?height=200&width=300&text=Bruschetta",
    },
    {
      name: "EDAMAME",
      description: "Steamed soybeans with sea salt and chili flakes",
      price: "$12",
      image: "/placeholder.svg?height=200&width=300&text=Edamame",
    },
  ]

  const desserts: MenuItem[] = [
    {
      name: "CHOCOLATE LAVA CAKE",
      description: "Warm chocolate cake with molten center and vanilla ice cream",
      price: "$18",
      image: "/placeholder.svg?height=200&width=300&text=Chocolate+Lava+Cake",
    },
    {
      name: "TIRAMISU",
      description: "Classic Italian dessert with coffee and mascarpone",
      price: "$16",
      image: "/placeholder.svg?height=200&width=300&text=Tiramisu",
    },
    {
      name: "BANANA SPLIT",
      description: "Classic banana split with three scoops and toppings",
      price: "$17",
      image: "/placeholder.svg?height=200&width=300&text=Banana+Split",
    },
    {
      name: "CHEESE CAKE",
      description: "Rich New York style cheesecake with berry compote",
      price: "$19",
      image: "/placeholder.svg?height=200&width=300&text=Cheesecake",
    },
    {
      name: "ICE CREAM TRIO",
      description: "Three scoops of premium ice cream with your choice of flavors",
      price: "$14",
      image: "/placeholder.svg?height=200&width=300&text=Ice+Cream+Trio",
    },
    {
      name: "PANNA COTTA",
      description: "Silky vanilla panna cotta with fresh berries",
      price: "$16",
      image: "/placeholder.svg?height=200&width=300&text=Panna+Cotta",
    },
  ]

  const cocktails: MenuItem[] = [
    {
      name: "CATALUNA SUNSET",
      description: "Our signature cocktail with rum, passion fruit and orange",
      price: "$16",
      image: "/placeholder.svg?height=200&width=300&text=Cataluna+Sunset",
    },
    {
      name: "SMOKY OLD FASHIONED",
      description: "Bourbon, bitters and smoked cinnamon",
      price: "$18",
      image: "/placeholder.svg?height=200&width=300&text=Smoky+Old+Fashioned",
    },
    {
      name: "LYCHEE MARTINI",
      description: "Vodka, lychee liqueur and fresh lychee",
      price: "$17",
      image: "/placeholder.svg?height=200&width=300&text=Lychee+Martini",
    },
    {
      name: "SPICY MARGARITA",
      description: "Tequila, lime, agave and jalapeño",
      price: "$15",
      image: "/placeholder.svg?height=200&width=300&text=Spicy+Margarita",
    },
    {
      name: "ELDERFLOWER SPRITZ",
      description: "Prosecco, elderflower liqueur and soda",
      price: "$14",
      image: "/placeholder.svg?height=200&width=300&text=Elderflower+Spritz",
    },
    {
      name: "ESPRESSO MARTINI",
      description: "Vodka, coffee liqueur and fresh espresso",
      price: "$16",
      image: "/placeholder.svg?height=200&width=300&text=Espresso+Martini",
    },
  ]

  const getActiveItems = (): MenuItem[] => {
    switch (activeCategory) {
      case "main":
        return mainCourses
      case "seafood":
        return seafood
      case "grill":
        return grill
      case "pasta":
        return pasta
      case "asian":
        return asian
      case "healthy":
        return healthyBowls
      case "small":
        return smallPlates
      case "desserts":
        return desserts
      case "cocktails":
        return cocktails
      default:
        return mainCourses
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#EFE4D2] text-[#131D4F]"
    >
      {/* Header with back button */}
      <header className="sticky top-0 z-20 backdrop-blur-md bg-[#EFE4D2]/90 border-b border-[#254D70]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-[#254D70] hover:text-[#131D4F] hover:bg-[#254D70]/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-lg sm:text-xl font-light tracking-widest text-[#131D4F]">CATALUNA</h1>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Menu Title */}
      <div className="pt-8 pb-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-light tracking-widest text-[#131D4F] mb-2">FOOD MENU</h2>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#954C2E]/70 to-transparent"></div>
          <p className="text-xs sm:text-sm text-[#254D70]/80 font-light tracking-wider">MODERN CUISINE</p>
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#954C2E]/70 to-transparent"></div>
        </div>
      </div>

      {/* Category Navigation */}
      <nav className="overflow-x-auto scrollbar-hide mb-8 px-4">
        <div className="flex justify-start sm:justify-center gap-3 min-w-max pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 text-sm rounded-full transition-all duration-300 whitespace-nowrap ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#254D70] to-[#131D4F] text-[#EFE4D2] shadow-lg shadow-[#131D4F]/20"
                  : "bg-[#254D70]/10 hover:bg-[#254D70]/20 text-[#254D70] hover:text-[#131D4F]"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          key={activeCategory}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {getActiveItems().map((menuItem, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/90 transition-all duration-300 border border-[#254D70]/20 hover:border-[#954C2E]/40 shadow-lg shadow-[#131D4F]/10 hover:shadow-xl hover:shadow-[#131D4F]/20"
            >
              {/* Food Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={menuItem.image || "/placeholder.svg"}
                  alt={menuItem.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131D4F]/60 to-transparent opacity-70"></div>
                <div className="absolute bottom-3 right-3 bg-gradient-to-r from-[#954C2E] to-[#254D70] text-[#EFE4D2] px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  {menuItem.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-medium text-[#131D4F] text-base mb-2 tracking-wide group-hover:text-[#954C2E] transition-colors duration-300">
                  {menuItem.name}
                </h3>
                <p className="text-[#254D70]/80 text-sm leading-relaxed line-clamp-2">{menuItem.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 backdrop-blur-md bg-[#EFE4D2]/90 border-t border-[#254D70]/20 py-4 px-4 text-center">
        <p className="text-[#254D70]/70 text-xs">
          Call for reservations: <span className="text-[#954C2E]">+1 (555) 123-4567</span>
        </p>
      </footer>
    </motion.div>
  )
}
