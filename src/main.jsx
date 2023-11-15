import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './layouts/Layout.jsx';
import Login, {action as actionLogin} from './pages/Login.jsx';
import RequestEnterSystem, { action as actionEnterSystem } from './pages/RequestEnterSystem.jsx';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.jsx';


export const App = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector("html").classList.add('dark');
    } else {
      document.querySelector("html").classList.remove('dark');
    }
  }, [theme]);

  const router = createHashRouter([
    {
      path: '/',
      element: <Layout  />,
      children: [
        {
          index: true,
          element: <Login />,
          action: actionLogin,
          errorElement: <ErrorPage/>
        },
        {
          path: '/formEnterSystem',
          element: <RequestEnterSystem />,
          action: actionEnterSystem,
          errorElement: <ErrorPage/>
        }
      ]
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);