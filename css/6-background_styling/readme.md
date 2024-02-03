# bg-color
Used for background color.
Can take all color values as a value.
rgba ,rgb , hex , color adları gibi.

``
background-color: #000;
``

# bg-image

Used for background image.

To prevent the background color from repeating, the repeat value is used.

It can take values such as repeat-x, repeat-y, no-repeat, space, round, inherit.

It is used to adjust the position of our backgrounds.
We need to set the repeat value to no-repeat.

```
background-image: url('')
background-repeat: space;
background-position: 215px bottom;
```

## bg-clip

Defines the boundaries of images if a background image and color are assigned.

It can take values such as content-box, padding-box, border-box, text-box, initial, and inherit.

```
.box {
    padding: 45px;
    border: 15px dashed greenyellow;
    font-weight: 900;
    font-size: 45px;
    text-align: center;
    background-color: rgba(150, 50, 1000, 0.5);
    background-clip: content-box;
}
```

The text value is also present. It is used experimentally. Using it experimentally means it may not work in all browsers. It works in Chrome and Firefox, but we need to use a prefix.

```

.box {
    padding: 45px;
    border: 15px dashed greenyellow;
    font-weight: 900;
    font-size: 45px;
    text-align: center;
    /*background-color: rgba(150, 50, 1000, 0.5);*/
    background-image: url("data:image/jpeg;base64,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");
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
```

## bg-size

bg-size takes 2 values.
It takes contain and cover values.
Contain value fits the image perfectly regardless of the height.
Cover value resizes the image to fit perfectly.

```
background-size: contain;
```



## gradient (Color Transitions)

Gradient is basically color transition. We can achieve color transitions in the background with 2 or more colors.

### linear-gradient

It makes color transitions on a linear line.

We can make angular color transitions with angle values.
We can make repeating color transitions with repeating-linear-gradient.


```
background: linear-gradient(90deg, #ff0000, #0000ff);
``` 

### radial-gradient

Makes color transitions in a circular shape.

```
background: radial-gradient(darkgreen, yellow);
```