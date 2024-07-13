import axios from "axios";

interface Image {
  id: string;
  url: string;
  title: string;
  // Добавьте другие релевантные поля в зависимости от структуры данных вашего изображения
}

interface FetchImagesResponse {
  results: Image[];
  total: number;
}

async function fetchImages(
  searchQuery: string,
  page: number
): Promise<FetchImagesResponse> {
  const API_KEY: string = import.meta.env.VITE_REACT_APP_API_KEY as string;
  const baseUrl = "https://api.unsplash.com/search/photos/";

  const params = new URLSearchParams({
    query: searchQuery,
    client_id: API_KEY,
    per_page: "12",
    page: page.toString(),
  });

  try {
    const response = await axios.get<{ results: Image[]; total: number }>(
      `${baseUrl}?${params}`
    );
    const { results, total } = response.data;
    return { results, total };
  } catch (error) {
    console.error("Error fetching images:", error);
    throw new Error("Error fetching images");
  }
}

export default fetchImages;
