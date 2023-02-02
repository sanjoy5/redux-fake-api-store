import React from 'react'
import "./style.css"
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products)

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <>
                <Col key={id}>
                    <Link to={`/product/${id}`}>
                        <Card className='mb-4 text-dark'>
                            <Card.Img variant="top" className='imgSize' src={image} alt={title} />
                            <Card.Body>
                                <Card.Text>{category}</Card.Text>
                                <Card.Title className='titleSize'>{title}</Card.Title>
                                <Card.Text className='fs-4'>${price}</Card.Text>
                                <Button variant="dark">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Link>

                </Col>
            </>
        )
    })

    return (
        <>
            <Row xs={1} md={2} lg={4}>
                {renderList}
            </Row>
        </>
    )
}

export default ProductComponent