import React from 'react'

import booksData from "../data/books";

const Home = () => {
    return (
      <div>
        <div>
            <div className="codesquad-comics"> 

                <h1>
                    CODESQUAD COMICS
                </h1>

                <p>
                    CodeSquad Comics is a collection of graphic novels read by Mayowa Ojuade. 
                    The site is intended to display comic book covers along with information about each book, 
                    including the author, a rating, and other details about the graphic novel. 
                    Browse through the complete collection below. 
                    Click on the cover image or the Details link to see even more information about each graphic novel 
                    including the publisher, genre, number of pages, and a brief synopsis. 
                    The About page includes meta information about this collection. 
                    Login is only available to the site administrator at this time.
                </p>
            </div>

            <div className="indexpage">
                        <div > 
                            <h1>
                            COMPLETE COMIC COLLECTION
                            </h1>
                        </div>

                        {booksData.map((book) => 
                        
                        <div>
                                <a href="#"> 
                                    <img src="./public/images/watchmen.jpg" alt="Watchmen" classNAme="Image-size"/> 
                                </a>
                                <div className="comic-details">
                                    <i> 
                                        
                                    </i>
                                    
                                    
                                    <div>
                                        <a href="#"></a>
                                    </div>
                                </div>
                        </div>)}
                    
                         <div className="comics">
                            {/* <div> 
                               <!--Each comic has it's own div--> 
                                <a href="#"> 
                                    <img src="./public/images/fun-home.jpg" alt="Fun Home" className="Image-size"/> 
                                </a>
                                <div className="comic-details">
                                    <i> 
                                        Fun Home: A Family Tragicomic
                                    </i>
                                    by Alison Bechdel 
                                    5 stars
                                    <div id="details">
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"> 
                                    <img src="./public/images/watchmen.jpg" alt="Watchmen" classNAme="Image-size"/> 
                                </a>
                                <div className="comic-details">
                                    <i> 
                                        Watchmen
                                    </i>
                                    by Alan Moore
                                    5 stars
                                    <div>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"> 
                                    <img src="./public/images/hunter-x-hunter.jpg" alt="HxH" className="Image-size"/> 
                                </a>
                                <div className="comic-details">
                                    <i> 
                                        Hunter X Hunter Vol. 1
                                    </i>
                                    by Yoshihiro Togashi
                                    5 stars
                                    <div>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <a href="#"> 
                                    <img src="./public/images/lumberjanes.jpg" alt="Lumberjanes" className="Image-size"/> 
                                </a>
                                <div className="comic-details">
                                    <i> 
                                        Lumberjanes Vol. 1
                                    </i>
                                    by Noelle Stevenson
                                    4 stars
                                    <div>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="/One-Piece-Vol1-Romance-Dawn.html" target="_blank" rel="noopener"> 
                                    <img src="./public/images/one-piece.jpg" alt="OP" className="Image-size"/> 
                                </a>
                                <div className="comic-details">
                                    <i> 
                                        One Piece, Vol 1: Romance Dawn
                                    </i>
                                    by Eiichiro Oda
                                    5 stars
                                    <div>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"> 
                                    <img src= "./public/images/wake.jpg" alt="Wake" className="Image-size"/> 
                                </a>
                                <div className="comic-details">
                                    <i> 
                                        Wake: The Hidden History of Women-Led Slave Revolts
                                    </i>
                                    by Rebecca Hall
                                    4 stars
                                    <div>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"> 
                                    <img src="./public/images/black-panther.jpg" alt="Black Panther" className="Image-size"/> 
                                </a>
                                <div className="comic-details">
                                    <i> 
                                        Black Panther: A Nation Under Our Feet Book 1
                                    </i>
                                    by Ta-Nehisi Coates
                                    3 stars
                                    <div>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"> 
                                    <img src="./public/images/the-walking-dead.jpg" alt="TWD" className="Image-size"/> 
                                </a>
                                <div className="comic-details">
                                    <i> 
                                        The Walking Dead, Vol. 1: Days Gone Bye
                                    </i>
                                    by Robert Kirkman
                                    4 stars
                                    <div>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"> 
                                    <img src="./public/images/march.jpg" alt="march" className="Image-size"/> 
                                </a>
                                <div className="comic-details">
                                    <i> 
                                        March: Book One
                                    </i>
                                    by John Lewis
                                    5 stars
                                    <div>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"> 
                                    <img src="./public/images/batman.jpg" alt ="Batman: TDKR" className="Image-size"/> 
                                </a>

                                <div className="comic-details">
                                    <i> 
                                        Batman: The Dark Knight Returns
                                    </i>
                                    by Frank Miller
                                    3 stars
                                    <div>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"> 
                                    <img src="./public/images/queer.jpg" alt="Queer" className="Image-size"/> 
                                </a>

                                <div className="comic-details">
                                    <i> 
                                        Queer: A graphic History
                                    </i>
                                    by Meg-John Barker
                                    4 stars
                                    <div>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"> 
                                    <img src="./public/images/parable-of-the-sower.jpg" alt="Sower" className="Image-size"/> 
                                </a>

                                <div className="comic-details">
                                    <i> 
                                        Parable of the Sower
                                    </i>
                                    by Octavia E. Butler
                                    4 stars
                                    <div>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>   */}
                        {/* <!--The div for the entire comic section excluding the title--> */}
                        <div className="display-more-container"> 
                            <input type="button" className="display-more" value ="DISPLAY MORE" />
                        </div>
                        
                </div>  
            </div>
        </div>
    </div>
    )
  }

  export default Home;