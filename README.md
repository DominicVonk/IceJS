#Ice JS
A javascript library over jQuery for javascript events combined with html attributes.

##Howto use it

###Change prefix
```js
ice.prefix = "ice"; //you could change it to any name you want (data or ice preffered.)
```

###Add a taste with functionality
```js
//ice.addTaste(taste, event array);
ice.addTaste('say', {
  'click' : function() {
    alert('Hello World');
  }
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
//ice.removeTaste(taste);
ice.removeTaste('say');
```

####Remove the specific event of a taste
```js
//ice.deleteTaste(taste, event);
ice.removeTaste('say', 'click');
```

###Run the ice machine
```js
ice.startMachine();
```

###Refresh the ice machine
```js
//This function could be useful when you add new html elements by javascript.
ice.restartMachine();
```

###Stop the ice machine
```js
//This function will turn all events off that are setted by the ice machine
ice.stopMachine();
```
