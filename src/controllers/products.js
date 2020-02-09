const config = require('config')

const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: config.database.url })
console.log("elsticserach client")


exports.add = async function(req, res) {
try {
    let promise = await client.index({
        index: config.database.index,
         type: config.database.type, // uncomment this line if you are using {es} ≤ 6
        body: {
            "Product_name": req.body.Product_name,
            "category": req.body.category,
            "manufecture": req.body.manufecture,
            "price": req.body.price,
            "size": req.body.size
        }
      })
      res.status(promise.statusCode).send({id: promise.body._id});
}catch(err){
    res.status(err.statusCode).send({product: req.body});
    }
}

exports.delete = async function(req, res) {
console.log("delete")
    try {
        let promise = await client.delete({
            id: req.body.id ,
            index: config.database.index,
            type: config.database.type,
        })
        res.status(promise.statusCode).send({id: promise.body._id});
      } catch(err) {
            res.status(err.statusCode).send({id: err.body._id});
      }
 
}

exports.get = async function(req, res) {
    console.log("get")

    try {
        let promise = await client.get({
            id: req.body.id ,
            index: config.database.index,
            type: config.database.type,
        })
        res.status(promise.statusCode).send({id : promise.body._id,
                                            ...promise.body._source});
      } catch(err) {
            res.status(err.statusCode).send({id: err.body._id});
      }


}

exports.getAll = async function(req, res) {

console.log("get all")
    try {

        const promise = await client.search({
            index: config.database.index,
            type: config.database.type,
            body: {
              query: { match_all: {} }
            }
          })
          let hits = promise.body.hits.hits.map(item =>item._source);
          res.status(promise.statusCode).send(hits)
    }catch(err){
        res.status(err.statusCode).send({id: "all"});
    }
}

