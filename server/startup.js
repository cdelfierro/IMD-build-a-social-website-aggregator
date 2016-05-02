// start up function that creates entries in the Websites databases.
Meteor.startup(function () {
// code to run on server at startup
    if (!Websites.findOne()){
        console.log("No websites yet. Creating starter data.");
          Websites.insert({
            title:"Github",
            url:"https://github.com",
            description:"This is how people build software.",
            createdOn:new Date()
        });
         Websites.insert({
            title:"Meteor",
            url:"https://www.meteor.com",
            description:"Build Apps with Javascript.",
            createdOn:new Date()
        });
         Websites.insert({
            title:"Coursera",
            url:"http://www.coursera.org",
            description:"Universal access to the world’s best education.",
            createdOn:new Date()
        });
        Websites.insert({
            title:"Google",
            url:"http://www.google.com",
            description:"Popular search engine.",
            createdOn:new Date()
        });
    }
});
