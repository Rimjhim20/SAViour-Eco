import React from 'react'
import homePic from './assets/home-img.svg'
import {Link} from 'react-router-dom'
const safety = () => {
  return (
    <div>
<section class="home" id="home">
        <div class="image">
            <img src={homePic} alt="home-img"/>
        </div>
        <div class="content">
            <h2><b>Stay Safe And Prepared. </b></h2><br/>
            <p>It is important to stay safe and prepared during a disaster because disasters can pose a threat to both physical safety and property. Natural disasters such as hurricanes, earthquakes, and wildfires can cause widespread destruction, while man-made disasters such as chemical spills or explosions can also pose a significant threat. In order to minimize the impact of a disaster, it's crucial to be prepared and follow safety guidelines.</p>
            <div>
                  <button type="button" class="btn btn-dark"><Link to="/quiz" className='text-white text-decoration-none'>Disaster Trivia</Link></button>
                  </div>
        </div>
    </section>

    <section class="services" id="services">
        <h1 class="heading">Safety Related Contents</h1>
        <div class="box-container">
           
            <div class="box">
                <i class="fas fa-ambulance"></i>
                <h3>24/7 Emergency Contact</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <Link to="/emergency" class="btn">see more <span class="fas fa-chevron-right"></span> </Link>
            </div>
            <div class="box">
                <i class="fas fa-notes-medical"></i>
                <h3>Hurricane</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <Link to="/tips" class="btn">see more <span class="fas fa-chevron-right"></span> </Link>
            </div>
            <div class="box">
                <i class="fas fa-notes-medical"></i>
                <h3>Earthquake</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <Link to="/earth" class="btn">see more <span class="fas fa-chevron-right"></span> </Link>
            </div>
            <div class="box">
                <i class="fas fa-notes-medical"></i>
                <h3>Flood</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <Link to="/flood" class="btn">see more <span class="fas fa-chevron-right"></span> </Link>
            </div>

            <div class="box">
                <i class="fas fa-notes-medical"></i>
                <h3>WildFire</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <Link to=" " class="btn">see more <span class="fas fa-chevron-right"></span> </Link>
            </div>
            <div class="box">
                <i class="fas fa-notes-medical"></i>
                <h3>Tornado</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <Link to=" " class="btn">see more <span class="fas fa-chevron-right"></span> </Link>
            </div>
            <div class="box">
                <i class="fas fa-notes-medical"></i>
                <h3>Thunderstorms & lighting</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <Link to=" " class="btn">see more <span class="fas fa-chevron-right"></span> </Link>
            </div>
            <div class="box">
                <i class="fas fa-notes-medical"></i>
                <h3>Winter and ice storms</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <Link to=" " class="btn">see more <span class="fas fa-chevron-right"></span> </Link>
            </div>
            <div class="box">
                <i class="fas fa-notes-medical"></i>
                <h3>Tsunamis</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <Link to=" " class="btn">see more <span class="fas fa-chevron-right"></span> </Link>
            </div>
        </div>
    </section>
    </div>
  )
}

export default safety