<h1 style="color:orange">What is this HTML? </h1>

<div style="display: flex; flex-direction: row">
<p style="margin-right:10px;"> HTML is a markup language used to create web pages. HTML stands for "Hyper-text Markup Language" and its Turkish extended name is "Hiper Metin İşaretleme Dili". </p>
<img src="./html5.png" style="width: 100px; height: 100px;">
</div>
<br>

Hyper Text Markup Language is the <strong>standard</strong> markup language used to create web pages. The latest version of the language is HTML5. When a web page is loaded, the output seen by the end user is always HTML. CSS, which makes it more beautiful and organized, and Javascript, which allows for a more dynamic structure, are used to enhance the HTML.  

<img src="./html-css-javascript.png">

<p>HTML cannot be defined as a programming language. This is because a program that runs on its own cannot be written with HTML code. We can explain what certain things do on a web page with the HTML language. To be able to explain with HTML, we need to know the HTML tags </p>


Tags form the basis of HTML. Tags are predefined parts that we use to mark text. So you cannot define a tag yourself. (Of course, on the HTML side)

HTML has certain tags. After learning how to use these tags, we will have learned HTML.

There are two types of tags in HTML: opening and self-closing tags. Tags start with the symbols (<>) and end with the tag name. (Example => `<tag> </tag>`; `<tag />`)

HTML has certain tags that we use to perform operations.

The most basic tags are `<html>, <title>, <body>`.

All HTML pages start with the `<!DOCTYPE>` definition. This definition represents the HTML version of the page.

- The `<html>` tag is the tag that encompasses all other tags. All other tags are written inside the html tag. The html tag is divided into `<head>` and `<body>`.

- `<head>`; we write things that the user will not see in the background in the head section. The user only sees the title part.

- `<body>`; we write the parts that the user will see after entering a web page in the body.

One of the must-have tags is the `<meta>` tag. The Meta tag is used to specify the header in web pages.

Finally, we need to tell the browser which version of HTML we are using on the HTML page. For this, we need to make a DOCTYPE definition at the top. 
</div>
<hr>
<br>
<h2 style="color:orange">Attributes</h2>
<div style="text-align: justify"> 
Attributes are an important issue in HTML. Attributes are parts used inside tags that help fulfill the tag's directives.
<br>
<br>

- All HTML tags can have attributes.<br>
- Attributes are parts that fulfill the tag's directives.<br>
- Attributes are always defined in the opening tag, there is no need to define them when closing the tag.<br>
- Attributes are generally used in the form of attribute="value", but in some cases, you can see attribute usage without a value.<br>
- Attribute values must always be written in quotation marks.
<br>

They are defined as follows: <br>

`<tag attribute1="value" attribute2="value"></tag>`

<br>
And a tag can have multiple attributes. Now let's examine a real example.

`<img src="test.png">`

</div>
<hr>
<br>
<h2 style="color:orange">Display Levels </h2>

Each HTML tag has a default display value. The default display value of most tags is either ``block`` or ``inline``. Now let's examine these display values one by one.

What is a display level, what is its use, and how do I know which tag belongs to which level?

<h3>Block Level Tags</h3>

Block-level tags always start on a new line and take up the entire width, so they appear as 100%. This makes it easier for us to understand block-level tags. The most common tag we can give to block-level tags is the `<div>` tag. So what is this `<div>` tag?

Actually, the `<div>` tag represents sections on the HTML page. So every new div means a new section. We usually use the `<div>` tag when we want to separate sections. However, we usually meet the need for block-level tags from this tag, it may not mean much now when used because it does not give a different output as output, the aim here is not to give a view using this tag, but to customize the view using this tag. Of course, CSS is required for this, which will be covered in later lessons :) Right now, it is enough for you to know that there is such a tag, that this tag is a block-level tag, and that it is one of the most commonly used tags.

<h3>Inline Level Tags</h3>

The most commonly used tag of this tag type is the `<span>` tag. As the name suggests, it is an inline tag type, so even if marking is done in the text, there is no distortion, no change, just like in the `<div>` tag, the `<span>` tag is a styleless tag that is mainly used to identify inline elements and apply CSS or JavaScript to them. 

In general, the main logic of html tags is as follows:<br>
    
There is a tag that makes the text bold,<br>
There is a tag that underlines,<br>
There is a tag that adds an image or a link.<br>


All in all, `div` is a block level and `span` is an inline level tag.

When we write a block-level tag, it covers 100%. The inline-level tag takes up as much length as it is.

The purpose of using these tags emerges with CSS.
We generally use the Div tag as a container element. 


<hr>
<br>

<h2 style="color:orange">Header and Paragraph Tags</h2>

The `<p>` tag is our paragraph tag. The `<p>` tag is a block-level tag. and when the p tag is written, it comes with a certain style. We will see its more detailed version in CSS.


Using header tags in HTML is very important. Because search engines (google, bing, yandex, yahoo, etc.) enter websites and perform scanning operations, and they use these tags when interpreting them. Therefore, important headings should be tagged with `<h1>`, and less important ones should go as h2, h3, h4, h5, h6.
<br>


`<h1> Jeodezi ve Fotogrametri Kulübü <h1>`

<hr>
<br>

<h2 style="color:orange">Text Formatting Tags</h2>

HTML has certain tags to format expressions, that is, to add new styles to them. The list of these;

