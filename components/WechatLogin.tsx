import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from './ui';
import { useUser } from '../contexts/UserContext';

interface WechatLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WechatLogin: React.FC<WechatLoginProps> = ({ isOpen, onClose }) => {
  const { login, isLoading } = useUser();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-title font-bold text-aden-dark-blue">欢迎使用旅游足迹地图</h2>
        </CardHeader>
        <CardBody className="text-center">
          <p className="text-aden-dark-grey mb-6">请使用微信登录，开始记录您的旅游足迹</p>
          <div className="mb-6">
            <img 
              src="https://via.placeholder.com/200x200?text=微信二维码" 
              alt="微信登录二维码" 
              className="mx-auto rounded-md"
            />
          </div>
          <p className="text-aden-mid-grey text-sm mb-4">扫描二维码登录微信</p>
          <Button 
            onClick={async () => {
              await login();
              onClose();
            }}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? '登录中...' : '模拟微信登录'}
          </Button>
        </CardBody>
        <CardFooter className="flex justify-center">
          <Button 
            variant="ghost" 
            onClick={onClose}
            size="sm"
          >
            取消
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};