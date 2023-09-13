'use client'
// Import necessary types
import React from 'react';
import { Navbar } from '@/app/components/Services/Navbar';
import Service from '@/app/components/Services/Service';
import Footer from '@/app/components/Services/Footer';





const Dashboard = (): JSX.Element => {
  
  return (
    <div className=''>
      
        <Navbar />
        <Service  />
        <Footer/>

      
    </div>
  );
};

export default Dashboard;
