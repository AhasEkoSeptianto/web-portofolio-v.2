import React from 'react';
// import { Timer } from './../../lib/timer.js';

class imgPortofolio extends React.Component{


	showLearnDetail = (action ,val) => {

		switch (action) {
			case 'show' : {
					document.getElementById(`show_backimg${val}`).style.cssText = 'width:100%; transition:.5s;'
					document.getElementById(`show_name${val}`).style.cssText = ' transition:.5s;opacity:1;'
					break;
			}
			case 'hide' : {
					document.getElementById(`show_backimg${val}`).style.width = '0px';
					document.getElementById(`show_name${val}`).style.cssText = 'opacity:0;';
					break;
			} default : {
				console.log('image err')
			}
		}
	}

	openModal = (image, about, button_type, site, download, github) => {
		document.getElementById('modal_porto').classList.remove('hidden');
		document.getElementById('image_modal_porto').setAttribute('src', `${image}` );
		document.getElementById('about_porto').innerHTML = about;
		if (button_type === 'Download') {
			document.getElementById('site_porto').setAttribute('href', `${download}` );
		} else {
			document.getElementById('site_porto').setAttribute('href', site );
		}
		document.getElementById('github_porto').setAttribute('href', github);
		
	}


	render(){
		return(
			<div className='w-full lg:w-1/2 relative' id={'porto' + this.props.index} onMouseOver={() => this.showLearnDetail('show',this.props.index)} onMouseOut = {() => this.showLearnDetail('hide', this.props.index)} key={this.props.index}>
				{/* <img src={`http://localhost:3001${this.props.image}`} alt={this.props.type} class='max-h-72 mx-auto' /> */}
				<img src={`${this.props.image}`} alt={this.props.type} className='max-h-72 mx-auto' />
				<div className='bg-black h-full absolute top-0 opacity-60 w-0' id={`show_backimg${this.props.index}`}></div> {/* background black */}
				<div className='flex flex-col justify-center items-center h-full w-full absolute top-0 z-20 text-gray-100 overflow-hidden opacity-0' id={`show_name${this.props.index}`}>
					<h2 className='font-semibold text-2xl'>{this.props.name}</h2>
					<p className='text-lg text-blue-100'>{this.props.framework}</p>
					<button className='mt-14 w-1/3 border-2 border-blue-500 py-2 text-lg hover:bg-blue-500' onClick={() => this.openModal(this.props.img_full, this.props.about, this.props.button_type, this.props.site, this.props.download, this.props.github )}>Learn More</button>
				</div> 
			</div>
			)
	}
}

export default imgPortofolio;