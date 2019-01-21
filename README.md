# MU-Puzzle
A tool for playing with the MU puzzle from the book Godel, Escher, Bach.

For full details of the MU puzzle, see <a href="https://archive.org/details/GEBen_201404/page/n39">Godel, Escher, Bach pages 41-43</a>.

You start with the string 'MI', you must get to 'MU' using the following 4 rules:

* RULE I: If you possess a string whose last letter is I, you can add on a U at the end.

* RULE II: Suppose you have Mx. Then you may add Mxx to your collection.

* RULE III: If III occurs in one of the strings in your collection, you may make a new string with U in place of III.

* RULE IV: If UU occurs inside one of your strings, you can drop it.

Use index.html and the JavaScript file to play with this. There is also a Python rewrite of just the rules but the HTML file is recommended for end use.