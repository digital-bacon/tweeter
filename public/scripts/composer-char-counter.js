$(document).ready(function() {
  const tweetText = $('#tweet-text');
  const tweetCounter = $('output.counter');
  $(tweetText).on('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
    const tweetLength = this.value.length;
    $(tweetCounter).text(tweetLength);
  })
});