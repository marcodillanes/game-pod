import React from 'react'; 
import './SideScroller.css';





function SideScroller (props) {
    // all of your js would go here

    //load event waits for assets to be fully loaded before executing code in callback function

    window.addEventListener('load', function(){
        const canvas = document.getElementById('canvasgame');
        //built in canvas 2d api to animate game, youtube saving the day with this one (if i can figure it out 100%)
        const ctx = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 720;

    });


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
                <img id='playerChar' src='playerChar.png'></img> 
                <img id='enemyChar' src='enemyChar.png'></img>
                <img id= 'backgroundImg' src='backGround.png'></img>


            </body></>
      
        // all event listeners here
        
       
       
    )
 
}

export default SideScroller

// Import html first
// import js second
    // for all js where you select your elements and add event listeners, 
    // copy past the event handlers into the appropriate html components