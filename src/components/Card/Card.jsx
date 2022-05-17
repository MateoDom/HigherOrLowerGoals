import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import players from "../../api";
import s from "./Card.module.css";

function Card() {
    const [player, setPlayer] = useState([...players]);
    const [playerOne, setPlayerOne] = useState([]);
    const [playerTwo, setPlayerTwo] = useState([]);
    const [currentPlayers, setCurrentPlayers] = useState([]);
    const [score, setScore] = useState(0);
    const [correct, setCorrect] = useState(false);
    const [userLost, setUserLost] = useState(false);
    const [playing, setPlaying] = useState(true);
    const [showGoal, setShowGoal] = useState(false)
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => { 
    const randomPlayer = player.sort(() => Math.random() - 0.5);
      const initialPlayers = randomPlayer.slice(0, 2);
      setCurrentPlayers([...initialPlayers]);
    
  }, []);

  useEffect(()=> {

  if(score === 13){
    alert("You won!")
    window.location.reload();
  }
},[score])
  useEffect(() => {
    const pl1 = [currentPlayers[0]]
    const pl2 = [currentPlayers[1]]
      const data = player.filter(player => player.player_id !==   (pl1[0] && pl1[0].player_id) && player.player_id !== (pl2[0] && pl2[0].player_id))
      setPlayer([...data]);
      setPlayerOne(pl1);
      setPlayerTwo(pl2);
      if(correct){
        setTimeout(() => {
        setCorrect(false);
        }, 300);
      }


  },[currentPlayers]);

  const changePlayers= () => {
    setShowGoal(false)
    const newP2 = [player[0]]
    setPlayerOne([currentPlayers[1]]);
    setPlayerTwo(newP2);;  
    setCurrentPlayers([currentPlayers[1], newP2[0]]);


}
  const higherGoals = (player1, player2) => {
    if(player1.goals > player2.goals){
        setShowGoal(true)
        setUserLost(true);
        setTimeout(()=>{
          setGameOver(true)},2000)
        }
    if(player2.goals > player1.goals){
      setShowGoal(true)
        setScore(score + 1)
        setCorrect(true);
        setTimeout(()=>{

          changePlayers()
        }, 2000)
      }
    
  }
  const lowerGoals = (player1, player2) => {
    if(player1.goals < player2.goals){
        setShowGoal(true)
        setUserLost(true);
        setTimeout(()=>{
          setGameOver(true)},2000)

        }
      
    if(player2.goals < player1.goals){
      setShowGoal(true)
        setScore(score + 1)
        setCorrect(true);
        setTimeout(()=>{

          changePlayers()
        }, 2000)
    }
  }
  return (
    <>
    {playing && !gameOver ? (
      <div className={s.cards}>
        {playerOne && playerOne.map((player, id)=> (  
          
          <div
          className={s.card_container}
          style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${player && player.picture})`,}}
          key={id}
          >
        <div className={s.card_info}>
          <h2 className={s.card_text}>{player && player.name}</h2>
          <p className={s.card_text_scored}>has</p>
          <p className={s.card_text_goals}>{player && player.goals}</p>
          <p className={s.card_text_scored}>goals</p>
        </div>
      </div>
    
    ))}

    {playerTwo && playerTwo.map((player,id) => (
      
      <div
      className={s.card_container}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${player && player.picture})`,
      }}
      key={id}
      >
        <div className={s.card_info}>
          <h2 className={s.card_text}>{player && player.name}</h2>
          <p className={s.card_text_scored}>has</p> 
            {showGoal? <p className={s.card_text_goals}>{player && player.goals}</p>: <div>

            <button onClick={()=>higherGoals(playerOne[0], playerTwo[0])}className={s.card_btn_hl}>
            Higher
            </button>
          <button onClick={()=> lowerGoals(playerOne[0], playerTwo[0])} className={s.card_btn_hl} >
            Lower
          </button>
          </div>
          }

          <p className={s.card_text_scored}>goals</p>
        </div>
        
        <p className={s.creator}><a  rel="noopener noreferrer" target="_blank" href="https://github.com/MateoDom">Created By Mateo Dominguez</a></p>
      </div>
 
 ))}
      <button className={`${s.btn} ${correct && s.correct} ${userLost && s.incorrect}`}>{correct? "✔" : userLost? "X" : "VS"} </button>
      <p className={s.score}>Score: {score}</p>
    </div>)
: <div className={s.game_over} >
    <div className={s.game_over_text}>
      <h3>Game Over!</h3>
      <p>You scored:</p>
      <p>{score}</p>
    </div>
    <button onClick={()=> window.location.reload()} className={s.card_btn_hl}>Play Again</button>
    <p className={s.creator}><a rel="noopener noreferrer" href="https://github.com/MateoDom" target="_blank">Created By Mateo Dominguez</a></p>
    </div>}
  
 </>
 );
}

export default Card;
