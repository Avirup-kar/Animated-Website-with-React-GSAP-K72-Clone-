import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react'
import { useLocation } from 'react-router-dom';

const Stairs = (props) => {
 console.log(props)
  const currentPath = useLocation().pathname;
  
  const stairParentRef = useRef(null);
  const appRef = useRef(null);

  useGSAP(function(){
    const tl = gsap.timeline()

    tl.to(stairParentRef.current, {
      display: "block"
    })

    tl.from(".stair", {
      height:0,
      stagger: {
        amount: -0.2
      }
    })

    tl.to(".stair", {
      y: '100%',
      stagger: {
        amount: -0.2
      }
    })

    tl.to(stairParentRef.current, {
      display: "none"
    })

    tl.to(".stair", {
      y: "0%"
    })

    gsap.from(appRef.current, {
      opacity: 0,
      delay: 1.2,
    })
  }, [currentPath])

  return (
     <div>
      <div ref={stairParentRef} className="div h-full w-full fixed flex z-10 top-0">
        <div className="h-full w-full flex">
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div> 
        </div>
     </div>

     <div ref={appRef}>
      {props.children}
     </div>
     </div>
  )
}

export default Stairs
