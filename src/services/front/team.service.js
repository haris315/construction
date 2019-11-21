
import { baseUrl } from './url';
import axios from 'axios';

class TeamService {
  constructor() {
    this.url = `${baseUrl}team`;
  }
  getAll() {
    return axios.get(this.url).then(res => res.data);
  }

}

export default new TeamService();