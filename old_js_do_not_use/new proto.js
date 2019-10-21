var wwc = function(settings){
  var wwc = this;
  this.path = settings.json;

  this.node = {
    set: function (DOMnode = 'div', params = {}) {
      if (typeof DOMnode == 'object') return DOMnode;

      node = document.createElement(DOMnode);

      if (params.attributes) {
        for (attribute in params.attributes) {
          node.setAttribute(attribute, params.attributes[attribute]);
        };
      }
      params.html ? node.innerHTML = params.html : null;
      return node;
    },
    setinside: function (ParentDOMElement, DOMnode, params = {}) {
      ParentDOMElement.appendChild(this.set(DOMnode, params));
    }
  }

  this.doAjax = function(options) {
    $.ajax(this.path, {
      beforeSend: function() { $($(options.thisNode).data('target')).empty().addClass(options.busyClass).text('loading...')},
    })
    .done(function(response){
      setTimeout(function(){
        $(node).removeClass(options.busyClass);
        settings.done(response);
      }, 2000)
    })
  };

  this.ignit = function(){
    // select change
    $('select').on('change', function(){
      var select = this;
      // do ajax
      wwc.doAjax($(this), $(this).data('target'), {
        // adjust class
        busyClass: 'busy',
        // callback when done
        done: function(response){
          switch ($(select).data('entity')) {
            case 'city-selector':
              return function(){

              }
              break;
          
            default:
              break;
          }
          response.map(function(item){ wwc.node.set('option', {value}) })
        }
      })
    })
    console.log('wwc ignited');
  }
}

window.wwc = new wwc({
  json: 'js/events.json'
});

$(document).ready(wwc.ignit);


// click
$(document).ready(function(){
  //  when i click on node (ex. select): 1. do ajax and addClass(busy); 2. Append fields into this node
  $('select').on('mouseover', function(){
    var select = $(this);
    $.ajax('js/events.json', {
      beforeSend: function(){ $(select).addClass('busy') },
      success: function(response){
        $(select).empty();
        $.each(response, function(index, item){ $('<option>', { "value": item.city, "html": item.city } ).appendTo($(select)) });
        $(select).css('height','auto')
      }
    })
  })
})