import React, { useState, useContext, useEffect } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import { Product } from '../../../context/ProductContext';
import { ProductContext } from '../../../context/ProductContext';
import './Table.css'

interface ProductWithKey extends Product {
  key: string
}


/* const originData: ProductWithKey[] = []; */
/* const newData = products.map((product: ProductWithKey) => ({
  
})); */
/* for (let i = 0; i < 100; i++) {
  originData.push({
    key: '12345',
    _id: '1232',
    title: `Edward ${i}`,
    price: 32,
    description: `Produktbeskrivning. ${i}`,
    image: 'url',
    inStock: 10
  });
} */

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: ProductWithKey;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const AdminUI = () => {
  
  const [form] = Form.useForm();
  

  const [editingKey, setEditingKey] = useState('');
  const { products } = useContext(ProductContext)
  const [data, setData] = useState<ProductWithKey[]>([]);

  useEffect(() => {
    const newData = products.map((product: ProductWithKey) => ({
      ...product,
      key: product._id, // Assigning unique key based on _id
    }));
    setData(newData);
  }, [products]);

 // ------------------------------------------------------------ EDITING FUNCTION

  const isEditing = (record: ProductWithKey) => record.key === editingKey;

  const edit = (record: Partial<ProductWithKey> & { key: React.Key }) => {
    form.setFieldsValue({ title: '', price: '', description: '',  inStock: '', image: '', ...record });
    setEditingKey(record.key);
  };

  // ------------------------------------------------------------ CANCEL BUTTON FUNCTION

  const cancel = () => {
    setEditingKey('');
  };

  // ------------------------------------------------------------ SAVE BUTTON FUNCTION
  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as ProductWithKey;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  // ------------------------------------------------------------ SAVE FUNCTION ENDS HERE

  // ------------------------------------------------------------ SETS COLUMNS AND ITS PROPERTIES
  const columns = [
    {
      title: 'titel',
      dataIndex: 'title',
      width: '20%',
      editable: true,
    },
    {
      title: 'pris',
      dataIndex: 'price',
      width: '10%',
      editable: true,
    },
    {
      title: 'beskrivning',
      dataIndex: 'description',
      width: '30%',
      editable: true,
    },
    {
      title: 'lagersaldo',
      dataIndex: 'inStock',
      width: '10%',
      editable: true,
    },
    {
      title: 'image',
      dataIndex: 'image',
      width: '10%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: ProductWithKey) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: ProductWithKey) => ({
        record,
        inputType: col.dataIndex === 'inStock' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default AdminUI;