'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useSidebar } from './SidebarProvider';
import type { SidebarItem } from '@/config/sidebar';
import { sidebarItems } from '@/config/sidebar';
import { theme } from '@/styles/theme';
interface SidebarItemProps {
  item: SidebarItem;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const { isCollapsed, expandedItems, toggleItem } = useSidebar();
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedItems.includes(item.title);

  return (
    <div style={styles.itemContainer}>
      <div style={styles.itemContent}>
        {hasChildren && (
          <button
            onClick={() => toggleItem(item.title)}
            style={styles.toggleButton}
          >
            {isExpanded ? (
              <ChevronDown style={styles.icon} />
            ) : (
              <ChevronRight style={styles.icon} />
            )}
          </button>
        )}
        <Link
          href={item.href}
          onClick={(e) => {
            if (hasChildren) {
              e.preventDefault();
              toggleItem(item.title);
            }
          }}
          style={{
            ...styles.itemLink,
            paddingLeft: hasChildren ? '0' : '2rem',
          }}
        >
          {!isCollapsed && item.title}
        </Link>
      </div>

      {!isCollapsed && hasChildren && isExpanded && (
        <div style={{ ...styles.childrenContainer, marginLeft: '1.5rem' }}>
          {item.children?.map((child) => (
            <SidebarItem key={child.href} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export function Sidebar() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div
      style={{
        ...styles.sidebar,
        width: isCollapsed ? '4rem' : '16rem'
      }}
    >
      <div style={styles.sidebarContainer}>
        <div style={styles.toggleContainer}>
          <button
            onClick={toggleSidebar}
            style={styles.toggleButton}
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>

        <nav style={styles.nav}>
          {sidebarItems.map((item) => (
            <SidebarItem key={item.href} item={item} />
          ))}
        </nav>
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    height: '100%',
    backgroundColor: 'var(--background)',
    borderRight: '1px solid var(--border)',
    transition: 'all 0.3s ease'
  },
  sidebarContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  toggleContainer: {
    padding: '1rem',
    borderBottom: '1px solid var(--border)',
    backgroundColor: theme.colors.background.fourth
  },
  toggleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2rem',
    height: '2rem',
    borderRadius: '0.375rem',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    ':hover': {
      backgroundColor: 'var(--accent)'
    }
  },
  nav: {
    flex: 1,
    overflowY: 'auto',
    padding: '1rem',
    backgroundColor: theme.colors.background.fifth
  },
  itemContainer: {
    marginBottom: '0.5rem'
  },
  itemContent: {
    display: 'flex',
    alignItems: 'center'
  },
  itemLink: {
    display: 'block',
    padding: '0.5rem',
    fontSize: '0.875rem',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    color: 'inherit',
    flex: 1,
    ':hover': {
      backgroundColor: 'var(--accent)'
    }
  },
  childrenContainer: {
    marginTop: '0.5rem'
  },
  icon: {
    width: '1rem',
    height: '1rem',
    marginRight: '0.5rem'
  }
} as const; 