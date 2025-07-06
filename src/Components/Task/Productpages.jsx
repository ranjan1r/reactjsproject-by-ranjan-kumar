import React from 'react';
import ProductChecklist from './ProductChecklist';
export default function ProductPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-white py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">The ultimate web design checklist</h1>
      <h1>Ranjan</h1>
      <ProductChecklist />
    </main>
  );
}
