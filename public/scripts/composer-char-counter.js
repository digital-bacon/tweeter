$(document).ready(function() {
  const tweetTextInput = $('#tweet-text');
  const tweetTextParent = $(tweetTextInput).parent();
  const tweetCounter = $(tweetTextParent).find('.counter');
  const maxTweetLength = 149;
  $(tweetCounter).text(maxTweetLength);
  $(tweetTextInput).on('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }

    const currentLength = this.value.length;
    const counterValue = maxTweetLength - currentLength;
    $(tweetCounter).text(counterValue);
    if (counterValue < 0) {
      $(tweetCounter).removeClass('danger').addClass('danger');
    }
  })
});