
import { baseUrl } from './url';
import axios from 'axios';

class ContactService {
  constructor() {
    this.url = `${baseUrl}contactPage`;
  }
  getAll() {
    return axios.get(this.url).then(res => res.data);
  }

}

export default new ContactService();