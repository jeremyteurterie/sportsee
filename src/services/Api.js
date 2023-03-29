import Axios from 'axios';

const users = Axios.create({ baseURL: 'http://localhost:3000' });
