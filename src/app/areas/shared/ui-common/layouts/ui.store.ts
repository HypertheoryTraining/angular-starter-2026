import { effect } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';

type AppUiState = {
  theme: 'dark' | 'nord';
  sidebarOpen: boolean;
};

const THEME_KEY = 'app-theme';
const SIDEBAR_KEY = 'app-sidebar';

const initialState = (): AppUiState => ({
  theme: localStorage.getItem(THEME_KEY) === 'nord' ? 'nord' : 'dark',
  sidebarOpen: localStorage.getItem(SIDEBAR_KEY) === 'true',
});

export const AppUiStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    toggleTheme() {
      patchState(store, (s) => ({ theme: s.theme() === 'dark' ? 'nord' : 'dark' }));
    },
    toggleSidebar() {
      patchState(store, (s) => ({ sidebarOpen: !s.sidebarOpen }));
    },
    setSidebar(open: boolean) {
      patchState(store, { sidebarOpen: open });
    },
  })),
  withHooks((store) => ({
    onInit() {
      effect(() => {
        const theme = store.theme();
        localStorage.setItem(THEME_KEY, theme);
        document.documentElement.setAttribute('data-theme', theme);
      });
      effect(() => {
        localStorage.setItem(SIDEBAR_KEY, String(store.sidebarOpen()));
      });
    },
  })),
);
