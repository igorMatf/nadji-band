import React, { Component } from 'react';
import '../css/ImgOnHomepage.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import ListResult from './ListResult';
import Header from './Header';
import Footer from './Footer';
import SliderComponent from './SliderComponent';



class ImgOnHomepage extends Component {
  
	constructor(props) {
		super(props);
		this.state = {
			flag: false,
			result: [],
			listResult: null
		};

		this.getAdsFromDatabase = this.getAdsFromDatabase.bind(this);
	}

	componentDidMount() {
		if (localStorage.email !== undefined) {
			document.getElementById("loginButton").style.display = "none";
			document.getElementById("registerButton").style.display = "none";
		}
		else {

		}
	}

	async getAdsFromDatabase(event) {
		{
			await axios.get('http://localhost:5000/api/forum/getAllAds', {
				params: {
					accountType: localStorage.accountType
				}
			}).then(res => {
				console.log(localStorage.accountType)
				this.state.result = res.data;
				console.log(this.state.result);
				this.state.listResult = this.state.result.map(
					result => <ListResult
						// id={result.id}
						// key={result.id}
						name={result.title}
						description={result.description}
						email={result.user}
						genre={result.genres}
						instruments={result.instruments}
					// location={result.location}
					/>);
			})
		}

		document.getElementById("homePage").style.display = "none";
		document.getElementById("allAds").style.display = "block";
		this.forceUpdate();
	}


	render(){

		return (
			<div className="ImgOnHomepage">
				<div id="homePage">
					<SliderComponent />
					<div className="btnBox">
						<button className="button" id="loginButton"><a href="/login"><span>Log in</span></a></button>
						<br/>
						<button className="button" id="registerButton"><a href="/register"> <span>Register</span></a></button>
						<br/>
						<button className="button" onClick={this.getAdsFromDatabase}><span>Show ads</span></button>
					{/* <button className="btnShowAds"> <a href="/ShowForum"> Show ads </a></button> */}
					</div>
					{/* <img src="/backgrounds/background.jpg" alt="image_header"/> */}
				</div>

				<div className="container" id="allAds" display="none">
					<div>
						{this.state.listResult}
					</div>
				</div>
				
			</div>
		);
	}
}

export default ImgOnHomepage;