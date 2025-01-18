const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getVisitor (req, res) {
    try{
        const visitors = await prisma.visitor.findMany({});
        res.status(200).json(visitors);
        }catch (error) {
        res.status(500).json({ error: error.message });
      }
}

async function createVisitor(req,res){
  // console.log(req.body);
    try {
        const { name, block, type, houseno, phone, vehno } = req.body;
        const int_houseno = parseInt(houseno);
        // console.log(name, block, type, houseno, phone, vehno);
        const visitor = await prisma.visitor.create({
          data: { name, block, type, houseno: int_houseno, phone, vehno },
        });
        console.log(visitor);
        res.status(201).json(visitor);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}



module.exports = {createVisitor, getVisitor};