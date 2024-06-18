
let gameArray = document.querySelectorAll('.grid-container'); 

let gameArrChilds = document.querySelector('.grid-container').childNodes; 
let gameArrayFrom = Array.from(gameArrChilds); 
let finalArray = gameArrayFrom.filter((element) => element.nodeName != '#text');


const createPlayer = function (name, marker) {
    this.name = name; 
    this.marker = marker; 
   
    
    return {name, marker}
}

const player1 = createPlayer('Kobe', 'X');
const player2 = createPlayer('Shaq', 'O'); 



   
          
          
                 
   
         function alternateGame(playerOne, playerTwo) {
       

        let loop = function(event) {
         let playerPick = event.target;  
      
         for(let i = 0; i < finalArray.length; i++) {
          

            let findX = finalArray.filter((element) => element == playerOne.marker); // think of ways to reconstruct filters instead of checking for x and o it could be to do with image
            let findO = finalArray.filter((element) => element == playerTwo.marker); 
         
           

             if (findO.length < findX.length && finalArray[i] == playerPick) {
               // finalArray[i] = playerTwo.marker; 
               
               let player2O = new Image(); 
               player2O.src = 'img/circle.svg'; 

               finalArray[i].appendChild(player2O); 
             
               finalArray[i] = playerTwo.marker;  
                                                                // having issues showing circles and x and saving value. cause every time array updates markers just go
                                                               // i'm thinking of using two variables one for score and one for markers but i don't think it would work

               console.log(finalArray[i]);
                console.log(finalArray);

               checkLogic(finalArray, playerOne, playerTwo); 

                
             }
             else if (findO != findX && finalArray[i] == playerPick) {
               //finalArray[i] = playerOne.marker; 
               let player1X = new Image();
               player1X.src = 'img/x.svg';
             
               finalArray[i].appendChild(player1X); 

               finalArray[i] = playerOne.marker; 

               console.log(finalArray[i]);
               
               
               console.log(finalArray); 
              checkLogic(finalArray, playerOne, playerTwo); 

            }  
            else if (winner == true) {
               gameArray.forEach(position => position.removeEventListener('click', loop)); 
            }
            
         }
      }
       
    
         gameArray.forEach(position => position.addEventListener('click', loop)); 

      }; 


        alternateGame(player1, player2); 
   

        
        
       /*function alternate(playerOne, playerTwo) {   // once loops start it only evaluates playerOne and goes till array is finished without actually alternating and coming to first condition
         if (findO < findX) {
            playGame(playerTwo); 
         } else if(findX != findO) {
            playGame(playerOne); 
         }
       }  */ 
        
     
       // condition should be if all arr[i] equals 'X' loops finishes)

      
  

    /* thiink now of how to change all positions with a marker. 
    think recursive how can you make this function continue going until all
     spots have been taken. One way could be a second loop? best think would
     be to look up recursive funnctions again and see if you can call this
     function again until all positions become X

     After you did that you can start thinking of how to alternate plays 
     with two different markers */

    

// we have got all the logic in place. next thing to do is to render this on the dom. So substitute playerPick with events and need a function to manage this. All spots on grid needs to be interactive

let winner; 
function declareWinner() {
   return winner = true
}; 


function checkLogic(gameBoard, playerOne, playerTwo) {
   //let valueCheck = (currentValue) => currentValue == playerOne.marker || currentValue == playerTwo.marker; 

  
   

   if(gameBoard[0] == playerOne.marker && gameBoard[1] == playerOne.marker && gameBoard[2] == playerOne.marker) {
         
      console.log('player one wins');
      return declareWinner(); 
         
          

}    else if (gameBoard[0] == playerTwo.marker && gameBoard[1] == playerTwo.marker && gameBoard[2] == playerTwo.marker) {
          console.log('playerTwo wins'); 
          return declareWinner();


}    else if(gameBoard[3] == playerOne.marker && gameBoard[4] == playerOne.marker && gameBoard[5] == playerOne.marker) {
          console.log('player one wins');
          return declareWinner();


}     else if (gameBoard[3] == playerTwo.marker && gameBoard[4] == playerTwo.marker && gameBoard[5] == playerTwo.marker) {
      console.log('playerTwo wins'); 
      return declareWinner();

} 

    else if(gameBoard[6] == playerOne.marker && gameBoard[7] == playerOne.marker && gameBoard[8] == playerOne.marker) {
     console.log('player one wins');
     return declareWinner();


}      else if (gameBoard[6] == playerTwo.marker && gameBoard[7] == playerTwo.marker && gameBoard[8] == playerTwo.marker) {
       console.log('playerTwo wins'); 
       return declareWinner(); 


}       else if(gameBoard[0] == playerOne.marker && gameBoard[3] == playerOne.marker && gameBoard[6] == playerOne.marker) {
        console.log('player one wins');
        return declareWinner();


}   else if (gameBoard[0] == playerTwo.marker && gameBoard[3] == playerTwo.marker && gameBoard[6] == playerTwo.marker) {
   console.log('playerTwo wins');
   return declareWinner();
 
} 
    else if(gameBoard[1] == playerOne.marker && gameBoard[4] == playerOne.marker && gameBoard[7] == playerOne.marker) {
  console.log('player one wins');
  return declareWinner();

}   else if (gameBoard[1] == playerTwo.marker && gameBoard[4] == playerTwo.marker && gameBoard[7] == playerTwo.marker) {
   console.log('playerTwo wins'); 
   return declareWinner(); 
} 
else if(gameBoard[2] == playerOne.marker && gameBoard[5] == playerOne.marker && gameBoard[8] == playerOne.marker) {
      console.log('player one wins');
      return declareWinner(); 

}   else if (gameBoard[2] == playerTwo.marker && gameBoard[5] == playerTwo.marker && gameBoard[8] == playerTwo.marker) {
     console.log('playerTwo wins'); 
     return declareWinner(); 
} 

else if(gameBoard[0] == playerOne.marker && gameBoard[4] == playerOne.marker && gameBoard[8] == playerOne.marker) {
    console.log('player one wins');
    return declareWinner(); 

}   else if (gameBoard[0] == playerTwo.marker && gameBoard[4] == playerTwo.marker && gameBoard[8] == playerTwo.marker) {
    console.log('playerTwo wins'); 
    return declareWinner(); 
} 

else if(gameBoard[2] == playerOne.marker && gameBoard[4] == playerOne.marker && gameBoard[6] == playerOne.marker) {
    console.log('player one wins');
    return declareWinner(); 

}   else if (gameBoard[2] == playerTwo.marker && gameBoard[4] == playerTwo.marker && gameBoard[6] == playerTwo.marker) {
   console.log('playerTwo wins'); 
   return declareWinner(); 
} 
     else {
      alternateGame(playerOne, playerTwo); 
     } 
   }

   /*

   else if (gameBoard.every(valueCheck) != true) {
       console.log(gameBoard.every(valueCheck) != true);
      
      alternateGame(playerOne, playerTwo);

   } 
   
   else if (gameBoard.every(valueCheck) == true) {
    console.log('game is finished');
    return
} 

}
 */


// look how to disable touch event once player wins. go through logic, double check it 

//after how to integrate pictures to game .

// next tasks = create button to restart game
// add a line that crosses line to show who's winning
// create score board
// improve css : take borders away grid - player one X and player two O should have a name on the side indicating what marker they are using 
// show an interactive notification to show one players won 

 checkLogic(finalArray, player1, player2); 












