import express from "express";
import db from "./../config/db.js";
const router = express.Router();

async function getUsers() {
  const query = "SELECT * FROM users";
  try {
    const [rows] = await db.query(query);
    return [rows];
  } catch (error) {
    console.error("Erro: " + error);
  }
}

router.use(express.json());

router.get("/users", async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users||{message:'No Users'});
    } catch (error) {
        console.error('Erro:'+error);
        res.status(500).json({error:'Query falha'});
    }
});

export default router;
