---
layout: post
title:  "JS Prototypal Inheritance"
date:   2014-11-18 20:23:00
categories: javascript
---

Early on I had a difficult time understanding Javascript inheritance (sometimes I still scratch my head), mainly I think of the fact of how it differs from the classic model. I've heard several different answers some short and some long mostly because of the prototypal caveats. My take is fairly straightforward (in my mind at least...). In javascript we use objects (<i>Obj</i>) to implement inheritance, each object has a prototype (<i>Obj.prototype</i>), each of these prototype objects will have its own <i>.prototype</i> all the way up to <i>Object.prototype</i>. In this way we create a prototype chain. The code below exemplifies basic javacript inheritance
	
<script src="https://gist.github.com/remremz/3b6c37ba4986732d7591.js"></script>

We have two objects <i>Cat</i> and <i>Animal</i>, <i>Cat.prototype = new Animal()</i> sets <i>Cat</i>'s prototype to <i>Animal</i>. The prototype link acts only in retrieval. This means that you can now access <i>Animal</i>'s properties and values when creating a new <i>Cat</i> object but making any change to inherited properties will not effect <i>Animal</i>.

After the prototypal inheritance has been set you can still modify the parent constructor and the changes will be visible on all the objects which contain that prototype in the prototype chain (such as <i>Animal.prototype.isAnimal = function() { return true; }</i>).

When attempting to access a property of an object such as <i>fluffly.isAnimal()</i> the prototype link is used (also known as Delegation). Since <i>.isAnimal</i> doesn't exist in <i>Cat</i> we move up the prototype chain and check <i>Animal</i>, since <i>Animal.isAnimal</i> exists it is returned. If we attempt to call a property which does not exist we still move up the prototype chain up to <i>Object.prototype</i> and return undefined. It is also generally not a good idea to not have a very long prototype chain as this can impact performance.

We can also create inheritance using Object.create in more modern browsers. Stay tuned for a more detailed explanation.

