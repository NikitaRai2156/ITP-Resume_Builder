
// Bio Object
 var bio = {
 	"name" : "Nikita Rai",
 	"role" : "Web Developer",
 	"contacts" : {
 		"mobile": "1234567890",
 		"email" : "<a href='mailto:nikrc15@gmail.com'>nikrc15@gmail.com</a>",
 		"github" : "<a href='https://github.com/NikitaRai2156'>Nikita Rai</a>",
 		"twitter" : "<a href='#'>@nikitarai</a>",
 		"location" : "India"
 	},
 	"welcomeMessage" : "Happiness can be found even in the darkest of times, only if one remembers to turn on the light.",
 	"skills" : [
       "HTML/CSS", "JavaScript", "Python", "Cryogenic Sleep"
 	],
 	"bioPic" : "https://goo.gl/10SJjl"
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  formattedContacts = [];

  formattedContacts.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
  formattedContacts.push(HTMLemail.replace('%data%', bio.contacts.email));
  formattedContacts.push(HTMLgithub.replace('%data%', bio.contacts.github));
  formattedContacts.push(HTMLtwitter.replace('%data%', bio.contacts.twitter));
  formattedContacts.push(HTMLlocation.replace('%data%', bio.contacts.location));

  $("#header").prepend(formattedBioPic);
  $("#header").prepend(formattedName, formattedRole);
  $("#header").append(formattedWelcomeMsg);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for(skill in bio.skills) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }

    for(contact in formattedContacts) {
      $("#topContacts").append(formattedContacts[contact]);
      $("#footerContacts").append(formattedContacts[contact]);
    }
  }
};
bio.display();

 // Work Object
 var work = {
 	"jobs": [
       {
         "employer": "Udacity",
         "title": "Web Developer",
         "dates": "January 2017-Future",
         "location": "New Delhi",
         "description": "Those who don't believe in magic will never find it."
       },
      {
      	"employer": "Google",
      	"title": "Best Web Developer",
      	"dates": "January 2019-Future",
        "location": "Bangalore",
      	"description": "If you can believe it, you can do it."
      }

 	]
};

work.display = function() {
  if(work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);

    for(job in work.jobs) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

      var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

      $(".work-entry:last").append(formattedEmployerWorkTitle);
      $(".work-entry:last").append(formattedDatesWorked);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedWorkDescription);
    }
  }
};
work.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

// projects Object
var projects = {
	"projects": [
      {
      	"title": "My Portfolio",
        "dates": "June 2016",
        "description": "I made a portfolio as the first project for the Front-End Nanodegree.",
        "images": ["images/p1.PNG"]
      },
      {
        "title": "Movie Website",
        "dates": "September 2016",
        "description": "I made a webpage consisting of poster art and trailers of various movies.",
        "images": ["images/p2.PNG"]
      },
      {
      	"title": "Harry Potter MadLibs Game",
        "dates": "September 2016",
        "description": "I made a Mad Libs style harry Potter Trivia game.",
        "images": ["images/p3.PNG"]
      }
	]
};

projects.display = function() {
  if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
};
projects.display();

// Education Object
var education = {

 "schools": [
       {
         "name": "St. Peter's Academy",
         "location": "Patiala",
         "degree": "High School",
         "majors": ["CS"],
         "dates": 2012,
         "url": "http://saintpeterspatiala.com"
       },
       {
         "name": "NSIT",
         "location": "New Delhi",
         "degree": "BTech",
         "majors": ["CS"],
         "dates": 2015,
         "url": "http://nsitonline.com"
       }
 ],
    "onlineCourses": [
      {
       "title": "JavaScript Basics",
       "school": "Udacity",
       "dates": 2016,
       "url": "http://www.udacity.com/course/ud804"
      },
      {
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": 2017,
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe2"
      },
      {
        "title": "Intro to Programming Nanodegree",
        "school": "Udacity",
        "dates": 2017,
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
      },
      {
        "title" :"Intro to HTML and CSS" ,
        "school" : "Udacity",
        "dates" : "2016",
        "url" : "https://www.udacity.com/course/ud304"
      }
    ]
};


education.display = function() {
  if(education.schools.length > 0 || education.onlineCourses.length > 0) {
    for(i in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
    }

    if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
  }
};

education.display();
$('#mapDiv').append(googleMap);
