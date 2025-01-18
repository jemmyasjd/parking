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

async function deleteOldVisitors(req, res) {
  try {
      // Delete visitors older than 24 hours
      const deletedVisitors = await prisma.visitor.deleteMany({
          where: {
              date: {
                  lt: new Date(Date.now() - 1 * 60 * 1000), // 24 hours ago
              },
          },
      });

      console.log(`${deletedVisitors.count} visitors deleted.`);
      res.status(200).json({ message: `${deletedVisitors.count} visitors deleted.` });
  } catch (error) {
      console.error('Error deleting old visitors:', error);
      res.status(500).json({ error: error.message });
  }
}



module.exports = {createVisitor, getVisitor, deleteOldVisitors};