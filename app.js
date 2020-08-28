window.addEventListener('load',()=>{
  const sounds=document.querySelectorAll('.sound')
  const pads=document.querySelectorAll('.pads div')
  const visual=document.querySelector('.visual')
  pads.forEach((pad,index)=>{
    pad.addEventListener('click', ()=>{
      sounds[index].currentTime=0
      sounds[index].play()
      bubbles(index)
    })
  })
  const bubbles=(index)=>{
    const colors=['rgb(96, 211, 148)', 'rgb(211, 96, 96)', 'rgb(192, 96, 211)', 'rgb(211, 209, 96)', 'rgb(104, 96, 211)', 'rgb(96, 178, 211)']
    let bubble=document.createElement('div')
    visual.appendChild(bubble)
    bubble.style.backgroundColor=colors[index]
    bubble.style.animation='jump 1s ease'
    bubble.addEventListener('animationend',function(){
      visual.removeChild(this)
    })
  }
})