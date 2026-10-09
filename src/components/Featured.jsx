import Book from "./ui/Book";
import { books } from "../data";

const Featured = () => {
  const getFeaturedBooks = () => {
    return books
      .filter((book) => book.rating === 5)
      .slice(0, 4)
      .map((book) => <Book book={book} key={book.id}/>);
  };

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>

          <div className="books">{getFeaturedBooks()}</div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
