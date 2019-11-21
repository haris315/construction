
import { baseUrl } from './url';
import axios from 'axios';
import querystring from 'querystring';

class CitiesService {
  constructor() {
    this.url = `${baseUrl}cities`;
  }
  getAll() {
    return axios.get(this.url).then(res => res.data);
  }

  create(data) {
      return axios.post(this.url, querystring.stringify(data), {
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded"
        }
    });
  }
}

export default CitiesService;