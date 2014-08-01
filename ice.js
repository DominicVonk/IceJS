(function(w) {
    'use strict';
    var ice = {
        cone: 'ice',
        structure: '[%cone%-%taste%]',
        machineRunning: false,
        coneWithTaste: function(taste, consumer) {
            if (typeof consumer !== "undefined") {
                return this.structure.replace('%cone%', this.cone).replace('%taste%', [taste, '="', consumer, '"'].join(''));
            } else {
                return this.structure.replace('%cone%', this.cone).replace('%taste%', taste);
            }
        },
        machine: function() {
            this.machineRunning = true;
            $.each(this.tastes, function(taste, events) {
             $.each(events, function(event, func) {
                    $(w.ice.coneWithTaste(taste)).off(event, func).on(event, func);
                });
            });
        },
        stopMachine: function() {
            $.each(this.tastes, function(taste, events) {
                $.each(events, function(event, func) {
                    $(ice.coneWithTaste(taste)).off(event, func);
                });
            });
            this.machineRunning = false;
        },
        tastes: {},
        refreshMachine: function() {
            this.machine();
        },
        addTaste: function(taste, on, functionality) {
            if (typeof this.tastes === "undefined") {
                this.tastes = {};
            }
            if (typeof this.tastes[taste] === "undefined") {
                this.tastes[taste] = {};
            }
            if (typeof on === "string") {
                this.tastes[taste][on] = functionality;
            } else {
                $.each(on, function(key, val) {
                    ice.tastes[taste][key] = val;
                });
            }
            if (this.machineRunning) {
                this.machine();
            }
        },
        deleteTaste: function(taste, on) {
            if (this.machineRunning) {
                if (typeof on !== "undefined") {
                    $(ice.coneWithTaste(taste)).off(on, this.tastes[taste][on]);
                } else {
                    $.each(this.tastes[taste], function(event, func) {
                        $(ice.coneWithTaste(taste)).off(event, func);
                    });
                }
            }
            if (typeof on !== "undefined") {
                delete this.tastes[taste][on];
            } else {
                delete this.tastes[taste];
            }
            if (this.machineRunning) {
                this.machine();
            }
        }
    };
    w.ice = ice;
}(window));