import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import Loading from "./Loading";

const ListBooks = (props) => {
    const [books, setBooks] = useState(null);
    const [categories, setCategories] = useState(null);
    useEffect(()=>{

        //---------------------------------------------//
        //getBooks
        axios.get("http://localhost:3004/books")
        .then((resBook) => {
            setBooks(resBook.data);


            //---------------------------------------------//
            //getCategories
            axios.get("http://localhost:3004/categories")
            .then((resCat) => {
                setTimeout(() => {
                    setCategories(resCat.data)
                }, 5000);
            })
            .catch((err) => console.log(err));
             //---------------------------------------------//




        })
        .catch((err) => console.log(err));
         //---------------------------------------------//

    },[]);

    if (books === null || categories === null)
    {
        return (
            <Loading />
        )
    }

    return (
        <div className="container-fluid my-3">
            <div className="my-3 d-flex justify-content-end">
                <Link to="/add-book" className="btn btn-primary">Kitap Ekle</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Kitap Adı</th>
                        <th>Yazar</th>
                        <th>Kategori</th>
                        <th>ISBN</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => {
                            const category = categories.find(cat => cat.id === book.categoryId)
                            
                            return(
                                <tr>
                                    <td>{ book.name }</td>
                                    <td>{ book.author }</td>
                                    <td>{ category.name }</td>
                                    <td>{ book.isbn }</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListBooks