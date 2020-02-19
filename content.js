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
      if (e.ctrlKey && e.shiftKey && e.key === 'X') {
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
