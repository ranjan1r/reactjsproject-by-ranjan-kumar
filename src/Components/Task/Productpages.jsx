import React from 'react';

import ProductChecklist from './ProductChecklist';

export default function ProductPage() {
  return (
   <main className="product-page">
      <h1 className="heading-title">The ultimate web design checklist</h1>
      <h1 className="author-name">Ranjan</h1>
       
      <ProductChecklist />
    </main>
  );
}
