// src/store/index.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface NavigationState {
  activeSection: string;
  isMenuOpen: boolean;
  scrollProgress: number;
  setActiveSection: (section: string) => void;
  toggleMenu: () => void;
  setScrollProgress: (progress: number) => void;
}

interface UIState {
  theme: "light" | "dark";
  isLoading: boolean;
  notifications: Notification[];
  toggleTheme: () => void;
  setLoading: (loading: boolean) => void;
  addNotification: (notification: Notification) => void;
  removeNotification: (id: string) => void;
}

interface FormState {
  contactForm: ContactFormData;
  isSubmitting: boolean;
  errors: Record<string, string>;
  updateContactForm: (data: Partial<ContactFormData>) => void;
  setSubmitting: (submitting: boolean) => void;
  setErrors: (errors: Record<string, string>) => void;
  resetForm: () => void;
}

interface ServiceState {
  services: Service[];
  selectedService: Service | null;
  isLoadingServices: boolean;
  setServices: (services: Service[]) => void;
  selectService: (service: Service | null) => void;
  setLoadingServices: (loading: boolean) => void;
}

interface StatisticsState {
  statistics: Statistic[];
  isAnimating: boolean;
  setStatistics: (stats: Statistic[]) => void;
  setAnimating: (animating: boolean) => void;
}

interface RevenueState {
  revenueData: RevenueData[];
  selectedPeriod: "monthly" | "quarterly" | "yearly";
  isLoadingRevenue: boolean;
  setRevenueData: (data: RevenueData[]) => void;
  setPeriod: (period: "monthly" | "quarterly" | "yearly") => void;
  setLoadingRevenue: (loading: boolean) => void;
}

// Types
export interface Notification {
  id: string;
  type: "success" | "error" | "warning" | "info";
  message: string;
  duration?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  service?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export interface RevenueData {
  id: string;
  period: string;
  revenue: number;
  growth: number;
  projections?: number;
}

// Navigation Store
export const useNavigationStore = create<NavigationState>()(
  devtools(
    (set) => ({
      activeSection: "home",
      isMenuOpen: false,
      scrollProgress: 0,
      setActiveSection: (section) => set({ activeSection: section }),
      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      setScrollProgress: (progress) => set({ scrollProgress: progress }),
    }),
    { name: "navigation-store" }
  )
);

// UI Store with persistence
export const useUIStore = create<UIState>()(
  devtools(
    persist(
      (set) => ({
        theme: "dark",
        isLoading: false,
        notifications: [],
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === "light" ? "dark" : "light",
          })),
        setLoading: (loading) => set({ isLoading: loading }),
        addNotification: (notification) =>
          set((state) => ({
            notifications: [...state.notifications, notification],
          })),
        removeNotification: (id) =>
          set((state) => ({
            notifications: state.notifications.filter((n) => n.id !== id),
          })),
      }),
      {
        name: "ui-store",
        partialize: (state) => ({ theme: state.theme }),
      }
    ),
    { name: "ui-store" }
  )
);

// Form Store
export const useFormStore = create<FormState>()(
  devtools(
    (set) => ({
      contactForm: {
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        service: "",
      },
      isSubmitting: false,
      errors: {},
      updateContactForm: (data) =>
        set((state) => ({
          contactForm: { ...state.contactForm, ...data },
        })),
      setSubmitting: (submitting) => set({ isSubmitting: submitting }),
      setErrors: (errors) => set({ errors }),
      resetForm: () =>
        set({
          contactForm: {
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
            service: "",
          },
          errors: {},
          isSubmitting: false,
        }),
    }),
    { name: "form-store" }
  )
);

// Service Store
export const useServiceStore = create<ServiceState>()(
  devtools(
    (set) => ({
      services: [],
      selectedService: null,
      isLoadingServices: false,
      setServices: (services) => set({ services }),
      selectService: (service) => set({ selectedService: service }),
      setLoadingServices: (loading) => set({ isLoadingServices: loading }),
    }),
    { name: "service-store" }
  )
);

// Statistics Store
export const useStatisticsStore = create<StatisticsState>()(
  devtools(
    (set) => ({
      statistics: [],
      isAnimating: false,
      setStatistics: (statistics) => set({ statistics }),
      setAnimating: (animating) => set({ isAnimating: animating }),
    }),
    { name: "statistics-store" }
  )
);

// Revenue Store
export const useRevenueStore = create<RevenueState>()(
  devtools(
    persist(
      (set) => ({
        revenueData: [],
        selectedPeriod: "monthly",
        isLoadingRevenue: false,
        setRevenueData: (data) => set({ revenueData: data }),
        setPeriod: (period) => set({ selectedPeriod: period }),
        setLoadingRevenue: (loading) => set({ isLoadingRevenue: loading }),
      }),
      {
        name: "revenue-store",
        partialize: (state) => ({ selectedPeriod: state.selectedPeriod }),
      }
    ),
    { name: "revenue-store" }
  )
);
