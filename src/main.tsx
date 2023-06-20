import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/app'
import ErrorPage from './pages/error-page/error-page'
import { DictionaryPage } from 'pages/dictionary'
import { Events } from './pages/events/events-page'
import { Normalize } from 'styled-normalize'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DictionatyGroup } from 'pages/dictionary-group'

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
      {
        path: "/dictionary-group",
        element: <DictionatyGroup/>
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
