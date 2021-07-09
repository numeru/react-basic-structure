import axios from 'axios';

class AuthService {
  private base;

  constructor() {
    this.base = axios.create({
      baseURL: '/',
    });
  }

  async verification(email: string) {
    //...
  }
}

export default AuthService;
