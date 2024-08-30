import axios from 'axios';

const USER_API_BASE_URL = "https://wajk43xg.up.railway.app";

class UserService {
  saveUser(user) {
    return axios.post(USER_API_BASE_URL, user, {
      
    });
  }
}

export default new UserService();
