import HttpService from "./htttp.service";
import env from "../env/env.dev"
class AuthService {
  // authEndpoint = process.env.API_URL;

  login = async (payload) => {
    const loginEndpoint = env.BASE_USER  + '/login';
    return await HttpService.put(loginEndpoint, payload);
  };

  register = async (credentials) => {
    const registerEndpoint = env.BASE_USE  + '/create';
    return await HttpService.post(registerEndpoint, credentials);
  };

  logout = async () => {
    const logoutEndpoint = env.BASE_USE + '/logout';
    return await HttpService.post(logoutEndpoint);
  };

  forgotPassword = async (payload) => {
    const forgotPassword = 'password-forgot';
    return await HttpService.post(forgotPassword, payload);
  }

  resetPassword = async (credentials) => {
    const resetPassword = env.BASE_USE + 'change-password';
    return await HttpService.post(resetPassword, credentials);
  }

  getProfile = async(id) => {
    const getProfile = env.BASE_USE  + '/' + id;
    return await HttpService.get(getProfile);
  }

  updateProfile = async (id, newInfo) => {
    const updateProfile = env.BASE_USE  + '/' + id + '/update';
    return await HttpService.patch(updateProfile, newInfo);
  }
}

export default new AuthService();
