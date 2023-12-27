import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteproduct, getproduct } from "../redux/api/api";
import { Link } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();

    const product = useSelector((state) => state.product.data);


    const deletedata=(id)=>{
        dispatch(deleteproduct(id))
    }

    useEffect(() => {
        dispatch(getproduct());
    }, []);

    const final = product.filter((val) => val.available === true).slice(0, 5);

    return (
        <div>
            <div className="container">
                <div className="row">
                    {final.map((val, index) => {
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
                    })}
                </div>
                <div className="text-end">
                <Link className=" btn btn-success" to="/product">See More...</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
