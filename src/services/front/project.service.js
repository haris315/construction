
import { baseUrl } from './url';
import axios from 'axios';

class ProjectService {
  constructor() {
    this.url = `${baseUrl}project`;
  }
  getAll() {
    return axios.get(this.url).then(res => res.data);
  }

}

export default new ProjectService();