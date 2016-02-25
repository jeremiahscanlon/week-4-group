$(document).ready(function(){

var twits = {
  kayne: {
    id: 'kayne',
    handle: '@kaynewest',
    tweets: [
      "I am your OG and I will be respected as such",
      "I know you mad every time you look at your child that this girl got you for 18 years",
      "You let a stripper trap you",
      "You have distracted from my creative process"
    ]
  },
  jayden: {
    id: 'jayden',
    handle: '@officialjaden',
    tweets: [
      "If everybody in the world dropped out of school we would have amuch more intelligent society.",
      "I encourage you all to unfollow me so I can be left with people who actually appreciate philosophy and poetry.",
      "Most trees are blue",
      "Every 7 years your body is completely replaced with entirely new cells so just because you look the same doesn't mean you are."
    ]
  }
}

var container={
	id:"",
}

var displayTweet=function(){
	var twitArray=[];
	var tweetArray=[];
	for(count in twits){
		twitArray.push(twits[count].id);}
	var randomTwit=twitArray[Math.floor(Math.random()*twitArray.length)];
	for(count in twits){
		if(twits[count].id==randomTwit){
			tweetArray=twits[count].tweets;}}
	var randomTweet=tweetArray[Math.floor(Math.random()*tweetArray.length)];
	$(".TweetDisplay").html(randomTweet);
	container.id=randomTwit;}

var guessTweet=function(guess){
	if(container.id==guess){
		$(".RightOrWrong").append("<h2>YOU GOT IT!</h2>");
	}
	else{
		$(".RightOrWrong").append("<h2>WRONG!</h2>");
	}
	displayTweet();
}

displayTweet();
$( ".Kanye" ).on( "click", function(){
	guessTweet('kayne');})

$(".Jayden").on("click", function(){
	guessTweet('jayden');})

});