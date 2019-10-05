var WIEDEMANN_DATA_PARSER = function(options) {
    this.options      = options;
    this.data         = [];
    this.cities       = [];
    this.directions   = [];
    this.events       = [];
  
    var that          = this;
  
    this.formatData = function() {
      this.cities     = this.data.map(function(item) { return item.city });
      this.directions = this.data.map(function(item) { return item.direction });
      this.events     = this.data.map(function(item) { return item.title })
    }
  
    // makeUnique fnc
    this.makeUnique = function(array){
      var unique = [];
      for(var i = 0, length = array.length; i < length; i++){
        if (!unique.includes(array[i])) unique.push(array[i]);
      };
      return unique;
    }
  
    // get field by smart filter
    this.show = function(filterTo, filterBy){
      return this.makeUnique(this.data.filter(function(item){
        switch (filterBy.from) {
          case "city":
            return item.city == filterBy.value
            break;
          case "title":
            return item.title == filterBy.value
            break;
          case "text":
            return item.text == filterBy.value
            break;
          case "level":
            return item.level == filterBy.value
            break;
          case "dates":
            return item.dates == filterBy.value
            break;
          case "url":
            return item.url == filterBy.value
            break;
          case "direction":
            return item.direction == filterBy.value
            break;
          default: return item
            break;
        }
      })
      .map(function(item){
        switch (filterTo) {
          case "direction":
            return item.direction;
            break;
          case "title":
            return item.title;
            break;
          case "level":
            return item.level;
            break;
          case "text":
            return item.text;
            break;
          case "url":
            return item.url;
            break;
          case "dates":
            return item.dates;
            break;
          default: return item
            break;
        }
      }));
    }
  
    this.jqFetch = function(url) {
      $.ajax(url, {
        beforeSend: function(){
          console.log('loading data...')
        },
        success: function(){
          console.log('data successfully loaded')
        }
      })
      .done(function(data){ that.data = data })
      .then(function(){ that.formatData() })
    }
  
    this.jqFetch(this.options.fetch)
  }
  
  var wiedemann_data_parser = new WIEDEMANN_DATA_PARSER({
    fetch: 'js/events.json'
  })
  
  /* * * * * * * * * * *
   *                   *
   * AVAILABLE METHODS *
   *                   *
   * * * * * * * * * * */
  
  // SMART FILTER
  
  // wiedemann_data_parser.show('direction', {
  //   from: 'city',
  //   value: 'moscow'
  // })
  
  /* * * * * * * * * * * *
   *                     *
   * DEPEDENCIES: jQuery *
   *                     *
   * * * * * * * * * * * */
  
  // Author: wserxio@github.com