import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../../components/Helmet/Helmet';
import storeData from '../../assets/data/StoreData';
import StorePurchaseForm from '../../components/UI/StorePurchaseForm'; 

const ProductDetails = () => {
  const { id } = useParams();
  const product = storeData.find((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Helmet title={product.productName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={product.imgUrl} alt={product.productName} className="w-100" />
            </Col>

            <Col lg="6">
              <div className="product__info">
                <h2 className="section__title">{product.productName}</h2>

                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="product__price fw-bold fs-4">₹{product.price}</h6>
                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({product.safetyRating} ratings)
                  </span>
                </div>

                <p className="section__description">{product.description}</p>

                <div className="d-flex align-items-center mt-3" style={{ columnGap: "4rem" }}>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-riding-fill" style={{ color: "#f9a826" }}></i> 
                    {product.model}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-scales-line" style={{ color: "#f9a826" }}></i> 
                    {product.weight}g
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-building-2-line" style={{ color: "#f9a826" }}></i> 
                    {product.brand}
                  </span>
                </div>

                <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-product-hunt-fill" style={{ color: "#f9a826" }}></i> 
                    {product.material}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold">Purchase Information</h5>
                <StorePurchaseForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
