import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs.jsx';
import Footer from './components/Footer.jsx';
import Loading from './pages/Loading.jsx'; // Import the Loading component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading /> // Render loading animation while loading is true
      ) : (
        <>
          <Nav />
          <main className="mx-3">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
