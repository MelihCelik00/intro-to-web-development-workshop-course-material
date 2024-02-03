# Border

In CSS, border, as the name suggests, allows us to add borders to our elements.
We can give certain styles, thicknesses, and colors for each of the top, right, bottom, and left borders.

Some of our elements already have borders by default. For example, the input tag has a border.
We can also change existing borders using this property.

We can change the styles of our borders using border-style.
There are several styles available.

```
border-style: solid;
```

These are:
dot, dashed, solid, double, groove, ridge, inset, outset, none, hidden


We can change the thickness of our border using border-width.

```
 border-width: 2px;
```
We can change the color of our border using border-color.

```
border-color: red;
```

Borders, like padding, affect the width and height of the element they are applied to. 
It is important to keep this in mind.

We can apply all three of these properties to all four sides at once, or we can apply them separately to each side.

```

width: 100px;
height: 100px;
border-left-style: solid;
border-left-width: 2px;
border-left-color: green;
background-color: gold;

```
We can use all three of these border properties as a single property.
We use the border property for this.

```
border: 2px solid red;
```

## Border Radius
You may have noticed on websites that some elements have smoother corners.
To adjust this, we use the border-radius property.
``
border-radius: 10px;
``

We can use a single value to soften all corners equally. We can use 4 different values to soften different corners.

```
border-top-left-radius: 15px;
border-top-right-radius: 5px;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 12px;
```

## Border Image
We can apply radius not only to div elements but also to our images.

# Outline

Outline allows us to add a border to our element just like border. However, unlike border, it does not affect the inside of the element. It affects the outside of the element. It is similar to the Margin property.

```
outline-style: solid;
outline-width: 2px;
outline-color: green;
background-color: gold;
```

We can give an offset value unlike border in Outline.
``
outline-offset: 15px;
``