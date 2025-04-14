'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarItem {
  title: string;
  href: string;
  children?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  {
    title: '我的介紹',
    href: '/',
    children: [
      { title: '個人簡介', href: '/' },
      { title: '技能專長', href: '/skills' },
      { title: '工作經歷', href: '/experience' },
    ],
  },
  {
    title: '我的筆記',
    href: '/notes',
    children: [
      { title: '前端開發', href: '/notes/frontend' },
      { title: '後端開發', href: '/notes/backend' },
      { title: '系統設計', href: '/notes/system-design' },
    ],
  },
  {
    title: '我的項目',
    href: '/projects',
    children: [
      { title: '個人網站', href: '/projects/portfolio' },
      { title: '電商平台', href: '/projects/ecommerce' },
      { title: '社交媒體', href: '/projects/social-media' },
    ],
  },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const toggleItem = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div
      className={cn(
        'h-full bg-background border-r transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b">
          <button
            onClick={onToggle}
            className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-accent"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          {sidebarItems.map((item) => (
            <div key={item.title} className="mb-4">
              <button
                onClick={() => toggleItem(item.title)}
                className="flex items-center w-full p-2 rounded-md hover:bg-accent"
              >
                {expandedItems.includes(item.title) ? (
                  <ChevronDown className="w-4 h-4 mr-2" />
                ) : (
                  <ChevronRight className="w-4 h-4 mr-2" />
                )}
                {!isCollapsed && <span>{item.title}</span>}
              </button>

              {!isCollapsed && expandedItems.includes(item.title) && (
                <div className="ml-6 mt-2 space-y-2">
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block p-2 text-sm rounded-md hover:bg-accent"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
} 