import React,{useEffect, useState} from "react";
import axios from "axios";

const AddBookForm = (props) => {
  useEffect(() => {

    // get categories
    axios.get("http://localhost:3001/categories").then(res => {
        console.log(res);
    }).catch((err) => console.log(err));

  }, []);

  return (
    <div className="container my-5">
        <form>
            <div className="row">
                 <div className="col">
                    <input type="text" className="form-control" placeholder="Kitap Adı" />
                 </div>
                 <div className="col">
                    <input type="text" className="form-control" placeholder="Yazar" />
                 </div>
            </div>
            <div className="row my-3">
                 <div className="col">
                    <input type="text" className="form-control" placeholder="ISBN" />
                 </div>
                 <div className="col">
                    <select className="form-select">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                 </div>
            </div>
        </form>
    </div>
  );
}

export default AddBookForm;
