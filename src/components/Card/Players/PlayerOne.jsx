import React, {useState, useEffect} from 'react'
import s from './Player.module.css'
const PlayerOne = ({pl1}) => { 
   
   const [player, setPlayer] = useState(pl1)
   
    useEffect(()=>{
        setPlayer(pl1)
    },[pl1])

  return (
    <div className={s.card_container} style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${player && player.picture})`}}key={player && player.player_id}>       
    <div className={s.card_info}>
    <h2 className={s.card_text}>{player && player.name}</h2>
    <p className={s.card_text_scored}>has</p>
    <p className={s.card_text_goals}>{player && player.goals}</p>
    <p className={s.card_text_scored}>goals</p>
</div>
</div>
  )
}

export default PlayerOne