// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '787407641425703', // your App ID
		'clientSecret' 	: '76a99f631f97b75d769fb181808ac228', // your App Secret
		'callbackURL' 	: 'https://ide.c9.io/neha23/googleauth/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'Rv3UXESWgvim2ldGQywHtvlId',
		'consumerSecret' 	: 'VutBT9rLTHHMn0DnUdMD3z6jftBkLti32vrbyDNxZVxj8e044D',
		'callbackURL' 		: 'https://ide.c9.io/neha23/googleauth/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '710570423030-bit127s7f3492u5jtv54l98tsa308i7r.apps.googleusercontent.com',
		'clientSecret' 	: 'jlYbBhcH7L94d1QaRHSsfo_D',
		'callbackURL' 	: 'https://ide.c9.io/neha23/googleauth/auth/google/callback'
	}

};