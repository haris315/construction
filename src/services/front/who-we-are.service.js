
import { baseUrl } from './url';
import axios from 'axios';

class WhoWeAreService {
  constructor() {
    this.url = `${baseUrl}whoWeArePage`;
  }
  getAll() {
    return axios.get(this.url).then(res => res.data);
  }

}

export default new WhoWeAreService();