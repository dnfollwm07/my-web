import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { SidebarProvider } from '@/components/layout/SidebarProvider';
import { theme } from '@/styles/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Notes',
  description: 'A personal note-taking application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={styles.body}>
        <SidebarProvider>
          <div style={styles.container}>
            <Header />
            <div style={styles.mainContent}>
              <Sidebar />
              <div style={styles.content}>
                {children}
              </div>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

const styles = {
  body: {
    fontFamily: inter.style.fontFamily,
    margin: 0,
    padding: 0,
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  mainContent: {
    marginTop: '4rem',
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
    backgroundColor: theme.colors.background.lightest
  },
  content: {
    flex: 1,
    overflow: 'auto',
    padding: '1rem'
  }
} as const; 