import express from "express"


const app = express()


const _PORT = 8000;

app.listen(_PORT, () => {

    console.log(`server is running at port :${_PORT}....`)
})

app.use(express.json())   //except  data in json format 


let productData = []
let nextid = 1



app.post("/products", (req, res) => {
    const { name, price } = req.body

    const newProductData = { id: nextid++, name, price }

    productData.push(newProductData)

    res.status(201).send(newProductData)


    // console.log(newProductData, "newproductData>>>>>>>>>>");

})



app.get("/products", (req, res) => {

    res.status(200).send(productData)
})


// product  based on id 

app.get("/products/:id", (req, res) => {

    const product = productData.find(product => product.id === parseInt(req.params.id))
    // let filteredProducts = productData.filter((item) => item.id === parent(req.params.id))
    // console.log(product, "product");

    if (!product) {
        return res.status(404).send("product not found")
    }

    res.status(200).send(product)
    // console.log(filteredProducts, "filteredProducts");


})

// update
app.put("/products/:id", (req, res) => {
    const product = productData.find(product => product.id === parseInt(req.params.id))

    if (!product) {
        return res.status(400)
    }
    const { name, price } = req.body

    product.name = name,
        product.price = price,
        res.status(200).send(product)

})

// filteredProducts
// delete product


app.delete("/products/:id", (req, res) => {
    let index = productData.findIndex((pr) => pr.id === parseInt(req.params.id))


    if (index === -1) {
        return res.status(404).send("no product found ")
    }

    productData.splice(index, 1)

    return res.status(200).send("deleted")

})



