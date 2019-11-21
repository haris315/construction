
import { baseUrl } from './url';
import axios from 'axios';
import querystring from 'querystring';

class JobsService {
  getAll() {
    return axios.get(`${baseUrl}jobs`).then(res => res.data);
  }

  create(data) {
      return axios.post(`${baseUrl}add_job`, querystring.stringify(data), {
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded"
        }
    });
  }
}

export default JobsService;