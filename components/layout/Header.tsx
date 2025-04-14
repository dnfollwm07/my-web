'use client';

import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-background border-b z-50">
      <div className="container mx-auto h-full flex items-center px-4">
        <h1 className="text-xl font-semibold">我的個人網站</h1>
      </div>
    </header>
  );
} 