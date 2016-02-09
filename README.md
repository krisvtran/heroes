# Superhero Gallery
2	
3	A superhero gallery that displays a new hero with each button click, infinitely cycling forever.
4	
5	## Using only jQuery:
6	
7	- When the page opens, show only the first character in the list.
8	- Set the h1.name to the text for the first superher
9	- Setup a listener on the button.next
10	- Keep track of which one is visible so you know which is next
11	- Show the next element on each click of "next"
12	- Update the h1.name for each new hero
13	- When you hit the :last-child then click "next", go back to the :first-child
14	- Try animating the name to fade out and slide upwards on each click
15	- Now that you're able to go forward, try to make it go the other way (prev)
16		- Spend the rest of your time trying to refine this and make it more efficient