$(() => {
  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const getCounterText = (maxTweetLength, currentTweetLength) => {
    const counterValue = maxTweetLength - currentTweetLength;
    return counterValue;
  }

  const isTweetLengthExceeded = (maxTweetLength, currentTweetLength) => {
    isExceeded = (maxTweetLength - currentTweetLength) < 0;
    return isExceeded;
  }

  const tweetInputElement = $('#tweet-text');
  const counterElement = $('.counter');
  const maxTweetLength = MAX_TWEET_LENGTH;
  $(counterElement).text(maxTweetLength);
  $(tweetInputElement).on('keyup', function(event) {
    handleEnterKey(event);
    const currentLength = this.value.length;
    const counterText = getCounterText(maxTweetLength, currentLength);
    $(counterElement).text(counterText);
    if (isTweetLengthExceeded(maxTweetLength, currentLength)) {
      $(counterElement).removeClass('danger').addClass('danger');
    } else {
      $(counterElement).removeClass('danger');
    }

  })

});