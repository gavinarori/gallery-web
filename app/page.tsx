'use client'
// Import necessary types
import React from 'react';
import { Navbar } from '@/app/components/Services/Navbar';
import Service from '@/app/components/Services/Service';
import Footer from '@/app/components/Services/Footer';





const Dashboard = (): JSX.Element => {
  const searchQuery = 'cats'
  return (
    <div className=''>
      
        <Navbar />
        <Service searchQuery={searchQuery} />
        <Footer/>

      
    </div>
  );
};

export default Dashboard;
