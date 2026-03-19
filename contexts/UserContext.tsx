'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  wechatId: string;
  nickname: string;
  avatar: string;
  countries: string[];
  createdAt: Date;
}

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  addCountry: (country: string) => Promise<void>;
  removeCountry: (country: string) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 从本地存储加载用户信息
  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error loading user from localStorage:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  // 保存用户信息到本地存储
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // 模拟微信登录
  const login = async () => {
    setIsLoading(true);
    try {
      // 模拟微信登录流程
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 模拟用户数据
      const mockUser: User = {
        id: '1',
        wechatId: 'wx123456789',
        nickname: '旅行者',
        avatar: 'https://via.placeholder.com/100',
        countries: [],
        createdAt: new Date(),
      };

      // 开发环境中暂时跳过Firebase操作，只使用本地存储
      // 实际项目中需要配置真实的Firebase项目信息
      // const userDoc = doc(firestore, 'users', mockUser.id);
      // await setDoc(userDoc, mockUser);

      setUser(mockUser);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      // 实际项目中应该调用Firebase的登出方法
      // await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const addCountry = async (country: string) => {
    if (user && !user.countries.includes(country)) {
      const updatedUser = {
        ...user,
        countries: [...user.countries, country],
      };
      
      // 开发环境中暂时跳过Firebase操作，只使用本地存储
      // 实际项目中需要配置真实的Firebase项目信息
      // const userDoc = doc(firestore, 'users', user.id);
      // await updateDoc(userDoc, {
      //   countries: arrayUnion(country),
      // });

      setUser(updatedUser);
    }
  };

  const removeCountry = async (country: string) => {
    if (user) {
      const updatedUser = {
        ...user,
        countries: user.countries.filter(c => c !== country),
      };
      
      // 开发环境中暂时跳过Firebase操作，只使用本地存储
      // 实际项目中需要配置真实的Firebase项目信息
      // const userDoc = doc(firestore, 'users', user.id);
      // await updateDoc(userDoc, {
      //   countries: arrayRemove(country),
      // });

      setUser(updatedUser);
    }
  };

  const value: UserContextType = {
    user,
    isLoading,
    login,
    logout,
    addCountry,
    removeCountry,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};