import FoodDetailClient from "./FoodDetailClient"

export async function generateStaticParams() {
  const foodIds = [
    // Soups
    "efo-riro",
    "egusi",
    "ewedu",
    "gbegiri",
    "ila-asepo",
    "ogbono",
    "obe-ata",
    // Swallows
    "amala",
    "eba",
    "iyan",
    "fufu",
    "semo",
    "lafun",
    // Rice dishes
    "jollof-rice",
    "fried-rice",
    "ofada-rice",
    "tuwo-shinkafa",
    "coconut-rice",
    // Snacks
    "puff-puff",
    "akara",
    "moin-moin",
    "chin-chin",
    "dundu",
    "ojojo",
    "kokoro",
    "aadun",
    // Drinks
    "zobo",
    "kunu",
    "fura-da-nono",
    "palm-wine",
    "agbo",
    // Festival foods
    "asun",
    "ipekere",
    "adun",
    "kilishi",
    "isu-sisun",
    // Featured foods
    "amala-ewedu",
  ]

  return foodIds.map((id) => ({
    id: id,
  }))
}

export default function FoodDetailPage({ params }: { params: { id: string } }) {
  return <FoodDetailClient params={params} />
}
