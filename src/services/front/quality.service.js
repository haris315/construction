
import { baseUrl } from './url';
import axios from 'axios';

class QualityService {
  constructor() {
    this.url = `${baseUrl}qualityPage`;
  }
  getAll() {
    return axios.get(this.url).then(res => res.data);
  }

}

export default new QualityService();