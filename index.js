// Start your es6 scripts here
import express from 'express'
import resolvers from './resolvers'
const app = express()
import {graohqlHTTP, graphqlHTTP} from 'express-graphql'
import schema from './schema'


app.get("/",(req,res) => {
    res.send("Up and running")
})

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql: true,
    rootValue: root
}))

app.listen(8000,()=> console.log("Running at 8000"))