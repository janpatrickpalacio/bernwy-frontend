export type PropertyCategory =
  | 'Residential'
  | 'Commercial'
  | 'Industrial'
  | 'Land';

export type PropertyType =
  | 'Single Family Home'
  | 'Apartment'
  | 'Condo'
  | 'Office'
  | 'Retail'
  | 'Warehouse'
  | 'Vacant Land'
  | 'Other';

export interface Property {
  propertyId: string;
  userId: string;
  name: string;
  category: PropertyCategory;
  type: PropertyType;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreatePropertyDTO {
  userId: string;
  name: string;
  category: PropertyCategory;
  type: PropertyType;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
}

export interface UpdatePropertyDTO {
  propertyId: string;
  name?: string;
  category?: PropertyCategory;
  type?: PropertyType;
  address1?: string;
  address2?: string;
  country?: string;
  state?: string;
  city?: string;
  postalCode?: string;
}

export interface PropertyPerformanceDTO {
  propertyId: string;
  userId: string;
  financials: {
    acquisitionPrice?: number;
    currentValuation?: number;
    initialLoanAmount?: number;
    loanDetails?: {
      interestRate: number;
      loanType: 'Fixed' | 'Variable';
      loanTerm: number;
      startDate: string;
      monthlyEMI: number;
      emiDay: number;
    };
  };
  metrics?: {
    propertySize?: number;
    occupancyRate?: number;
    returnOnInvestment?: number;
  };
}

export interface RevenueExpensesParams {
  userId: string;
  propertyId: string;
  type?: 'revenue' | 'expense' | 'all';
  startDate?: string;
  endDate?: string;
}

export interface PropertyExpenseYTD {
  expenses: {
    yearToDate: {
      total: number;
      monthlyBreakdown: Record<string, number>;
    };
    propertyId: string;
    userId: string;
  };
  revenue: {
    yearToDate: {
      total: number;
      monthlyBreakdown: Record<string, number>;
    };
    propertyId: string;
    userId: string;
  };
  openissues: number;
  succcess: boolean;
}
