import dynamic from 'next/dynamic';

// 动态导入地图组件，确保只在客户端加载
const MapContent = dynamic(() => import('../../../components/MapContent'), {
  ssr: false,
});

const MapPage = () => {
  return <MapContent />;
};

export default MapPage;