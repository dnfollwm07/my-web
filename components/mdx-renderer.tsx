'use client';

import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from './mdx-components'
import MDXPage from './mdx-page'

interface MDXRendererProps {
  source: string;
}

export default function MDXRenderer({ source }: MDXRendererProps) {
  return <MDXPage source={source} />
} 