'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface MDXRendererProps {
  source: string;
}

interface CodeProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

interface ComponentProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export default function MDXRenderer({ source }: MDXRendererProps) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code({ node, inline, className, children, ...props }: CodeProps) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                customStyle={{
                  margin: '1rem 0',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                }}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  padding: '0.2em 0.4em',
                  borderRadius: '0.25rem',
                  fontSize: '0.9em',
                }}
                {...props}
              >
                {children}
              </code>
            );
          },
          p: (props: ComponentProps) => (
            <p
              style={{
                margin: '1rem 0',
                lineHeight: '1.6',
                fontSize: '1.1rem',
              }}
              {...props}
            />
          ),
          h1: (props: ComponentProps) => (
            <h1
              style={{
                fontSize: '2.5rem',
                margin: '2rem 0 1rem',
                fontWeight: 'bold',
                color: 'var(--text-primary)',
              }}
              {...props}
            />
          ),
          h2: (props: ComponentProps) => (
            <h2
              style={{
                fontSize: '2rem',
                margin: '1.5rem 0 1rem',
                fontWeight: 'bold',
                color: 'var(--text-primary)',
              }}
              {...props}
            />
          ),
          h3: (props: ComponentProps) => (
            <h3
              style={{
                fontSize: '1.5rem',
                margin: '1.25rem 0 1rem',
                fontWeight: 'bold',
                color: 'var(--text-primary)',
              }}
              {...props}
            />
          ),
          h4: (props: ComponentProps) => (
            <h4
              style={{
                fontSize: '1.25rem',
                margin: '1rem 0',
                fontWeight: 'bold',
                color: 'var(--text-primary)',
              }}
              {...props}
            />
          ),
          ul: (props: ComponentProps) => (
            <ul
              style={{
                margin: '1rem 0',
                paddingLeft: '2rem',
                listStyleType: 'disc',
              }}
              {...props}
            />
          ),
          ol: (props: ComponentProps) => (
            <ol
              style={{
                margin: '1rem 0',
                paddingLeft: '2rem',
                listStyleType: 'decimal',
              }}
              {...props}
            />
          ),
          li: (props: ComponentProps) => (
            <li
              style={{
                margin: '0.5rem 0',
                lineHeight: '1.6',
              }}
              {...props}
            />
          ),
          blockquote: (props: ComponentProps) => (
            <blockquote
              style={{
                borderLeft: '4px solid var(--accent)',
                margin: '1rem 0',
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--background-secondary)',
                fontStyle: 'italic',
              }}
              {...props}
            />
          ),
          img: (props: ComponentProps) => (
            <img
              style={{
                maxWidth: '100%',
                height: 'auto',
                margin: '1rem 0',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
              {...props}
            />
          ),
          table: (props: ComponentProps) => (
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                margin: '1rem 0',
                overflowX: 'auto',
                display: 'block',
              }}
              {...props}
            />
          ),
          th: (props: ComponentProps) => (
            <th
              style={{
                border: '1px solid var(--border)',
                padding: '0.75rem',
                textAlign: 'left',
                backgroundColor: 'var(--background-secondary)',
                fontWeight: 'bold',
              }}
              {...props}
            />
          ),
          td: (props: ComponentProps) => (
            <td
              style={{
                border: '1px solid var(--border)',
                padding: '0.75rem',
              }}
              {...props}
            />
          ),
          em: (props: ComponentProps) => (
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--text-primary)',
              }}
              {...props}
            />
          ),
          strong: (props: ComponentProps) => (
            <strong
              style={{
                fontWeight: 'bold',
                color: 'var(--text-primary)',
              }}
              {...props}
            />
          ),
          del: (props: ComponentProps) => (
            <del
              style={{
                textDecoration: 'line-through',
                color: 'var(--text-secondary)',
              }}
              {...props}
            />
          ),
          mark: (props: ComponentProps) => (
            <mark
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--text-primary)',
                padding: '0.1em 0.3em',
                borderRadius: '0.2em',
              }}
              {...props}
            />
          ),
          inlineCode: (props: ComponentProps) => (
            <code
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                padding: '0.2em 0.4em',
                borderRadius: '0.25rem',
                fontSize: '0.9em',
                fontFamily: 'monospace',
              }}
              {...props}
            />
          ),
          a: (props: ComponentProps) => (
            <a
              style={{
                color: 'var(--accent)',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
              {...props}
            />
          ),
          hr: (props: ComponentProps) => (
            <hr
              style={{
                border: 'none',
                borderTop: '1px solid var(--border)',
                margin: '2rem 0',
              }}
              {...props}
            />
          ),
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
} 