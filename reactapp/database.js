
import * as SQLite from "expo-sqlite";

let databaseInstance;

export async function getDatabase() {
  if (!databaseInstance) {
    databaseInstance = await SQLite.openDatabaseAsync("products.db");

    await databaseInstance.execAsync(`
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        price REAL NOT NULL,
        stock TEXT NOT NULL,
        image TEXT NOT NULL,
        description TEXT NOT NULL
      );
    `);

    await databaseInstance.runAsync(
      `INSERT INTO products
        (id, name, category, price, stock, image, description)
       SELECT ?, ?, ?, ?, ?, ?, ?
       WHERE NOT EXISTS (
         SELECT 1 FROM products WHERE id = ?
       )`,
      1,
      "Iphone X",
      "phone",
      400,
      "Yes",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
      "Lorem ipsum dolor sit amet",
      1
    );
  }

  return databaseInstance;
}


export async function getProductById(id) {
  console.log("Getting database...");
  const db = await getDatabase();
  console.log("Database opened. Searching for product:", id);

  const product = await db.getFirstAsync(
    "SELECT * FROM products WHERE id = ?",
    id
  );

  console.log("Product query finished:", product);
  return product;
}

export async function getAllProducts() {
  const db = await getDatabase();

  return await db.getAllAsync(
    "SELECT * FROM products ORDER BY id"
  );
}

export async function addProduct(product) {
  const db = await getDatabase();

  const result = await db.runAsync(
    `INSERT INTO products
      (name, category, price, stock, image, description)
     VALUES (?, ?, ?, ?, ?, ?)`,
    product.name,
    product.category,
    product.price,
    product.stock,
    product.image,
    product.description
  );

  return result.lastInsertRowId;
}

export async function updateProduct(id, product) {
  const db = await getDatabase();

  await db.runAsync(
    `UPDATE products
     SET name = ?, category = ?, price = ?,
         stock = ?, image = ?, description = ?
     WHERE id = ?`,
    product.name,
    product.category,
    product.price,
    product.stock,
    product.image,
    product.description,
    id
  );
}

export async function deleteProduct(id) {
  const db = await getDatabase();

  await db.runAsync(
    "DELETE FROM products WHERE id = ?",
    id
  );
}
