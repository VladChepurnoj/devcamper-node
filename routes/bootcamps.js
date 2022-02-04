const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  updateBootcamp,
  deleteBootcamp,
  createBootcamp,
  getBootacmpsInRadius,
  bootcampPhotoUpload,
} = require("../controllers/bootcamps");

//include other resourse routers
const courseRouter = require("./courses");

const router = express.Router();

//reroute into other resourse routers
router.use("/:bootcampId/courses", courseRouter);

router.route("/radius/:zipcode/:distance").get(getBootacmpsInRadius);

router.route("/:id/photo").put(bootcampPhotoUpload);

router.route("/").get(getBootcamps).post(createBootcamp);
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
