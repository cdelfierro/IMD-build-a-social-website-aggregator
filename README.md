#Social website aggregator using Meteor. 

A social website aggregator allows users to share, discuss and rank interesting webpages they have found. The purpose of the application is to allow users to share, discuss and rate pages they find on the internet.

This project implements the following features:

* Users can register and login.
* Users can post new websites if they are logged in. Websites are posted by users with an URL.
* Users can up and down vote webpages by clicking a plus or a minus button. Anonymous users also can up or down vote a site.
* Websites are listed with the most up voted site first. Down vote does not count to the listing.
* The listing page shows when the website was added and how many up and down votes it has.
* Users can move to a detail page for a website when they can view the URL and the description o the site.
* On the detail page, users can post comments about a webpage, and they are displayed below the description of the webpage.

##Additional features:

###Automatic information

Pulls the information (title & description) of a website automagically given only the URL of the site. This is achieved using the HTTP package for Meteor.

##Planned(?) features:

###Search function

Implement a search function that allows the user to search within the listed sites for key words

###Website recommender

Recommend websites to users based on things they have up voted and commented on.

##How to run:
```bash
unzip IMD-build-a-social-website-aggregator-1.0.zip
cd IMD-build-a-social-website-aggregator-1.0/
meteor
```
-----

<dl>
  <dt>Meteor version</dt>
  <dd>1.3.2.4<dd>
</dl>
