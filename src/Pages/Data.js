export const ApiKey =
  import.meta.env.VITE_YOUTUBE_API_KEY || "AIzaSyDs1u7TWaJ7PSEkiBgjEcZ05kZBdR_Je24";

export const UrlLink = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=${ApiKey}`;
