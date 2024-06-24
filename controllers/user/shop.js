import Product from "../../models/product.js";
import Service from "../../models/service.js";
import User from "../../models/User.js";

const shop_get = async (req, res) => {
  const user = await User.findById(req.params.id);

  let myproducts = [];
  let myservices = [];

  for (let p of user.cart.products) {
    let data = await Product.findById(p.productId).lean();
    data.quantity = p.productQuantity;
    myproducts.push(data);
  }

  for (let s of user.cart.services) {
    let data = await Service.findById(s.serviceId).lean();
    data.quantity = s.serviceQuantity;
    myservices.push(data);
  }

  res.render("servicesAndShop", {
    title: "Shop",
    user,
    myproducts,
    myservices,
    list: await Product.find(),
  });
};

export default { shop_get };
