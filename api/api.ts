const API_URL = 'https://api.spaceflightnewsapi.net/v4';

export const getAllArticles = async () => {
  try {
    const response = await fetch(`${API_URL}/articles/?limit=100`);
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

export const getSearchedArticles = async (title) => {
  try {
    const response = await fetch(
      `${API_URL}/articles/?limit=100&title_contains=${title}`,
    );
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

export const getAllReports = async () => {
  try {
    const response = await fetch(`${API_URL}/reports/?limit=6`);
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

export const getAllInfo = async () => {
  try {
    const response = await fetch(`${API_URL}/info`);
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
