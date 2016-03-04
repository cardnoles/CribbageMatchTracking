var Course = require('mongoose').model('Course');

exports.createCourse = function(req, res, next) {
  var courseData = req.body;
  console.log('createCourse with courseData:', courseData);
  Course.create(courseData, function(err, user) {
    if(err)  {
       res.status(400);
       return res.send({reason:err.toString()});
    }
  })
};

exports.getCourses = function(req, res) {
  Course.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};

exports.getCourseById = function(req, res) {
  Course.findOne({_id:req.params.id}).exec(function(err, course) {
    res.send(course);
  })
}
