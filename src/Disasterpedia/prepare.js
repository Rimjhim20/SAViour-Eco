import React from 'react'
import hpic from '../assets/11.jpg'
import earth from '../assets/earth.png'
import flood from '../assets/flood.jpg'
import tornado from '../assets/tornado.jpg'
import fire from '../assets/fire.jpg'
import thunder from '../assets/light.jpg'
import ice from '../assets/ice.jpg'
import tsunami from '../assets/tusami.jpg'
import {Link } from 'react-router-dom'
const prepare = () => {
   return (
      <div>
         <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
         <section class="section-big main-color">
            <div class="container mt-4">
               <div class="row">
                  <div class="col-md-12 pb-20 text-center">
                     <h2 class="section-title mb-10"><span> All types of<strong class="primary-color">  Disaster</strong></span></h2>
                     <p class="section-sub-title">
                        A disaster is an event, such as a natural or man-made catastrophe, that causes widespread damage, suffering, or loss of life. Some common types of disasters include hurricanes, earthquakes, fires, and floods. Disasters can have a significant impact on communities and can result in a wide range of effects, including physical damage to infrastructure, loss of homes and businesses, displacement of people, and psychological trauma. Effective disaster planning and response can help to minimize the impact of a disaster and improve recovery efforts. This can include measures such as evacuation plans, emergency preparedness kits, and disaster relief programs.
                     </p>
                  </div>
                  <div>
                  <button type="button" class="btn btn-dark"><Link to="/safety" className='text-white text-decoration-none'>Safety Tips</Link></button>
                  </div>
               </div>
               <br /><br />
               <div class="row">
                  <div class="col-md-6 mb-2">
                     <div >
                        <img src={hpic}  alt='' height="300" className=' w-75'/>
                     </div>

                     <div class="icon-content">
                        <h3 class="title">	Hurricane</h3>
                        <p class="sub-title">
                           A hurricane is a type of tropical storm that forms over the Atlantic Ocean or the northeastern Pacific Ocean. It is characterized by high winds, heavy rainfall, and storm surges that can cause widespread damage and flooding. Hurricanes are formed by the interaction of warm ocean waters, moist air, and converging winds. The most intense hurricanes are classified as Category 5 storms, with winds over 157 mph (252 km/h).
                        </p>
                     </div>


                     <img src={flood} height="300" className=' w-75' alt='' />

                     <div class="icon-content">
                        <h3 class="title">Flood</h3>
                        <p>
                           A flood is a type of natural disaster that occurs when a large amount of water overflows its banks and inundates land that is normally dry. Floods can be caused by heavy rainfall, rapid snowmelt, hurricanes, and other factors. In coastal areas, storm surges associated with hurricanes can cause significant flooding. Floods can result in the displacement of people from their homes, the destruction of property and infrastructure, and loss of life.
                        </p>
                     </div>

                     <img src={tornado}  height="300" className=' w-75' alt=''/>

                     <div class="icon-content">
                        <h3 class="title">Tornado</h3>
                        <p>
                           A tornado is a rapidly rotating column of air that is in contact with both the surface of the earth and a cloud. Tornadoes are usually associated with severe thunderstorms and can cause significant damage and loss of life. They are most common in the United States, particularly in the Midwest and the South. Tornadoes can have wind speeds up to 300 mph (480 km/h) and can last from a few minutes to several hours.
                        </p>
                     </div>

                     <img src={ice} height="300" className=' w-75' alt=''/>

                     <div class="icon-content">
                        <h3 class="title"> Winter and ice storms</h3>
                        <p>
                        Winter storms, including ice storms, can cause widespread damage and disruption, particularly in areas that are not equipped to handle severe winter weather conditions. Ice storms occur when rain freezes on contact with cold surfaces, resulting in the accumulation of a layer of ice on roads, bridges, trees, and other objects. This can cause widespread power outages, as ice accumulates on electrical lines and equipment. Winter storms can also result in hazardous driving conditions, as ice and snow make roads slippery and reduce visibility. To reduce the impact of winter storms and ice storms, it is important to prepare for the possibility of severe winter weather, such as by stockpiling supplies, having backup power sources, and keeping vehicles equipped with winter tires and chains. During a winter storm, people should stay informed about changing weather conditions, avoid unnecessary travel, and take extra precautions when driving.
                        </p>
                     </div>

                  </div>
                  <div class="col-md-6 mb-2 mb-2">
                     <img src={earth} height="300" className=' w-75' alt=''/>
                     <div class="icon-content">
                        <h3 class="title">Earthquake</h3>
                        <p class="sub-title">
                           An earthquake is the shaking of the surface of the earth caused by the release of energy stored in the earth's crust. Earthquakes can be caused by the movement of tectonic plates, volcanic activity, and other factors. Earthquakes can range in magnitude from small, barely noticeable tremors to large, catastrophic events. Earthquakes can cause damage to buildings, infrastructure, and other structures, and can result in loss of life.
                        </p>
                     </div>
                     <img src={fire} height="300" className=' w-75' alt=''/>
                     <div class="icon-content">
                        <h3 class="title">Wildfire</h3>
                        <p>
                           A wildfire is an uncontrolled fire that burns in a natural area, such as a forest, grassland, or prairie. Wildfires can be started by natural causes, such as lightning, or by human activities, such as campfires and cigarettes. Wildfires can spread quickly and unpredictably, making them difficult to control. They can result in the destruction of homes and other structures, and can threaten wildlife and other forms of vegetation.
                        </p>
                     </div>
                     <img src={thunder} height="300" className=' w-75' alt=''/>
                     <div class="icon-content">
                        <h3 class="title">Thunderstorms & lighting</h3>
                        <p>
                        Thunderstorms with lightning can pose significant hazards to people and property. Lightning strikes can cause fires, electrical outages, and damage to buildings and other structures. Additionally, strong winds associated with thunderstorms can cause structural damage and power outages, and heavy rain can lead to flash flooding,But we can reduce the risks associated with thunderstorms and lightning.
                        </p>
                     </div>
                     <img src={tsunami} height="300" className=' w-75' alt=''/>
                     <div class="icon-content">
                        <h3 class="title">Tsunamis</h3>
                        <p>
                        A tsunami is a large ocean wave that is caused by a disturbance, such as an earthquake, volcanic eruption, or meteor impact. Tsunamis can cause widespread damage and loss of life when they reach the coast. Tsunamis can travel long distances across the open ocean, and they can grow in size as they approach the shore. When a tsunami reaches the coast, it can cause significant damage to buildings, infrastructure, and property, and can lead to widespread flooding. To reduce the impact of tsunamis, it is important to have early warning systems in place, educate communities about evacuation procedures, and ensure that coastal areas are adequately prepared to respond to a tsunami event. Additionally, people should familiarize themselves with the local tsunami evacuation plan, and be prepared to take action if a tsunami warning is issued.
                        </p>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </div>
   )
}

export default prepare