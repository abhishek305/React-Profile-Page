import React, { Component } from 'react'

import pyimg from '../Components/public/image/pythonimg.png'
import jsimg from '../Components/public/image/javascriptimg2.png'
import htmlimg from '../Components/public/image/html5logo.jpg'
import cssimg from '../Components/public/image/csslogo.png'
import wordpressimg from '../Components/public/image/wordpress.png'
import mongoimg from '../Components/public/image/mngodbimg.png'
import databasebimg from '../Components/public/image/database.jpg'





class Project extends Component {
    render() {
        return (
       
            <section id="skillheader" className="flex-project-container">

                    <div><img src={pyimg} width="100" height="100" alt="python"/></div>
                    <div><img src={jsimg} width="100" height="100" alt="js"/></div>
                    <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div><img src={cssimg} width="100" height="100" alt="css"/></div>
                    <div><img src={wordpressimg} width="100" height="100" alt="wordpress"/></div>
                    <div><img src={mongoimg} width="100" height="100" alt="mongodb"/></div>  
                    <div><img src={databasebimg} width="100" height="100" alt="db"/></div>
                
            </section>
        )
    }
}

export default Project
