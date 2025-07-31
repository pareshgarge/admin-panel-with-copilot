"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import DashboardHeader from '../../../DashboardHeader';

export default function ViewProductPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="flex items-center justify-center min-h-screen bg-blue-900 text-white">Loading...</div>;
  if (!product) return <div className="flex items-center justify-center min-h-screen bg-blue-900 text-white">Product not found</div>;

  return (
    <div className="min-h-screen bg-blue-900">
      <DashboardHeader />
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Product Details</h2>
          <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded mx-auto mb-4" />
          <div className="mb-2 text-blue-900"><b>Name:</b> {product.name}</div>
          <div className="mb-2 text-blue-900"><b>Price:</b> ${product.price}</div>
          <div className="mb-2 text-blue-900"><b>SKU:</b> {product.sku}</div>
          <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition font-semibold text-lg w-full" onClick={() => router.push('/dashboard/products')}>Back to List</button>
        </div>
      </div>
    </div>
  );
}
