'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useUser } from '../../../../contexts/UserContext';
import { Button, Card, Section, Container } from '../../../../components/ui';
import { storage, firestore } from '../../../../services/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

interface Photo {
  id: string;
  url: string;
  description: string;
  createdAt: Date;
}

const CountryPage = () => {
  const router = useRouter();
  const params = useParams();
  const country = params.country as string;
  const { user, addCountry } = useUser();
  
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // 从Firestore获取照片数据
  useEffect(() => {
    const fetchPhotos = async () => {
      if (!user) return;
      
      try {
        // 开发环境中使用模拟数据，暂时跳过Firebase操作
        // 实际项目中需要配置真实的Firebase项目信息
        // const photosRef = collection(firestore, 'photos');
        // const q = query(photosRef, where('userId', '==', user.id), where('country', '==', country));
        // const querySnapshot = await getDocs(q);
        // 
        // const fetchedPhotos: Photo[] = querySnapshot.docs.map(doc => ({
        //   id: doc.id,
        //   url: doc.data().url,
        //   description: doc.data().description,
        //   createdAt: doc.data().createdAt.toDate(),
        // }));
        
        // 模拟照片数据
        const fetchedPhotos: Photo[] = [
          {
            id: '1',
            url: 'https://via.placeholder.com/300x200',
            description: '在这个国家的第一张照片',
            createdAt: new Date(),
          },
          {
            id: '2',
            url: 'https://via.placeholder.com/300x200',
            description: '美丽的风景',
            createdAt: new Date(),
          },
        ];
        
        setPhotos(fetchedPhotos);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, [country, user]);

  const [isDragging, setIsDragging] = useState(false);

  // 处理文件选择
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // 拖拽上传相关事件
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  // 处理照片上传
  const handleUpload = async () => {
    if (!selectedFile || !user) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    
    try {
      // 模拟上传进度
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
      
      // 模拟上传完成
      setTimeout(async () => {
        // 开发环境中使用模拟数据，暂时跳过Firebase操作
        // 实际项目中需要配置真实的Firebase项目信息
        // const storageRef = ref(storage, `photos/${user.id}/${Date.now()}_${selectedFile.name}`);
        // const uploadTask = uploadBytesResumable(storageRef, selectedFile);
        // const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        // await addDoc(collection(firestore, 'photos'), {
        //   userId: user.id,
        //   country: country,
        //   url: downloadURL,
        //   description: description,
        //   createdAt: new Date(),
        // });
        
        // 模拟下载URL
        const downloadURL = 'https://via.placeholder.com/300x200';
        
        // 添加新照片到本地状态
        const newPhoto: Photo = {
          id: Date.now().toString(),
          url: downloadURL,
          description: description,
          createdAt: new Date(),
        };
        setPhotos(prev => [...prev, newPhoto]);
        
        // 重置表单
        setSelectedFile(null);
        setDescription('');
        setIsUploading(false);
        
        // 添加国家到用户的旅行记录
        await addCountry(country);
      }, 3000);
    } catch (error) {
      console.error('Upload error:', error);
      setIsUploading(false);
    }
  };

  // 处理返回按钮
  const handleBack = () => {
    router.push('/map');
  };

  return (
    <div className="min-h-screen bg-aden-white">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <Container className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Button 
              variant="outline" 
              onClick={handleBack}
              size="sm"
              className="mr-4"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回地图
            </Button>
            <h1 className="text-2xl font-title font-bold text-aden-dark-blue">{country}</h1>
          </div>
          {user && (
            <div className="flex items-center">
              <img 
                src={user.avatar} 
                alt={user.nickname} 
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-aden-dark-grey">{user.nickname}</span>
            </div>
          )}
        </Container>
      </nav>

      {/* 照片上传区域 */}
      <Section className="bg-aden-light-grey/50">
        <Container>
          <Card>
            <h2 className="text-xl font-title font-semibold text-aden-dark-blue mb-4">上传照片</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-aden-dark-grey mb-2">选择照片</label>
                <div 
                  className={`
                    w-full 
                    border 
                    ${isDragging ? 'border-aden-orange bg-aden-orange/10' : 'border-aden-light-grey'}
                    rounded-md 
                    p-4 
                    text-center 
                    cursor-pointer
                    transition-all
                    duration-200
                  `}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('file-input')?.click()}
                >
                  <input 
                    id="file-input"
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {selectedFile ? (
                    <div className="flex items-center justify-center">
                      <svg className="w-8 h-8 text-aden-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-aden-dark-grey">{selectedFile.name}</span>
                    </div>
                  ) : (
                    <div>
                      <svg className="w-12 h-12 text-aden-mid-grey mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-aden-mid-grey">点击或拖拽文件到此处上传</p>
                      <p className="text-xs text-aden-mid-grey mt-1">支持 JPG、PNG 等图片格式</p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-aden-dark-grey mb-2">描述</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border border-aden-light-grey rounded-md p-2"
                  rows={3}
                ></textarea>
              </div>
              {isUploading && (
                <div className="mt-4">
                  <div className="w-full bg-aden-light-grey rounded-full h-2.5">
                    <div 
                      className="bg-aden-orange h-2.5 rounded-full" 
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-aden-mid-grey mt-2">上传中... {uploadProgress}%</p>
                </div>
              )}
              <Button 
                onClick={handleUpload}
                disabled={isUploading || !selectedFile}
                className="w-full"
              >
                {isUploading ? '上传中...' : '上传照片'}
              </Button>
            </div>
          </Card>
        </Container>
      </Section>

      {/* 照片展示区域 */}
      <Section>
        <Container>
          <h2 className="text-2xl font-title font-bold text-aden-dark-blue mb-6">照片集</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map(photo => (
              <Card key={photo.id} className="overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={photo.url} 
                    alt={photo.description} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-aden-dark-grey mb-2">{photo.description}</p>
                  <p className="text-xs text-aden-mid-grey">
                    {photo.createdAt.toLocaleDateString()}
                  </p>
                </div>
              </Card>
            ))}
            {photos.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-aden-mid-grey">还没有上传照片，开始上传你的第一张照片吧！</p>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default CountryPage;