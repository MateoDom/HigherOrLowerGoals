import React, {useEffect, useState} from 'react'
import s from './Player.module.css'
const PlayerTwo = ({pl2}) => {
    const [count, setCount] = useState(0)
    const [player, setPlayer] = useState(pl2)
   const handleClick = () => {
    setCount(count + 1)
    }
    useEffect(()=>{
        setPlayer(pl2)
     
    },[pl2])


  return (
    <div className={s.card_container} style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${player && player.picture})`}}key={player && player.player_id}>       
    <div className={s.card_info}>
    <h2 className={s.card_text}>{player && player.name}</h2>
    <p className={s.card_text_scored} onClick={()=> handleClick}>has</p>
    <button type='submit' className={s.card_btn_hl} onClick={()=> setCount(count + 1)}>Higher </button>
    <button type='submit' className={s.card_btn_hl}>Lower  </button>
    <p className={s.card_text_scored}>goals</p>
</div>
</div>
  )
}

export default PlayerTwo