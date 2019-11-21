
import { baseUrl } from './url';
import axios from 'axios';

class CvService {
  constructor() {
    this.url = `${baseUrl}cv_list`;
  }
  getAll() {
    return axios.get(this.url).then(res => res.data);
  }

  create(data, config) {
      return axios.post(this.url, data, config)
  }
}

export default CvService;