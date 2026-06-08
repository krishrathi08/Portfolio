import React, { useEffect } from 'react'
import { useSpring, animated as anim } from '@react-spring/web'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function Gooery() {
  const [spring1, set1] = useSpring(() => ({ pos1: [0, 0], config: fast }))
  const [spring2, set2] = useSpring(() => ({ pos2: [0, 0], config: slow }))
  const [spring3, set3] = useSpring(() => ({ pos3: [0, 0], config: slow }))

  useEffect(() => {
    const handler = ({ clientX, clientY }) => {
      set1({ pos1: [clientX, clientY] })
      set2({ pos2: [clientX, clientY] })
      set3({ pos3: [clientX, clientY] })
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [set1, set2, set3])

  return (
    <div className='mk-gooery'>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div className="hooks-main">
        <div className="hooks-filter">
          <anim.div className="b1" style={{ transform: spring3.pos3.to(trans) }} />
          <anim.div className="b2" style={{ transform: spring2.pos2.to(trans) }} />
          <anim.div className="b3" style={{ transform: spring1.pos1.to(trans) }} />
        </div>
      </div>
    </div>
  )
}
