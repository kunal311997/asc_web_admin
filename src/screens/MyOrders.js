import CategoriesList from "./CategoriesList";
import { categoriesDummyList } from "../constants/DummyData";
import { useState } from "react";
import { FaBars, FaHome, FaSearch } from "react-icons/fa";
import { newOrdersList } from "../constants/DummyData";
import * as AppConstants from "../constants/AppConstants";

export default function MyOrders({ onQuestionClicked }) {
  const [categoriesList, setCategoriesList] = useState(categoriesDummyList);
  const [filterParams, setFilterParams] = useState({
    orderId: "",
    fromDate: "",
    toDate: "",
  });
  const isAdmin =
    localStorage.getItem(AppConstants.USER_TYPE) === AppConstants.ADMIN;
  const handleChange = (e) => {
    // setSearchText(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setFilterParams({ ...filterParams, [name]: value });
  };
  const onSearchClicked = () => {
    if (filterParams.orderId) {
      //setIsSearchClicked(true);
    } else {
      alert("Please enter values");
    }
  };
  const onCategoryClicked = (c) => {
    //setCategory(c);
    categoriesList.map((category) => (category.isSelected = false));
    setCategoriesList(
      categoriesList.map((category) =>
        category.id === c
          ? {
              ...category,
              isSelected: !category.isSelected,
            }
          : category
      )
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        My Orders
      </h1>
      <div className="search-div">
        <input
          className="search-input"
          type="text"
          id="searchText"
          name="searchText"
          placeholder="Search Order ID"
          value={filterParams.orderId}
          onChange={handleChange}
        />

        <div className="search-icon" onClick={onSearchClicked}>
          <FaSearch />
        </div>
      </div>

      <div style={{ marginTop: "10px", display: "flex", flexDirection: "row" }}>
        <p style={{ color: "white", marginLeft: "10px" }}>From : </p>
        <input
          className="date-input"
          type="date"
          id="fromDate"
          name="fromDate"
          value={filterParams.fromDate}
          onChange={handleChange}
        />
        <p style={{ color: "white", marginLeft: "10px" }}>To : </p>
        <input
          className="date-input"
          type="date"
          id="toDate"
          name="toDate"
          value={filterParams.toDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <CategoriesList
          categoriesList={categoriesList}
          onCategoryClicked={onCategoryClicked}
        />
      </div>

      {newOrdersList.map((question, index) => (
        <div
          key={index}
          className="questionMain"
          onClick={() => onQuestionClicked(newOrdersList[index])}
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
                // onClick={(e) => onButtonClicked(e, index)}
              >
                {isAdmin ? "Give Over" : "Take Over"}
              </button>
            )}
          </div>

          <p>Order Date :{question.date}</p>
          <p>Due Date : {question.dueDate}</p>
          <p>Completion Date : {question.dueDate}</p>
        </div>
      ))}
    </div>
  );
}
