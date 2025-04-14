import Layout from '@/components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.title}>歡迎來到我的個人網站</h1>
        <p style={styles.description}>這裡是我的個人介紹、技術筆記和項目展示。</p>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    maxWidth: 'none'
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: 700,
    marginBottom: '1rem'
  },
  description: {
    fontSize: '1.125rem',
    lineHeight: 1.75,
    color: 'var(--foreground)'
  }
} as const; 