'use client';

import React, { useState } from 'react';
import MDXRenderer from './mdx-renderer';

export const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      height: 'calc(100vh - 4rem)',
      padding: '1rem',
    }}>
      {/* 編輯區域 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
        <h3 style={{ marginBottom: '1rem' }}>編輯區</h3>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          style={{
            flex: 1,
            padding: '1rem',
            border: '1px solid var(--border)',
            borderRadius: '0.5rem',
            backgroundColor: 'var(--background-primary)',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            lineHeight: '1.6',
            resize: 'none',
          }}
          placeholder="在這裡輸入 Markdown 內容..."
        />
      </div>

      {/* 预览区域 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'auto',
      }}>
        <h3 style={{ marginBottom: '1rem' }}>預覽區</h3>
        <div style={{
          flex: 1,
          padding: '1rem',
          border: '1px solid var(--border)',
          borderRadius: '0.5rem',
          backgroundColor: 'var(--background-primary)',
          overflow: 'auto',
        }}>
          <MDXRenderer source={markdown} />
        </div>
      </div>
    </div>
  );
}; 