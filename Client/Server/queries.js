const Pool = require('pg').Pool;
const pool = new Pool({
    host: 'localhost',
    user: 'davidhilleke',
    database: 'capstone',
    port: 5432
});

const createUser = (req, res) => {
    const { username, password, email, name, city, state, zipcode } = req.body
    pool.query('INSERT INTO users (username, password, email, name, city, state, zipcode) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', 
                [username, password, email, name, city, state, zipcode], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }

  const getPosts = (req, res) => {
    pool.query('SELECT * FROM posts ORDER BY id DESC', (error, results) => {
      if (error) {
        throw error
      }
      const allPosts = res.status(200).json(results.rows);
      return allPosts
    })
  }

  const getItem = (req, res) => {
    const id = parseInt(req.params)
    pool.query('SELECT * FROM posts WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }

  const updateItem = (req, res) => {
    const id = parseInt(req.params.id)
    const { item_name, store, total, description, address, city, state, zip, images, category } = req.body
    pool.query(
      'UPDATE posts SET item_name = $1, store = $2, total = $3, description = $4, address = $5, city = $6, state = $7, zip = $8, images = $9, category = $10 WHERE id = $11',
      [item_name, store, total, description, address, city, state, zip, images, category, id],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`Item modified with ID: ${id}`)
      }
    )
  }
  
  const deleteItem = (req, res) => {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM posts WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`Item deleted with ID: ${id}`)
    })
  }

  const createItem = async (req, res) => {
    try{
      console.log(req.body)
      const { item_name, store, total, user_link, description, address, city, state, zip, images, category } = req.body
      const newUser = await pool.query('INSERT INTO posts (item_name, store, total, user_link, description, address, city, state, zip, images, category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *', 
                [item_name, store, total, user_link, description, address, city, state, zip, images, category])
      res.json(newUser)  
      }catch (err) {
        console.log(err)
    }
  }

  module.exports = {
    createUser,
    getPosts,
    getItem,
    updateItem,
    deleteItem,
    createItem,
    // getFavorites,
    // authUser
  }