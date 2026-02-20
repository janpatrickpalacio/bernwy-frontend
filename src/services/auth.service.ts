import { apiClient } from '@/api/axios-client';
import { API_ENDPOINTS } from '@/api/endpoints';
import type { LoginCredentials, LoginResponse, SignUpData, WhatsAppOtpResponse, AuthUser } from '@/types/auth.types';

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>(
      API_ENDPOINTS.AUTH.SIGN_IN,
      credentials
    );
    return response.data;
  },

  async signUp(data: SignUpData): Promise<{ user: AuthUser; message?: string }> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (value !== null && value !== undefined) {
        formData.append(key, String(value));
      }
    });

    const response = await apiClient.post<{ user: AuthUser; message?: string }>(
      API_ENDPOINTS.AUTH.SIGN_UP,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    return response.data;
  },

  async logout(): Promise<void> {
    await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT, {
      refreshToken: localStorage.getItem('token'),
    });
  },

  async resetPassword(email: string): Promise<void> {
    await apiClient.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, { email });
  },

  async sendWhatsAppOtp(phoneNumber: string): Promise<void> {
    await apiClient.post(API_ENDPOINTS.AUTH.WHATSAPP_SEND_OTP, { phoneNumber });
  },

  async verifyWhatsAppOtp(phoneNumber: string, otp: string): Promise<WhatsAppOtpResponse> {
    const response = await apiClient.post<WhatsAppOtpResponse>(
      API_ENDPOINTS.AUTH.WHATSAPP_VERIFY_OTP,
      { phoneNumber, otp }
    );
    return response.data;
  },

  async updateProfile(formData: FormData): Promise<AuthUser> {
    const response = await apiClient.post<{ user: AuthUser }>(
      API_ENDPOINTS.AUTH.UPDATE_PROFILE,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    return response.data.user;
  },

  async createKYC(formData: FormData): Promise<void> {
    await apiClient.post(API_ENDPOINTS.AUTH.CREATE_KYC, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      transformRequest: (data) => data,
    });
  },
};
