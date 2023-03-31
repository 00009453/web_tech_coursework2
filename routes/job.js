const express = require('express');
const jobController = require('../controllers/job');
const router = express.Router();

router.get('/',  jobController.getJobs);
router.get('/job/:jobId',  jobController.getSingleJob);
router.post('/delete-job',  jobController.deleteSingleJob);

router.get('/add-job',  jobController.getAddJob);
router.post('/add-job',  jobController.postNewJob);

router.get('/edit-job/:jobId', jobController.getEditJob);
router.post('/edit-job/:jobId', jobController.postEditJob);

module.exports = router;
