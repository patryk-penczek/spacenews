const API_URL = 'https://api.spaceflightnewsapi.net/v4';

export const getAllArticles = async () => {
  try {
    const response = await fetch(`${API_URL}/articles`);
    if (response.ok) return response.json();
    return {
      success: false,
      error: `Request failed with status code ${response.status}`,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
};
