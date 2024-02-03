# Font-family

We can change the font of the text on HTML pages.
```
font-family: Arial, Helvetica, sans-serif;
```

# Font-size
font-size is used to change the size of the text.
Browsers print text with a default size of 16px.

```
font-size: 22px;
```

# Font-style

Allows the text to be normal, italic, bold or underlined.
```
font-style: italic;
```

# Font-weight

This is the property we use to adjust the thickness of the text.
bold, normal, 100, 200, 300, 400, 500, 600, 700, 800, 900 değerlerini alır.

``` 
font-weight: bold;
```

# line-height

Adjusts the line height for more readable text.
1 - 1.5 - 3.5 
30px - 50px - 100px
100% - 150% - 200%

değerlerini verebiliriz.

```
 line-height: 1;
```
# letter-spacing

Used to adjust the space between letters.
```
letter-spacing: 15px
```

# text-align

Used to align text horizontally. Only valid for block-level elements, not for inline-level elements like span.
left, right, center, justify

````
text-align: justify;
````

# White-space
Used to manage spaces within texts.
- nowrap => prints on a single line.
- pre => preserves spaces.
- pre-wrap => preserves spaces and adds a line break at the end of the line.

```
white-space: pre-wrap;
```

# text-transform
Text-transform property is used to change the capitalization of text. It can make all letters uppercase or only the first letter of each word capitalized.
uppercase, lowercase, capitalize

```
 text-transform: capitalize;
```

# text-shadow
Used to add shadow to texts.
```
text-shadow: yatay, dikey, blur, renk;

text-shadow: 15px 15px 20px red, -15px 15px 20px blue, 15px -15px 20px green, -15px -15px 20px yellow;
```