import React from 'react';
import Product from './Product';
import storeData from '../../assets/data/StoreData';
import { Container, Row, Col } from 'reactstrap';  // Importing Bootstrap components

const StoreList = () => {
  return (
    <Container className="store-list">
      <Row>
        {storeData.map((product) => (
          <Col lg="4" md="6" sm="12" key={product.id} className="mb-4">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StoreList;
