import { useQuery, useMutation, useQueryClient, type UseQueryResult } from '@tanstack/react-query';
import { propertyService } from '@/services/property.service';
import type { CreatePropertyDTO, UpdatePropertyDTO, Property, RevenueExpensesParams, PropertyExpenseYTD } from '@/types/property.types';

export function useProperties(userId: string, userRole?: string, userEmail?: string): UseQueryResult<Property[], Error> {
  return useQuery<Property[], Error>({
    queryKey: ['properties', userId, userRole, userEmail],
    queryFn: () => propertyService.getProperties(userId, userRole, userEmail),
    enabled: !!userId,
  });
}

export function useProperty(userId: string): UseQueryResult<Property[], Error> {
  return useQuery<Property[], Error>({
    queryKey: ['property', userId],
    queryFn: () => propertyService.getProperty(userId),
    enabled: !!userId,
  });
}

export function useCreateProperty() {
  const queryClient = useQueryClient();

  return useMutation<Property, Error, CreatePropertyDTO>({
    mutationFn: (data: CreatePropertyDTO) => propertyService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
    },
  });
}

export function useUpdateProperty() {
  const queryClient = useQueryClient();

  return useMutation<Property, Error, { propertyId: string; data: UpdatePropertyDTO }>({
    mutationFn: ({ propertyId, data }) => propertyService.update(propertyId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['property', variables.propertyId] });
      queryClient.invalidateQueries({ queryKey: ['properties'] });
    },
  });
}

export function useDeleteProperty() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: (propertyId: string) => propertyService.delete(propertyId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
    },
  });
}

export function usePropertyExpensesYTD(params: { propertyId: string; userId: string }): UseQueryResult<PropertyExpenseYTD, Error> {
  return useQuery<PropertyExpenseYTD, Error>({
    queryKey: ['propertyExpensesYTD', params],
    queryFn: () => propertyService.getPropertyExpensesYTD(params),
    enabled: !!params.propertyId && !!params.userId,
  });
}
