const url = "https://api.tvmaze.com";

async function requestShows(endpoint, errorMessage) {
  const response = await fetch(`${url}${endpoint}`);

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return response.json();
}

export function getAllShows() {
  return requestShows("/shows", "Shows could not be loaded");
}

export async function searchShows(query) {
  const results = await requestShows(
    `/search/shows?q=${encodeURIComponent(query)}`,
    "Search failed",
  );

  return results.map((item) => item.show);
}
