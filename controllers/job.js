const Job = require('../models/job');

exports.getJobs = (req, res) => {
  Job.find()
  .then(job=>{
    res.render('index/jobs', {
      title_name: 'Job List',
      jobs: job
    });
  }).catch(err => {
    console.log(err)
    return  res.redirect("/")
  })
};

exports.getAddJob = (req, res) => {
    res.render('index/add_job', {
      title_name: 'Add Job'
    });
};


exports.getSingleJob = (req, res) => {
  Job.findById(req.params.jobId)
    .then(job=>{
      if(!job){
          return res.redirect('/404')
      }  
      res.render('index/job_detail', {
        title_name:job.companyName,
        job: job
      });
    }).catch(err => {
      console.log(err)
      return  res.redirect("/")
    })
  };


  exports.deleteSingleJob = (req, res) => {
    Job.findByIdAndRemove(req.body.jobId)
    .then(()=>{
        return res.redirect("/");
      }).catch(err=>{
        console.log(err)
        return res.redirect("/404")
      })
  };


  exports.postNewJob = (req, res, next) => {
    const companyName = req.body.companyName
    const workType = req.body.workType
    const aboutCompany = req.body.aboutCompany
    const jobDescription = req.body.jobDescription
    const requirement = req.body.requirement
    
    const job = new Job({
        companyName,
        aboutCompany,
        workType,
        jobDescription,
        requirement
      })

    job.save().then(()=>{
       return res.redirect("/");
    }).catch(err=>{
        console.log(err)
        return res.redirect("/404")
    })
  }  


  exports.getEditJob = (req, res) => {
    const jobId = req.params.jobId;
    Job.findById(jobId)
      .then(job => {
        if (!job) {
          return res.redirect('/404');
        }
        res.render('index/edit_job', {
          title_name: 'Editing Job Detail',
          job: job
        });
      })
      .catch(err => {
         console.log(err)
         return res.redirect('/404');
      });
  };
  


  exports.postEditJob = (req, res) => {

    const companyName = req.body.companyName
    const workType = req.body.workType
    const aboutCompany = req.body.aboutCompany
    const jobDescription = req.body.jobDescription
    const requirement = req.body.requirement
  
    Job.findById(req.params.jobId)
      .then(job => {
        if (!job) {
          return res.redirect('/404');
        }
        job.companyName = companyName;
        job.workType = workType;
        job.aboutCompany = aboutCompany;
        job.jobDescription = jobDescription;
        job.requirement = requirement;
  
        return job.save().then(result => {
          res.redirect('/');
        });
      })
      .catch(err =>{
          console.log(err);
        return res.redirect('/404');
      });
  };

