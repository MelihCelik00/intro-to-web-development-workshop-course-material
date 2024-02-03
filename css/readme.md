# CSS
<p align="center">
 <img src="css.png" width=870 height=450>
  <br />
</p>

First, let's briefly talk about what CSS is.

- CSS stands for Cascading Style Sheets.
- CSS is used to determine how HTML elements, i.e. tags, will appear on the page, such as their size and appearance on different devices.
- CSS is a technology used to perform all visible style operations. Remember, CSS is not a language but a technology.
- CSS code can be embedded in HTML using the `<style>` tag or attribute, or it can be kept in an external file with the `.css` extension within the `<link>` tag.

## Why Use CSS?

CSS is used for styling in all modern web pages, and there is no other alternative. We use CSS to decide where and how page elements will appear, how responsive styles will be applied based on page width/height or device.

# Using CSS

When a web page is displayed in a browser, the code is interpreted from top to bottom. 
And it shows the interpreted code to the end user on the page. Therefore, CSS code should always be written in the `<head>` tag. Because it will interpret the header information before displaying the content, and if it sees that a CSS file is called, it will load it before displaying the content with the applied styles.

## Ways to Add CSS

There are 3 different ways to use CSS in HTML. These are;

- External style sheet
- Internal style tag
- Inline style attribute
Now let's examine these one by one.

### External Style Sheet

A CSS file is included in the page using the `<link>` tag within the `<head>` tag. The file extension of CSS files is .css. 
For example, if we want to include the test.css file in the page;
