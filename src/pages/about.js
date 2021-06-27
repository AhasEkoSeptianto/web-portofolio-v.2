import React, { Component } from "react";
import "./../css/about.css";
import ImageGue from './../image/gue.png';

import {allIconsSkill, allPortofolio} from './db.js';
import { get } from './../lib/axios.js';

import ModalPortofolio from './snippets/modalPortofolio.js';
import ImgPortofolio from './snippets/imgPortofolio.js';

class about extends Component {

    constructor(props){
        super(props);
        this.state = {
            portoNav : 'All',
            allPortofolio: allPortofolio,
        }

    }


    updatePorto = (val) => {
      
      this.setState({portoNav:val}); //update state

      // update berdasarkan langguange db porto
      // memainkan css list
      this.state.allPortofolio.forEach((project, index) => {
        if ( val !== 'All' && project.lang !== val) { 
          document.getElementById('porto' + index).classList.add('hidden');
        } else {
          document.getElementById('porto' + index).classList.remove('hidden');
        }
      })
    }

    // contact hover
    contactHover = (action, val) => {
      
      var id = document.getElementById(`contact_${val}`);

      switch (action) {
        case 'show' : {
          document.getElementById(val).style.backgroundColor = '#3399ff';
          id.style.cssText = 'transition-duration:.3s;';
          id.classList.add('-mt-16')
          break;
        } case 'hide' : {
          document.getElementById(val).style.backgroundColor = '#2d3748';
          id.classList.remove('-mt-16')
          break;
        } default : {
          console.log('content value not defined')
        }
      }
    }


    async componentDidMount(){

      var openHeroku =  get();
      
      // animated scrooling
      document.addEventListener('scroll', (e) => {
        let scroll = window.scrollY;

        // navbar 
        if (scroll < 600) {
            document.getElementById('navHome').classList.add('text-blue-300')
          } else {
            document.getElementById('navHome').classList.remove('text-blue-300')
          }

        if (scroll > 600 && scroll < 1700) {
            document.getElementById('navAbout').classList.add('text-blue-300')
          } else {
            document.getElementById('navAbout').classList.remove('text-blue-300')
          }

        if (scroll > 1700 && scroll < 2700) {
            document.getElementById('navPortofolio').classList.add('text-blue-300')
          } else {
            document.getElementById('navPortofolio').classList.remove('text-blue-300')
          }

        if ( scroll > 2700 ) {
            document.getElementById('navContact').classList.add('text-blue-300')
          } else {
            document.getElementById('navContact').classList.remove('text-blue-300')
          }




        // animasi opacoty content
        // about title dan navbar
        if (scroll > 700) {
          document.getElementById('anim_about').style.opacity = '1';
        }

        if (scroll > 800) {

          // profille info show
          document.getElementById('info_gue').style.cssText = 'opacity:1; transform:scale(1,1);';


          // skill show
          document.getElementById('skill_title').style.opacity = '1';
          
          var index = 0;
          var start = setInterval(() => {
            document.getElementById(`icons_skill_${index}`).style.opacity = '1';
            index += 1;

            if (index === 17){
              clearInterval(start);
            }

          } , 200 )
        
        }

        // portofolio title
        if (scroll > 1700) {
          document.getElementById('anim_portofolio').style.opacity = '1';
        }

        // navbar portofolio
        if (scroll > 1800) {
          document.getElementById('nav_portofolio').style.cssText = 'opacity:1;'
        }

        // list portofolio 
        if (scroll > 1900) {
          document.getElementById('update_portofolio').style.opacity = '1';
        }


        // contact title
        if (scroll > 2700) {
          document.getElementById('anim_contact').style.opacity ='1';
        }

        // msg content
        if (scroll > 2800) {
          document.getElementById('anim_msg_content').style.opacity = '1';
        }

      })

    }


