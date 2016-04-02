var bio = {
	"name": "coralv",
	"role": "unemployed",
	"contacts": {
		"mobile": "none",
		"email":"email@address.com",
		"github":"gitme"
	},
	"welcomeMessage": "hey guys",
	"skills": [
		"look", "at", "all", "these", "skills"
	],
	"location":"a place"
}


var work = {
	"jobs" : [
		{
		"first job": [
			{
			"employer":"a place",
			"title":"go-to guy",
			"location":"gotham",
			"dates worked":"some time in the past",
			"description":"boring work"
			}], 
		"second job": [
			{
			"employer":"another place",
			"title":"that guy",
			"location":"big city",
			"dates worked":"some time in the distant past",
			"description":"more boring work"
			}]
	}]
}


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
}


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
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);


if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for (i = 0; i < bio.skills.length; i++) {
		var skill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills-h3").append(skill);
	}
}

