import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useEffect } from 'react';
import format from 'date-fns/format';

const CalcDetails = ({ workout, setn, n, modal, setm, n1, m, k, setk, setn1, setem}) => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()
  useEffect(()=>{
    if(typeof window?.MathJax !== "undefined"){
      window.MathJax.typeset()
    }
  },[workout])

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
    setm({...modal, delete: true})
  }
var n0, k0, m0
n0=Number(workout.detail1)
m0=Number(workout.detail2)
k0=Number(workout.detail3)
  useEffect(()=>{
    if(typeof window?.MathJax !== "undefined"){
      window.MathJax.typeset()
    }
  },[])
  const click=()=>{
    setm({...modal, Ready: true})
    setn(Number(workout.detail1))
    setn1(Number(workout.detail1))
    setem(Number(workout.detail2))
    setk(Number(workout.detail3))
  }
  const dated=new Date((workout.createdAt))

  return (
    <>
      {(!workout.detail2 && !workout.detail3 && workout.detail1) &&
        <div className={document.documentElement.clientWidth<700?"workout-details beginner":"workout-details fs-4"} style={{color:"black"}}>
      <p key="k2"><strong>Title: </strong>{workout.title }</p>
      <p key="k3"><strong>{'$$(1-x^2)y\'\'-2xy\'+'+n0*(n0+1)+'y=0$$'}</strong></p>
      <p key="k4"><strong>{'$$y\\ =\\ C_1\\ P_{'+n0+'}(x)\\ + C_2\\ Q_{'+n0+'}(x)$$'}</strong></p>
      {dated && <p key="k5">{formatDistanceToNow(dated, { addSuffix: true })}</p>}
      <div className='justify-content-center align-items-center align-self-center align-content-center' style={{margin:"auto", display: "flex"}}>
        <button className="btn bgpupp textpele bi bi-trash mx-2 px-2" onClick={handleClick}>delete</button>
      <Link to="/solution" className='text-decoration-none'><button className="btn bgpupp textpele mx-2 p-2" onClick={click}>view</button></Link>
      </div></div>}
      {(!workout.detail3 && workout.detail1 && workout.title.slice(-1)==="1") &&
      <div className={document.documentElement.clientWidth<700?"workout-details beginner":"workout-details fs-4"} style={{color:"black"}}>
      <p key="k2"><strong>Title: </strong>{workout.title}</p>
      <p key="k3"><strong>{'$$(1-x^2)y\'\'-'+2*(m0+1)+'xy\'+'+(n0-m0)*(n0+m0+1)+'y=0$$'}</strong></p>
      <p key="k4"><strong>{'$$y\\ =\\ C_1\\ P_{'+n0+'}(x,'+m0+')\\ + C_2\\ Q_{'+n0+'}(x,'+m0+')$$'}</strong></p>
       {dated && <p key="k5">{formatDistanceToNow(dated, { addSuffix: true })}</p>}
       <div className='justify-content-center align-items-center align-self-center align-content-center' style={{margin:"auto", display: "flex"}}>
        <button className="btn bgpupp textpele bi bi-trash mx-2 px-2" onClick={handleClick}>delete</button>
        <Link to="/solution2" className='text-decoration-none'><button className="btn bgpupp textpele mx-2 p-2" onClick={click}>view</button></Link>
      </div></div>}
      {(!workout.detail3 && workout.detail1 && workout.title.slice(-1)==="2") && 
      <div className={document.documentElement.clientWidth<700?"workout-details beginner":"workout-details fs-4"} style={{color:"black"}}>
      <p key="k2"><strong>Title: </strong>{workout.title}</p>      
      <p key="k3"><strong>{'$$(1-x^2)y\'\'+'+2*(m0)+'xy\'+'+(n0-m0)*(n0+m0+1)+'y=0$$'}</strong></p>
      <p key="k4"><strong>{'$$y\\ =\\ C_1\\ P_{'+n0+'}(x,'+m0+')\\ + C_2\\ Q_{'+n0+'}(x,'+m0+')$$'}</strong></p>
      {dated && <p key="k5">{formatDistanceToNow(dated, { addSuffix: true })}</p>}
      <div className='justify-content-center align-items-center align-self-center align-content-center' style={{margin:"auto", display: "flex"}}>
        <button className="btn bgpupp textpele bi bi-trash mx-2 px-2" onClick={handleClick}>delete</button>
        <Link to="/solution3" className='text-decoration-none'><button className="btn bgpupp textpele mx-2 p-2" onClick={click}>view</button></Link>
      </div></div>}
      {(!workout.detail2 && workout.detail1 && workout.title.slice(-1)==="3") &&
      <div className={document.documentElement.clientWidth<700?"workout-details beginner":"workout-details fs-4"} style={{color:"black"}}>
      <p key="k2"><strong>Title: </strong>{workout.title}</p>
      <p key="k3"><strong>{'$$(1-x^2)y\'\'-'+(2*n0+1)+'xy\'+'+k0+'y=0$$'}</strong></p>
      <p key="k4"><strong>{'$$y\\ =\\ C_1\\ P_{'+n0+'}(x)\\ + C_2\\ Q_{'+n0+'}(x)$$'}</strong></p>
      {dated && <p key="k5">{formatDistanceToNow(dated, { addSuffix: true })}</p>}
      <div className='justify-content-center align-items-center align-self-center align-content-center' style={{margin:"auto", display: "flex"}}>
        <button className="btn bgpupp textpele bi bi-trash mx-2 px-2" onClick={handleClick}>delete</button>
        <Link to="/solution4" className='text-decoration-none'><button className="btn bgpupp textpele mx-2 p-2" onClick={click}>view</button></Link>
      </div></div>}
      {(!workout.detail2 && workout.detail1 && workout.title.slice(-1)==="4") && 
      <div className={document.documentElement.clientWidth<700?"workout-details beginner":"workout-details fs-4"} style={{color:"black"}}>
      <p key="k2"><strong>Title: </strong>{workout.title}</p>
      <p key="k3"><strong>{'$$(1-x^2)y\'\'+'+(2*n0+1)+'xy\'+'+k0+'y=0$$'}</strong></p>
      <p key="k4"><strong>{'$$y\\ =\\ C_1\\ P_{'+n0+'}(x)\\ + C_2\\ Q_{'+n0+'}(x)$$'}</strong></p>
      {dated && <p key="k5">{formatDistanceToNow(dated, { addSuffix: true })}</p>}
      <div className='justify-content-center align-items-center align-self-center align-content-center' style={{margin:"auto", display: "flex"}}>
        <button className="btn bgpupp textpele bi bi-trash mx-2 px-2" onClick={handleClick}>delete</button>
        <Link to="/solution5" className='text-decoration-none'><button className="btn bgpupp textpele mx-2 p-2" onClick={click}>view</button></Link>
      </div></div>}
    </>
  )
}

export default CalcDetails
