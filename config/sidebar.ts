export interface SidebarItem {
  title: string;
  href: string;
  children?: SidebarItem[];
}

export const sidebarItems: SidebarItem[] = [
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
      { 
        title: '計算機網絡', 
        href: '/notes/network/network',
        children: [
          { 
            title: '網絡模型', 
            href: '/notes/network/model' 
          },
          { 
            title: '瀏覽器解析Url', 
            href: '/notes/network/webParseUrl' 
          },
          { 
            title: 'TCP', 
            href: '/notes/network/tcp' 
          },
          { 
            title: 'IP', 
            href: '/notes/network/ip' 
          },
          { 
            title: 'MAC', 
            href: '/notes/network/mac' 
          },
        ]
      },
      { 
        title: '前端基礎知識', 
        href: '/notes/frontend/react/hooks',
        children: [
          { 
            title: 'React', 
            href: '/notes/frontend/react/hooks',
            children: [
              { 
                title: 'React Hooks', 
                href: '/notes/frontend/react/hooks' 
              },
            ]
          },
        ]
      },
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
  {
    title: '預覽編輯器',
    href: '/editor'
  },
]; 