import React from 'react'; 
import './components/side_scroller/SideScroller.css';





function SideScroller (props) {
    // all of your js would go here

    return (

        // all of your html would go here
      
      <>
            
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Side Scroller</title>
            </head>
            <body>
                {/* all game assets will be in here */}
                <canvas id='canvasgame'></canvas>
                <img id='playerChar' src='charimg'></img> 
                <img id='enemyChar' src='enemyimg'></img>
                <img id= 'backgroundImg' src='bckgrndimg'></img>


            </body></>
      
        // all event listeners here
    )
}

export default SideScroller

// Import html first
// import js second
    // for all js where you select your elements and add event listeners, 
    // copy past the event handlers into the appropriate html components