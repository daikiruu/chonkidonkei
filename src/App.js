import React from 'react';
import ReactDOM from "react-dom/client"; //New
import { BrowserRouter, Routes, Route } from "react-router-dom"; //New
import './App.scss';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);









// const routes = [
//   {
//     path: '/',
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: 'home',
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: 'error',
//     element: <ErrorPage />,
//     // errorElement: <ErrorPage />,
//   },
// ];

// const router = createHashRouter(routes);

// const App = () => {
//   return (
//     <div className='App'>
//       <RouterProvider router={router} />
//     </div>
//   );
// };

// export default App;
