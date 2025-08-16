export async function searchCuisine(query: string): Promise<string> {
  // Static response for static build
  return `Information about "${query}":

This is a static response for your search query. 

For detailed information about Yoruba cuisine, please browse our categories section where you can find comprehensive details about various traditional dishes including ingredients, preparation methods, and cultural significance.

Popular Yoruba dishes include:
- Amala with Ewedu and Gbegiri
- Jollof Rice
- Pounded Yam with Egusi
- Akara (Bean Cakes)
- Moi Moi (Steamed Bean Pudding)
- Puff Puff

Please explore our food categories to learn more about these delicious traditional foods.`
}

export async function chatWithAi(message: string): Promise<string> {
  // Static response for static build
  return `Thank you for your message: "${message}"

This is a static response. Here are some ways to discover more about Yoruba foods:

1. Browse our Categories section to explore different types of dishes
2. Use the Cuisine Finder to search for specific foods
3. Check out our Featured Foods on the homepage
4. Watch cooking videos for step-by-step preparation guides

Popular topics you might be interested in:
- Traditional soups like Ewedu, Gbegiri, and Ogbono
- Swallow foods like Amala, Eba, and Pounded Yam
- Delicious snacks like Puff Puff, Akara, and Chin Chin
- Rice dishes and refreshing drinks

Feel free to explore the app to learn more about these amazing traditional foods!`
}
