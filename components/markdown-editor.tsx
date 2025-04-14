'use client';

import React, { useState } from 'react';
import MDXRenderer from './mdx-renderer';
import { mdxComponents } from './mdx-styles';

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
      {/* 编辑区域 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
        <h3 style={{ marginBottom: '1rem' }}>编辑区</h3>
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
          placeholder="在这里输入 Markdown 内容..."
        />
      </div>

      {/* 预览区域 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'auto',
      }}>
        <h3 style={{ marginBottom: '1rem' }}>预览区</h3>
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