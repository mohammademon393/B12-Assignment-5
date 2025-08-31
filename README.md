# B12-Assignment-5
## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
1. getElementById(id): Selects a single element based on its unique id attribute. This method is specifically designed for ID-based selection, which should be unique within an HTML document.
2. getElementsByClassName(className): Selects multiple elements based on their class attribute. It returns all elements that possess the specified class name.
3. querySelector(selector): Selects the first element that matches a specified CSS selector. This method offers flexibility, allowing selection by ID (#id), class (.class), tag name (tag)
4. querySelectorAll(selector): Selects all elements that match a specified CSS selector. Similar to querySelector, it provides broad selection capabilities using CSS selectors.

## 2. How do you create and insert a new element into the DOM?
##### Ans: Use the document.createElement() method to create a new HTML element.

## 3. What is Event Bubbling and how does it work?
##### Ans: Event bubbling is a JavaScript mechanism an event, click, triggers on a child element. It's parent elements to the root of the DOM tree.

## 4. What is Event Delegation in JavaScript? Why is it useful?
##### Ans: Event delegation in single event listener is attached to a parent element to manage events triggered by its child elements.

## 5. What is the difference between preventDefault() and stopPropagation() methods?
##### Ans: The preventDefault() and stopPropagation() methods in JavaScript, both part of the Event interface, serve distinct purposes in managing event behavior in the Document Object Model (DOM).
