export const GOOGLE_API_KEY = "AIzaSyDOTqNthkjPz8Jg8aT0N6N5fwx1wHVeO40";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&chart=mostPopular&maxHeight=72&maxResults=50&maxWidth=72&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&id=";

export const YOUTUBE_COMMENT_API =
  " https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=30&textFormat=plainText&videoId=";

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&eventType=none&maxResults=50&regionCode=IN&safeSearch=strict&type=video&videoCaption=any&videoEmbeddable=true&videoType=any&q=";
