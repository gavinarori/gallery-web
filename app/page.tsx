'use client'
// Import necessary types
import React from 'react';
import { Navbar } from '@/app/components/Services/Navbar';
import Service from '@/app/components/Services/Service';
import Footer from '@/app/components/Services/Footer';
import { Suspense } from 'react'





const Dashboard = (): JSX.Element => {
  const searchQuery = 'cats'
  return (
    <div className=''>
      
        <Navbar />
        <Suspense fallback={<p>Loading feed...</p>}>
        <Service searchQuery={searchQuery} />
        </Suspense>
        <Footer/>

      
    </div>
  );
};

export default Dashboard;
