import { useRef, useEffect } from "react";

/** 
 * todo: FINISH
 */

function Test({ children, }) {
  const hiddenElements = document.querySelectorAll('.hidden')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else { entry.target.classList.remove('show') }
    })
  }); const item = useRef()
  useEffect(() => {
    observer.observe(item.current)
  }, [])
  return <div ref={item} className="hidden">{children}</div>
}