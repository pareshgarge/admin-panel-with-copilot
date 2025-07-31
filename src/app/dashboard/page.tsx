"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      router.push('/login');
      return;
    }
    fetch('http://localhost:5000/api/auth/profile', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) {
          router.push('/login');
        } else {
          const data = await res.json();
          setUser(data);
        }
        setLoading(false);
      })
      .catch(() => {
        router.push('/login');
        setLoading(false);
      });
  }, [router]);

  if (loading) return <div className="flex items-center justify-center min-h-screen bg-blue-900 text-white">Loading...</div>;
  if (!user) return null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-blue-900">
      <header className="flex items-center justify-between px-8 py-4 bg-blue-800 text-white shadow">
        <div className="text-2xl font-bold tracking-widest">govicars</div>
        <nav className="flex gap-6">
          <button className="hover:underline" onClick={() => router.push('/dashboard')}>Profile</button>
          <button className="hover:underline" onClick={() => router.push('/dashboard/products')}>Products</button>
        </nav>
        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold">Logout</button>
      </header>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">User Profile</h2>
          <div className="mb-4 text-blue-900"><b>Full Name:</b> {user.fullname}</div>
          <div className="mb-4 text-blue-900"><b>Email:</b> {user.email}</div>
          <div className="mb-4 text-blue-900"><b>Phone:</b> {user.phone}</div>
        </div>
      </div>
    </div>
  );
}
