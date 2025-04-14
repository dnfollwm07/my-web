'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from './mdx-styles';

interface MDXRendererProps {
  source: string;
}

export default function MDXRenderer({ source }: MDXRendererProps) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
} 