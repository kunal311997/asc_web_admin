import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import Login from './screens/Login';
import QuestionDetails from './screens/QuestionDetails';

function App() {

  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path='/home' component={HomePage} />
      <Route path='/questionDetails' component={QuestionDetails} />
      {/* Page for 404 not found... <Route path='*' component={HomePage} /> */}
    </Router>
  );
}

export default App;
