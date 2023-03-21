(function(){
  
    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');
    
        function updateCurrentDate() {
            const now = new Date();
            const currentDateElement = document.getElementById("current-date");
            currentDateElement.innerHTML = now.toLocaleString();
          }
      
          // Update the date and time every second (1000 milliseconds)
          setInterval(updateCurrentDate, 1000);

    form.addEventListener('submit',function(e){
      e.preventDefault();
      list.innerHTML += '<li>' + item.value + '</li>';
      store();
      item.value = "";
    },false)
    
    list.addEventListener('click',function(e){
      var t = e.target;
      if(t.classList.contains('checked')){
        t.parentNode.removeChild(t);
      } else {
        t.classList.add('checked');
      }
      store();
    },false)
    
    function store() {
      window.localStorage.myitems = list.innerHTML;
    }
    
    function getValues() {
      var storedValues = window.localStorage.myitems;
      if(!storedValues) {
        list.innerHTML = '<li>Make a to do list</li>';
      }
      else {
        list.innerHTML = storedValues;
      }
    }
    getValues();
  })();