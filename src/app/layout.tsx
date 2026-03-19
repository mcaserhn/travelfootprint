import type { Metadata } from 'next';
import '@/styles/globals.css';
import 'leaflet/dist/leaflet.css';
import { UserProvider } from '../../contexts/UserContext';

export const metadata: Metadata = {
  title: '旅行足迹地图',
  description: '记录你的旅行足迹，分享你的旅行故事',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}