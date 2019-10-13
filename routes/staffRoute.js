const mongoose = require('mongoose');
const Staff = mongoose.model('staffs');

module.exports = (app) => {

  app.get(`/api/staff`, async (req, res) => {
    let staffs = await Staff.find();
    return res.status(200).send(staffs);
  });

  app.post(`/api/staff`, async (req, res) => {
    let staff = await Staff.create(req.body);
    return res.status(201).send({
      error: false,
      staff
    })
  })

  app.put(`/api/staff/:id`, async (req, res) => {
    const {id} = req.params;

    let staff = await Staff.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      staff
    })

  });

  app.delete(`/api/staff/:id`, async (req, res) => {
    const {id} = req.params;

    let staff = await Staff.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      staff
    })

  })

}