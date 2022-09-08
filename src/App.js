import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import pages

// import About from './Pages/About'
// import Latest from './Pages/Latest'
// import Top from './Pages/Top'
// import Listings from './Pages/Listings';
// import Videos from './Pages/Videos';
// import Contact from './Pages/Contact'
// import Guides from './Pages/Guides';
// import Faq from './Pages/Faq';
// import CreatePost from './Pages/CreatePost';

// import components
// import HomePage from './Component/HomePage'
// import ForemShop from './Pages/ForemShop';
// import Podcasts from './Pages/Podcasts';
// import Sponsors from './Pages/Sponsors';
// import Tags from './Pages/Tags';
// import ReadingList from './Pages/ReadingList';
import NewSideBar from './Component/NewSideBar';



const App = () => {
  return(
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route exact path="/">
    //         <HomePage />
    //       </Route>
    //       <Route path="/faq">
    //         <Faq />
    //       </Route>
    //       <Route path="/ReadingList">
    //         <ReadingList />
    //       </Route>
    //       <Route path="/createPost">
    //         <CreatePost />
    //       </Route>
    //       <Route path='/About' >
    //         <About />
    //       </Route>
    //       <Route path='/Contact' >
    //         <Contact />
    //       </Route>
    //       <Route path='/ForemShop' >
    //         <ForemShop />
    //       </Route>
    //       <Route path='/Guides' >
    //         <Guides />
    //       </Route>
    //       <Route path='/Latest' >
    //         <Latest />
    //       </Route>
    //       <Route path='/Listing' >
    //         <Listings />
    //       </Route>
    //       <Route path='/Podcasts' >
    //         <Podcasts />
    //       </Route>
    //       <Route path='/Videos' >
    //         <Videos />
    //       </Route>
    //       <Route path='/Tags'>
    //         <Tags />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <div>
      <NewSideBar />
    </div>
  )
};

export default App;
