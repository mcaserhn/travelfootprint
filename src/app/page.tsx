'use client';

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-aden-dark-blue to-aden-digital-blue text-aden-white">
      {/* 导航栏 */}
      <nav className="bg-aden-dark-blue/90 backdrop-blur-md sticky top-0 z-50 border-b border-aden-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-aden-orange rounded-full flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-aden-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-xl font-title font-bold">旅行足迹地图</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-aden-white hover:text-aden-orange transition-colors">首页</Link>
            <Link href="/login" className="text-aden-white hover:text-aden-orange transition-colors">登录</Link>
            <Link href="/login" className="bg-aden-orange hover:bg-aden-orange/90 text-aden-white px-4 py-2 rounded-lg font-medium transition-colors">
              开始使用
            </Link>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-title font-bold mb-6 leading-tight">
            记录你的旅行足迹，<br />
            <span className="text-aden-orange">分享你的旅行故事</span>
          </h1>
          <p className="text-xl md:text-2xl text-aden-white/80 mb-12 max-w-3xl mx-auto">
            通过交互式世界地图，轻松管理你的旅行经历，上传照片，与朋友分享你的精彩瞬间。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/login" className="bg-aden-orange hover:bg-aden-orange/90 text-aden-white px-6 py-3 rounded-lg font-medium text-lg transition-colors">
              开始你的旅程
            </Link>
            <Link href="/map" className="border border-aden-white/30 hover:border-aden-white text-aden-white px-6 py-3 rounded-lg font-medium text-lg transition-colors">
              浏览世界地图
            </Link>
          </div>
        </div>
      </section>

      {/* 功能特点 */}
      <section className="py-20 bg-aden-white text-aden-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-16 text-center">
            为什么选择旅行足迹地图
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 功能 1 */}
            <div className="bg-aden-light-grey/50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-aden-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-aden-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-title font-semibold mb-4">直观的地图界面</h3>
              <p className="text-aden-mid-grey">通过交互式世界地图查看和管理你的旅行足迹，一目了然地了解你去过的地方。</p>
            </div>
            
            {/* 功能 2 */}
            <div className="bg-aden-light-grey/50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-aden-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-aden-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-title font-semibold mb-4">照片上传与管理</h3>
              <p className="text-aden-mid-grey">在每个国家上传和分享你的旅行照片，创建属于你的旅行记忆库。</p>
            </div>
            
            {/* 功能 3 */}
            <div className="bg-aden-light-grey/50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-aden-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-aden-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-title font-semibold mb-4">多种登录方式</h3>
              <p className="text-aden-mid-grey">支持微信登录、邮箱登录和Google登录，选择最适合你的方式快速访问。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 地图预览 */}
      <section className="py-20 bg-aden-dark-blue text-aden-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-8">
            探索世界，记录足迹
          </h2>
          <p className="text-xl text-aden-white/80 mb-12 max-w-3xl mx-auto">
            我们的交互式地图让你可以轻松标记去过的国家，查看全球旅行数据，
            并与朋友分享你的旅行成就。
          </p>
          <div className="bg-aden-dark-grey/50 rounded-xl p-4 md:p-8 shadow-2xl">
            <div className="aspect-video bg-aden-dark-grey rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-aden-white/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-aden-white/70">交互式世界地图预览</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 行动召唤 */}
      <section className="py-20 bg-aden-orange text-aden-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-8">
            开始你的旅行足迹记录
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            加入我们，开始记录你的旅行故事，与朋友分享你的精彩瞬间，
            创造属于你的旅行记忆库。
          </p>
          <Link href="/login" className="bg-aden-dark-blue hover:bg-aden-dark-blue/90 text-aden-white px-6 py-3 rounded-lg font-medium text-lg transition-colors inline-block">
            立即注册
          </Link>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-aden-dark-blue text-aden-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 品牌信息 */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-aden-orange rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-aden-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-title font-bold">旅行足迹地图</h3>
              </div>
              <p className="text-aden-white/70 mb-4">
                记录你的旅行足迹，分享你的旅行故事。
              </p>
            </div>
            
            {/* 快速链接 */}
            <div>
              <h4 className="text-lg font-title font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-aden-white/70 hover:text-aden-orange transition-colors">首页</Link></li>
                <li><Link href="/login" className="text-aden-white/70 hover:text-aden-orange transition-colors">登录</Link></li>
                <li><Link href="/map" className="text-aden-white/70 hover:text-aden-orange transition-colors">地图</Link></li>
              </ul>
            </div>
            
            {/* 资源 */}
            <div>
              <h4 className="text-lg font-title font-semibold mb-4">资源</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-aden-white/70 hover:text-aden-orange transition-colors">帮助中心</Link></li>
                <li><Link href="#" className="text-aden-white/70 hover:text-aden-orange transition-colors">隐私政策</Link></li>
                <li><Link href="#" className="text-aden-white/70 hover:text-aden-orange transition-colors">服务条款</Link></li>
              </ul>
            </div>
            
            {/* 联系我们 */}
            <div>
              <h4 className="text-lg font-title font-semibold mb-4">联系我们</h4>
              <p className="text-aden-white/70">
                邮箱：contact@travelfootprint.com<br />
                电话：+86 123 4567 8910
              </p>
            </div>
          </div>
          <div className="border-t border-aden-white/10 mt-12 pt-8 text-center text-aden-white/50">
            <p>© 2026 旅行足迹地图. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;