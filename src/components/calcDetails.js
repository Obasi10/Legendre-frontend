import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useEffect } from 'react'

const CalcDetails = ({ workout, setn, n, modal, setm}) => {
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

  useEffect(()=>{
    if(typeof window?.MathJax !== "undefined"){
      window.MathJax.typeset()
      setn(workout.details)
    }
  },[])

  return (
    <div className={document.documentElement.clientWidth<700?"workout-details beginner":"workout-details fs-4"} style={{color:"black"}}>
      <p key="k2"><strong>Title: </strong>{workout.title}</p>
      <p key="k3"><strong>{'$$(1-x^2)y\'\'-2xy\'+'+n*(n+1)+'y=0$$'}</strong></p>
      <p key="k4"><strong>{'$$y\\ =\\ C_1\\ P_{'+n+'}(x)\\ + C_2\\ Q_{'+n+'}(x)$$'}</strong></p>
      <p key="k5">{formatDistanceToNow(new Date((workout.createdAt)), { addSuffix: true })}</p>
      <div className='justify-content-center align-items-center align-self-center align-content-center' style={{margin:"auto", display: "flex"}}>
        <button className="btn bgpupp textpele bi bi-trash mx-2 px-2" onClick={handleClick}>delete</button>
        <Link to="/solution" className='text-decoration-none'><button className="btn bgpupp textpele mx-2 p-2" onClick={()=>{setm({...modal, Ready: true})}}>view</button></Link>
      </div>
    </div>
  )
}

export default CalcDetails