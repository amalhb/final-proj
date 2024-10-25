
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


exports.createDish = async (req, res) => {
  try {
    const { title, description, price, imageUrl, duration, ChiefId } = req.body;

    const newDish = await prisma.dish.create({
      data: {
        title,
        description,
        price,
        imageUrl, 
        duration,
        ChiefId,  
      },
    });

    res.status(201).json(newDish);
  } catch (error) {
    console.error('Error creating dish:', error);
    res.status(500).json({ error: 'Failed to create dish', details: error.message });
  }
}
