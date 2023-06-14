import { Form, Input, Button } from 'antd';
import { useContext } from 'react';
import { Product, ProductContext } from '../../../context/ProductContext';
import "./CreateProduct.css"

const CreateProduct = () => {
    const { addProduct } = useContext(ProductContext)

  const onFinish = (values: Product) => {
    const product = {
        ...values,
        inStock: Number(values.inStock), // Convert inStock to a number
        price: Number(values.price) // Convert price to a number
    };
    addProduct(product)
    // Handle form submission here
  };

  return (
    <Form onFinish={(onFinish)} layout="inline" size='small' className="createProduct-form">
        <Form.Item label="Titel" name="title">
            <Input className="createProduct-input" placeholder="Titel" />
        </Form.Item>
        <Form.Item label="Pris" name="price">
            <Input className="createProduct-input" placeholder="Pris" id='price-input' />
        </Form.Item>
        <Form.Item label="Beskrivning" name="description">
            <Input className="createProduct-input" placeholder="Beskrivning" id='description-input'/>
        </Form.Item>
        <Form.Item label="Lagersaldo" name="inStock" className="createProduct-label">
            <Input className="createProduct-input" placeholder="Lagersaldo" id='stock-input' />
        </Form.Item>
        <Form.Item label="Bild" name="image">
            <Input className="createProduct-input" placeholder="Bild url" />
        </Form.Item>
        <Form.Item className='form-btn'>
            <Button type="primary" htmlType="submit">
            L'gg till ny Produkt
            </Button>
        </Form.Item>
    </Form>
  );
};

export default CreateProduct;