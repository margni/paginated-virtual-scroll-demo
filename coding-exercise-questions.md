## Questions from the coding exercise

1. Inside of the product component, do you think that it is viable to create other inner / dumb components? What strategy would you use to break down the product component? 

Yes individual visual components may be split out so that they may be reused elsewhere. However this should be done with some consideration.

2. For loading the bank logo. There is a SVG file (sprite-bank.svg) and css available to use. This approach is using sprites. In your opinion, is this a good strategy to deal with the logos? If not, what how would be a better way to handle it?

Yes, if it is possible then it is an efficient way of dealing with it, another option might be to embed the images via base64 encode, this may be easier to generate on the fly.

3. Considering the user experience, when loading data, a common practice is to use a skeleton screen. Have you already use it? What do you think about it?

Yes, this can be a good idea, it lets the user know that ui is on the way, rather than just a blank screen with a spinner. Material Design principals recommends adding Placeholder UI while the UI is initializing.
