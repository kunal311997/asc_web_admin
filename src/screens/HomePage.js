import SideNav from "../components/SideNav";
import LatestQuestions from "./LatestQuestions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import PastQuestions from "./PastQuestions";
import { useState } from "react";
import { Redirect } from "react-router";
import * as constants from "../constants/AppConstants";
import appIcon from "../assets/app_icon.png";
import Loader from "../components/Loader";
import MyOrders from "./MyOrders";

export default function HomePage() {
  const history = useHistory();
  const [sidebar, setSidebar] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  setTimeout(function () {
    setIsLoading(false);
  }, 2000);

  let isLoggedIn = localStorage.getItem(constants.IS_USER_LOGGED_IN);
  if (isLoggedIn === null) {
    return <Redirect to="/" />;
  }

  const onDialogButtonClicked = (value) => {
    console.log(value);
    if (value === "yes") {
      history.replace("/");
      localStorage.clear();
    } else {
      setIsDialogOpened(false);
    }
  };

  const onSignout = () => {
    setIsDialogOpened(true);
  };

  const onQuestionClicked = (item) => {
    history.push("/questionDetails", item);
  };

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <Router>
        <div className="full_height_div_home">
          {isLoading && <Loader />}
          <SideNav
            showSidebar={showSidebar}
            sidebar={sidebar}
            onSignout={onSignout}
            onDialogButtonClicked={onDialogButtonClicked}
            isDialogOpened={isDialogOpened}
          />

          <div className="header">
            <img
              className="appIcon"
              style={{ height: "3rem", width: "3rem" }}
              src={appIcon}
              alt="icon"
            />
            Astro-Study Booster
          </div>

          <div
            className="home"
            style={{
              marginLeft: sidebar ? "3rem" : "15rem",
              marginRight: sidebar ? "1rem" : "-12rem",
            }}
          >
            <Switch>
              <Route
                path="/home"
                render={(props) => (
                  <LatestQuestions
                    {...props}
                    sidebar={sidebar}
                    onQuestionClicked={onQuestionClicked}
                  />
                )}
              />

              <Route path={"/pastquestions"} component={PastQuestions} />

              <Route path={"/myOrders"} component={MyOrders} />

              <Route path={"/myprofile"} component={PastQuestions} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}
