// Accounts config
Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});

/////
// template helpers
/////

// helper function that returns all available websites
Template.website_list.helpers({
    websites:function(){
        return Websites.find({}, {sort: {upvotes: -1}});
    }
});

Template.website_item.helpers({
    format_date: function() {
        var website_id = this._id;
        date = Websites.findOne({_id: website_id}, {fields: {createdOn: 1}});
        return date.createdOn.toLocaleDateString() + " @ " + date.createdOn.toLocaleTimeString();
    }
})

/////
// template events
/////

Template.website_item.events({
    "click .js-upvote": function(event) {
        var website_id = this._id;
        Websites.update({_id: website_id}, {$inc: {upvotes: 1}});
        console.log("Up voting the "+ this.title + " website.");
        return false;// prevent the button from reloading the page
    },
    "click .js-downvote": function(event) {
        var website_id = this._id;
        Websites.update({_id: website_id}, {$inc: {downvotes: 1}});
        console.log("Down voting the "+ this.title + " website.");
        return false;// prevent the button from reloading the page
    }
})

Template.website_form.events({
    "click .js-toggle-website-form": function(event){
        $("#website_form").toggle('slow');
    },
    "submit .js-save-website-form": function(event){
        var url = event.target.url.value;
        var title = event.target.title.value;
        var description = event.target.description.value;

        if (Meteor.user()) {
            Websites.insert({
                url: url,
                title: title,
                description: description,
                createdOn: new Date(),
                upvotes: 0,
                downvotes: 0
            });
            console.log("Added site with url" + url);
        }

        $("#website_form").delay(1000).toggle('slow');
        return false;// stop the form submit from reloading the page
    }
});
