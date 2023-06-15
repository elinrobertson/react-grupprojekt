import React, { useContext, useState } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { OrderContext } from '../../../context/OrderContext';
import { Order } from '../../../context/OrderContext';
import './AdminOrderTable.css';


const columns: ColumnsType<Partial<Order>> = [
  {
    title: 'Ordernummer',
    dataIndex: 'orderNumber',
  },
  {
    title: 'Fraktsätt',
    dataIndex: 'shippingMethod',
  },
  {
    title: 'Status',
    dataIndex: 'shipped',
  }
];


const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const {orders, editOrder, shippingMethodes} = useContext(OrderContext)

  const data: Partial<Order>[] = [];

  orders.forEach((order) =>  {
    const ship = shippingMethodes.find((item) => item._id === order.shippingMethod);
    
    
    data.push({
      key: order._id,
      orderNumber: order.orderNumber,
      shippingMethod: ship?.company,
      shipped: order.shipped == true ? "Skickad" : "Under behandling"
    });
  })

  const start = () => {
    setLoading(true);
    selectedRowKeys.forEach(element => {
      editOrder(element)
    });
    
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Uppdatera
        </Button>
      
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default App;


