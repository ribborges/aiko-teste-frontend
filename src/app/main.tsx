import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { APIProvider } from '@vis.gl/react-google-maps';

import { mapsApiKey } from '@/config/env.tsx';

import App from './App.tsx';
import Map from './pages/Map.tsx';

import "@/styles/global.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <APIProvider apiKey={mapsApiKey}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Map />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </APIProvider>
  </StrictMode>,
);