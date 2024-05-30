import React from 'react'

const Create = () => {
    return (
      <div>

<div className="createpage">
        <div>
            
                <h1>
                    CREATE NEW COMIC
                </h1>

            <div clasNAmes="submit"> 
                <form action="#">
                    <div> 
                        <label for="Title">Title:</label>
                        <input type="text" id="title" name="title" value="Title" required/><br/>
                    </div>

                    <div> 
                        <label for="Author">Author:</label>
                        <input type="text" id="Author" name="Author" value="Author" required/>
                    </div>

                    <div> 
                        <label for="Publisher">Publisher</label>
                        <select name="Publisher" id="Publisher" form ="Publisher" required>
                            <option value="BOOM! Box">BOOM! Box</option>
                            <option value="Harry N. Abrams">Harry N. Abrams</option>
                            <option value="Icon Books">Icon Books</option>
                            <option value="Image Comics">Image Comics</option>
                            <option value="Marvel">Marvel</option>
                            <option value="Simon & Schuster">Simon & Schuster</option>
                            <option value="Top Shelf Productions">Top Shelf Productions</option>
                            <option value="VIZ Media LLC">VIZ Media LLC </option>
                            <option value="Publisher Value" selected>Select</option>
                        </select>

                    </div>

                    <div> 
                        <label for="Genre">Genre:</label>
                        <input type="text" id="Genre" name="Genre" value="Genre" required/>
                    </div>

                    <div> 
                        <label for="Pages">Number of pages:</label>
                        <input type="text" id="Pages" name="Pages" value="Number of pages" required/>
                    </div>

                    <div> 
                        <label for="Rating">Rating:</label>
                        <input type="text" id="Rating" name="Rating" value="Number (0-5)" required/>
                    </div>

                    <div> 
                        <label for="Synopsis">Synopsis:</label>
                        <input type="text" id="Synopsis" name="Synopsis" value="Synopsis" required/>
                    </div>

                    <div> 
                        <input type="Submit" value ="Submit"/>
                    </div>

                </form>
            </div>
        </div>    
    </div>
      </div>
    )
  }

  export default Create;