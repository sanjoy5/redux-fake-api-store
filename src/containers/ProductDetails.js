import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./style.css"
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeSelectedProduct } from '../redux/action/productActions'



const ProductDetails = () => {

    const product = useSelector((state) => state.product)
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch()


    const fetchProductDetails = async () => {
        try {
            const resp = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            dispatch(selectedProduct(resp.data))

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetails()
        }
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    return (
        <>
            <div className="container py-5">

                <div className="row singleProduct">

                    {Object.keys(product).length === 0 ? (
                        <div>...Loading </div>
                    ) : (


                        <>
                            <div className="col-md-6">
                                <div className="singleImage">
                                    <img src={image} alt={title} className="float-left" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p className="text-mute">Home/{category}</p>
                                <h3 className="mb-3">{title}</h3>
                                <h5 className="mb-3">Price : ${price}</h5>
                                <p className="text-mute text-justify"><strong>Description :</strong> {description}</p>
                                <div className="d-flex">
                                    <p className="qty">Qty: </p>
                                    <input type="number" className="form-control w-25" />
                                </div>
                                <div className="d-flex mt-3">
                                    <button className="btn btn-danger mr-2">Add to Cart</button>
                                    <button className="btn btn-warning">Buy Now</button>

                                </div>
                            </div>


                        </>

                    )}




                </div>

            </div>
        </>
    )
}

export default ProductDetails