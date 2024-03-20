const { Product, Order } = require('../models');

module.exports.findProduct = async (req, res, next) => {
    try {
        const { params: { orderId }, body: { products } } = req;

        const order = await Order.findById(orderId);

        // 1. Знайти всі інгридієнти та витягнути всю по ним інформацію
        const prods = []; // масив з ObjectId наших інгридієнтів
        if(products) {
            for(let i = 0; i < products.length; i++) {
                const prod = await Product.findOne({
                    name: products[i]
                });
                // 2. Створити масив з ObjectId всіх інгридієнтів
                prods.push(prod['_id']);
            }
        }

        // 3. Чіпляємо масив інгридієнтів до req і передаємо керування контроллеру
        if(order) {
            if(order.products) {
                req.products = order.products.concat(prods)
            }
        } else {
            req.products = prods;
        }
        next();
    } catch (error) {
        next(error);
    }
}