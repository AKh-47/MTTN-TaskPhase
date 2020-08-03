import React, { useState, useEffect } from "react";
import "./DocumentContainer.scss";
import "../../App.scss";
import Document from "../Document/Document";
import Pagination from "../Pagination/Pagination";

import documents from "../../Documents";

export default function DocumentContainer({ search }) {
  const [filteredDocumnets, setfilteredDocumnets] = useState(documents);
  const [currentPage, setCurrentPage] = useState(1);
  const [indexes, setIndexes] = useState({
    start: 0,
    end: 10,
  });
  const [numOfPages, setnumOfPages] = useState();

  useEffect(() => {
    setfilteredDocumnets(
      documents.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );

    if (!search) {
      setfilteredDocumnets(documents);
    }

    setCurrentPage(1);
    setIndexes({
      start: 0,
      end: 10,
    });
  }, [search]);

  useEffect(() => {
    setnumOfPages(Math.ceil(filteredDocumnets.length / 10));
  }, [filteredDocumnets]);

  const pageChangeHandler = (num) => {
    setCurrentPage(num);

    const newIndexs = {
      start: 10 * (num - 1),
      end: 10 + 10 * (num - 1),
    };

    setIndexes(newIndexs);
  };

  const nextPageHandler = () => {
    setCurrentPage((old) => old + 1);

    const newIndexs = {
      start: indexes.start + 10,
      end: indexes.end + 10,
    };

    setIndexes(newIndexs);
  };
  const prevPageHandler = () => {
    setCurrentPage((old) => old - 1);

    const newIndexs = {
      start: indexes.start - 10,
      end: indexes.end - 10,
    };

    setIndexes(newIndexs);
  };

  if (numOfPages === 0) {
    return (
      <div className="container">
        <h1 className="container__error-message">
          Nothing Matches Your Search :(
        </h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="container__documents">
        {filteredDocumnets.slice(indexes.start, indexes.end).map((file) => (
          <Document title={file.title} link={file.link} key={file.title} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        numOfPages={numOfPages}
        pageChangeHandler={pageChangeHandler}
        nextPageHandler={nextPageHandler}
        prevPageHandler={prevPageHandler}
      />
    </div>
  );
}
