import { apiClient } from '@/api/axios-client';
import { API_ENDPOINTS } from '@/api/endpoints';
import type {
  CreatePropertyDTO,
  Property,
  UpdatePropertyDTO,
  PropertyPerformanceDTO,
  RevenueExpensesParams,
  PropertyExpenseYTD,
} from '@/types/property.types';

export const propertyService = {
  async getProperties(userId: string, userRole?: string, userEmail?: string): Promise<Property[]> {
    let url = API_ENDPOINTS.PROPERTY.LIST(userId);
    const params = new URLSearchParams();

    if (userRole) {
      params.append('role', userRole);
    }
    if (userRole === 'tenant' && userEmail) {
      params.append('email', userEmail);
    }

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    const response = await apiClient.get<Property[]>(url);
    return response.data;
  },

  async getProperty(userId: string): Promise<Property[]> {
    const response = await apiClient.get<Property[]>(API_ENDPOINTS.PROPERTY.GET(userId));
    return response.data;
  },

  async create(data: CreatePropertyDTO): Promise<Property> {
    const response = await apiClient.post<Property>(API_ENDPOINTS.PROPERTY.CREATE, data);
    return response.data;
  },

  async update(propertyId: string, data: UpdatePropertyDTO): Promise<Property> {
    const response = await apiClient.put<Property>(
      API_ENDPOINTS.PROPERTY.UPDATE(propertyId),
      data
    );
    return response.data;
  },

  async delete(propertyId: string): Promise<void> {
    await apiClient.delete(API_ENDPOINTS.PROPERTY.DELETE(propertyId));
  },

  async updatePerformance(data: PropertyPerformanceDTO): Promise<void> {
    const formData = new FormData();

    // Add propertyId and userId
    formData.append('propertyId', data.propertyId);
    formData.append('userId', data.userId);

    // Add financials
    if (data.financials.acquisitionPrice !== undefined) {
      formData.append('acquisitionPrice', String(data.financials.acquisitionPrice));
    }
    if (data.financials.currentValuation !== undefined) {
      formData.append('currentValuation', String(data.financials.currentValuation));
    }
    if (data.financials.initialLoanAmount !== undefined) {
      formData.append('initialLoanAmount', String(data.financials.initialLoanAmount));
    }

    // Add loan details if present
    if (data.financials.loanDetails) {
      formData.append('interestRate', String(data.financials.loanDetails.interestRate));
      formData.append('loanType', data.financials.loanDetails.loanType);
      formData.append('loanTerm', String(data.financials.loanDetails.loanTerm));
      formData.append('startDate', data.financials.loanDetails.startDate);
      formData.append('monthlyEMI', String(data.financials.loanDetails.monthlyEMI));
      formData.append('emiDay', String(data.financials.loanDetails.emiDay));
    }

    // Add metrics if present
    if (data.metrics) {
      if (data.metrics.propertySize !== undefined) {
        formData.append('propertySize', String(data.metrics.propertySize));
      }
      if (data.metrics.occupancyRate !== undefined) {
        formData.append('occupancyRate', String(data.metrics.occupancyRate));
      }
      if (data.metrics.returnOnInvestment !== undefined) {
        formData.append('returnOnInvestment', String(data.metrics.returnOnInvestment));
      }
    }

    await apiClient.post(API_ENDPOINTS.PROPERTY.PERFORMANCE_EDIT, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  async getRevenueExpenses(params: RevenueExpensesParams): Promise<any> {
    const response = await apiClient.get(API_ENDPOINTS.PROPERTY.REVENUE_EXPENSES_GET, { params });
    return response.data;
  },

  async getPropertyExpensesYTD(params: { propertyId: string; userId: string }): Promise<PropertyExpenseYTD> {
    const response = await apiClient.get(API_ENDPOINTS.PROPERTY.YTD_GET, { params });
    return response.data;
  },
};
