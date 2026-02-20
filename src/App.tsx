/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/context/ThemeContext';
import { AuthProvider } from '@/context/AuthContext';
import { queryClient } from '@/api/query-client';
import { Layout } from '@/components/layout/Layout';
import { ProtectedRoute } from '@/middleware/ProtectedRoute';

// Public Pages
import Landing from '@/pages/Landing';
import Product from '@/pages/Product';

// Auth Pages
import SignIn from '@/pages/auth/SignIn';
import SignUp from '@/pages/auth/SignUp';

// Dashboard Pages (placeholder - to be implemented)
import { DashboardLayout } from '@/pages/dashboard/DashboardLayout';
import { Overview } from '@/pages/dashboard/Overview';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route element={<Layout />}>
                <Route path="/" element={<Landing />} />
                <Route path="/product" element={<Product />} />
              </Route>

              {/* Auth Routes */}
              <Route path="/auth/sign-in" element={<SignIn />} />
              <Route path="/auth/sign-up" element={<SignUp />} />

              {/* Protected Dashboard Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Overview />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
