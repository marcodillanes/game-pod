import React, { useEffect } from 'react'; 
import './SideScroller.css';



function SideScroller (props) {
    // all of your js would go here

    //load event waits for assets to be fully loaded before executing code in callback function

    useEffect ( function(){
        const canvas = document.getElementById('canvasgame');
        //built in canvas 2d api to animate game, youtube saving the day with this one (if i can figure it out 100%)
        const ctx = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 720;

    
    });

    class inputHandle {
        constructor(){
            this.keys = [];
            window.addEventListener('keydown', function(e){
                console.log(e.key);
            });
        }

    } 


    class player {

    }

    class background {

    }


    class enemy {

    }

    function handleEnemy (){

    }

    function displayCurrentState(){

    }

    function animate(){

    }



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
                <img id='playerChar' src='assets/playerChar.png'></img> 
                <img id='enemyChar' src='assets/enemyChar.png'></img>
                <img id= 'backgroundImg' src='assets/backGround.png'></img>


            </body></>
      
        // all event listeners here
        
        
       
    )
 
}

export default SideScroller

// Import html first
// import js second
    // for all js where you select your elements and add event listeners, 
    // copy past the event handlers into the appropriate html components