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
    this.defaulState = (function(){
      return wiedemann_data_parser.show('item', {
        from: 'id',
        value: that.params.defaultState.eventID
      })
    })();

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

    // begin
    this.init = function () {
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
        eventID: '3'
      }
    })
  })
};