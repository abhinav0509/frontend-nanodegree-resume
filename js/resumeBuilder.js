/*
This is empty on purpose! Your code to build the resume will go here.

 */

var bio = {
 "name": "Abhinav Raj",
 "role": "Web Developer",
 "contacts": [{
  "mobile": "9975063684",
  "email": "abhinav.raj0509@gmail.com",
  "twitter": "_ItsAbhinav",
  "github": "abhinav0509",
  "location": "NewDelhi"
 }],

 "welcomeMessage": "Imagine Create Inspire",
 "image": "images/mypic4.jpg",
 "skills": ["HTML", "CSS", "JavaScript", "jQuery", "Java"]

}

var education = {
 "schools": [{
   "name": "D.A.V Public School",
   "location": "Ranchi,India",
   "degree": "HSC",
   "majors": ["Science"],
   "dates": "2009",
   "url": "http://davhehal.org/"


  },
  {
   "name": "MIT AOE",
   "location": "Pune,India",
   "degree": "Bachelor Of Engineering",
   "majors": ["Computer Science"],
   "dates": "2015",
   "url": "http://www.mitaoe.ac.in/"

  }
 ],
 "onlineCourses": [{
  "title": "Front-End Developer Nanodegree",
  "school": "Udacity",
  "dates": "April-2017 to Current",
  "url": "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/"

 }]
};

var work = {
 "jobs": [{
   "employer": "CSC e-governance India",
   "title": "Software Engineer",
   "location": "NewDelhi",
   "dates": "Oct-2015",
   "description": "This was my first company in tech I worked extensively on CodeIgniter framework for php.I also designed various HTML forms as per requirement."
  }


 ]


}

var projects = {
 "project": [{

   "title": "Sentiment Analysis",
   "dates": "Aug-2014 To May-2015",
   "description": "As a final year project,we worked on sentiment analysis system,The objective of our project was to build an interactive web portal wherein the comparative analysis of various colleges can be visualized.The feedback and reviews acquired from students on portal was used as data set. In this approach, document level sentiment analysis was used with techniques of natural language processing(NLP).",
   "images": ["images/sentiment1.jpg", "images/sentiment2.jpg", "images/sentiment3.jpg"]
  },
  {

   "title": "Stormy An Android Weather App",
   "dates": "Sep-2015",
   "description": "Stormy is an android app that lets you know the weather forecast on basis of latitude and longitude which is hardcoded right now as input. It dynamically fetches data from website ‘forecast.io’ using its API, It tells you other information related to weather like Temperature, Humidity, Chances of Rain/Snow, Summary, Icon to match summary, Current Time in a beautiful UI.I made this app as part of my learning android development from treehouse.",
   "images": ["images/stormy1.png", "images/stormy2.png", "images/stormy3.png"]
  }


 ]


}
bio.display = function() {
 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 var formattedImage = HTMLbioPic.replace("%data%", bio.image);
 var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

 $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
 $("#header").append(HTMLskillsStart);

 for (skill in bio.skills) {
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
  $("#skills").append(formattedSkill);
 };

 for (contact in bio.contacts) {
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);

  $("#topContacts,#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
 };




};

education.display = function() {
 for (school in education.schools) {
  $("#education").append(HTMLschoolStart);

  var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

  //console.log(formattedSchoolName+formattedLocation+formattedDegree);

  $(".education-entry:last").append(formattedSchoolName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
 };
 $("#education").append(HTMLonlineClasses);
 for (course in education.onlineCourses) {
  var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
  var formattedSchoolName = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
  var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
  var url = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

  $("#education").append(HTMLschoolStart);
  var online_section = $("div.education-entry:last");
  online_section.append(formattedTitle, formattedSchoolName, formattedDates, url);


 }

}

work.display = function() {
 for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

  $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription);

 }

}
projects.display = function() {
 for (entry in projects.project) {
  $("#projects").append(HTMLprojectStart);
  var projectTitle = HTMLworkTitle.replace("%data%", projects.project[entry].title);
  var projectDates = HTMLprojectDates.replace("%data%", projects.project[entry].dates);
  var projectDesc = HTMLprojectDescription.replace("%data%", projects.project[entry].description);
  //console.log(projectTitle+projectDates+projectDesc);
  $(".project-entry:last").append(projectTitle, projectDates, projectDesc);

  for (image in projects.project[entry].images) {
   var projectImage = HTMLprojectImage.replace("%data%", projects.project[entry].images[image]);
   //console.log(projectImage);
   $(".project-entry:last").append(projectImage);
   $(".project-entry:last").find("img").css({
    "width": "300px",
    "height": "300px"
   });

  }


 }

}


bio.display();
work.display();
education.display();
projects.display();

$("#main").append(internationalizeButton);

function inName(full_name) {
 var name = full_name.split(" ");
 var fname = name[0].substring(0, 1).toUpperCase() + name[0].substring(1).toLowerCase();
 var lname = name[1].toUpperCase();
 return fname + " " + lname;
}

$("#mapDiv").append(googleMap);
