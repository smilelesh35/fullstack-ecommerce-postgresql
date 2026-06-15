import express from "express";
import postgresClient from "../config/db.js";
import jwt from "jsonwebtoken"
import {authMiddleware} from "../middlewares/authMiddleware.js";

const router = express.Router();
//Create user

router.post ('/basket',authMiddleware,async(req, res) => {
    const userId = req.user.id;
    const {product_id,title,price,image,count} = req.body;
    try{
        const text = `INSERT INTO basket(user_id,product_id,title,price,image,count) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (user_id, product_id)  DO UPDATE SET count = basket.count + EXCLUDED.count  RETURNING *
        `
        const values = [userId,product_id,title,price,image,count || 1]

        const {rows} = await postgresClient.query(text, values)
        res.status(201).json(rows[0]);

    }catch(err){
        res.status(400).json({message:"Basket not found"})
    }
})
router.get("/basket", authMiddleware, async (req, res) => {
    const userId = req.user.id;

    try {
        const query = `
            SELECT *
            FROM basket
            WHERE user_id = $1
            ORDER BY id ASC
        `;

        const result = await postgresClient.query(query, [userId]);

        res.status(200).json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Sepet getirilemedi" });
    }
});
router.delete ('/basket/:id', authMiddleware, async(req, res) => {
    const userId = req.user.id;
    const basketId = req.params.id;

    try{
        const text = `DELETE FROM basket WHERE id = $1 AND user_id = $2 RETURNING *`;
        const values = [basketId,userId];
        const {rows} = await postgresClient.query(text, values)
        res.status(200).json({
            message: "Ürün sepetten silindi",
            deletedBasket: rows[0]
        });


    }catch {
        return res.status(500).json({
            message: "Sepet ürünü silinemedi"
        });
    }

})

router.post('/',async(req, res) => {
    try{
        const text = `INSERT INTO users (name, surname ,password) VALUES ($1 ,$2 ,crypt($3,gen_salt('bf'))) RETURNING *`
        const value = [req.body.name,req.body.surname,req.body.password];


        const {rows} = await postgresClient.query(text, value)

        return res.status(201).json({createdUser: rows[0]});
    }catch(err){
        console.log(err)
    }
})

router.post('/login',async(req, res) => {
    try {
        const text = 'SELECT * FROM users WHERE name = $1 AND password = crypt($2,password)';

        const value = [req.body.name ,req.body.password]
        const {rows} = await postgresClient.query(text, value)
        if(!rows.length){
            return res.status(401).json({message:'No user found with this name'})
        }



        const user = rows[0];

       const token = jwt.sign(
           {
               id:user.id,
               name:user.name,
           },
           process.env.JWT_SECRET,{
               expiresIn: "1h"
           }
           )

        res.status(201).json({
            message:'Logged in',
            token:token,
            user:{
                id:user.id,
                name:user.name,
                surname:user.surname,

            }

        })

    }catch(err){
        console.log(err)
        return res.status(401).json({message:'login failed with this name'})
    }

})
router.put('/:id',async(req, res) => {

    try{
        const {id}=req.params;
        const text = `
      UPDATE users 
      SET name = $1, password = crypt($2, gen_salt('bf'))
       WHERE id = $3 
       RETURNING *
    `;
        const value = [req.body.name,req.body.password,id];

        const {rows} = await postgresClient.query(text, value)

        if(!rows.length){
            return res.status(401).json({message:'No user found with this name'})
        }
        return res.status(200).json({message:'updated successfully'});

    }catch(err){
        return res.status(401).json({message:'login failed with this name'})
    }

})

router.delete('/:id',async(req, res) => {
    try{
        const {id}=req.params;
        const text = `DELETE FROM users WHERE id=$1`
        const value = [id];

        const {rows} = await postgresClient.query(text, value)
        res.status(201).json({message:'deleted successfully'});


    }catch{

        return res.status(401).json({message:'No user found with this id'})
    }

})
export default router;