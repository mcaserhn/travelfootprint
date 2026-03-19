'use client';

import React, { useMemo } from 'react';
import { MapContainer, GeoJSON, TileLayer, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { useRouter } from 'next/navigation';
import { useUser } from '../../contexts/UserContext';

// 模拟国家边界数据（简化版）
import type { FeatureCollection } from 'geojson';

const countriesGeoJSON: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'China' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[73.6753, 53.5626], [135.0000, 53.5626], [135.0000, 18.1859], [73.6753, 18.1859], [73.6753, 53.5626]]]
      }
    },
    {
      type: 'Feature',
      properties: { name: 'Japan' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[122.9345, 45.5234], [145.8333, 45.5234], [145.8333, 24.2500], [122.9345, 24.2500], [122.9345, 45.5234]]]
      }
    },
    {
      type: 'Feature',
      properties: { name: 'United States' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[-179.1489, 71.3577], [-66.9514, 71.3577], [-66.9514, 24.5212], [-179.1489, 24.5212], [-179.1489, 71.3577]]]
      }
    },
    {
      type: 'Feature',
      properties: { name: 'Russia' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[19.6010, 81.8562], [179.9999, 81.8562], [179.9999, 41.1855], [19.6010, 41.1855], [19.6010, 81.8562]]]
      }
    },
    {
      type: 'Feature',
      properties: { name: 'Canada' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[-140.9977, 83.1105], [-52.6172, 83.1105], [-52.6172, 41.6751], [-140.9977, 41.6751], [-140.9977, 83.1105]]]
      }
    },
    {
      type: 'Feature',
      properties: { name: 'Brazil' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[-73.9866, 5.2746], [-34.7911, 5.2746], [-34.7911, -33.7512], [-73.9866, -33.7512], [-73.9866, 5.2746]]]
      }
    },
    {
      type: 'Feature',
      properties: { name: 'Australia' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[113.3393, -10.6682], [153.9910, -10.6682], [153.9910, -43.6345], [113.3393, -43.6345], [113.3393, -10.6682]]]
      }
    },
    {
      type: 'Feature',
      properties: { name: 'India' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[68.1623, 35.5042], [97.4167, 35.5042], [97.4167, 6.7473], [68.1623, 6.7473], [68.1623, 35.5042]]]
      }
    }
  ]
};

// 国家点击事件处理器
const CountryClickHandler = () => {
  const router = useRouter();
  
  useMapEvents({
    click: (e) => {
      // 这里可以根据点击位置获取国家信息
      // 简化版：直接跳转到中国页面
      router.push('/map/China');
    }
  });
  
  return null;
};

const WorldMap: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  
  // 确定国家颜色
  const getCountryColor = (countryName: string) => {
    if (user?.countries.includes(countryName)) {
      return '#FF6B00'; // aden-orange
    }
    return '#FFFFFF';
  };
  
  // 样式函数
  const style = useMemo(() => {
    return (feature: any) => {
      return {
        fillColor: getCountryColor(feature.properties.name),
        weight: 1,
        opacity: 1,
        color: '#666666', // aden-mid-grey
        dashArray: '',
        fillOpacity: 0.6
      };
    };
  }, [user?.countries]);
  
  // 悬停样式
  const highlightStyle = {
    weight: 2,
    color: '#0A2463', // aden-dark-blue
    dashArray: '',
    fillOpacity: 0.7
  };
  
  // 交互处理
  const onEachFeature = (feature: any, layer: L.Layer) => {
    layer.on({
      mouseover: (e) => {
        const target = e.target;
        if (target instanceof L.Path) {
          target.setStyle(highlightStyle);
        }
      },
      mouseout: (e) => {
        const target = e.target;
        if (target instanceof L.Path) {
          target.setStyle(style(feature));
        }
      },
      click: (e) => {
        const countryName = feature.properties.name;
        router.push(`/map/${countryName}`);
      }
    });
  };
  
  return (
    <div className="w-full h-screen">
      <MapContainer 
        center={[35.86166, 104.195397]} 
        zoom={3} 
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON 
          data={countriesGeoJSON} 
          style={style} 
          onEachFeature={onEachFeature} 
        />
        <CountryClickHandler />
      </MapContainer>
    </div>
  );
};

export default WorldMap;