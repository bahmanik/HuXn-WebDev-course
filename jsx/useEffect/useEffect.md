the reason there is two render in useEffect is restericted mode inside main.js

1- if you dont provide dependency arr it will run useEffect on every render
2- if dep arr is empty effect will run only on first render
3- you cant use condition outside effect (only inside it)
