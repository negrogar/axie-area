import React, {useState, useEffect} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import data from '../data.json'


function Tabla(){
  const cartas = data
  const [firstCard, setFirstCard] = useState('')
  const [secondCard, setSecondCard] = useState('')
  const [thirdCard, setThirdCard] = useState('')
  const [selected, setSelected] = useState([])
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(firstCard && secondCard && thirdCard){
      cartas.map((dato)=>{
      const {id, name1,name2,dmg,shield,buff,part,img} = dato
      if(firstCard===name1){
        const carta = {id, name1, name2, dmg,shield,buff,part,img};
        setSelected((selected)=>{
          return [...selected, carta]
        })
        setFirstCard('')
      }else if(secondCard===name1){
        const carta = {id, name1, name2, dmg,shield,buff,part,img};
        setSelected((selected)=>{
          return [...selected, carta]
        })
        setSecondCard('')
      }
      else if(thirdCard===name1){
        const carta = {id, name1, name2, dmg,shield,buff,part,img};
        setSelected((selected)=>{
          return [...selected, carta]
        })
        setThirdCard('')
      }
    })
    }else{
      console.log('buena pete')
    }
  }

  

    return(
        <>
    <article>
      <form className='form-group' >
        <div className='form-control'>
          <label htmlFor='firstCard'>Card 1 Name</label>
          <input type='text' className='form-control' id='firstCard' name='firstCard' 
          value={firstCard}
          onChange={(e)=>setFirstCard(e.target.value)}
          />
          <label htmlFor='secondCard' value={secondCard}>Card 2 Name</label>
          <input type='text' className='form-control' id='secondCard' name='secondCard' value={secondCard} onChange={(e)=>setSecondCard(e.target.value)}/>
          <label htmlFor='thirdCard' value={thirdCard}>Card 3 Name</label>
          <input type='text' className='form-control' id='thirdCard' name='thirdCard' value={thirdCard} onChange={(e)=>setThirdCard(e.target.value)}/>

        </div>
        <button className="btn btn-success" type='submit' onClick={handleSubmit} onSubmit={(e)=>setFirstCard(e.target.value)}>Add Card</button>
      </form>
      {
        selected.map((carta)=>{
          const {id, name1, name2, dmg,shield,buff,part,img} = carta
          return(
            <>
          <div key={id} className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={img} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{name1}</h5>
              <h3 className="card-title">{name2}</h3>
              <p className="card-text">Damage: {dmg}</p>
              <p className="card-text">Damage: {shield}</p>
              <p className="card-text">Part: {part}</p>
              <p className="card-text">Buff: {buff}</p>

              <a href="#" className="btn btn-danger">Remove</a>
            </div>
          </div>
          <br/>
          </>
          )
  
        })
      }
    </article>
        
        </>
    )
}


  

export default Tabla