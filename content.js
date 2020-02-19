const KEYCODES = {
  CTRL_X: 88
}

var cutALl = {
  cutting: false,
  init: function() {
    this.handleChangeState();
    this.handleClicked();
  },
  on: function() {
    this.cutting = true;
    document.body.style.cursor = `url('http://bringerp.free.fr/Files/RotMG/cursor.gif'), default`;
  },
  off: function() {
    this.cutting = false;
    document.body.style.cursor = ''
  },
  handleChangeState: function() {
    document.addEventListener('keydown', (e)=> {
      if (e.ctrlKey && e.key === 'x') {
        if (this.cutting) {
          this.off();
        } else {
          this.on()
        }
      }
    } );
  },
  handleClicked: function() {
    document.addEventListener('click', (e)=> {
      if (this.cutting) {
        console.log(e)
        e.preventDefault();
        e = e || window.event;
        let target = e.target || e.srcElement
        removeItem(target);
      }
    }, false);
  }
}

function removeItem(button) {
  var item = button,
      confirmMessage;
  if (item) {
      confirmMessage = item.getAttribute("data-confirm");

      if (!confirmMessage || window.confirm(confirmMessage)) {
          item.parentNode.removeChild(item);
      }
  }
  else {
      throw new Error("No item found");
  }
}


cutALl.init()

// document.addEventListener('DOMContentLoaded', function(event) {
  // https://cdn.shopify.com/s/files/1/1431/5776/products/scissor-icon-rubber-stamp.png 
  // let cursorImage = '  http://bringerp.free.fr/Files/RotMG/cursor.gif' 
  // let cursorImage = '../img/scrissor.png'
  // let cursorImage = './scrissor.png' 
  
  // document.body.style.cursor = `url(${cursorImage}), auto;`
// });

// element.style.cursor = "url('../img/icon-34.png')";
  // document.body.innerHTML = '<div id="cursor cursor--small" style="all: unset;"></div>'

// let clientX = -100;
// let clientY = -100;
// const innerCursor = document.querySelector(".__cutAll__cursor");

// const initCursor = () => {
//   // add listener to track the current mouse position
//   document.addEventListener("mousemove", e => {
//     clientX = e.clientX;
//     clientY = e.clientY;
//   });
  
//   // transform the innerCursor to the current mouse position
//   // use requestAnimationFrame() for smooth performance
//   const render = () => {
//     innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
//     // if you are already using TweenMax in your project, you might as well
//     // use TweenMax.set() instead
//     // TweenMax.set(innerCursor, {
//     //   x: clientX,
//     //   y: clientY
//     // });
    
//     requestAnimationFrame(render);
//   };
//   requestAnimationFrame(render);
// };

// initCursor();