The `<b>` tag allows us to write our text in bold font. We also use the `<strong>` tag in our important texts or words. Similarly, this tag makes our writing bold.

- The `<i>` tag makes our writing italic.
- The `<mark>` tag is a tag we use to highlight our writing.
- The `<small>` tag allows us to write our text in small letters.
- The `<u>` tag is our tag that we use to underline our writing.
- The `<sub>` tag defines subscript text. 
- The `<sup>` tag defines superscript text.
- The `<br>` tag is used to move to a new line.

<hr>
<br>

<h2 style="color:orange">Link Tag</h2>

If you want to send a text on your web page to another website, another page, or another file when you click on it, you need to create a link. We create this link with the `<a>` tag in html.

The a tag comes with some attribute values. The most important is the target attribute. It comes as `_self` by default. It opens the relevant site in the current page. We must give it as blank to open it on a different page.

When we give any image address over the link and we want to download the image when we click, it is enough to give the attribute as ``download``.

The `a` tag is also used to link within the site.

<hr>
<br>

<h2 style="color:orange">Image Tag</h2>

We use the `<img>` tag to add an image to our web page. The `<img>` tag is self-closing tags. The `<img>` tag does not mean anything on its own. We need to use the "src" attribute. 

The "alt" attribute contains information about the image. It is written to indicate what the content of the image is in case the image is not loaded. It also has a very important place for Search Engine Optimization (SEO).

The width and height attributes are used to determine the width and height of the image.

<hr>
<br>

<h2 style="color:orange">Table Tag</h2>

Tables consist of rows and columns. In addition, there is a header part of the table, where the headers are, a content part, and a bottom part we call the footer. Of course, each of these has an HTML tag equivalent.

Our main tag is the `<table>` tag. We use the `<tr>` tag to create rows and the `<td>` tag to create columns. We write our headers in `<th>`.

<h3 style="color:orange">Table Header</h3>

To determine the header part of the table, we use the ``<thead>`` tag. It has the ``<tr>`` tag for rows, but this time the ``<th>`` tag comes for columns.


To merge columns in the table, we use the colspan attribute, and to merge rows, we use the rowspan attribute.

<hr>
<br>

<h2 style="color:orange">Listing Tag</h2>

In HTML, lists are divided into two as ordered and unordered. Unordered lists are written within the ``<ul>`` tag, and ordered lists are written within the ``<ol>`` tag. And each list item must be written within the ``<li>`` tag.

Each list item has a solid filled circle at the beginning, which you can change by giving the type attribute. You can give the following as a value;

- circle - empty circle <br>
- disc - filled circle <br>
- square - filled square <br>

<hr>
<br>

<h2 style="color:orange">Form Tag</h2>

The main purpose of form tags is to transfer information from the end user to the software by taking it. Therefore, each form tag has a name attribute, because values are taken according to the names specified in this attribute on the software side.

Form tags are within the `<form>` tag. Our form tag can take a few attributes. The most important is the "action" attribute.

The action attribute is where we specify where to send the information written in the form. If left blank, it will be sent to the page it is in.

The method = "post" is the method to be sent. Forms sent with POST do not appear in the address bar in the browser as a value. However, if we had specified this as post instead of GET, then the values written would have been visible in the address bar when the form was sent.


The most used within forms is the `<input>` tag. When used alone without giving an attribute, a box that allows the user to write a value appears. 

The `<input>` takes a type attribute and all the action is here. because this tag has nearly 20 types and each performs different functions.

When we give "text" as type, it is used to write normal text.

When we give "password" as type, it is used to write our passwords.

When we give "file" as type, it is used to select files from the computer.

When we give "checkbox" as type, it is used to get confirmation information from the user. 

When using "checkbox" for multiple choices, "radio" is used for only one choice. We need to specify the "name" attribute value to indicate which options are in the same group. 

To indicate which of these choices we have made, we need to give the "value" attribute value.

When we give "submit" as type, we send the information we filled in the form to where we wrote in the action.

When we give "reset" as type, all the values we entered will be deleted.

When we do not want to send the form empty, we must give the "required" attribute.

We can give a maximum character count in the values we enter. Thus, we prevent longer characters than the value we gave from being entered.

We can make color and date selections with html 5.

When we submit the inputs in the form, the "name" attribute must be present in order to receive the input value in the background. Otherwise, we cannot get the input value in the background.


<hr>
<br>

<h2 style="color:orange">IDs and Classes</h2>

Normally, I will not explain each attribute in this way for each attribute, but I want to talk about these two attributes because they are the most commonly used attributes when doing **_front-end_** development.

<h3 style="color:orange"> ID Attribute </h3>

`<div id="container"> .. </div>`

As you can see, the use of attributes is always the same attribute = "value". What is important here is what this id attribute is for? Actually, it does not change anything visually.

IDs are defined once throughout the page. So you cannot give the same value, such as the id = "test" attribute, to another tag. That's why id attributes are usually given to container tags or tags that have only one task throughout the page.

The tag marked with ID is used in CSS as #container. Here, the container value is our example in the HTML above.

<h3 style="color:orange"> Class Attribute </h3>

The class attribute is also used for the same purpose. That is, to mark a specific tag and then be able to edit it in CSS. But the difference from the id attribute is that class attributes can be used with the same name more than once. This is a very useful thing because we solve the job with a single CSS code by writing the same class name in tags that have the same style but have small differences from each other.
