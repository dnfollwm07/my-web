import { promises as fs } from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '@/components/mdx-components'
import MDXPage from '@/components/mdx-page'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params
  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`)
  
  try {
    const source = await fs.readFile(filePath, 'utf8')
    return <MDXPage source={source} />
  } catch (error) {
    return <div>Page not found</div>
  }
} 