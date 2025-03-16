imagine this is your application

--App
  |
  --A
    |
    --B
      |
      --C

if you have a data variable in App and you want to pass it to component C you have to write it in every layer, obviosly this isnt a good solution so we use Contex API

contex API has two parts
1- provider
2- consumer

first we provide the data we want by creating a contex(we should export the newly created contex to use it in consumer) and then wraping it arount the component we want to recive the contex as contexName.provider
then we recive it by importing the contex, wraping it around the component as contexName.consumer and using it

tip: using useContex() hook is easier and cleaner for reciving the data
