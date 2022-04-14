let areas = {
  a: null,
  b: null,
  c: null
}

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', dragStart) //dragstart é quando começa a arrastar um item
  item.addEventListener('dragend', dragEnd) //dragend é quando para/termina de arrastar
})

document.querySelectorAll('.area').forEach(area => {
  area.addEventListener('dragover', dragOver) //dragover é quando passa em cima de uma área "dropável".
  area.addEventListener('dragleave', dragLeave) //dragleave é quando sai de cima de uma área "dropável".
  area.addEventListener('drop', drop) //drop é quando acontece o drop de um item em uma área "dropável".
})

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral)
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral) 
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral)


//Function Item
function dragStart(e) {
  e.currentTarget.classList.add('dragging')
}

function dragEnd(e) {
  e.currentTarget.classList.remove('dragging')

}

//Function Area
function dragOver(e) {
  if(e.currentTarget.querySelector('.item') === null) {
    e.preventDefault() //"libera" para fazer o drop
    e.currentTarget.classList.add('hover')
  }
}

function dragLeave(e) {
  e.currentTarget.classList.remove('hover')

}

function drop(e) {
  e.currentTarget.classList.remove('hover');

  if(e.currentTarget.querySelector('.item') === null) {
    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas()
  }
}

//Functions Neutral Area
function dragOverNeutral(e) {
  e.preventDefault();
  e.currentTarget.classList.add('hove')
}

function dragLeaveNeutral(e) {
  e.currentTarget.classList.remove('rekove')

}

function dropNeutral(e) {
  e.currentTarget.classList.remove('hove')
  let dragItem = document.querySelector('.item.dragging');
  e.currentTarget.appendChild(dragItem);
  updateAreas()
}

//Logic Functions 
function updateAreas() {
  document.querySelectorAll('.area').forEach(area => {
    let name = area.getAttribute('data-name');

    if(area.querySelector('.item') != null) {
      areas[name] = area.querySelector('.item').innerHTML;
    } else {
      areas[name] = null
    }
  })

  if(areas.a === "1" && areas.b === "2" && areas.c === "3") {
    document.querySelector('.areas').classList.add('correct')
  } else {
    document.querySelector('.areas').classList.remove('correct')

  }
}