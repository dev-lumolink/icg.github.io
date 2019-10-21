var WIEDEMANN_DATA_PARSER = function () {

  var that = this;

  // makeUnique fnc
  this.makeUnique = function (array) {
    var unique = [];
    for (var i = 0, length = array.length; i < length; i++) {
      if(Array.prototype.includes) {
        if (!unique.includes(array[i])) unique.push(array[i]);
      } else {
        unique.push(array[i])
      }
    };
    return unique;
  }

  // get field by smart filter
  this.show = function (filterTo, filterBy) {
    return this.makeUnique(this.data.filter(function (item) {
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
          case "levelID":
            return item.level.value == filterBy.value
            break;
          case "dates":
            return item.dates == filterBy.value
            break;
          case "url":
            return item.url == filterBy.value
            break;
          case "image":
            return item.image == filterBy.value
            break;
          case "direction":
            return item.direction == filterBy.value
            break;
          case "id":
            return item.id == filterBy.value
            break;
          default:
            return item
            break;
        }
      })
      .map(function (item) {
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
          case "levelID":
            return item.level.value;
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
          case "id":
            return item.id;
            break;
          case "city":
            return item.city;
            break;
          case "image":
            return item.image;
            break;
          default:
            return item
            break;
        }
      }));
  }

  this.jqFetch = function (url, done) {
    jQuery.ajax(url, {
        dataType: 'json',
        beforeSend: function () {
          console.log('loading data...')
        },
        success: function () {
          console.log('data successfully loaded')
        }
      })
      .done(function (data) {
        // var parsedData = jQuery.parseJSON(data);
        // that.data = parsedData;
        // done(parsedData);
        that.data = data;
        done(data)
      })
  }
}

window.wiedemann_data_parser = new WIEDEMANN_DATA_PARSER();
/*
 * CALENDAR ISO 8601
 */
