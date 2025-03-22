# Stagger Animation  

Stagger animation refers to a technique where multiple elements animate in a sequence rather than all at once. This creates a more dynamic and visually appealing effect, as each element appears or moves slightly after the previous one, adding a sense of rhythm and flow to the animation.

You can change delays 
stagger(0.1, { startDelay: 0.2 }) // 0.2, 0.3, 0.4...

Or you can pass a motion function
stagger(0.1, { ease: "easeOut" })
