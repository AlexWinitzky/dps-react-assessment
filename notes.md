The Diary of Senior Developer Alex Winitzky

Day 1 -
Start time: Friday 2:00pm

Rations are low, ammuntion the same.  The zombie hordes are closing in plus I'm no closer to finishing this React assignment.  More later.

Friday 2:20pm

I've succesfully imported my secret key into my .env.  If this key were to fall into the wrong hands there's no tellng what could happen.

Saturday 9:50pm

Spent about 6 hours making all sorts of attempts to get Beers.js to work.  Axios call succesfully brings in the data, but the map function errors out and app breaks.  I think that I still have an object rather than an array but I can't figure out why, I've set initial state: state = { beers: [] }, under the promise I've assigned const beers = res.data, then this.setState = ({ beers }).  Nevertheless when I call this.state.beers.map in my render, the error says either "beers" is undefined or map is not a function.  I now have an unquenchable desire to kill, so, thanks Devpoint, churning out homicidal maniacs.

Sunday 11am

Thousands of iterations later and as many google and stackoverflow queries, I have the same error.  I can see the data in my Dev tools in the class component, I can see that by the time it reaches my render function the array is empty, despite setting state.  Map...Is...Not...A...Function.

Sunday 8pm

People throw around words like "genius," and "greatest living mind," and "incredibly chiseled features."  If they want to apply those words to me, who am I to stand in their way?  Let me tell you a little something about axios calls, my friends: it's more of an art than a science in my experience.  It's a delicate dance that entrances the senses.  The French refer to it as Le Chanson D'Axios, and it is prized for its sensual qualities.