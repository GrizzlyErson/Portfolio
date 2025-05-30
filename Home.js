import React from 'react'
import './Home.css'
import jtech from './img/logo.png'
import mypic from './img/mypic.png'
import comp from './img/comp.png'
import socicon from './img/smicons.png'
import splitter from './img/Section.png'
import animvec from './img/Ellipse 2.png'
import sirkit from './img/sirkit.png'
import s1 from './img/s1 (1).png'
import s2 from './img/s1 (2).png'
import s3 from './img/s1 (3).png'
import brands from './img/brands.png'
import osp from './img/osp.png'
import tool1 from './img/image 18.png'
import tool2 from './img/image 19.png'
import ss1 from './img/ss1.png'
import ss2 from './img/ss2.png'
import ss3 from './img/ss3.png'
import fvector from './img/footer (2).png'
import { Link } from 'react-router-dom'
import ftimg from './img/ftimg.png'
import s5 from './img/3.jpg'
function Home() {
  return (
    <div className="Home" id="bahay">
        <html>
            <header>
                <navweb>
                    <div class="transpanavbar">
                    </div>
                    <div class="logo" id="logo">
                        <div class="Audiowide">
                            <img src={jtech} alt="JTECH" width={"160px"} />
                        </div>   
                    </div>
                    <div>
                        <ul class="ul">
                            <li id="liweblist"><a href="#footragis">Contact Us</a></li>
                            <li id="liweblist"><a href="#abawtme">About Us</a></li>
                            
                            <li id="liweblist">
                            <Link to ="/Shop">    
                                Products
                            </Link>
                            </li>
                            <li id="liweblist">
                            <li id="liweblist"><a href="#bahay">Home</a></li>

                            </li>
                        </ul> 
                    </div>
                    <div class="socicons">
                        <img src={socicon} alt="fb" width={"230px"} />
                         
                    </div>
                    <div class="rectangle" id="top">
                        <div class="login">
                            <h1>Log in!</h1> 
                        </div>
                    </div>
                </navweb>
            </header>
            <body>
                
                <div class="sectiontwo" id="abawtme">
                <div class="hero-container">
                    <div class="herosmall">
                        <p>HELLO I’M A</p>
                    </div>
                    <div class="herosmallunder">
                        <p>Hi! My Name is Jefferson F. Asejo A Computer Enthusiast</p>
                        <p>From Philippines and Delighted to assist you</p>
                        <Link to ="learn">
                        <div class="rectanglehero">
                            <div class="herobtn">
                                <h1>Learn More</h1>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div class="herolarge">
                        <span>COMPUTER</span>
                        <span>
                        <main class="container">

                        <section class="animation">
                            <div class="first"><div>Expert</div></div>
                            <div class="second"><div>Web Dev</div></div>
                            <div class="third"><div>Technician</div></div>
                        </section>
                        </main>
                        </span>
                    </div>
                    <div>
                        <div class="circle"></div>
                        <div class="mypic">
                            <img src={mypic} alt="me" width={"650px"}/>
                        </div>

                        <div class="comp">
                            <img src={comp} alt="comp" width={"1100px"}/>
                            
                        </div>
                        <div class="yellowbox"></div>
           
                    </div>
                    

                    <img src={splitter} alt="me" class="mvector" width="1580px"/>
                    
                        
                </div>
                <div class="sect">
                <div class="card-container">
                        <div class="card">
                            <img src={animvec} alt=""/>
                        </div>
                        <div class="card">
                            <div class="card-description" id="about">
                                <h2 class="about">About me</h2>
                                <p class="brief">MY STORY OF HARDWORK AND DEDICATION.</p>
                                <p class="textdesc">My name is Jefferson F. Asejo and student of Northwestern visayan colleges studying Computer Science. I already work in the field of computers in UP DILIMAN. mahilig din ako kumain maglaro at mag diet (LIE) nangangarap ako maging super saiyan para matalo si vegeta at frieza dati din akong hokage ng konoha ngayon sa karinderya nalang. Pangarap ko din maging avatar para libre na yung tubig gas at lupa at para mapanitili ang muscles ko at iipunin ko ang pitong dragonballs para magwish na sana ang makakapulot ng pitong dragonballs ay may password muna bago magamit ulet.</p>
                                <p class="brief">MY STORY OF HARDWORK AND DEDICATION.</p>
                                <p class="textdesc">Nakalimutan ko idagdag tumatanggap po pala ako ng gcash.. 09475316387 at sana matanggap na ako sa bahay ni kuya eto pala email ko asejo.32@gmail.com</p>
                            </div>
                        </div>
                        </div>
                        
                        <div class="backsirkit">
                            <img src={sirkit} alt="" width={"1500px"}/>

                        </div>
                        <div class="servicestxt">
                            <h1>SERVICES</h1>
                        </div>
                        <div class="c-container">
                        <div class="c">
                            <img src={s1} alt="" width={"200px"}/>
                        </div>
                        <div class="c">
                            <img src={s2} alt="" width={"200px"}/>
                        </div>
                        <div class="c">
                        <img src={s3} alt="" width={"200px"}/>
                        </div>
                        </div>
                        <div class="servicestxt">
                            <br></br>
                            <h1>OUR WORK</h1>
                        </div>
                       

                        <div class="media-scroller snaps-inline">
                        <div class="media-element">
                            <img src="data:image/jpeg;base64,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" alt=""/>
                        </div>
                        <div class="media-element">
                            <img src={s5} alt=""/>
                        </div>
                        <div class="media-element">
                            <img src="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
                        </div>
                        <div class="media-element">
                            <img src="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
                        </div>
                        <div class="media-element">
                            <img src="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
                        </div>
                        <div class="media-element">
                            <img src="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
                        </div>
                        <div class="media-element">
                            <img src="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
                        </div>

                        </div>
                        <div class="sectionthree">
                            <div class="servicestxt">
                                <br></br>
                                <h1>WE WORK ACROSS DIFFERENT BRANDS</h1>
                            </div>

                            <div class="brands">
                                <img src={brands} alt="" width={"1530px"}/>
                            </div>
                            <div class="osp">
                                <img src={osp} alt="" width={"600px"}/>
                            </div>
                            <div class="servicestxt">
                                <br></br>
                                <h1 class="otherservices">OTHER SERVICES OFFERED</h1>
                            </div>
                            <div class= "backgroundtool">
                                <img class="imgspace1" src={tool1} alt="" width={"300px"}/>
                                
                            </div>
                            <img class="imgspace2" src={tool2} alt="" width={"300px"}/>

                            <div class="divlast">
                            
                                <div class="c-container">
                                
                                    <div class="c">
                                        <img src={ss1} alt="" width={"200px"}/>
                                    </div>
                                    <div class="c">
                                        <img src={ss2} alt="" width={"200px"}/>
                                    </div>
                                    <div class="c">
                                        <img src={ss3} alt="" width={"200px"}/>
                                    </div>
                                </div>
                            </div>

                                <img src={fvector} alt="me" class="fvector" width="1580px" id="footragis"/>
                                <div class="foot">
                                <div class="servicestxt">
                                <h1 class="ru">REACH US!</h1>
                                <img src={ftimg} alt="" width={"650px"}/>

                            </div>

                                </div>          

                        </div>
                </div>

                </div>

                    
                
                
                

                
                    

                    
            </body>
        </html>
        
    </div>

  );
}

export default Home