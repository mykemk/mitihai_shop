import React, { useState, useCallback } from "react";
import Navbar from "shared/navbar/Navbar";
import Header from "shared/header/Header.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import MainSection from "./MainSection";
import Footer from "shared/footer/Footer";
import { BottomNav } from "shared/navbar/BottomNavigation";
import { UserContext, useAuth } from "contexts/UserContext";

export const AppContext = React.createContext(null);
function App() {
  const isLargeScreen = window.screen.width > 1050;
  const [isNavbarShown, setIsNavbarShown] = useState(isLargeScreen);
  const fullWidthStyle = {
    left: "2%",
    width: "98%",
  };
  const { userState, dispatch } = useAuth();
  const toggleNavbar = useCallback(() => {
    setIsNavbarShown(!isNavbarShown);
  }, [isNavbarShown]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const changeFilterValue = useCallback((value) => {
    return setFilterValue(value);
  }, []);
  return (
    <AppContext.Provider
      value={{
        showSearchBar,
        setShowSearchBar,
        filterValue,
        changeFilterValue,
      }}>
      <UserContext.Provider value={{ user: userState, dispatch: dispatch }}>
        <Router>
          <div className="app">
            <Header
              clickHandler={toggleNavbar}
              isNavBarShown={isNavbarShown}
              newStyles={fullWidthStyle}
            />
            <div className={isNavbarShown ? "sidenav" : "closedNav"}>
              <Navbar toggleNavbar={toggleNavbar} />
            </div>

            <section
              className="main"
              onClick={isNavbarShown & !isLargeScreen ? toggleNavbar : null}>
              <MainSection
                isNavbarShown={isNavbarShown}
                fullWidthStyle={fullWidthStyle}
              />
              <BottomNav />
              <Footer />
            </section>
          </div>
        </Router>
      </UserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
