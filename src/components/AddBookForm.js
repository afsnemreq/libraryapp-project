import React,{useEffect, useState} from "react";
import axios from "axios";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const AddBookForm = (props) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(null);
  //form elements
  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {

    // get categories
    axios.get("http://localhost:3004/categories").then(res => {
        setCategories(res.data);
    }).catch((err) => console.log(err));

  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();

    if (bookname === "" || author === "" || category === "")
    {
      alert("Kitap adı, kitap yazarı ve kategori boş bırakılamaz.");
    }

    const newBook = {
      id : new Date().getTime(),
      name: bookname,
      author: author,
      isbn: isbn,
      categoryId: category,
    }

    axios.post("http://localhost:3004/books", newBook).then(res => {
        alert("Kitap başarıyla eklendi.");

        setBookname("");
        setAuthor("");
        setIsbn("");
        setCategory("");
        
        navigate("/");
    }).catch(err => console.log(err));

  }

  if (categories === null)
  {
    return <Loading />
  }

  return (
    <div className="container my-5">
        <hr />
        <h3>Kitap Ekle</h3>
        <hr />
        <form onSubmit={handleSubmit}>
            <div className="row my-3">
                 <div className="col">
                    <input type="text" className="form-control" placeholder="Kitap Adı" value={bookname} onChange={(event) => setBookname(event.target.value) } />
                 </div>
            </div>
            <div className="row my-3">
                 <div className="col">
                    <input type="text" className="form-control" placeholder="Yazar" value={author} onChange={(event) => setAuthor(event.target.value)} />
                 </div>
            </div>
            
            <div className="row my-3">
                 <div className="col">
                    <input type="text" className="form-control" placeholder="ISBN" value={isbn} onChange={(event) => setIsbn(event.target.value)} />
                 </div>
            </div>
            <div className="row my-3">
                 <div className="col">
                    <select className="form-select" value={category} onChange={(event) => setCategory(event.target.value) } >
                        <option value={""} selected>Lütfen Seçiniz</option>
                        {
                          categories.map((cat) => {
                             return <option value={ cat.id }>{ cat.name }</option>
                          })
                        }
                       
                    </select>
                 </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary w-100">Kaydet</button>
            </div>
        </form>
    </div>
  );
}

export default AddBookForm;
