import React,  {useEffect} from "react";
import booksData from "../data/books";

import {useState} from "react";

const Admin = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(booksData) 
        fetch("http://localhost:8080/api/boooks", {
          method: "GET",
          headers: {
            "Random": "random for now",
          },
        })
        .then((response) => response.json())
        .then((books) => {
            setBooks(books);
          })
          .catch((error) => console.log(error));
      }, []);

      const handleDelete  = (e) => {
            fetch("http://localhost:8080/api/books/delete${bookid}", {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
                .then((response) => response.json())
                .then((result) => console.log("entry deleted", result))
                .catch((error) =>console.error(error))
                });
            }

    return (
      <div>
            <div className="adminpage">

<div> 
    <h1>
        ADMIN PAGE
    </h1>
</div>



<div className="submit">
    <input 
    type="submit" 
    value ="ADD NEW COMIC"/>
</div>

<div>
    
    <table className="admin-table"> 
        <thead>
            <tr> 
                <th>COMIC TITLE</th>
                <th>EDIT</th>
                <th>DELETE </th>
            </tr>
        </thead>

        <tbody>
            {books.map((book) => <tr> 
                <td>{book.title}</td>
                <td>
                    <a href="./Update.js"> 
                    <button 
                        
                        type="button" 
                        id="edit">EDIT
                    </button>
                    </a>
                </td>
                    
                <td>
                    <button onClick={(handleDelete)}
                        type="button" 
                        id="delete">DELETE
                    </button></td>
            </tr>)}
        </tbody>


        {/* <tbody>
            <tr> 
                <td>Batman: The Dark Knight Returns</td>
                <td><button type="button" id="edit">EDIT</button></td>
                <td><button type="button" id="delete">DELETE</button></td>
            </tr>

            <tr> 
                <td>Black Panther: A Nation Under Our Feet Book 1</td>
                <td><button type="button" id="edit">EDIT</button></td>
                <td><button type="button" id="delete">DELETE</button></td>
            </tr>

            <tr> 
                <td>Fun Home: A Family Tragicomic</td>
                <td><button type="button" id="edit">EDIT</button></td>
                <td><button type="button" id="delete">DELETE</button></td>
            </tr>

            <tr> 
                <td>Hunter X Hunter Vol. 1</td>
                <td><button type="button" id="edit">EDIT</button></td>
                <td><button type="button" id="delete">DELETE</button></td>
            </tr>

            <tr> 
                <td>Lumberjanes Vol. 1</td>
                <td><button type="button" id="edit">EDIT</button></td>
                <td><button type="button" id="delete">DELETE</button></td>
            </tr>

            <tr> 
                <td>March: Book One</td>
                <td><button type="button" id="edit">EDIT</button></td>
                <td><button type="button" id="delete">DELETE</button></td>
            </tr>

            <tr> 
                <td>One Piece, Vol. 1: Romance Dawn</td>
                <td><button type="button" id="edit">EDIT</button></td>
                <td><button type="button" id="delete">DELETE</button></td>
            </tr>

            <tr> 
                <td>Parable of the Sower</td>
                <td><button type="button" id="edit">EDIT</button></td>
                <td><button type="button" id="delete">DELETE</button></td>
            </tr>

            <tr> 
                <td>Queer: A Graphic History</td>
                <td><button type="button" id="edit">EDIT</button></td>
                <td><button type="button" id="delete">DELETE</button></td>
            </tr>

            <tr> 
                <td>Batman: The Walking Dead, Vol. 1: Days Gone Bye</td>
                <td><button type="button" id="edit">EDIT</button></td>
                <td><button type="button" id="delete">DELETE</button></td>
            </tr>

            <tr> 
                <td>Wake: The Hidden History of WOmen-Led Slave Revolts</td>
                <td><button type="button" id="edit">EDIT</button></td>
                <td><button type="button" id="delete">DELETE</button></td>
            </tr>

            <tr> 
                <td>Watchmen</td>
                <td><button type="button" id="edit">EDIT</button></td>
                <td><button type="button" id="delete">DELETE</button></td>
            </tr>
        </tbody> */}
    </table>
</div>
</div>
      </div>
    )
  }

  export default Admin;