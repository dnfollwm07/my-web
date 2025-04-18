import { promises as fs } from 'fs'
import path from 'path'
import MDXPage from '@/components/mdx-page'

export default async function AboutMePage() {
  const filePath = path.join(process.cwd(), 'content', 'personal', 'aboutme.mdx')
  
  try {
    const source = await fs.readFile(filePath, 'utf8')
    return <MDXPage source={source} />
  } catch (error) {
    return <div>Page not found</div>
  }
} 