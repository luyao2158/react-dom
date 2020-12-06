import React from 'react';
import { Input, Button } from 'antd';

const Index = () => {
  return (
    <div>
      <div>
        <Input placeholder="请输入数据" />
        <Button type="primary">确定</Button>
      </div>
      <ul>
        <li>1</li>
      </ul>
    </div>
  )
}

export default Index;