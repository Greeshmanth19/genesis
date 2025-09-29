import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import StatisticsPage from './pages/StatisticsPage';
import RevenuePage from './pages/RevenuePage';
import TouchPage from './pages/TouchPage';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <section id="home">
            <HomePage />
          </section>

          <section id="services">
            <ServicesPage />
          </section>

          <section id="statistics">
            <StatisticsPage />
          </section>

          <section id="revenue">
            <RevenuePage />
          </section>

          <section id="touch">
            <TouchPage />
          </section>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
