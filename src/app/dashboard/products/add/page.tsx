"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardHeader from '../../DashboardHeader';

export default function AddProductPage() {
  const [form, setForm] = useState({ name: '', image: '', price: '', sku: '' });
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, price: parseFloat(form.price) }),
      });
      if (res.ok) {
        setMessage('Product added!');
        setTimeout(() => router.push('/dashboard/products'), 1000);
      } else {
        setMessage('Failed to add product');
      }
    } catch (err) {
      setMessage('Server error');
    }
  };

  return (
    <div className="min-h-screen bg-blue-900">
      <DashboardHeader />
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Add Product</h2>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            className="mb-4 w-full p-3 border border-blue-300 rounded text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="mb-4 w-full p-3 border border-blue-300 rounded text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="mb-4 w-full p-3 border border-blue-300 rounded text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="sku"
            placeholder="SKU"
            value={form.sku}
            onChange={handleChange}
            className="mb-4 w-full p-3 border border-blue-300 rounded text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition font-semibold text-lg"
          >
            Add Product
          </button>
          {message && <p className="mt-4 text-center text-green-600 font-medium">{message}</p>}
        </form>
      </div>
    </div>
  );
}
