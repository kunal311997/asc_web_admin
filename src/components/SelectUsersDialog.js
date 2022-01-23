import * as FaIcons from "react-icons/fa";
import { usersList } from "../constants/DummyData";

export default function SelectUsersDialog({
  title,
  onDialogOutSideClicked,
  onDialogItemClicked,
  showDialog,
}) {
  return (
    <>
      {showDialog && (
        <div className="dialog" onClick={onDialogOutSideClicked}>
          <div
            class="dialog-content"
            style={{ height: "30%", overflowY: "scroll", flexWrap: "nowrap" }}
          >
            <h1>Select user : </h1>
            <div>
              {usersList.map((item, index) => (
                <div
                  key={index}
                  onClick={(e) => onDialogItemClicked(e, item, index)}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <img class="img-circular" src={item.profilePic}></img>
                  <p style={{ marginLeft: "10px", fontSize: "0.8rem" }}>
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
