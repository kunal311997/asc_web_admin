import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import Dialog from "../components/Dialog";

export default function SideNav({
  sidebar,
  showSidebar,
  onSignout,
  onDialogButtonClicked,
  isDialogOpened,
}) {
  const sideBarInitialData = [
    {
      title: "New Orders",
      icon: <RiIcons.RiQuestionAnswerLine className="drawer_icons" />,
      path: "/home",
      isSelected: true,
    },
    {
      title: "My Orders",
      icon: <FaIcons.FaRegListAlt className="drawer_icons" />,
      path: "/myquestions",
      isSelected: false,
    },
    {
      title: "Account Settlement",
      icon: <CgIcons.CgProfile className="drawer_icons" />,
      path: "/myprofile",
      isSelected: false,
    },
    {
      title: "All Orders",
      icon: <CgIcons.CgProfile className="drawer_icons" />,
      path: "/myprofile",
      isSelected: false,
    },
    {
      title: "Payments",
      icon: <CgIcons.CgProfile className="drawer_icons" />,
      path: "/myprofile",
      isSelected: false,
    },
    {
      title: "Sign Out",
      icon: <FaIcons.FaSignOutAlt className="drawer_icons" />,
      path: "/home",
      isSelected: false,
    },
  ];

  const [sideBarData, setSideBarData] = useState(sideBarInitialData);

  const onItemClicked = (selectedIndex) => {
    setSideBarData(
      sideBarData.map((sideBarItem, index) =>
        index === selectedIndex
          ? {
              ...sideBarItem,
              isSelected: true,
            }
          : {
              ...sideBarItem,
              isSelected: false,
            }
      )
    );

    console.log(sideBarData);

    if (sideBarData[selectedIndex].title === "Sign Out") {
      onSignout();
    }
  };

  return (
    <div
      className="sidenav"
      style={{
        width: sidebar ? "2.4rem" : "13rem",
      }}
    >
      <Dialog
        title="Are you sure you want to Sign Out? "
        onDialogButtonClicked={onDialogButtonClicked}
        isDialogOpened={isDialogOpened}
      />

      <FaIcons.FaBars className="menu-bars" onClick={showSidebar} />
      {sideBarData.map((item, index) => {
        return (
          <div
            key={index}
            style={{ backgroundColor: item.isSelected ? "#3d434b" : "#212529" }}
            onClick={() => onItemClicked(index)}
          >
            <Link to={{ pathname: item.path, state: { title: item.title} }}>
              <div style={{ color: "white", display: "flex" }}>
                {item.icon} {item.title}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
