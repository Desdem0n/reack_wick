import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Books() {
    return (
        
         <section className="books">
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          
         </section>
        
    );
}

const Book = () => {
    return (
        <article className="book">
          <CoverImage />
          <Title />
          <Author />
        </article>
    );
};
const CoverImage = () => (
<img style={ima}
width="200"
src="https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg"
 alt="michelle"/>
);

const authorStyle = {
    letterSpacing: "10px",
    color: "lightgrey"
};

const ima = {
    margin: "5px",
    textalign: "center"
};

const Title = () => 
    <h2>Becoming Michelle Obama</h2>
const Author = () => 
    <p style={authorStyle}>by Jerry Higgins</p>;

ReactDOM.render(<Books />, document.getElementById('root'));