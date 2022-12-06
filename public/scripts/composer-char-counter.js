$(document).ready(function() {
  const tweetText = $('#tweet-text');
  $(tweetText).on('keypress', function() {
    console.log(this.textLength);
  })
});