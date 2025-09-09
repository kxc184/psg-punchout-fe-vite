import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, renderHook } from '@testing-library/react'; // or other testing utilities

// 1. Create a new QueryClient instance for your tests
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Optional: Turn off retries for tests to prevent timeouts on failed queries
      retry: false,
    },
  },
});

// 2. Create a wrapper component
import { ReactNode } from 'react';

const TestWrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

export default TestWrapper