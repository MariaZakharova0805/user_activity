import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/app'
import ErrorPage from './pages/error-page/error-page'
import { DictionaryPage } from 'pages/dictionary'
import { Events } from './pages/events/events'
import { Normalize } from 'styled-normalize'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dictionary",
        element: <DictionaryPage />,
      },
      {
        path: "/events",
        element: <Events />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Normalize />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
