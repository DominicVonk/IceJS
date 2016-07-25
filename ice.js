var ice = {
  prefix: 'ice',
  running: false,
  tastes: {},
  addTaste: function(suffix, events) {
    this.tastes[suffix] = events;
    if (ice.running) {
      ice.restartMachine();
    }
  },
  removeTaste: function(suffix, event) {
    if (typeof event === "undefined") {
      delete ice.tastes[suffix];
    } else {
      delete ice.tastes[suffix][event];
    }
    if (ice.running) {
      ice.restartMachine();
    }
  },
  startMachine: function() {
    $.each(ice.tastes, function(suffix, events) {
        $.each(events, function(name, event) {
            $('['+ice.prefix+'-'+suffix+']').on(name, event);
        });
    });
    ice.running = true;
  },
  stopMachine: function() {
    $.each(ice.tastes, function(suffix, events) {
        $.each(events, function(name, event) {
            $('['+ice.prefix+'-'+suffix+']').off(name);
        });
    });
    ice.running = false;
  },
  restartMachine: function() {
    ice.stopMachine();
    ice.startMachine();
  }
  
};
