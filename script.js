

function dragElement() {
  const drags = document.querySelectorAll('.drag');
  drags.forEach(drag => {
    drag.addEventListener('mousedown', dragMouseDown)
  })
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  console.log(`so far sod good!1`);
  console.table(`${this}`)

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    this.onmouseup = closeDragElement;
    this.onmousemove = elementDrag;
  }

  function closeDragElement() {
    this.onmouseup = null;
    this.onmousemove = null;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    this.style.top = (this.offsetTop - pos2) + "px";
    this.style.left = (this.offsetLeft - pos1) + "px";
  }

}

dragElement()