import { promises as fs } from 'fs'
import path from 'path'
import MDXRenderer from '@/components/mdx-renderer'

export default async function PersonalPage() {
  const filePath = path.join(process.cwd(), 'content', 'personal', 'index.mdx')
  
  try {
    const source = await fs.readFile(filePath, 'utf8')
    return <MDXRenderer source={source} />
  } catch (error) {
    return <div>Page not found</div>
  }
} 