  render() {

    


    return (
      <div>

        {/* modal view portofolio */}
        <div>
          <ModalPortofolio />

          {/* end modal view */}

          
          <div id='home'></div>
          {/* jumbotron */}
          <div className='h-screen relative'>
            <div className="bg_jumbotron"></div>  {/* background image */}
            <div className='absolute top-0 bg-gray-900 h-full w-full opacity-60'></div> {/* opacity */}
            <div className='absolute top-0 h-screen w-screen flex justify-center items-center text-white'>
              <h1 className='font-bold text-center text-lg lg:text-2xl'>HI, I'm Eko. I Build Website & Mobile App</h1>
            </div>
          </div>

          {/* navbar */}
          <nav className='sticky top-0 shadow z-40'>
            <ul className='flex items-center divide-x bg-gray-700 text-gray-200 lg:text-lg'>
              <a href='#home'>
                <li className=' py-3 px-3 lg:px-9 cursor-pointer font-bold hover:bg-blue-500' id='navHome'>Home</li>
              </a>
              <a href='#about'>
                  <li className='py-3 px-3 lg:px-9 cursor-pointer font-bold hover:bg-blue-500' id='navAbout'>
                      About
                  </li>
              </a>
              <a href='#portofolio'>
                  <li className='py-3 px-3 lg:px-9 cursor-pointer font-bold hover:bg-blue-500' id='navPortofolio'>
                      Portofolio        
                  </li>
              </a>
              <a href='#contact'>
                <li className='py-3 px-3 lg:px-9 cursor-pointer font-bold hover:bg-blue-500' id='navContact'>Contact</li>
              </a>
            </ul>
          </nav>


          {/* about */}
          <div className='mt-18 lg:mt-32 text-gray-800' >
              
              <div id='about'></div>
            <h1 className='text-center py-20 text-4xl lg:text-5xl font-bold transition duration-700 opacity-0 title' id='anim_about'>About</h1>
            <div className='container mx-auto grid lg:grid-cols-2 text-center text-gray-600 divide-x items-center'>  
              
              {/* about left */}
              <div id='info_gue' className='transition duration-700'>
                <div className='relative flex justify-center items-center'>
                  <img src={ImageGue} className='mx-auto rounded-2xl w-8/12 lg:w-1/3 shadow' id='img' alt='myself' />
                </div>
                <div className='mt-10 text-sm'>
                  <h2 className='font-bold text-lg'>Who this guy ?</h2>  
                  <p className='w-2/3 my-2 mx-auto font-semibold  lg:text-lg'>I am Ahas Eko Septianto, I am a front end developer, my skills are on the website and mobile developer
    I really like programming and motivated</p>
                  <a href='#none' className='text-blue-600 font-semibold'>
                    <p>Let's make something special.</p>
                  </a>
                  <p className=' lg:text-lg font-semibold'>Download <a href='/Curiculum_Vitae.pdf' class='text-blue-500 font-semibold' download>CV</a></p>
                </div>
              </div>

              {/* about right */}
              <div>
                <h2 className='font-bold text-4xl lg:text-5xl my-20 opacity-0 lg:my-0' id='skill_title'>Skills</h2>

                <div className='flex flex-wrap mt-3 lg:mt-10'>
                  {allIconsSkill.map((val, index) => (
                    <div className='py-4 flex flex-col justify-center items-center opacity-0 transition duration-700 hover:shadow w-1/3 lg:w-1/5 ' key={index} id={`icons_skill_${index}`} >
                      <img src={val.image} className='w-20 mx-auto' alt={val.name} id={`img_skill_${index}`} />
                      <p className='text-center font-semibold text-gray-600'>{val.name}</p>
                    </div>
                    ))}
                </div>

              </div>
            </div>

          </div>



          {/* project */}

          <div className='my-10 lg:my-52'>

              <div  id='portofolio'></div>
              <h1 className='text-center py-20 text-4xl lg:text-5xl font-bold opacity-0 transition duration-700 title' id='anim_portofolio'>Portofolio</h1>

              <nav className='w-full mx-auto opacity-0 transition duration-700' id='nav_portofolio'>
                  <ul className='flex w-full lg:w-8/12 justify-between lg:justify-center mx-auto p-3 text-center text-gray-100 text-sm lg:text-lg'>
                      <li className={`w-1/4  cursor-pointer p-1 lg:p-2 ${this.state.portoNav === 'All' ? 'bg-blue-500' : ' text-gray-800 border border-gray-500 '} hover:bg-blue-500 hover:text-white `} onClick={()=>this.updatePorto('All')} >All</li>
                      <li className={`w-1/4 cursor-pointer p-1 lg:p-2 ${this.state.portoNav === 'php' ? 'bg-blue-500' : ' text-gray-800 border border-gray-500 '} hover:bg-blue-500 hover:text-white`} onClick={()=>this.updatePorto('php')}>Php</li>
                      <li className={`w-1/4 cursor-pointer p-1 lg:p-2 ${this.state.portoNav === 'javascript' ? 'bg-blue-500' : ' text-gray-800 border border-gray-500 '} hover:bg-blue-500 hover:text-white`} onClick={()=>this.updatePorto('javascript')} >Javascript</li>
                      <li className={`w-1/4 cursor-pointer p-1 lg:p-2 ${this.state.portoNav === 'python' ? 'bg-blue-500' : ' text-gray-800 border border-gray-500 '} hover:bg-blue-500 hover:text-white`} onClick={()=>this.updatePorto('python')}>Python</li>
                  </ul>
              </nav>

              <div className='w-11/12 lg:w-8/12 mx-auto flex flex-wrap mt-10 transition duration-700 opacity-0' id='update_portofolio'>

                  {allPortofolio.map((val, index) => (

                      <ImgPortofolio image={val.image_display} name={val.name} framework={val.framework} type={val.lang} index={index} about={val.about_portofolio} img_full={val.image_fullDisplay} site={val.site} button_type={val.button_type} download={val.fileDownload} github={val.github} />

                      ))}
              </div>

          </div>


          {/* contect */}
          <div className='contact_content'>
            <div className='contact py-20'>
              <div id='contact'></div>
               <h1 className='text-center pt-10 lg:pt-20 lg:pb-10 text-4xl lg:text-5xl font-bold opacity-0 transition duration-700 title_contact' id='anim_contact'>Contact</h1>
            </div>

            <div className='text-white pb-32 opacity-0 transition duration-700' id='anim_msg_content'> 
              <div className='w-11/12 lg:w-1/2 mx-auto divide-y divide-gray-800'>
                <input type='text' className='w-full p-4 text-lg bg-gray-700 outline-none' placeholder='Name'  />
                <input type='text' className='w-full p-4 text-lg bg-gray-700 outline-none' placeholder='Enter Email' />
                <textarea className='w-full h-60 p-4 text-lg bg-gray-700 outline-none' placeholder='text' />
                <div className='flex w-full justify-end pt-2 mr-5 lg:mr-0'>
                  <button className='bg-blue-500 px-5 py-2 lg:px-14 lg:py-3 text-white font-semibold rounded-lg'>Submit</button>
                </div>
              </div> 
            </div>


            {/* goto top */}
            <div className='w-full flex justify-center bg-gray-800'>
              
              <a href='#home'>
                <div className='bg-blue-500 rounded px-1 py-2 lg:px-3 lg:py-5 -mt-10 hover:bg-blue-600 cursor-pointer'>
                  <img src={'/image/icons/up.svg' } className='w-10' alt='up' />
                </div>
              </a>
            </div>

            <div className='bg-gray-800 text-white py-20'>
              <ul className='flex justify-center' id='social_media'>
                
                <a href='https://www.facebook.com/ahas.septianto/'>
                  <li className='mx-3 lg:mx5 block h-16 w-16 overflow-hidden shadow hover:bg-blue-100' onMouseOver={() => this.contactHover('show','facebook')} onMouseOut={() => this.contactHover('hide','facebook')} id='facebook' >
                    <img src='/image/icons/facebook.svg' className='h-16 p-4' id='contact_facebook' alt='facebook' />
                    <img src='/image/icons/facebook.svg' className='h-16 p-4' id='contact_facebook' alt='facebook' />
                  </li>
                </a>

                <a href='http://wa.me/+6285351196080'>
                  <li className='mx-3 lg:mx5 block h-16 w-16 overflow-hidden shadow hover:bg-blue-100' onMouseOver={() => this.contactHover('show','whatsapp')} onMouseOut={() => this.contactHover('hide','whatsapp')} id='whatsapp' >
                    <img src='/image/icons/whatsapp.svg' className='h-16 p-4' id='contact_whatsapp' alt='whatsapp' />
                    <img src='/image/icons/whatsapp.svg' className='h-16 p-4' id='contact_whatsapp' alt='whatsapp' />
                  </li>
                </a>
                
                <a href='https://t.me/AhasEkoSeptianto'>
                  <li className='mx-3 lg:mx5 block h-16 w-16 overflow-hidden shadow hover:bg-blue-100' onMouseOver={() => this.contactHover('show','telegram')} onMouseOut={() => this.contactHover('hide','telegram')} id='telegram' >
                    <img src='/image/icons/telegram.svg' className='h-16 p-4' id='contact_telegram' alt='telegram' />
                    <img src='/image/icons/telegram.svg' className='h-16 p-4' id='contact_telegram' alt='telegram' />
                  </li>                
                </a>
                
                <a href='https://github.com/AhasEkoSeptianto'>
                  <li className='mx-3 lg:mx5 block h-16 w-16 overflow-hidden shadow hover:bg-blue-100' onMouseOver={() => this.contactHover('show','github')} onMouseOut={() => this.contactHover('hide','github')} id='github' >
                    <img src='/image/icons/github.svg' className='h-16 p-4' id='contact_github' alt='github' />
                    <img src='/image/icons/github.svg' className='h-16 p-4' id='contact_github' alt='github' />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about ;