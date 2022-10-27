# Exercice 5

## The for-loop is no longer present. What was it replaced with? How does this work?

The for-loop is replaced with a forEach loop. It will pass through all the movie array element and call the parseTitle function with the element of the array in parameter

## What does the function 'parseTitle' do? What parameter do we pass to this function?

The function parseTitle will take the parameter and will rewrite it in lowercase. Then it will use the wrapWithTag function and write the result in the document.
We pass the movie's array element as a parameter for this function.

## What does the function 'wrapWithTag' do? Why are the parameters placed between brackets?

The wrapWithTag will take the parameter and make a string syntax to create a tag with some content in it.
The parameter are placed between brackets so the function will not use the name of the parameters in the string but their values.