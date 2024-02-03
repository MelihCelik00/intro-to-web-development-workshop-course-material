# Display Levels

Each tag has a display level. We cannot change these display levels in HTML.
We cannot make a block display level inline. We cannot make an inline display level block.

We need to use CSS for this.

Some tags at some levels do not accept some CSS properties.  
For example;
```
span{
    width: 100%;
    height: 100px;
    background-color: red;
}
```
Width and height values do not apply to inline tags.

You can use the `display` property to change these levels.

We need to change the display level for the css properties we gave for the span to be effective.

```
span{
    width: 100px;
    height: 100px;
    background-color: red;
    display: block;
}
```

When we give the block property, our tag behaves like a block level element.
Our height and width values are valid.

However, at this level, it still covers the entire screen in terms of width. 
If we want it to be inline level and cover the width value given, and also use the css values given as block level, we need to use the 'inline-block' property.

```
span{
    width: 100px;
    height: 100px;
    background-color: red;
    display: inline-block;
}

```

If we want to remove the visibility of our tag from the screen, we need to use the ``none`` property.
Tags with display none are completely hidden from the screen.

```
display: none
```

If we want our element to be invisible but still take up space on the screen, we use the 'visibility' property.

```
span{
    width: 100px;
    height: 100px;
    background-color: red;
    display: inline-block;
    visibility: hidden;
}
```


Flex will be explained later.


