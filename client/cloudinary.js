$.cloudinary.config({
	cloud_name:"dot40qz0k"
});

Meteor.startup(function () {
	Session.setDefault("public_id", "");
});

Template.post_submit.onRendered(function() {  	
	Session.set("public_id", "");
});

Template.post_submit.events({
  // Submit signup form event
  'change input[type="file"]': function(e){
	  var file = e.currentTarget.files;

	  var file_name = file[0].name;
	  file_name = file_name.split(".")[0];
	  Cloudinary.upload(file, {public_id: Meteor.userId()+"_"+file_name}, function(err, res) {
	  		if(err)
	        	console.log(err);
	        else{
	        	Session.set("public_id", res.public_id);
	        	console.log(res);
	        }
	      });
  }
});

Template.post_submit.helpers({  
  public_id: function() {
  	// var file_name = $('input[type="file"]').val();
	return Session.get("public_id");
  }
});