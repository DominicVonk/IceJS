#Ice JS
A javascript library over jQuery for javascript events combined with html attributes.

##Howto use it

###Change cone (attribute prefix)
```js
ice.cone = "ice"; //you could change it to any name you want (data or ice preffered.)
```

###Add a taste with functionality
```js
//ice.addTaste(taste, event, functionality);
ice.addTaste('say', 'click', function() {
  alert('Hello World');
});

//This will trigger when clicked on any element with the ice-say attribute.
```

####Add a taste with multiple functionalities
```js
//ice.addTaste(taste, event array);
ice.addTaste('say', {
  'click': function() {
    alert('Hello World!');
  },
  'keydown' : function() {
    return false;
  }
});

//This will trigger when clicked or keypressed on any element with the ice-say attribute.
```

###Remove a taste
```js
//ice.deleteTaste(taste);
ice.deleteTaste('say');
```

####Remove the specific event of a taste
```js
//ice.deleteTaste(taste, event);
ice.deleteTaste('say', 'click');
```

###Run the ice machine
```js
ice.machine();
```

###Build the attribute string
```js
//ice.coneWithTaste(taste);
var sayAttr = ice.coneWithTaste('say'); //Will create [ice-say]
```

###Build the attribute string with a value
```js
//ice.coneWithTaste(taste, consumer);
var sayAttr = ice.coneWithTaste('say', 'hello'); //Will create [ice-say="hello"]
``
