import router from './routes/app.route';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="E5E5E5">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
