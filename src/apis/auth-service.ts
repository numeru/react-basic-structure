import axios, { AxiosInstance } from 'axios';
import API_URL, { UserUrl } from './api';

class AuthService {
  private base: AxiosInstance;
  private userUrl: UserUrl;

  constructor() {
    this.base = axios.create({
      baseURL: '/',
    });
    this.userUrl = API_URL.users;
  }

  async verification(email: string) {
    const { verification } = this.userUrl;

    const data = {
      email,
    };

    const response = await this.base.post(verification, data);
    return response;
  }
}

export default AuthService;
