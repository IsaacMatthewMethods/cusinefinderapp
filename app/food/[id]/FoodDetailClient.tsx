"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import VideoModal from "@/components/video-modal"
import { notFound } from "next/navigation"

interface FoodData {
  [key: string]: {
    name: string
    description: string
    longDescription: string
    ingredients: string[]
    instructions: string[]
    nutritionalInfo: {
      calories: string
      protein: string
      carbs: string
      fat: string
      fiber: string
    }
    culturalSignificance: string
    image: string
    videoId: string
  }
}

// This would typically come from a database
const foodData: FoodData = {
  "efo-riro": {
    name: "Efo Riro",
    description: "A rich vegetable soup made with spinach, assorted meats, and palm oil",
    longDescription: `
      Efo Riro is a rich and nutritious vegetable soup that originates from the Yoruba people of Western Nigeria. The name "Efo Riro" literally translates to "stirred leafy vegetable" in the Yoruba language.

      This delicious soup is made with a variety of leafy greens, most commonly spinach (efo tete) or kale, which are cooked with palm oil, assorted meats, fish, and a blend of aromatic spices. The combination of these ingredients creates a flavorful and hearty soup that is both nutritious and satisfying.

      Efo Riro is typically served with swallows like amala, eba, or pounded yam, making it a complete and balanced meal. It's a staple in Yoruba households and is enjoyed throughout Nigeria and beyond. The soup is known for its vibrant green color and rich, complex flavors that come from the combination of fresh vegetables and well-seasoned proteins.
    `,
    ingredients: [
      "2 bunches of spinach (efo tete) or kale, washed and chopped",
      "1/4 cup palm oil",
      "1 large onion, diced",
      "3 red bell peppers (tatashe), blended",
      "3 scotch bonnet peppers (ata rodo), blended (adjust to taste)",
      "2 tablespoons locust beans (iru)",
      "1/2 pound beef, cut into bite-sized pieces",
      "1/2 pound tripe, cleaned and cut into pieces",
      "1/4 pound smoked fish, deboned and flaked",
      "1/4 pound stockfish, soaked and deboned",
      "2 tablespoons ground crayfish",
      "2 cubes of bouillon (Maggi or Knorr)",
      "Salt to taste",
      "1 cup meat stock",
    ],
    instructions: [
      "Season the meat with salt, bouillon, and half of the diced onions. Cook until tender, adding water as needed to create a rich stock. Set aside.",
      "Heat palm oil in a large pot over medium heat. Add the remaining onions and sauté until translucent and fragrant.",
      "Add the blended peppers (tatashe and ata rodo) and cook for about 10-15 minutes, stirring frequently until the raw smell disappears and the oil floats to the top.",
      "Add the locust beans (iru) and ground crayfish. Stir well and cook for 2-3 minutes to release their flavors.",
      "Add the cooked meat, tripe, smoked fish, and stockfish. Stir to combine and let cook for 5 minutes.",
      "Pour in the meat stock and let it simmer for 5 minutes to allow the flavors to meld together.",
      "Add the chopped spinach or kale and stir gently. Cook for 3-5 minutes until the vegetables are wilted but still retain their green color.",
      "Taste and adjust seasoning with salt and bouillon cubes as needed. Serve hot with your choice of swallow.",
    ],
    nutritionalInfo: {
      calories: "320 per serving",
      protein: "18g",
      carbs: "12g",
      fat: "24g",
      fiber: "5g",
    },
    culturalSignificance:
      "Efo Riro is more than just a dish in Yoruba culture; it represents hospitality and community. It's often prepared for family gatherings and celebrations, symbolizing abundance and prosperity. The soup is considered a complete meal and is frequently served to guests as a sign of respect and care. In Yoruba tradition, the ability to prepare a good Efo Riro is seen as a mark of culinary skill.",
    image: "/placeholder.svg?height=800&width=600&text=Efo+Riro+Spinach+Soup",
    videoId: "8yQz6ZqVKpE",
  },
  "jollof-rice": {
    name: "Jollof Rice",
    description: "Spicy tomato rice dish popular throughout West Africa",
    longDescription: `
      Jollof Rice is arguably West Africa's most famous dish, enjoyed across Nigeria, Ghana, Senegal, and other countries in the region. The Nigerian version, particularly the one prepared by Yoruba people, is known for its rich, spicy flavor and distinctive orange-red color that comes from tomatoes and peppers.

      This one-pot wonder consists of rice cooked in a flavorful blend of tomatoes, peppers, onions, and various spices. The slow cooking process allows the rice to absorb all the flavors, resulting in a dish that's aromatic, tasty, and visually appealing. The key to perfect jollof rice lies in achieving the right balance of spices and the perfect rice texture - each grain should be separate yet flavorful.

      Jollof Rice is incredibly versatile and can be served with a variety of accompaniments, including fried plantains, moin moin, coleslaw, and various proteins like chicken, beef, or fish. It's a staple at parties and celebrations, earning it the nickname "party jollof," and has sparked friendly rivalries between West African countries over who makes the best version.
    `,
    ingredients: [
      "3 cups of long-grain parboiled rice",
      "6 large ripe tomatoes",
      "3 red bell peppers (tatashe)",
      "2-3 scotch bonnet peppers (ata rodo) - adjust to taste",
      "2 large onions",
      "1/3 cup vegetable oil",
      "2 tablespoons tomato paste",
      "2-3 cups chicken or vegetable stock",
      "3 bay leaves",
      "1 teaspoon dried thyme",
      "1 teaspoon curry powder",
      "2 teaspoons salt (adjust to taste)",
      "1 teaspoon white pepper",
      "2 cubes of bouillon (Maggi or Knorr)",
      "1 teaspoon garlic powder (optional)",
      "1 teaspoon ginger powder (optional)",
    ],
    instructions: [
      "Blend the tomatoes, red bell peppers, scotch bonnet peppers, and one onion until smooth. Set aside.",
      "Dice the remaining onion and set aside separately.",
      "Wash the rice thoroughly in cold water until the water runs clear, then drain and set aside.",
      "Heat the vegetable oil in a large, heavy-bottomed pot over medium heat. Add the diced onions and sauté until translucent and fragrant.",
      "Add the tomato paste and fry for 2-3 minutes, stirring constantly to prevent burning.",
      "Pour in the blended tomato-pepper mixture and cook on medium heat for about 15-20 minutes, stirring occasionally until the mixture reduces, the raw smell disappears, and the sauce thickens.",
      "Add the thyme, curry powder, bay leaves, bouillon cubes, salt, white pepper, and optional garlic and ginger powder. Stir well to combine.",
      "Add the washed rice to the pot and stir until each grain is well coated with the tomato sauce.",
      "Pour in the chicken or vegetable stock gradually. The liquid should be about 1 inch above the rice level.",
      "Bring to a boil, then cover the pot with aluminum foil and then the pot lid to create a tight seal and trap the steam.",
      "Reduce the heat to low and cook for about 25-30 minutes, or until the rice is tender and has absorbed most of the liquid.",
      "Check occasionally and add more stock or water if needed, but avoid stirring too much to prevent the rice from becoming mushy.",
      "Once cooked, remove from heat and let it rest for 5 minutes before removing the lid.",
      "Fluff gently with a fork, remove bay leaves, and serve hot.",
    ],
    nutritionalInfo: {
      calories: "380 per serving",
      protein: "6g",
      carbs: "70g",
      fat: "8g",
      fiber: "2g",
    },
    culturalSignificance:
      "Jollof Rice is more than just food; it's a cultural icon that has sparked friendly rivalries between West African countries, particularly Nigeria and Ghana, over who makes the best version. It's an essential dish at Nigerian parties, weddings, and celebrations. The dish represents unity and celebration, bringing people together around shared meals. In Nigerian culture, the quality of one's jollof rice is often seen as a measure of cooking skill.",
    image: "/placeholder.svg?height=800&width=600&text=Jollof+Rice+Nigerian",
    videoId: "TLjSBq-vt-I",
  },
  "moin-moin": {
    name: "Moin Moin",
    description: "Steamed bean pudding with peppers, onions, and spices",
    longDescription: `
    Moin Moin is a traditional Nigerian steamed bean pudding that's beloved across the country, particularly among the Yoruba people. Made from peeled black-eyed peas (beans), this protein-rich dish is steamed to perfection, creating a smooth, cake-like texture that's both nutritious and delicious.

    The beauty of Moin Moin lies in its versatility - it can be prepared as a simple, everyday meal or dressed up with various proteins like fish, eggs, or meat for special occasions. The dish is naturally gluten-free and packed with plant-based protein, making it a healthy choice for people of all ages.

    Traditionally, Moin Moin was steamed in banana leaves or uma leaves, which imparted a subtle, earthy flavor to the dish. Today, it's commonly prepared in aluminum foil, plastic containers, or special Moin Moin cups, but the traditional leaf-wrapping method is still preferred for its authentic taste and cultural significance.
  `,
    ingredients: [
      "2 cups black-eyed peas (beans), soaked and peeled",
      "1 large onion",
      "3-4 red bell peppers (tatashe)",
      "2-3 scotch bonnet peppers (ata rodo) - adjust to taste",
      "1/4 cup palm oil or vegetable oil",
      "2 tablespoons ground crayfish",
      "2 seasoning cubes",
      "Salt to taste",
      "1 cup warm water or stock",
      "Hard-boiled eggs (optional)",
      "Smoked fish or meat (optional)",
      "Banana leaves or aluminum foil for wrapping",
    ],
    instructions: [
      "Soak the black-eyed peas in water for 30 minutes, then rub to remove the skins. Rinse until clean.",
      "Blend the peeled beans with onions, peppers, and a little water until smooth. The consistency should be like thick pancake batter.",
      "Pour the blended mixture into a bowl. Add palm oil, ground crayfish, seasoning cubes, and salt. Mix well.",
      "Gradually add warm water or stock to achieve a pourable consistency. The mixture should not be too thick or too thin.",
      "Taste and adjust seasoning as needed.",
      "If using banana leaves, blanch them in hot water to soften. Cut into squares for wrapping.",
      "Pour the mixture into prepared containers, banana leaf parcels, or aluminum foil. Add boiled eggs or fish if desired.",
      "Steam for 45 minutes to 1 hour until firm and cooked through. Test with a toothpick - it should come out clean.",
      "Allow to cool slightly before unwrapping. Serve warm as a main dish or side.",
    ],
    nutritionalInfo: {
      calories: "180 per serving",
      protein: "12g",
      carbs: "20g",
      fat: "6g",
      fiber: "5g",
    },
    culturalSignificance:
      "Moin Moin holds special significance in Nigerian culture as a symbol of celebration and hospitality. It's a staple at parties, weddings, and religious gatherings. The dish represents resourcefulness and creativity in Nigerian cooking, transforming simple beans into an elegant, flavorful meal. In Yoruba culture, the ability to make smooth, well-seasoned Moin Moin is considered a mark of culinary skill.",
    image: "/placeholder.svg?height=800&width=600&text=Moin+Moin+Bean+Pudding",
    videoId: "JMWHSmMPQTI",
  },
}

