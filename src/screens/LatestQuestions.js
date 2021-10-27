import { useLocation } from "react-router-dom";
import { newOrdersList } from "../constants/DummyData";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import * as AppConstants from "../constants/AppConstants";
import SelectUsersDialog from "../components/SelectUsersDialog";

export default function LatestQuestions({ onQuestionClicked }) {
  const [showDialog, setShowDialog] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [list, setList] = useState([]);
  const [pageCount, setPageCount] = useState(
    Math.ceil(newOrdersList.length / perPage)
  );

  const isAdmin =
    localStorage.getItem(AppConstants.USER_TYPE) === AppConstants.ADMIN;

  useEffect(() => {
    console.log("use-effect called");
    const data = newOrdersList;
    const slice = data.slice(offset, offset + perPage);
    setList(slice);
  }, [currentPage]);

  const onPageClicked = (data) => {
    setOffset(data.selected * perPage);
    setCurrentPage(data.selected);
    console.log(data.selected);
    loadMoreData();
  };

  const loadMoreData = () => {
    const data = newOrdersList;
    const slice = data.slice(offset, offset + perPage);
    setList(slice);
  };

  const onButtonClicked = (e, index) => {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    if (!isAdmin) {
      setShowDialog(true);
    } else {
      setList(
        list.map((item, i) =>
          i === index ? { ...item, showButton: !item.showButton } : item
        )
      );
    }
  };

  const onDialogItemClicked = (e, item, index) => {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    console.log(item);
    setList(
      list.map((item, i) =>
        i === index ? { ...item, showButton: !item.showButton } : item
      )
    );
    setShowDialog(false);
  };

  const onDialogOutSideClicked = () => {
    setShowDialog(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SelectUsersDialog
        showDialog={showDialog}
        onDialogItemClicked={onDialogItemClicked}
        onDialogOutSideClicked={onDialogOutSideClicked}
      />
      <h1 style={{ display: "flex", color: "white", justifyContent: "center" }}>
        New Orders
      </h1>

      <div style={{ display: "flex", alignSelf: "end" }}>
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={3}
          onPageChange={onPageClicked}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          previousLabel={"<<"}
          nextLabel={">>"}
        />
      </div>

      {list.map((question, index) => (
        <div
          key={index}
          className="questionMain"
          onClick={() => onQuestionClicked(list[index])}
        >
          <div className="question">
            <p
              style={{
                flex: "1",
                fontSize: "1.05rem",
                color: "#f5d678",
                fontWeight: "bold",
                marginRight: "0.1rem",
              }}
              key={index}
            >
              {question.title}
            </p>
            {question.showButton && (
              <button
                className="button"
                onClick={(e) => onButtonClicked(e, index)}
              >
                {isAdmin ? "Give Over" : "Take Over"}
              </button>
            )}
          </div>

          <p>Order Date :{question.date}</p>
          <p>Due Date : {question.dueDate}</p>
        </div>
      ))}
    </div>
  );
}
