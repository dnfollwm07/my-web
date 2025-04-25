'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useMDXComponents } from './mdx-components';

// Dynamically import MDXRemote with SSR disabled to avoid hydration issues
const MDXRemote = dynamic(() => import('next-mdx-remote/rsc').then(mod => ({ default: mod.MDXRemote })), {
  ssr: false,
});

interface MDXPageProps {
  source: string;
}

export default function MDXPage({ source }: MDXPageProps) {
  const [isClient, setIsClient] = useState(false);
  const components = useMDXComponents({});

  // Only render MDX content after component mounts on client
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return <div className="prose dark:prose-invert max-w-none">Loading content...</div>;
  }
  
  // Wrap MDXRemote in try/catch to handle rendering errors
  try {
    return (
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={source} components={components} />
      </article>
    );
  } catch (error) {
    console.error('Error rendering MDX content:', error);
    return (
      <div className="prose dark:prose-invert max-w-none">
        <h2>Error loading content</h2>
        <p>There was a problem displaying this content. Please try again later.</p>
      </div>
    );
  }
} 