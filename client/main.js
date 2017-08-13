import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Tracks = new Mongo.Collection('tracks');


var showPaymentOptions;

if (Meteor.isClient) {
	Template.body.helpers({
		tracks: function() {
			return Tracks.find();
		}
	});
	Template.body.events({
		'click .btn': function(e,t) {
			var x = this.name;
			$('#lease' + x).addClass("fadeOut");
			$('#exclusive' + x).addClass("fadeOut");
			setTimeout(function() {
				$('#lease' + x).css("display","none");
				$('#exclusive' + x).css("display","none");

				$('#paypal' + x).css("display","block");
				$('#paypal' + x).addClass("fadeIn");
				$('#venmo' + x).css("display","block");
				$('#venmo' + x).addClass("fadeIn");
				$('#card' + x).css("display","block");
				$('#card' + x).addClass("fadeIn");
			},1000);
		}
	})
}
