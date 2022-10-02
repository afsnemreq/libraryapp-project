import React,{useEffect, useState} from "react";
import axios from "axios"

const ListBooks = (props) => {
    const [books, setBooks] = useState(null);

    useEffect(()=>{

        axios.get("http://localhost:3004/books")
        .then((res) => {
            setBooks(res.data);
        })
        .catch((err) => console.log(err));
        
    },[]);

    if (books === null)
    {
        return (
            <div>
                <h1>Yükleniyor...</h1>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Kitap Adı</th>
                        <th scope="col">Yazar</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">ISBN</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => {
                            return(
                                
                                <tr>
                                    <td>{ book.name }</td>
                                    <td>{ book.author }</td>
                                    <td>{ book.name }</td>
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