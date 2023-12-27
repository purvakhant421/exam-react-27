import React, { useEffect, useState } from 'react'
import { deleteproduct, getproduct } from '../redux/api/api';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
    const [find,setfind]=useState("")
    const dispatch = useDispatch();

    const product = useSelector((state) => state.product.data);


    const deletedata=(id)=>{
        dispatch(deleteproduct(id))
    }

    useEffect(() => {
        dispatch(getproduct());
    }, []);

    return (
        <div>
            <div className="container">
            <div className="mb-3 mt-4">
                <input type="search" onChange={(e) => setfind(e.target.value)} className="form-control border-2" id="exampleFormControlInput1" placeholder="search" />
            </div>
                <div className="row">
                    {product.filter((val)=>{
                        return find.toLowerCase()===""?val:val.productname.toLowerCase().includes(val)
                    }).map((val, index) => {
                        if (val.available===true) {
                        return (
                            <div key={index} className="col-4">
                                <div className="card" style={{ width: "18rem" , margin:"20px"}}>
                                    <div className="card-body">
                                        <h2 className="card-title text-capitalize">
                                            {val.productname}
                                        </h2>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            Price:-{val.price}
                                        </h6>
                                        <p className="card-text">
                                           {val.desc}
                                        </p>
                                        <button onClick={()=>deletedata(val.id)} className="btn btn-outline-danger">Delete</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    })}
                </div>
            </div>
        </div>
    );
}

export default Product
