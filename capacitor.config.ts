
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.02fc929a2ed441799b5dad0de08e82ad',
  appName: 'co-bank-carbon-connect',
  webDir: 'dist',
  server: {
    url: 'https://02fc929a-2ed4-4179-9b5d-ad0de08e82ad.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#22c55e',
      showSpinner: false
    }
  }
};

export default config;
