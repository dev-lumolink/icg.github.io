/* * * * * * * * * * * * * * * * * * * * * * * *
 *                                             *
 * DEPENDENCIES: jQuery, wiedemann.data.parser *
 *                                             *
 * * * * * * * * * * * * * * * * * * * * * * * */
if (jQuery && wiedemann_data_parser) {
  var WIEDEMANN_CALENDAR_WIDGET = function (params) {
    var that    = this;
    this.params = params;
    this.widget = document.getElementById(this.params.widget);
    this.defaulState = {};
    this.dataParser = window.wiedemann_data_parser;

    // DOM nodes
    this.DOM = {
      selectors: {
        city: $(that.widget).find('[data-entity="city-selector"]'),
        level: $(that.widget).find('[data-entity="level-selector"]'),
        event: $(that.widget).find('[data-entity="event-selector"]')
      },
      directions: {
        list: $(that.widget).find('[data-entity="directions"]'),
        item: $(that.widget).find('[data-entity="direction"]')
      }
    }

    // helpers
    this.getSelectedValue = function (select) {
      return $(select).find('option:selected').val()
    }

    this.createANDplace = function () {
      return (function () {
        var node, attribute;
        return {
          set: function (DOMnode = 'div', options = {}) {
            if (typeof DOMnode == 'object') return DOMnode;

            node = document.createElement(DOMnode);

            if (options.attributes) {
              for (attribute in options.attributes) {
                node.setAttribute(attribute, options.attributes[attribute]);
              };
            }
            options.html ? node.innerHTML = options.html : null;
            return node;
          },
          setinside: function (ParentDOMElement, DOMnode, options = {}) {
            ParentDOMElement.appendChild(this.set(DOMnode, options));
          }
        }
      })()
    }

    // methods

    this.createState = function(state){
      var cities = this.dataParser.show('city', {});
      $(cities).each(function(index, element){
        that.createANDplace().setinside(document.querySelector('[data-entity="city-selector"]'), 'option', {
          attributes: {
            value: element
          },
          html: element
        })
        if (element == state.city) $(that.DOM.selectors.city).find('option[value="' + element + '"]').attr('selected',true);
        console.log(element, state.city)
      })
      console.log(cities, that.DOM.selectors.city)
    }

    // begin
    this.init = function () {
      // set default state
      this.defaulState = (function(){
        return wiedemann_data_parser.show('item', {
          from: 'id',
          value: that.params.defaultState.eventID
        })
      })();
      this.createState(this.defaulState[0]);
      // event listeners
      $(this.DOM.selectors.city).on('change', function () {
        //that.DOM.directions.list
        wiedemann_data_parser.show('direction', {
          from: 'city',
          value: that.getSelectedValue($(this))
        })
      });

    };

    this.init();
  }

  $(document).ready(function () {
    window.wiedemann_calendar_widget = new WIEDEMANN_CALENDAR_WIDGET({
      widget: 'calendar-widget',
      defaultState: {
        eventID: '1'
      }
    })
  })
};