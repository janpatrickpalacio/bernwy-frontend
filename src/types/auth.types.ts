export type AuthUser = {
  paymentFeaturesEnabled: boolean;
  subscriptionTier: 'free' | 'premium';
  companyName: string;
  createdAt: Date | string;
  email: string;
  isEmailVerified: boolean;
  isMobileVerified: boolean;
  lastSeen: Date | string;
  avatar: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  contactAddress1: string;
  contactAddress2: string;
  contactCountry: string;
  contactState: string;
  contactCity: string;
  contactPostalCode: string;
  role: string;
  status: string;
  updatedAt: Date | string;
  userId: string;
  companyRegistrationNo: string;
  employeeCode: string;
  platformCharge: string;
  // bank details
  accountNumber: string;
  accountHolderName: string;
  routingNumber: string;
  dob: string;
  currency: string;
  businessURL: string;
  identificationProofNumber: string;
  kycStatus: 'NEEDED' | 'PENDING' | 'APPROVED' | 'REJECTED' | string;
};

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: AuthUser;
  token: string;
}

export interface SignUpData {
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
  kycStatus: string;
  avatar?: File | null;
  role: string;
}

export interface WhatsAppOtpResponse {
  success?: boolean;
  message?: string;
  user?: AuthUser;
  token?: string;
}
