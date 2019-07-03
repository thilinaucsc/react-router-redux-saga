/* eslint-disable */
import React from "react";
// import PropTypes from "prop-types";
import {Redirect, Route, Switch} from "react-router";
// creates a beautiful scrollbar
/*import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";*/
// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// core components
// import Header from "../../components/Header/Header.jsx";
// import Footer from "../../components/Footer/Footer.jsx";
// import Sidebar from "../../components/Sidebar/Sidebar.jsx";

import dashboardRoutes from "../../routes/dashboard.jsx";

/*import dashboardStyle from "../../assets/jss/layouts/dashboardStyle.jsx";

import image from "../../assets/img/sidebar-2.jpg";
import logo from "../../assets/img/reactlogo.png";
import axios from "axios";
import {defaultData} from "../../assets/enums/defaultData";
import {appData} from "../../assets/enums/appData";*/

/*const switchRoutes = (details) => (
    <Switch>
        {dashboardRoutes.map((prop, key) => {
            // console.log('details : ', details);
            if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key}/>;
            return <Route path={prop.path} key={key}
                          render={(props) => <prop.component details={details} {...props} />}/>;
            // return <Route path={prop.path} component={prop.component} key={key}/>;
        })}
    </Switch>
);*/

const switchRoutes = () => (
    <Switch>
        {dashboardRoutes.map((prop, key) => {
            // console.log('details : ', details);
            if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key}/>;
            return <Route path={prop.path} key={key}
                          render={(props) => <prop.component {...props} />}/>;
            // return <Route path={prop.path} component={prop.component} key={key}/>;
        })}
    </Switch>
);

class App extends React.Component {
    /*handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false,
            isLogin: true, //fixme in production - isLogin: false
            loginDetails: {
                id: 'aaaaaa'
            },
            snackbarProperties: appData.component.snackbarProperties
        };
        this.resizeFunction = this.resizeFunction.bind(this);
        this.getUrlData = this.getUrlData.bind(this);
        this.login = this.login.bind(this);
    }

    getUrlData() {
        const {loginDetails} = this.state;

        const std = this.props.location.search;
        const val = std.replace(/&/g, '=');
        console.log('val : ', val);
        loginDetails.id = val.split('=')[1];
        loginDetails.empId = val.split('=')[3];

        this.setState({loginDetails}, () => {
            this.login();
        });

    }

    componentWillMount() {
        this.getUrlData();
    }

    login() {
        const {loginDetails, snackbarProperties} = this.state;

        axios.post(defaultData.backendUrl + defaultData.url.user, {'userID': loginDetails.empId})
            .then((result) => {
                if (result.data.responseCode === 'SUCCESS' && result.data.responseObject) {
                    loginDetails.userLevel = result.data.responseObject.userLevel;
                    loginDetails.userName = result.data.responseObject.userName;
                    if (loginDetails.id) {
                        this.setState({isLogin: true, loginDetails});
                    }
                } else {
                    snackbarProperties.message = result.data.responseObject;
                    snackbarProperties.color = "warning";

                    this.setState({snackbarProperties, b1: true});
                }
            }).catch((error) => {
            if (error.data) {
                snackbarProperties.message = error.data.responseObject;
                snackbarProperties.color = "warning";
            } else {
                snackbarProperties.message = "Network Error";
                snackbarProperties.color = "danger";
            }
            this.setState({snackbarProperties, b1: true});
        });
    }

    getRoute() {
        return this.props.location.pathname !== "/maps";
    }

    resizeFunction() {
        if (window.innerWidth >= 960) {
            this.setState({mobileOpen: false});
        }
    }

    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            const ps = new PerfectScrollbar(this.refs.mainPanel);
        }
        window.addEventListener("resize", this.resizeFunction);
    }

    componentDidUpdate(e) {
        // console.log('this.state : ', this.state);
        if (e.history.location.pathname !== e.location.pathname) {
            this.refs.mainPanel.scrollTop = 0;
            if (this.state.mobileOpen) {
                this.setState({mobileOpen: false});
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeFunction);
    }*/

    getRoute() {
        return this.props.location.pathname !== "/maps";
    }

    render() {
        // console.log('this.state : ', this.state);
        // const {classes, ...rest} = this.props;
        // const {isLogin} = this.state;
        // if (!isLogin) {
            // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa : ',);
/*            return (
                <div className={classes.wrapper}>
                    <div className={classes.mainPanel} ref="mainPanel">
                        not Found
                    </div>
                </div>
            );
        }*/
        return (
            <div>
            {/*<div className={classes.wrapper}>*/}
                {/*<Sidebar
                    routes={dashboardRoutes}
                    logoText={"Pricing Approval"}
                    logo={logo}
                    image={image}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    color="blue"
                    {...rest}
                />*/}
                <div ref="mainPanel">
                {/*<div className={classes.mainPanel} ref="mainPanel">*/}
                    {/*<Header
                        routes={dashboardRoutes}
                        handleDrawerToggle={this.handleDrawerToggle}
                        {...rest}
                    />*/}
                    {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
                    {this.getRoute() ? (
                        <div >
                            <div >{switchRoutes()}</div>
                        </div>
                    ) : (
                        <div >{switchRoutes()}</div>
                    )}
                    {/*{this.getRoute() ? <Footer/> : null}*/}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    // classes: PropTypes.object.isRequired
};

export default App;
