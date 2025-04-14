import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

export async function NoteList() {
  const notesDirectory = path.join(process.cwd(), 'content', 'notes');
  const files = await fs.readdir(notesDirectory);
  
  const notes = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace('.mdx', '');
      return {
        title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        href: `/notes/${slug}`
      };
    });

  return (
    <div style={styles.childrenContainer}>
      {notes.map((note) => (
        <Link
          key={note.href}
          href={note.href}
          style={styles.childLink}
        >
          {note.title}
        </Link>
      ))}
    </div>
  );
}

const styles = {
  childrenContainer: {
    marginLeft: '1.5rem',
    marginTop: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  childLink: {
    display: 'block',
    padding: '0.5rem',
    fontSize: '0.875rem',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    color: 'inherit',
    ':hover': {
      backgroundColor: 'var(--accent)'
    }
  }
} as const; 