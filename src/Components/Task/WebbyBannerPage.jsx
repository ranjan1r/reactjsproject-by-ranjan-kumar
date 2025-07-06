import React from 'react';

export default function WebbyBannerPage() {
  return (
    <div className="min-h-screen bg-purple-50 text-center py-10 px-4">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">WebbyBanners</h1>
      <p className="text-lg text-gray-700 mb-6">
        Get inspired and build faster with our web banners kit
      </p>

      <div className="flex justify-center gap-6 flex-wrap mb-6 text-sm text-blue-600">
        <a href="#">Website</a>
        <a href="#">Figma</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        <a href="#">Dribbble</a>
        <a href="#">Behance</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <img src="/public/webby-banner-1.png" alt="Banner 1" className="rounded-xl shadow-md" />
        <img src="/public/webby-banner-2.png" alt="Banner 2" className="rounded-xl shadow-md" />
      </div>
    </div>
  );
}
