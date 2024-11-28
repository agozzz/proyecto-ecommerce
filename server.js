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

app.get('/api/buy', (req, res) => {
    res.status(200).json(buy);
});



//JSON/CATS/CAT
const cat = require('./json/cats/cat.json');

app.get('/api/cat', (req, res) => {
    res.status(200).json(cat);
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
  // Responder con todos los productos de la categoría
  res.status(200).json(allCatsProducts);
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
  // Responder con todos los productos cargados
  res.status(200).json(allProducts);
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
  // Responder con todos los comentarios de productos cargados
  res.status(200).json(allProductsComments);
});



//JSON/SELL
const publish = require('./json/sell/publish.json');

app.get('/api/publish', (req, res) => {
    res.status(200).json(publish);
});

//JSON/USER_CART
const user_cart = require('./json/user_cart/25801.json');

app.get('/api/user_cart', (req, res) => {
    res.status(200).json(user_cart);
});


// Servidor corriendo
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

