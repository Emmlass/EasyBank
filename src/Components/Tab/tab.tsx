// src/Components/Tab/tab.tsx
import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

interface MyTabProps {
  items: TabsProps['items'];
}

export const MyTab: React.FC<MyTabProps> = ({ items }) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};


