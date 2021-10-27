import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import QuestionDetails from "./screens/OrderDetails";
// import NoPageFound from "./screens/NoPageFound";
import * as AppConstants from "./constants/AppConstants";

function App() {
  return (
    <Router>
      <Route exact path={AppConstants.BASE_PATH} component={Login} />
      <Route path={AppConstants.HOME_PATH} component={HomePage} />
      <Route
        path={AppConstants.ORDER_DETAILS_PATH}
        component={QuestionDetails}
      />
      {/* <Route path={AppConstants.ERROR_PATH} component={NoPageFound} /> */}
    </Router>
  );
}

export default App;
