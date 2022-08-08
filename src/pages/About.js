import React from 'react'
import styles from '../mystyles/about.module.css'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img5.jpg'
import Navbar from "../component/Navbar";

export default function About() {
  return (
    <>
          <Navbar/>
         <div className={styles.aboutSection}>
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 style={{textAlign:'center',marginTop:'40px'}}>Our Team</h2>
<div className='row' style={{margin:' 0px 100px'}} >
  <div className='col' style={{backgroundColor:'#eee',margin:'10px'}}>
    <div className='card-body'>
      <img src={img1} alt="Jane"  width="100%" height="300px"/>
      <div className={styles.container}>
        <h2>Jane Doe</h2>
        <p className='card-title'>CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className={styles.button}>Contact</button></p>
      </div>
    </div>
  </div>

  <div className='col' style={{backgroundColor:'#eee',margin:'10px'}}>
    <div className='card-body'>
      <img src={img2} alt="Mike" width="100%" height="300px"/>
      <div className={styles.container}>
        <h2>Mike Ross</h2>
        <p className='card-title'>Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className={styles.button}>Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className='col' style={{backgroundColor:'#eee',margin:'10px'}}>
    <div className='card-body'>
      <img src={img3} alt="John" width="100%" height="300px"/>
      <div className={styles.container}>
        <h2>Jane Peter</h2>
        <p className='card-title'>Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className={styles.button}>Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
