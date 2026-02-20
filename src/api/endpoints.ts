export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    SIGN_UP: '/api/user/auth/signup',
    SIGN_IN: '/api/user/auth/login',
    LOGOUT: '/api/user/auth/logout',
    RESET_PASSWORD: '/api/user/auth/reset_password',
    UPDATE_PROFILE: '/api/user/auth/update_profile',
    CREATE_KYC: '/api/user/auth/create_kyc',
    UPDATE_KYC: '/api/user/auth/update_kycStatus',
    WHATSAPP_SEND_OTP: '/api/user/auth/whatsapp/send_otp',
    WHATSAPP_VERIFY_OTP: '/api/user/auth/whatsapp/verify_otp',
  },
  // Property endpoints
  PROPERTY: {
    LIST: (userId: string) => `/api/property/${userId}`,
    GET: (userId: string) => `/api/property/${userId}`,
    CREATE: '/api/property/add',
    UPDATE: (propertyId: string) => `/api/property/update/${propertyId}`,
    DELETE: (propertyId: string) => `/api/property/delete/${propertyId}`,
    PERFORMANCE_EDIT: '/api/property/performance/edit',
    REVENUE_EXPENSES_ADD: '/api/property/revenue_expenses/add',
    REVENUE_EXPENSES_GET: '/api/property/revenue_expenses/get',
    YTD_GET: '/api/property/ytd/get',
  },
  // User endpoints
  USER: {
    GET: (userId: string) => `/users/${userId}`,
    GET_BY_ROLE: (role: string, index: string) => `/api/users/role/${role}/${index}`,
    CREATE_WITH_ROLE: '/api/users/role/create',
  },
  // Service Provider endpoints
  SERVICE_PROVIDER: {
    INVITE: '/api/serviceprovider/invite',
    ADD: '/api/serviceprovider/add',
  },
} as const;
