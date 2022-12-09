$(document).ready(function() {
  /**
   * Function that calculates total tweet length remaining
   * @param {string | Object} inputSelector - The selector of the counter
   * element. Accepts any valid jQuery selector
   * @param {number} maxLength - The maximum number of characters
   * allowed for this tweet
   * @returns {number} The total tweet length remaining
   */
  const getRemainingTweetLength = (inputSelector, maxLength) => {
    const currentLength = $(inputSelector).val().trim().length;
    const remainingLength = maxLength - currentLength;
    return remainingLength;
  };
  
  /**
   * Function that toggles a .danger class on the tweet counter
   * if the current tweet exceeds the remaining tweet length
   * @param {string | Object} counterSelector - The selector of the counter
   * element. Accepts any valid jQuery selector
   * @param {number} remainingTweetLength - The number of characters
   * remaining of allowed maximum for this tweet
   * @returns {undefined}
   */
  const setCounterClass = (counterSelector, remainingTweetLength) => {
    const $counterElement = $(counterSelector);
    if (remainingTweetLength < 0) {
      $($counterElement).removeClass('danger').addClass('danger');
      return;
    }

    $counterElement.removeClass('danger');
  };

  const $tweetInputElement = $('#tweet-text');
  const $counterElement = $('.counter').text(MAX_TWEET_LENGTH);
  $($tweetInputElement).on('keyup', () => {
    const counterValue = getRemainingTweetLength($tweetInputElement, MAX_TWEET_LENGTH);
    $($counterElement).text(counterValue);
    setCounterClass($counterElement, counterValue);
  });

});