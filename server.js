const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');

// Middleware para habilitar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());
app.use(express.static(__dirname));


//JSON/CART/BUY
const buy = require('./json/cart/buy.json');
//Ruta para cargar el archivo buy.json
app.get('/api/buy', (req, res) => {
  try {
      // Verificar si el archivo buy.json está correctamente cargado
      if (!buy) {
          return res.status(404).json({ error: 'No se pudo completar la compra.' });
      }

      // Si todo está bien, responde con el archivo
      res.status(200).json(buy);
  } catch (error) {
      // Si ocurre un error, devuelve una respuesta con el error
      console.error('Error al cargar la compra:', error);
      res.status(500).json({ error: 'Hubo un problema al procesar la solicitud.' });
  }
});



//JSON/CATS/CAT
const cat = require('./json/cats/cat.json');
//Ruta para cargar el archivo de categorías
app.get('/api/cat', (req, res) => {
  try {
      // Verificar si el archivo cat.json está correctamente cargado
      if (!cat) {
          return res.status(404).json({ error: 'El archivo de categorías no se encuentra.' });
      }

      // Si todo está bien, responde con el archivo
      res.status(200).json(cat);
  } catch (error) {
      // Si ocurre un error, devuelve una respuesta con el error
      console.error('Error al cargar el archivo:', error);
      res.status(500).json({ error: 'Hubo un problema al procesar la solicitud.' });
  }
});


//JSON/CATS_PRODUCTS
// Leer todos los archivos JSON en la carpeta 'json/cats_products'
const catsProductsFolder = path.join(__dirname, 'json/cats_products');

// Leer los archivos en la carpeta y cargarlos en un arreglo
let allCatsProducts = [];

// Leer la carpeta y cargar todos los archivos JSON
fs.readdir(catsProductsFolder, (err, files) => {
  if (err) {
    console.error('Error al leer la carpeta:', err);
    return;
  }

  // Filtrar solo los archivos JSON
  const jsonFiles = files.filter(file => file.endsWith('.json'));

  // Leer y cargar cada archivo JSON
  jsonFiles.forEach(file => {
    const filePath = path.join(catsProductsFolder, file);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error al leer el archivo ${file}:`, err);
        return;
      }

      try {
        const jsonData = JSON.parse(data);
        allCatsProducts.push(jsonData);  // Almacenar el contenido de cada archivo
      } catch (e) {
        console.error(`Error al parsear el archivo ${file}:`, e);
      }
    });
  });

  console.log(`Archivos cargados: ${jsonFiles.length} archivos JSON`);
});

// Ruta para obtener todos los productos de cats_products
app.get('/api/cats_products', (req, res) => {
  try {
      // Verificar si el archivo está correctamente cargado
      if (!allCatsProducts) {
          return res.status(404).json({ error: 'No se encontraron las categorías de productos.' });
      }

      // Si todo está bien, responde con el archivo
      res.status(200).json(allCatsProducts);
  } catch (error) {
      // Si ocurre un error, devuelve una respuesta con el error
      console.error('Error al cargar el archivo:', error);
      res.status(500).json({ error: 'Hubo un problema al procesar la solicitud.' });
  }
});



//JSON/PRODUCTS
// Leer todos los archivos JSON en la carpeta 'json/products'
const productsFolder = path.join(__dirname, 'json/products');

// Leer los archivos en la carpeta y cargarlos en un arreglo
let allProducts = [];

// Leer la carpeta y cargar todos los archivos JSON
fs.readdir(productsFolder, (err, files) => {
  if (err) {
    console.error('Error al leer la carpeta:', err);
    return;
  }

  // Filtrar solo los archivos JSON
  const jsonFiles = files.filter(file => file.endsWith('.json'));

  // Leer y cargar cada archivo JSON
  jsonFiles.forEach(file => {
    const filePath = path.join(productsFolder, file);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error al leer el archivo ${file}:`, err);
        return;
      }

      try {
        const jsonData = JSON.parse(data);
        allProducts.push(jsonData);  // Almacenar el contenido de cada archivo
      } catch (e) {
        console.error(`Error al parsear el archivo ${file}:`, e);
      }
    });
  });

  console.log(`Archivos cargados: ${jsonFiles.length} archivos JSON`);
});

