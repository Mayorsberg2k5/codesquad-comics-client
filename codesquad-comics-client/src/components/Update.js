import React, {useEffect} from 'react'
import booksData from "../data/books";
import {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useState([]);

    useEffect(() => {
        setBook(booksData) 
        fetch("`http://localhost:8080/api/books/${bookId}`", {
            method: "GET",
            headers: {
              "Random": "random for now",
            },
          })
          .then((response) => response.json())
          .then((book) => {setBook(book);})
        .catch((error) => console.log(error));
        }, []);

    const submitUpdate  = (e) => {
        e.preventDefault();
        console.log(e.target.value);

        const body = {
            title: e.target.title.value,
            author: e.target.author.value,
            publisher: e.target.publisher.value,
            genre: e.target.genre.value,
            pages: e.target.pages.value,
            rating: e.target.rating.value,
            synopsis: e.target.synopsis.value,
    };

    fetch("`http://localhost:8080/api/books/update/${bookId}`", {
        method: "PUT",
        headers: {
          "Random": "random for now",
        },
        body: JSON.stringify(body),
        })
        .then((response) => { return response.json();})
        .then(() => {navigate("/admin")})
        .catch((error) => {console.error(error)});

    console.log(body);
}

    return (
      <div>
           <div className="updatepage">
        <div>     
            <h1> 
                UPDATE COMIC
            </h1>
        </div>

        <div className="submit"> 
            <form action="#" onsubmit={submitUpdate}>
                <div> 
                    <label htmlFor="Title">Title:</label>
                    <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    value="Title value stored in database" required/><br/>
                </div> <br/>

                <div> 
                    <label htmlFor="Author">Author:</label>
                    <input 
                    type="text" 
                    id="Author" 
                    name="Author" 
                    value="Author value stored in database" required/>
                </div> <br/>

                <div> 
                    <label htmlFor="Publisher">Publisher</label>
                    <select name="Publisher" id="Publisher" form ="Publisher" required>
                        <option value="BOOM! Box">BOOM! Box</option>
                        <option value="Harry N. Abrams">Harry N. Abrams</option>
                        <option value="Icon Books">Icon Books</option>
                        <option value="Image Comics">Image Comics</option>
                        <option value="Marvel">Marvel</option>
                        <option value="Simon & Schuster">Simon & Schuster</option>
                        <option value="Top Shelf Productions">Top Shelf Productions</option>
                        <option value="VIZ Media LLC">VIZ Media LLC </option>
                        <option value="Publisher Value" selected>Publisher value stored in database</option>
                    </select>

                </div> <br/>

                <div> 
                    <label htmlFor="Genre">Genre:</label>
                    <input 
                    type="text" 
                    id="Genre" 
                    name="Genre" 
                    value="Genre data stored in database" required/>
                </div> <br/>

                <div> 
                    <label htmlFor="Pages">Number of pages:</label>
                    <input 
                    type="text" 
                    id="Pages" 
                    name="Pages" 
                    value="Pages stored in database" required/>
                </div> <br/>

                <div> 
                    <label htmlFor="Rating">Rating:</label>
                    <input type="text" id="Rating" name="Rating" value="Rating stored in database" required/>
                </div> <br/>

                <div> 
                    <label htmlFor="Synopsis">Synopsis:</label>
                    <input 
                    type="text" 
                    id="Synopsis" 
                    name="Synopsis" 
                    value="Synopsis value stored in database" required/>
                </div> <br/>

                <div> 
                    <input 
                    type="Submit" 
                    value ="Submit"/>
                </div>

            </form>
        </div>
    </div>    
</div>
    )
}

  export default Update;