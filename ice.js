ice = {
  cone : 'ice',
  structure : '[%cone%-%taste%]',
  machineRunning : false,
  coneWithTaste : function(taste, consumer) {
    if (typeof consumer !== "undefined") {
      return this.structure.replace('%cone%', this.cone).replace('%taste%', [taste, '="', consumer, '"'].join(''));
    } else {
      return this.structure.replace('%cone%', this.cone).replace('%taste%', taste);
    }
  },
  machine : function() {
    this.machineRunning = true;
    $.each(this.tastes, function(taste, events) {
      $.each(events, function(event, func) {
        $(ice.coneWithTaste(taste)).off(event, func).on(event, func);
      });
    });
  },
  tastes : {
    'say' : {
      'click' : function() {
        ice.addTaste('helloworld', 'click', function() {console.log('hahaha');});
        ice.deleteTaste('say');
        console.log('boo');
      }
    }    
  },
  refreshMachine : function() {
    this.machine();
  },
  addTaste : function(taste, on, functionality) {
    if (typeof this.tastes === "undefined") {
      this.tastes = {};
    }
    if (typeof this.tastes[taste] === "undefined") {
      this.tastes[taste] = {};
    }
    this.tastes[taste][on] = functionality;
    if (this.machineRunning){
      this.machine();
    }
  },
  deleteTaste : function(taste) {
    if (this.machineRunning){
      $.each(this.tastes[taste], function(event, func) {
        $(ice.coneWithTaste(taste)).off(event, func);
      });
    }
    delete this.tastes[taste];
    if (this.machineRunning){
      this.machine();
    }
  }
};

ice.machine();