// Ruta para obtener todos los productos
app.get('/api/products', (req, res) => {
  try {
      // Verificar si el archivo allProducts.json está correctamente cargado
      if (!allProducts || allProducts.length === 0) {
          return res.status(404).json({ error: 'No se encontraron productos.' });
      }

      // Si todo está bien, responde con los productos
      res.status(200).json(allProducts);
  } catch (error) {
      // Si ocurre un error, devuelve una respuesta con el error
      console.error('Error al cargar los productos:', error);
      res.status(500).json({ error: 'Hubo un problema al procesar la solicitud.' });
  }
});


//JSON/PRODUCTS_COMMENTS
// Leer todos los archivos JSON en la carpeta 'json/products_comments'
const productsCommentsFolder = path.join(__dirname, 'json/products_comments');

// Leer los archivos en la carpeta y cargarlos en un arreglo
let allProductsComments = [];

// Leer la carpeta y cargar todos los archivos JSON
fs.readdir(productsCommentsFolder, (err, files) => {
  if (err) {
    console.error('Error al leer la carpeta:', err);
    return;
  }

  // Filtrar solo los archivos JSON
  const jsonFiles = files.filter(file => file.endsWith('.json'));

  // Leer y cargar cada archivo JSON
  jsonFiles.forEach(file => {
    const filePath = path.join(productsCommentsFolder, file);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error al leer el archivo ${file}:`, err);
        return;
      }

      try {
        const jsonData = JSON.parse(data);
        allProductsComments.push(jsonData);  // Almacenar el contenido de cada archivo
      } catch (e) {
        console.error(`Error al parsear el archivo ${file}:`, e);
      }
    });
  });

  console.log(`Archivos cargados: ${jsonFiles.length} archivos JSON`);
});

// Ruta para obtener todos los comentarios de productos
app.get('/api/products_comments', (req, res) => {
  try {
      // Verificar si el archivo allProductsComments.json está correctamente cargado
      if (!allProductsComments || allProductsComments.length === 0) {
          return res.status(404).json({ error: 'No se encontraron comentarios de productos.' });
      }

      // Si todo está bien, responde con los comentarios
      res.status(200).json(allProductsComments);
  } catch (error) {
      // Si ocurre un error, devuelve una respuesta con el error
      console.error('Error al cargar los comentarios de productos:', error);
      res.status(500).json({ error: 'Hubo un problema al procesar la solicitud.' });
  }
});



//JSON/SELL
const publish = require('./json/sell/publish.json');

app.get('/api/publish', (req, res) => {
  try {
      // Verificar si el archivo publish.json está correctamente cargado
      if (!publish) {
          return res.status(404).json({ error: 'No se pudo ejecturar la publicación.' });
      }

      // Si todo está bien, responde con el mensaje
      res.status(200).json(publish);
  } catch (error) {
      // Si ocurre un error, devuelve una respuesta con el error
      console.error('Error al cargar la publicación:', error);
      res.status(500).json({ error: 'Hubo un problema al procesar la solicitud.' });
  }
});



//JSON/USER_CART
const user_cart = require('./json/user_cart/25801.json');

app.get('/api/user_cart', (req, res) => {
  try {
      // Verificar si el archivo user_cart.json está correctamente cargado
      if (!user_cart) {
          return res.status(404).json({ error: 'No se encontró el archivo del carrito de usuario.' });
      }

      // Si todo está bien, responde con el archivo
      res.status(200).json(user_cart);
  } catch (error) {
      // Si ocurre un error, devuelve una respuesta con el error
      console.error('Error al cargar el archivo del carrito de usuario:', error);
      res.status(500).json({ error: 'Hubo un problema al procesar la solicitud.' });
  }
});


// Servidor corriendo
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

