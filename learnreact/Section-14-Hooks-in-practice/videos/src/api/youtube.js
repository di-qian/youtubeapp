import axios from 'axios';

const KEY = 'AIzaSyCB6lufyclqhZJmE1gJQDP3NKQUyghQKn0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
