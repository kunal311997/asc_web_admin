import { useLocation } from "react-router-dom";
import { newOrdersList } from "../constants/DummyData";
import { useState } from "react";

export default function LatestQuestions({ onQuestionClicked }) {
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();

  const onTakeOverClicked = (index) => {
    console.log(index);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ display: "flex", color: "white" }}>New Orders</h1>

      {newOrdersList.map((question, index) => (
        <div
          key={index}
          className="questionMain"
          onClick={() => onQuestionClicked(newOrdersList[index])}
        >
          <p>{question.date}</p>

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
            <button className="button">Take Over</button>
          </div>

          <p>
            Due Date : <b>{question.dueDate}</b>
          </p>
        </div>
      ))}
    </div>
  );
}