var CALENDAR = function (options) {
  this.OPTIONS = options ? options : null;
  this.DATE = new Date();
  this.DEFAULT_LOCALE = 'RU-ru'; // DEFAULT LOCALE
  this.DEFAULT_LOCALE_FORMAT = 'numeric'; // DEFAULT LOCALE FORMAT
  this.DOM_ELEMENT = document.querySelector(options.el);
  var that = this;

  // calendar = this;

  this.get = function (dateFormat) { // main getter
    return this.DATE.toLocaleDateString(this.OPTIONS && this.OPTIONS.locale ? this.OPTIONS.locale : this.DEFAULT_LOCALE, dateFormat);
  }

  this.set = function (newdate) { //main setter
    this.DATE = new Date(newdate);
    return this;
  }

  this.year = function (format) {
    return this.get({
      year: format ? format : this.DEFAULT_LOCALE_FORMAT
    }); // "numeric", "2-digit"
  };

  this.month = function (format) {
    return this.get({
      month: format ? format : this.DEFAULT_LOCALE_FORMAT
    }); // "numeric", "2-digit", "narrow", "short", "long"
  };

  this.day = function (format) {
    return this.get({
      day: format ? format : this.DEFAULT_LOCALE_FORMAT
    }); // "numeric", "2-digit"
  };

  this.weekday = function (format) {
    return this.get({
      weekday: format ? format : 'long'
    }); // "narrow", "short", "long"
  };

  this.lDOM = function () {
    return new Date(this.year(), this.month(), 0).getDate() // last day of month, iterator depedence
  };

  this.offset = function () {
    return new Date(this.year(), this.month() - 1, 0).getDay() // offset
  };

  this.compose = function () {
    var that = this;
    return (function () {
      var
        cblock_weekdays = that.cnode().set('ul', {
          attributes: {
            class: 'cblock cblock--list cblock--weekdays'
          }
        }),
        cblock_days = that.cnode().set('ul', {
          attributes: {
            class: 'cblock cblock--list cblock--days'
          }
        }),
        zeroOffset,
        cheader = that.cnode().set('section', {
          attributes: {
            class: 'cheader'
          }
        }),
        offset,
        cbody = that.cnode().set('section', {
          attributes: {
            class: 'cbody'
          }
        }),
        cnav = that.cnode().set('nav', {
          attributes: {
            class: 'cnav nav--month'
          },
          html: that.cnode().set('ul', {
            attributes: {
              class: 'cblock cblock--list cblock--nav'
            }
          })
        }),
        day;
      return {
        header: function () {
          that.cnode().setinside(cheader, this.title());

          return cheader;
        },
        title: function () {
          return that.cnode().set('div', {
            attributes: {
              class: 'ctitle title--month'
            },
            html: that.month('long') + ', ' + that.year('numeric')
          });
        },
        buttons: function () {
          for (let i = 0; i < 2; i++) {
            that.cnode().setinside(cnav)
            that.cnode().setinside(cheader, 'button', {
              attributes: {
                type: 'button',
                class: 'cbutton button--' +  i == 0 ? 'prev' : 'next'
              },
              html: that.cnode().set('i', {
                attributes: {
                  class: 'fa fa-arrow-' + i == 0 ? 'left' : 'right'
                }
              })
            })
          }
        },
        body: function (options) {
          that.cnode().setinside(cbody, this.weekdays());
          that.cnode().setinside(cbody, this.days(options));
          return cbody;
        },
        weekdays: function () {
          // weekdays iterator
          for (zeroOffset = 1; zeroOffset <= 7; zeroOffset++) {
            that.cnode().setinside(cblock_weekdays, 'li', {
              html: new Date('2019, 07, ' + zeroOffset).toLocaleDateString('RU-ru', {
                weekday: 'short'
              })
            });
          }

          return cblock_weekdays;
        },
        offset: function () {
          // offset iterator
          for (offset = 0; offset < that.offset(); offset++) {
            that.cnode().setinside(cblock_days, 'li', {
              attributes: {
                disabled: ''
              }
            });
          };
        },
        days: function (options) {
          var json_dates = options ? {
            from: new Date(options.dates.from).getDate(),
            to: new Date(options.dates.to).getDate()
          } : null;
          this.offset();
          // days iterator
          for (day = 0; day < that.lDOM(); day++) {
            that.cnode().setinside(cblock_days, 'li', {
              attributes: {
                'aria-details': day + 1
              },
              html: options ? (day + 1) >= json_dates.from && (day + 1) <= json_dates.to ? '<a ' + ( ((day + 1) == json_dates.from) ? 'class="edge-from"' : ((day + 1) == json_dates.to) ? 'class="edge-to"' : '') + 'href="' + options.event.url + '">' + (day + 1) + '</a>' : day + 1 : null
            });
          };

          return cblock_days;
        }
      }
    })();
  };

  this.cnode = function () {
    return (function () {
      var node, attribute;
      return {
        set: function (DOMnode, options) {
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
        setinside: function (ParentDOMElement, DOMnode, options) {
          ParentDOMElement.appendChild(this.set(DOMnode, options));
        }
      }
    })()
  }

  this.init = function () {
    var container = that.cnode().set('div', {
      attributes: {
        class: 'calendar-body'
      }
    });
    that.cnode().setinside(container, that.compose().header());
    that.cnode().setinside(container, that.compose().body());
    that.cnode().setinside(that.DOM_ELEMENT, container);

    jQuery(that.DOM_ELEMENT).owlCarousel({
      items: 1,
      loop: false,
      nav: true
    })
  };

  this.init();
};

window.calendar = new CALENDAR({
  el: '[data-entity="event-calendar"]'
});

/* * * * * * * * * * * * * * * * * * * * * * * *
 *                                             *
 * DEPENDENCIES: jQuery, wiedemann.data.parser *
 *                                             *
 * * * * * * * * * * * * * * * * * * * * * * * */
if (jQuery && wiedemann_data_parser) {
  var WIEDEMANN_CALENDAR_WIDGET = function (params) {
    var that = this;
    this.params = params;
    this.widget = document.getElementById(this.params.widget);
    this.defaulState = {};
    this.dataParser = window.wiedemann_data_parser;

    this.directions = [];
    this.direction = [];
    this.levels = [];
    this.events = [];
    this.event = [];
    this.city = [];
    // that params

    // that methods

    // DOM nodes
    this.DOM = {
      selectors: {
        city: document.querySelector('[data-entity="city-selector"]'),
        level: document.querySelector('[data-entity="level-selector"]'),
        event: document.querySelector('[data-entity="event-selector"]')
      },
      directions: {
        list: document.querySelector('[data-entity="directions"]'),
        item: document.querySelectorAll('[data-entity="direction"]')
      },
      eventContent: {
        text: document.querySelector('[data-entity="event-text"]'),
        image: document.querySelector('[data-entity="event-image"]'),
        url: document.querySelector('[data-entity="event-url"]'),
        that: document.querySelector('[data-entity="event-that"]')
      }
    }

    // helpers
    this.getSelectedValue = function (select) {
      return jQuery(select).find('option:selected').val()
    }

    this.getDirections = function (city) {
      if (city == "all") {
        that.directions = that.dataParser.show('direction', {})
      } else {
        that.directions = that.dataParser.show('direction', {
          from: 'city',
          value: city
        })
      }
      return this;
    }

    this.getLevels = function () {
      that.levels = that.dataParser.data.filter(function (item) {
          if (that.city !== "all") {
            if ((item.city == that.city) && (item.direction == that.direction)) return item
          } else {
            if (item.direction == that.direction) return item
          }
        })
        .map(function (item) {
          return item.level
        })
        
      return this;
    }

    this.getEvents = function () {
      that.events = that.dataParser.data.filter(function (item) {
        if (that.city !== "all") {
          if ((item.city == that.city) && (item.direction == that.direction) && (item.level.value == that.level)) return item
        } else {
          if ((item.direction == that.direction) && (item.level.value == that.level)) return item
        }
      })
      // .reduce(function(acc, el){ return el.id != acc.id ? acc : null });
      return this;
    }

    this.getEvent = function (eventID) {
      that.event = that.dataParser.data.filter(function (item) {
        return item.id == eventID
      })
      return this;
    }

    this.farm = function () {
      return (function () {
        var node, attribute;
        return {
          set: function (DOMnode, params) {
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
          setinside: function (ParentDOMElement, DOMnode, params) {
            ParentDOMElement.appendChild(this.set(DOMnode, params));
          },
          clear: function (DOMnode) {
            DOMnode.innerHTML = '';
          }
        }
      })()
    }

    // widget methods
    this.createState = function (state) {
      var cities = this.dataParser.show('city', {});
      jQuery(cities).each(function (index, element) {
        that.farm().setinside(document.querySelector('[data-entity="city-selector"]'), 'option', {
          attributes: {
            value: element
          },
          html: element
        })
        if (element == state.city) jQuery(that.DOM.selectors.city).find('option[value="' + element + '"]').attr('selected', true);
      });

      // levels
      that.event[0] = that.defaulState[0];
      this.citySelect('', that.event[0].city);
      // directions
      this.getDirections(that.event[0].city);
      this.directionSelect('[data-direction="' + that.event[0].direction + '"]')
      // levels
      this.getLevels();
      this.levelSelect('', that.event[0].level.value);
      // event
      this.eventSelect('', that.event[0].id);
    }

    this.citySelect = function (node, defaultID) {
      jQuery(that.DOM.directions.list).empty();
      //that.DOM.directions.list
      that.city = !node ? defaultID : that.getSelectedValue(node);
      // 
      that.getDirections(!node ? defaultID : that.getSelectedValue(node));
      // 
      jQuery(that.directions).each(function (index, element) {
        that.farm().setinside(that.DOM.directions.list, 'li', {
          attributes: {
            'data-direction': element,
            'data-entity': 'direction',
            class: 'cities__item'
          },
          html: element
        })
      })
    };

    this.directionSelect = function (node, defaultID) {
      if (jQuery(node).hasClass('cities__item')) {
        jQuery(node).siblings().removeClass('active');
        jQuery(node).addClass('active');
        // clear
        jQuery(that.DOM.selectors.level).html('<option value="all">Выберите уровень</option>')
        // get levels
        that.direction = jQuery(node).data('direction');
        // 
        that.getLevels();
        //
        jQuery(that.levels).each(function (index, element) {
          that.farm().setinside(that.DOM.selectors.level, 'option', {
            attributes: {
              value: element.value,
              'data-entity': 'level',
              class: 'cities__item'
            },
            html: element.text
          })
        })
      } else return;
    };

    this.levelSelect = function (node, defaultID) {
      jQuery(that.DOM.selectors.event).html('<option value="all">Выберите семинар</option>')
      // that.DOM.directions.list
      that.level = !node ? defaultID : that.getSelectedValue(jQuery(node));
      that.getEvents();
      // 
      jQuery(that.events).each(function (index, element) {
        that.farm().setinside(that.DOM.selectors.event, 'option', {
          attributes: {
            'data-entity': 'event',
            value: element.id
          },
          html: element.title
        })
      })

      if (defaultID) jQuery(that.DOM.selectors.level).find('option[value="' + defaultID + '"]').prop('selected', true);
    };

    this.eventSelect = function (node, defaultID) {
      that.getEvent(!node ? defaultID : that.getSelectedValue(jQuery(node)));
      // text
      that.DOM.eventContent.text.innerText = that.event[0].text;
      // image

      // url
      that.DOM.eventContent.url.href = that.event[0].url;

      // calendar
      // remove items from owl.carousel
      jQuery(calendar.DOM_ELEMENT).find('.owl-stage .owl-item').each(function (index, element) {
        jQuery(calendar.DOM_ELEMENT).trigger('remove.owl.carousel', index);
      });
      if (that.event[0].dates && that.event[0].dates.length != 0) {
        // appending new calendar
        jQuery.each(that.event[0].dates, function (index, dates) {
          that.createCalendar(dates);
        });
        // refresh owl.carousel
        // jQuery(calendar.DOM_ELEMENT).trigger('refresh.owl.carousel');
      } else {
        var text = that.farm().set('div', {
          attributes: {
            class: 'calendar-warning'
          },
          html: 'Дату&nbsp;уточните&nbsp;по&nbsp;телефонам:<br/>' +
            '<a href="tel:+78125655257">Спб&nbsp;(812)&nbsp;565-52-57</a>' +
            '<a href="tel:+74954453771">Мск&nbsp;(495)&nbsp;445-37-71</a>' +
            '<a href="tel:+73433638438">Екб&nbsp;(343)&nbsp;363-84-38</a>'
        });
        jQuery(calendar.DOM_ELEMENT).trigger('add.owl.carousel', text, [0]);
      }
      jQuery(calendar.DOM_ELEMENT).trigger('refresh.owl.carousel');

      if (defaultID) jQuery(that.DOM.selectors.event).find('option[value="' + defaultID + '"]').prop('selected', true);
    };

    // create calendar
    this.createCalendar = function (dates) {
      calendar.set(dates.from);
      var container = that.farm().set('div', {
        attributes: {
          class: 'calendar-body'
        }
      });
      that.farm().setinside(container, calendar.compose().header());
      that.farm().setinside(container, calendar.compose().body({
        event: that.event[0],
        dates: dates
      }));

      // appending calendar to carousel
      jQuery(calendar.DOM_ELEMENT).trigger('add.owl.carousel', container, [0]);
    }

    // begin
    this.init = function () {
      // get default state
      this.defaulState = (function () {
        return that.dataParser.show('item', {
          from: 'id',
          value: that.params.defaultState.eventID
        })
      })();
      // set default state
      this.createState(this.defaulState[0]);
      // event listeners
      // city selector
      jQuery(this.DOM.selectors.city).on('change', function () {
        that.citySelect(jQuery(this))
      })
      // direction list
      jQuery(this.DOM.directions.list).on('click', function (e) {
        that.directionSelect(jQuery(e.target));
      });
      // level selector
      jQuery(this.DOM.selectors.level).on('change', function () {
        if (that.getSelectedValue(jQuery(this)) == "all") return;
        that.levelSelect(jQuery(this));
      });
      // event selector
      jQuery(this.DOM.selectors.event).on('change', function () {
        if (that.getSelectedValue(jQuery(this)) == "all") return;
        that.eventSelect(jQuery(this));
      });

      // jQuery('[data-entity="event-calendar"]').trigger('refresh.owl.carousel')
    };
  }
};