import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent"
import { setProducts } from "../redux/action/productActions"

const ProductListing = () => {


    const dispatch = useDispatch()


    const fetchProducts = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            dispatch(setProducts(res.data))

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])


    return (
        <>
            <div className="py-5 container">
                <ProductComponent />
            </div>

        </>
    )
}
export default ProductListing