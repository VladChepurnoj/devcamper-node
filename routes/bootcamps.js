const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  updateBootcamp,
  deleteBootcamp,
  createBootcamp,
  getBootacmpsInRadius,
} = require("../controllers/bootcamps");

const router = express.Router();

router.route("/radius/:zipcode/:distance").get(getBootacmpsInRadius);

router.route("/").get(getBootcamps).post(createBootcamp);
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
