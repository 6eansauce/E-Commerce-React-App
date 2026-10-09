import { books } from "../data";
import Book from "./ui/Book";

const Discounted = () => {
  const getDiscountedBooks = () => {
    return books
      .filter((book) => book.salePrice)
      .slice(0, 8)
      .map((book) => <Book book={book} key={book.id} />);
  };

  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Books</span>
          </h2>

          <div className="books">{getDiscountedBooks()}</div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
