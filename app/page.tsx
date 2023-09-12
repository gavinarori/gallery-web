'use client'
// Import necessary types
import React from 'react';
import { Navbar } from '@/app/components/Services/Navbar';
import Service from '@/app/components/Services/Service';





const Dashboard = (): JSX.Element => {
  
  return (
    <div className=''>
      
        <Navbar />
        <Service  />

      
    </div>
  );
};

export default Dashboard;
