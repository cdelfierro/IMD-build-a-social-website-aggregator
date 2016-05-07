Meteor.methods({
    check_webpage: function(url) {
        this.unblock();
        return Meteor.http.get(url, {"npmRequestOptions" : {"gzip" : true}});
    }
});
