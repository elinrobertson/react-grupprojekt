import { Form, Input, Button } from 'antd';
import { useContext } from 'react';
import { Product, ProductContext } from '../../../context/ProductContext';
import "./CreateProductForm.css"

const CreateProductForm = () => {
    const { addProduct } = useContext(ProductContext)

  const onFinish = (values: Product) => {
    const product = {
        ...values,
        inStock: Number(values.inStock), // gor den till nummer
        price: Number(values.price) // samma har
    };
    addProduct(product) // skickar product till functionen i context
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
            Lägg till ny Produkt
            </Button>
        </Form.Item>
    </Form>
  );
};

export default CreateProductForm;