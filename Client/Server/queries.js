const Pool = require('pg').Pool;
const pool = new Pool();

const createUser = (req, res) => {
    const { username, password, email, name, city, state, zipcode } = request.body
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
      res.status(200).json(results.rows)
    })
  }

  const getItem = (req, res) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM posts WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    createUser,
    getPosts,
    getItem,
    updateItem,
    deleteItem,
    createItem,
    getFavorites,
    authUser
  }