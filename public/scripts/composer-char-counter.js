$(document).ready(function() {
  const $tweetInputElement = $('#tweet-text');
  const $counterElement = $('.counter').text(MAX_TWEET_LENGTH);
  $($tweetInputElement).on('keyup', function(event) {
    const currentTweetLength = this.value.length;
    const counterText = MAX_TWEET_LENGTH - currentTweetLength;
    $counterElement.text(counterText);
    const isLengthExceeded = counterText < 0;
    if (isLengthExceeded === true) {
      $counterElement.removeClass('danger').addClass('danger');
      return;
    }

    $counterElement.removeClass('danger');
  });

});