interface FoodDetailClientProps {
  params: { id: string }
}

export default function FoodDetailClient({ params }: FoodDetailClientProps) {
  const [showVideo, setShowVideo] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [food, setFood] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const foodItem = foodData[params.id as keyof typeof foodData]
      if (!foodItem) {
        notFound()
      }
      setFood(foodItem)
    } catch (err) {
      setError("Failed to load food details. Please try again later.")
      console.error("Error loading food details:", err)
    } finally {
      setLoading(false)
    }
  }, [params.id])

  const handleImageError = () => {
    setImageError(true)
  }

  if (loading) {
    return (
      <main className="w-full px-4 py-6 mt-16 pb-20">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yoruba-500"></div>
        </div>
      </main>
    )
  }

  if (error || !food) {
    return (
      <main className="w-full px-4 py-6 mt-16 pb-20">
        <div className="p-4 bg-destructive/10 text-destructive rounded-lg">{error || "Food not found"}</div>
      </main>
    )
  }

  return (
    <main className="w-full px-4 py-6 mt-16 pb-20">
      <div className="space-y-6">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src={
              imageError
                ? "/placeholder.svg?height=800&width=400"
                : food.image || "/placeholder.svg?height=800&width=600"
            }
            alt={food.name}
            width={800}
            height={400}
            className="w-full h-64 object-cover"
            onError={handleImageError}
          />
          {food.videoId && (
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-4 right-4 rounded-full bg-black/70 hover:bg-black text-white"
              onClick={() => setShowVideo(true)}
            >
              <Play className="h-6 w-6" />
            </Button>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-bold">{food.name}</h1>
          <p className="text-muted-foreground mt-2">{food.description}</p>
        </div>

        <div className="prose dark:prose-invert">
          {food.longDescription.split("\n").map((paragraph: string, index: number) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
          <ul className="space-y-2">
            {food.ingredients.map((ingredient: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Instructions</h2>
          <ol className="space-y-3">
            {food.instructions.map((instruction: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yoruba-500 text-white text-sm font-medium mr-3 shrink-0">
                  {index + 1}
                </span>
                <span>{instruction}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Nutritional Information</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-accent p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Calories</p>
              <p className="font-medium">{food.nutritionalInfo.calories}</p>
            </div>
            <div className="bg-accent p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Protein</p>
              <p className="font-medium">{food.nutritionalInfo.protein}</p>
            </div>
            <div className="bg-accent p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Carbs</p>
              <p className="font-medium">{food.nutritionalInfo.carbs}</p>
            </div>
            <div className="bg-accent p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Fat</p>
              <p className="font-medium">{food.nutritionalInfo.fat}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Cultural Significance</h2>
          <p>{food.culturalSignificance}</p>
        </div>
      </div>

      {showVideo && food.videoId && <VideoModal videoId={food.videoId} onClose={() => setShowVideo(false)} />}
    </main>
  )
}
