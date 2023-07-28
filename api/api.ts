const API_URL = 'https://api.spaceflightnewsapi.net/v4';
const articles_limit = '?limit=100';

const handleResponse = async (url: RequestInfo | URL) => {
  try {
    const response = await fetch(url);
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

export const getAllArticles = async () => {
  return handleResponse(`${API_URL}/articles/${articles_limit}`);
};

export const getSearchedArticles = async (title: string) => {
  return handleResponse(
    `${API_URL}/articles/${articles_limit}&title_contains=${title}`,
  );
};

export const getSearchedNewsSites = async (news_site: string) => {
  return handleResponse(
    `${API_URL}/articles/${articles_limit}&news_site=${news_site}`,
  );
};

export const getAllReports = async () => {
  return handleResponse(`${API_URL}/reports/?limit=6`);
};

export const getAllInfo = async () => {
  return handleResponse(`${API_URL}/info`);
};
