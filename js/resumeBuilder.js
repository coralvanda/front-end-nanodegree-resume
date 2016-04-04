var bio = {
	"name": "Eric Lastname",
	"role": "unemployed",
	"contacts": {
		"mobile": "none",
		"email":"email@address.com",
		"github":"coralvanda",
		"location":"Italy"
	},
	"welcomeMessage": "Thank you for viewing my resume",
	"skills": [
		"look", "at", "all", "these", "skills"
	]
}


var work = {
	"jobs" : [
		{
			"employer":"Beacon Communications",
			"title":"Classifieds rep",
			"location":"Warwick, RI",
			"dates worked":"2006-2008",
			"description":"Take ads from customers, \
				paginate the ads, and post web content"
		}, 
		{
			"employer":"Tasca",
			"title":"Service rep",
			"location":"Warwick, RI",
			"dates worked":"2009-2011",
			"description":"Help customers maintain and \
				repair their vehicles"
		},
		{
			"employer":"Inskip",
			"title":"Internet manager",
			"location":"Warwick, RI",
			"dates worked":"2012-2014",
			"description":"Manage internet team, assist \
				internet customers, maintain online presence"
		}
	]
}


var education = { 
	"schools" : [
		{
		"name":"UPS",
		"location":"Tacoma, WA",
		"degree":"BA",
		"major":"big"
		}
	],
	"online classes": [
		{
		"udacity classes":"a, b, and c",
		"codecademy classes": "x, y, and z"
		}
	]
}


var projects = {
	"projects" : [
		{
		"title": "whatever",
		"dates": "not so long ago",
		"description": "did some things",
		"images":[]
		},
		{
		"title": "why bother",
		"dates": "very recent",
		"description": "did more things",
		"images":[]
		}
	]
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);


if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var skill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(skill);
	}
}


function displayWork(){
	for(var job = 0; job < work.jobs.length; job++){
		$("#workExperience").append(HTMLworkStart);
		if(work.jobs[job].employer){
			var formattedEmployer = 
				HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		}
		if(work.jobs[job].title){
			var formattedJobTitle = 
				HTMLworkTitle.replace("%data%", work.jobs[job].title);
		}
		$(".work-entry:last").append(formattedEmployer + formattedJobTitle);

		if(work.jobs[job].location){
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		}
		if(work.jobs[job]["dates worked"]){
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job]["dates worked"]));
		}
		if (work.jobs[job].description){
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
		}
	}
}

displayWork();

$(document).click(function(loc){
	logClicks(loc.pageX, loc.pageY);
});


function locationizer(work_ojb){
	var work_locations = []
	for(var job = 0; job < work_ojb.jobs.length; job++){
		work_locations.push(work_ojb.jobs[job].location);
	}
	return work_locations;

}
console.log(locationizer(work));


function inName(){
	var my_name = bio.name.trim().split(" ");
	var first = my_name[0].slice(0,1).toUpperCase() + 
		my_name[0].slice(1).toLowerCase();
	var last = my_name[1].toUpperCase();
	return first + " " + last;
}

$("#main").append(internationalizeButton);

projects.display = function() {
	for(var proj = 0; proj < projects.projects.length; proj++){
		$("#projects").append(HTMLprojectStart);
		if(projects.projects[proj].title){
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[proj].title));
		}
		if(projects.projects[proj].dates){
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[proj].dates));
		}
		if(projects.projects[proj].description){
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[proj].description));
		}
		if(projects.projects[proj].images){
			for(var image = 0; image < projects.projects[proj].images.length; image++){
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]));
			}
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);