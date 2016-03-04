var mongoose = require('mongoose');

var courseSchema = mongoose.Schema ({
  title: {type:String, required: '{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: String
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
  Course.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Course.create({title: 'Andrew Anderson', featured: true, published: new Date('11/1/2013'), tags:['Reno']});
      Course.create({title: 'Barbara Boyd', featured: true, published: new Date('12/15/2015'), tags: ['National Open']});
      Course.create({title: 'Charles Cooper', featured: false, published: new Date('9/1/2014'), tags: ['Grand National']});
      Course.create({title: 'David Davis', featured: true, published: new Date('8/13/2013'), tags: ['Augusta']});
      Course.create({title: 'Ethan Edwards', featured: true, published: new Date('6/1/2014'), tags: ['Kissimmee']});
    }
  })
}

exports.createDefaultCourses = createDefaultCourses;
