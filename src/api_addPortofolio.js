import React from 'react';

import { post } from './lib/axios.js';

class api extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			save:1,
			name:null,
			lang:null,
			framework:null,
			Image_display:null,
			image_fullDisplay: null,
			about_porto: null,
			button_type: 'Site',
			fileDownload:null,
			site: null,
			github : null,
			is_fileToDownload: false,
		}
	}


	Submit = async () => {
		
		var formData = new FormData();
		formData.append('name', this.state.name);
		formData.append('lang', this.state.lang);
		formData.append('framework', this.state.framework);
		formData.append('imageDisplay', this.state.Image_display);
		formData.append('imageFullDis', this.state.image_fullDisplay);
		formData.append('about_porto', this.state.about_porto);
		formData.append('button_type', this.state.button_type);
		formData.append('fileDownload', this.state.fileDownload);
		formData.append('site', this.state.site);
		formData.append('github', this.state.github);

		await post(formData);
		alert(`${this.state.save} form saved !`)
	}

	changeSiteOrDownload = async (e) => {
		await this.setState({button_type: e.target.value});
		console.log(this.state.button_type);
	}

	render(){

		return (

			<div className='absolute p-5 w-full'>
				<p className='text-4xl mb-10'>Add Portofolio</p>
				<form className='w-full'>
					
					<div className='flex flex-cols'>
						<p className='w-52'>Name : </p>
						<textarea name='name' className='border w-1/3' onChange={(e) => this.setState({name: e.target.value})} />
					</div>
					<div className='flex flex-cols'>
						<p className='w-52'>Lang : </p>
						<input type='text' name='lang' className='border w-1/3' onChange={(e) => this.setState({lang: e.target.value})} />
					</div>
					<div className='flex flex-cols'>
						<p className='w-52'>Framework : </p>
						<input type='text' name='Framework' className='border w-1/3' onChange={(e) => this.setState({framework: e.target.value})} />
					</div>
					<div className='flex flex-cols'>
						<p className='w-52'>Image_display : </p>
						<input type='file' name='files' className='border w-1/3' onChange={(e) => this.setState({Image_display: e.target.files[0]})} />
					</div>
					<div className='flex flex-cols'>
						<p className='w-52'>image_fullDisplay : </p>
						<input type='file' name='files' className='border w-1/3' onChange={(e) => this.setState({image_fullDisplay: e.target.files[0]})} />
					</div>
					<div className='flex flex-cols'>
						<p className='w-52'>about portofolio : </p>
						<textarea name='aboutPortofolio' className='border h-52 w-1/3' onChange={(e) => this.setState({about_porto: e.target.value})} />
					</div>
						<div className='flex flex-cols'>
						<p className='w-52'>button: </p>
						<select name='button_type' className='w-1/3 border' onChange={this.changeSiteOrDownload} value={this.state.button_type}>
							<option value='Site'>Site</option>
							<option value='Download'>Download</option>
						</select>
					</div>
					{this.state.button_type === 'Download' ? ( 
							<div className='flex flex-cols'>
								<p className='w-52'>File : </p>
								<input type='file' name='fileDownload' className='border w-1/3' onChange={(e) => this.setState({fileDownload: e.target.files[0]})} />
							</div>
						 ) : ( 
							<div className='flex flex-cols'>
								<p className='w-52'>Site : </p>
								<input type='text' name='site' className='border w-1/3' onChange={(e) => this.setState({site: e.target.value})} />
							</div>
						 )}

					<div className='flex flex-cols'>
						<p className='w-52'>Github : </p>
						<input type='text' name='github' className='border w-1/3' onChange={(e) => this.setState({github: e.target.value})} />
					</div>
				
				
				
					<button type='button' className='bg-blue-500 px-5 py-1 text-white' onClick={this.Submit} >Submit</button>
				
				</form>
			</div>

			)
	}
}


export default api;