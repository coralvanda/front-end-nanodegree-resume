var bio = {
	"name": "Eric",
	"role": "unemployed",
	"contacts": {
		"mobile": "none",
		"email":"email@address.com",
		"github":"coralvanda"
	},
	"welcomeMessage": "Thank you for viewing my resume",
	"skills": [
		"look", "at", "all", "these", "skills"
	],
	"location":"Italy"
};


var work = {
	"jobs" : [
		{
			"employer":"Beacon Communications",
			"title":"Classifieds rep",
			"location":"Warwick",
			"dates worked":"2006-2008",
			"description":"Take ads from customers, \
				paginate the ads, and post web content"
		}, 
		{
			"employer":"Tasca",
			"title":"Service rep",
			"location":"Warwick",
			"dates worked":"2009-2011",
			"description":"Help customers maintain and \
				repair their vehicles"
		},
		{
			"employer":"Inskip",
			"title":"Internet manager",
			"location":"Warwick",
			"dates worked":"2012-2014",
			"description":"Manage internet team, assist \
				internet customers, maintain online presence"
		}
	]
};


var education = { 
	"schools" : [
		{
		"name":"UPS",
		"city":"place",
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
};


var projects = {
	"first project": [
		{
		"title": "whatever",
		"dates": "not so long ago",
		"description": "did some things",
		"images":"no images"
		}
	],
	"second project": [
		{
		"title": "why bother",
		"dates": "very recent",
		"description": "did more things",
		"images":"still no images"
		}
	]
};


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