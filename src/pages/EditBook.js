import React,{ useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditBook = (props) => {
  const params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3004/books/${params.bookId}`).then(res => {
        console.log(res);
    }).catch(err => console.log(err));
  }, []);

  return (
    <div>
        <Header />
    </div>
  );
}

export default EditBook;
