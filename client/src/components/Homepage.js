import React from 'react';
import Header from './Header';
import ImgOnHomepage from './ImgOnHomepage';
import Footer from './Footer';

class Homepage extends React.Component {
  
  render() {
    return (
        <div className="homepage" style={{display: "block"}}>
            <Header />
            <ImgOnHomepage />
            <Footer/>
        </div>
      
      );
  }

}

export default Homepage;