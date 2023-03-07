import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="m-5  font-signatur3 font-bold text-lg rounded-xl text-slate-200">
      <nav>
        <ul className="pagination m-5  products ">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className="products_single shadow-2xl shadow-black"
            >
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
