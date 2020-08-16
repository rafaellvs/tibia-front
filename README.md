# tibia-front
react app to consume from [tibia-api](https://github.com/rafaellvs/tibia-api)

deployed at https://tibia-front.firebaseapp.com/

first render might take a while (i dont know why. Must be something to do with Heroku)



### overview
React app that consumes data from tibia-api. Composed (for now) of a navbar with links to existing entities in database. The pages contain a Table filled with every item on the requested entity db.

### run locally
run `yarn`

run `yarn start`

### notes


#### toFix:

`Template` is responsible for throwing 404s

`Distances` table broken (too many columns. Also change its name to Distance Weapons)

`Rings` has no drop table on tibia wiki
