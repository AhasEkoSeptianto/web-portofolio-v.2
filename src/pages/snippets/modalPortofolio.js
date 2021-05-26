import React from 'react';

class modalPortofolio extends React.Component{


	close = () => {
		document.getElementById('modal_porto').classList.add('hidden')
	}


	render(){
		return(
			<div className='fixed z-50 w-screen h-screen flex justify-center items-center py-14 hidden ' id='modal_porto'>
				
				{/* hidden bg */}
				<div className='absolute w-screen h-screen bg-gray-800 opacity-50'></div>

				{/* main */}
				<div className='w-10/12 lg:w-1/3 h-full bg-gray-200 border rounded-lg shadow-lg overflow-auto  z-20'>
					<img src='#' className='p-2 rounded-lg' id='image_modal_porto' alt='image_full' />

					<p className='p-5 bg-gray-100 text-sm' id='about_porto'></p>

					<div className='flex bg-gray-100 text-white p-5 relative'>
						
						<a href='#site' id='site_porto'>
							<button className='border border-blue-500 text-blue-500 rounded px-2 lg:px-5 py-1 mx-1 hover:bg-blue-500 hover:text-white'>Demo</button>
						</a>
						<a href='#github' id='github_porto'>
							<button className='border border-blue-500 text-blue-500 rounded px-2 lg:px-5 py-1 mx-1 hover:bg-blue-500 hover:text-white'>Code</button>
						</a>
					
						<button className='absolute right-0 border border-red-500 text-red-500 rounded mr-5 px-2 lg:px-5 py-1 mx-1 hover:bg-red-500 hover:text-white' onClick={this.close}>Exit</button>												
						
					</div>

				</div>

			</div>
			)
	}
}


export default modalPortofolio;