import React from "react";
import "./App.scss";
import Header from "./components/header/header.component.jsx";
import { Switch, Route } from "react-router";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase.utils";
import Homepage from "./pages/home-page/home-page.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Footer from "./components/footer/footer.component";
import CoursesPage from "./components/courses/courses.component";
import ContactNous from "./pages/contactez-nous/contact-nous.component";
import LostPage from "./components/LostPage/LostPage.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage curentUser={this.state.currentUser}/>
            <Footer/>
          </Route>
          <Route path="/Signin">
            <Header curentUser={this.state.currentUser} />
            <SignInAndSignUpPage />
            <Footer/>
          </Route>
          <Route path="/CoursesCardItem" >
            <Header curentUser={this.state.currentUser} />
            <CoursesPage/>
            <Footer/>
          </Route>
          <Route path='/ContactUs' >
          <Header curentUser={this.state.currentUser} />
            <ContactNous/>
            <Footer/>
          </Route>
          <Route path='/LostPage' component={LostPage}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
