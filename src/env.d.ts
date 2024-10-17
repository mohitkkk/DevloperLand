// src/env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      REACT_APP_API_URL: string;
      // Add other environment variables as needed
    }
  }
  