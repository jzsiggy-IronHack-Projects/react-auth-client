import axios from 'axios';

class AuthService {
  constructor () {
    const service = axios.create({
      baseURL : 'http://localhost:5000/api',
      withCredentials : true,
    });
    this.service = service;
  };

  signup = (username , password) => {
    return this.service.post('/signup', {
      username,
      password,
    })
    .then(response => response.data);
  };

};

export default AuthService;