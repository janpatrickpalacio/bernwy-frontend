import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const signUpSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  mobile: z.string().min(10, 'Phone number is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  kycStatus: z.enum(['needed', 'pending', 'approved', 'rejected']),
  role: z.enum(['tenant', 'service_provider', 'relationship_manager', 'landlord']),
});

export const propertySchema = z.object({
  name: z.string().min(2, 'Property name is required'),
  category: z.enum(['Residential', 'Commercial', 'Industrial', 'Land']),
  type: z.enum([
    'Single Family Home',
    'Apartment',
    'Condo',
    'Office',
    'Retail',
    'Warehouse',
    'Vacant Land',
    'Other',
  ]),
  address1: z.string().min(5, 'Address is required'),
  address2: z.string().optional(),
  country: z.string().min(2, 'Country is required'),
  state: z.string().min(2, 'State is required'),
  city: z.string().min(2, 'City is required'),
  postalCode: z.string().min(3, 'Postal code is required'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
export type PropertyFormData = z.infer<typeof propertySchema>;
