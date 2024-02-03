# Positioning

Positioning is used to determine where an element will appear on the page.

All HTML tags belong to certain groups as a starting setting; that is, they are in the Inline or Block tag groups. Therefore, objects appear on the page by affecting each other according to the behavioral properties of these groups. For example, side by side or one below the other.

However, this situation is not enough for us and we want to change the positions of some objects.

The behavior of HTML tags on the page, where objects are positioned by affecting each other in this way, is called normal flow behavior.

We do not always want to behave within the normal flow. For example, we may want to move an object to a different location on the page independently of other objects on the page, or we may want to fix a <div> tag to a position on the page. In such cases, we should use the css position property.

Positioning is done with the position property. The values of the position property are:
 - static
 - relative
 - absolute
 - fixed
 - sticky
 - inherit
 - initial

It takes the `static` value by default.

## absolute

When we set the position property of an object to absolute, that object is taken out of the normal flow and allows us to position it from all four corners. With this property, we can position an object anywhere on the page.

```
.absolute {
    width: 250px;
    height: 250px;
    position: absolute;
    top: 150px;
    left: 280px;
    background-color: #f00;
}
```

## relative

When we set the position property of an object to relative, the object remains in the normal flow. However, it allows us to change the position of that object. With this property, we can position an object anywhere on the page.
When we set the position property of an object to relative, the object continues to be in the normal flow, but allows us to use the top, right, bottom, and left properties.

```

#container {
    background-color: gray;
    width: 500px;
    height: 500px;
}

.box{
    width: 100px;
    height: 100px;
}

#first {
    background-color: red;
}

#second {
    background-color: green;
    position: relative;
    left: 25px;
    top: 25px;
}

#third {
    background-color: blue;
    position: relative;
    z-index: 25;
}
```

```
#container-two{
    background-color: gray;
    width: 200px;
    height: 200px;
    position: relative;
}

#test {
    background-color: yellow;
    position: absolute;
    right: 25px;
}
```

## fixed
To create objects positioned in a fixed location, we need to use position fixed. With this feature, we can position an object anywhere on the page.

```
.up {
    position: fixed;
    bottom: 10px;
    right: 10px;
}
```


## sticky

Position: sticky follows the scroll bars and fixes the object at that point when the desired position is reached. For example, we may want an object to be fixed when we reach the position 0 from the top for an object. Sticky position is generally used for menus.

We need to set the position value to sticky to use the stick value. We need to set the top value. We cannot use the sticky value if we give a value other than these values.

```
.page h3 {
    font: bold 40px Arial;
    background-color: chocolate;
    color: white;
    padding: 10px;
    margin: 0;
    position: sticky;
    top: 20px;
}

.page .text {
    height: 550px;
}

```