"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardHeader() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-blue-800 text-white shadow">
      <div className="text-2xl font-bold tracking-widest">govicars</div>
      <nav className="flex gap-6">
        <button className="hover:underline" onClick={() => router.push('/dashboard')}>Profile</button>
        <button className="hover:underline" onClick={() => router.push('/dashboard/products')}>Products</button>
      </nav>
      <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold">Logout</button>
    </header>
  );
}
