import Services from "../../models/service.js"

const services_get = async (req, res) => {
  res.render("./services.ejs", {
    title: "Services",
    services: await Services.find(),
  });
};

export default { services_get };
