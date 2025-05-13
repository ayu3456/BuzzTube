# Search Bar working 

Suggestions about the text u wrote in the text bar. 
if i type very fast 7 letter results in 4 api calls. 

flipkart me api call har key press par nahi hota , jab tum type karna finish karoge tab api call hogi. (This concept is known as debouncing)

when u type very fast it just skips some of the events. 
this increase your performance. 

Performance:
-iphone pro max = 14 letter , suppose millions of customers are using this . this will drastically improves the performance of the webpage. 

iphone pro max = 14 letter * 1000 
with debouncing = 3 Api calls  * 1000 = 3000 api calls 

In flipkart debouncing with 200ms (if difference between the keyStrokes is less than 200ms I should call the api). this number is very less for yt. 

// i have to make the api only when the differenencr btween the two is greater than 200ms. 

key - i render the component 
useEffect()
start timer => make api call after 200ms 

ip 
destroy the component 

re-render the component 
useEffect()
start timer => make api call after 200ms 









