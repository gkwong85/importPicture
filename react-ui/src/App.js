import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropzone from  'react-dropzone';

class App extends Component {

	handleDrop(acceptedFiles) {
        //this.setState({ preview })

        let formData = new FormData();

        acceptedFiles.forEach(function(file) {
        	formData.append('avatar', file);
        });

        fetch('/merge', {
        	method: 'POST',
            credentials: 'include',   //send the files to serverside
            body: formData
        }).then(res => console.log(res.json()));
    }

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Dropzone onDrop={this.handleDrop}
						  accept="image/jpeg,image/jpg,image/tiff,image/gif,image/png" 
						  multiple={true}>
						  <p>Drag a photo here or click to upload.</p>
						  <img className="profile-panel DragnDropDP" src="" alt="change"/>
				</Dropzone>
			</div>
		);
	}
}

export default App;
