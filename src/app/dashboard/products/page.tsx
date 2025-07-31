"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardHeader from '../DashboardHeader';

export default function ProductListPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex items-center justify-center min-h-screen bg-blue-900 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-blue-900">
      <DashboardHeader />
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mt-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Product List</h2>
          <button
            className="mb-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition font-semibold text-lg"
            onClick={() => router.push('/dashboard/products/add')}
          >
            Add Product
          </button>
          <table className="w-full border">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">SKU</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="text-blue-900">
                  <td className="p-2 border"><img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" /></td>
                  <td className="p-2 border">{product.name}</td>
                  <td className="p-2 border">${product.price}</td>
                  <td className="p-2 border">{product.sku}</td>
                  <td className="p-2 border flex gap-2 justify-center">
                    <button className="bg-green-600 text-white px-2 py-1 rounded" onClick={() => router.push(`/dashboard/products/view/${product._id}`)}>View</button>
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded" onClick={() => router.push(`/dashboard/products/update/${product._id}`)}>Update</button>
                    <button className="bg-red-600 text-white px-2 py-1 rounded" onClick={async () => {
                      await fetch(`http://localhost:5000/api/products/${product._id}`, { method: 'DELETE' });
                      setProducts(products.filter((p) => p._id !== product._id));
                    }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
