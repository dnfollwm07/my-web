'use client';

import { theme } from '@/styles/theme';
import React from 'react';

export function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.title}>Jing-Ning Su's Personal Website</h1>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '4rem',
    backgroundColor: theme.colors.background.primary,
    zIndex: 50
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 1rem'
  },
  title: {
    fontSize: '1.25rem',
    color: theme.colors.text.darkBackground,
    fontWeight: theme.fontWeight.bold
  }
} as const; 