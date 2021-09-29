import SideNav from "../components/SideNav";
import LatestQuestions from "./LatestQuestions";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import PastQuestions from "./PastQuestions";
import { useState } from "react";
import { Redirect } from 'react-router';
import * as constants from '../constants/AppConstants';
import appIcon from '../assets/app_icon.png'
import Loader from '../components/Loader';


export default function HomePage() {

    const [sidebar, setSidebar] = useState(true);
    const [isLoading, setIsLoading] = useState(true)

    const history = useHistory();

    setTimeout(function () { //Start the timer
        console.log("3000")
        setIsLoading(false)
    }.bind(this), 2000)

    const onSignout = () => {
        history.replace("/")
    }

    const onQuestionClicked = (item) => {
        history.push("/questionDetails", item);
    }

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    let isLoggedIn = localStorage.getItem(constants.IS_USER_LOGGED_IN)
    console.log(isLoggedIn);
    if (isLoggedIn === null) {
        return <Redirect to='/' />
    }

    return <>
        <Router>
            <div className="full_height_div_home" >
                {isLoading && <Loader />}
                <SideNav showSidebar={showSidebar} sidebar={sidebar} onSignout={onSignout} />
                <div className="header">
                    <img className='appIcon'
                        style={{ height: '3rem', width: '3rem' }}
                        src={appIcon} />
                    Astro-Study Booster

                </div>

                <div className="home" style={{
                    marginLeft: sidebar ? '3rem' : '15rem',
                    marginRight: sidebar ? '1rem' : '-12rem',
                }}>
                    <Switch>
                        <Route
                            path="/home"
                            render={(props) =>
                                <LatestQuestions
                                    {...props}
                                    sidebar={sidebar}
                                    onQuestionClicked={onQuestionClicked} />}
                        />

                        <Route path={'/pastquestions'}
                            component={PastQuestions} />

                        <Route path={'/myquestions'}
                            component={PastQuestions} />

                        <Route path={'/myprofile'}
                            component={PastQuestions} />

                    </Switch>
                </div>
            </div>
        </Router>
    </>

}