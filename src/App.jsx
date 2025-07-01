import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import PlainGridLayout from './layouts/PlainGridLayout';
import MouseFollower from "./components/MouseFollower";

const App = () => {
  return (
    <PlainGridLayout>
      <MouseFollower />
      <Navbar />
      <AppRoutes />
    </PlainGridLayout>
  );
};

export default App;
