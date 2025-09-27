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
          <section id="home" className="min-h-screen">
            <HomePage />
          </section>

          <section id="services" className="min-h-screen">
            <ServicesPage />
          </section>

          <section id="statistics" className="min-h-screen">
            <StatisticsPage />
          </section>

          <section id="revenue" className="min-h-screen">
            <RevenuePage />
          </section>

          <section id="contact" className="min-h-screen">
            <TouchPage />
          </section>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
