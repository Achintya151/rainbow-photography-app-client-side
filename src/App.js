import { Helmet } from 'react-helmet';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';


function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Helmet>
        <title>Rainbow Photography</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
