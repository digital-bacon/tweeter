/*
 * Client-side JS logic goes here
 */
$(document).ready(function() {
  // An object used to validate tweet form data
  const validate = {
    minLength: {
      isValid: false,
      message: null,
      eval: function(input, minLength) {
        if (!input || input.length < minLength) {
          this.isValid = false;
          this.message = `Tweets need to be at least ${minLength} character(s) long`;
          return this.isValid;
        }
        this.isValid = true;
        return this.isValid;
      },
    },
    maxLength: {
      isValid: false,
      message: null,
      eval: function(input, maxLength) {
        if (input.length > maxLength) {
          this.isValid = false;
          this.message = `Tweets cannot exceed ${maxLength} character(s) long`;
          return this.isValid;
        }
        this.isValid = true;
        return this.isValid;
      },
    },
    eval: function(input, minLength, maxLength) {
      this.minLength.eval(input, minLength);
      this.maxLength.eval(input, maxLength);
    },
  };

  Object.defineProperty(validate, 'eval', { enumerable: false });
  Object.defineProperty(validate.minLength, 'eval', { enumerable: false });
  Object.defineProperty(validate.maxLength, 'eval', { enumerable: false });

  /**
   * Function that builts a jQuery html object containing a form
   * validation error message
   * @param {string} errorText - The error text to include in the html
   * element
   * @returns {Object} The jQuery html object
   */
  const generateErrorElement = (errorText) => {
    const $errorElement = $("<div>")
      .addClass('error')
      .append('<i class="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;')
      .append(errorText);
    return $errorElement;     
  }

  const $newTweetForm = $('#new-tweet');
  $newTweetForm.on('submit', (event) => {
    event.preventDefault();
    const tweetData = $newTweetForm.serialize();
    const $tweetInputElement = ('#tweet-text');
    const tweetInputValue = $($tweetInputElement).val();
    validate.eval(tweetInputValue, MIN_TWEET_LENGTH, MAX_TWEET_LENGTH);
    const errorMessages = [];
    if (validate.minLength.isValid === false) {
      errorMessages.push(validate.minLength.message);
    }

    if (validate.maxLength.isValid === false) {
      errorMessages.push(validate.maxLength.message);
    }

    if (errorMessages.length > 0) {
      $('.error').remove();
      const $errorElement = generateErrorElement(errorMessages[0]);
      $errorElement
        .insertBefore($tweetInputElement)
        .hide()
        .show('slow');
      return;
    }

    $.post('/tweets', tweetData, () => {
      $('.error').remove();
      $newTweetForm[0].reset();
      $('.counter').text(`${MAX_TWEET_LENGTH}`);
      loadTweets('#tweets-container');
    });

  });

  /**
   * Function that receives tweet data and prepends each tweet as html
   * to an specified existing output element
   * @param {Object[]} tweets - An array of tweet objects
   * @param {string} outputElement - The selector of the html element
   * to which you wish to prepend the resulting html. Accepts any valid
   * jQuery selector
   */
  const renderTweets = function(tweets, outputElement) {
    $(outputElement).empty();
    $.each(tweets, (index, tweetObject) => $(outputElement)
      .prepend(createTweetElement(tweetObject))
    );
  };

  /**
   * Function that receives tweet data and creates a jQuery html
   * object for the tweet
   * @param {Object} tweetObject - An object containing the tweet data
   * @returns {Object} The jQuery html object
   */
  const createTweetElement  = (tweetObject) => {
    const ageOutput = timeago.format(tweetObject.created_at);
    const $userImage = $('<img>')
      .addClass('user-image')
      .attr({
        'src': tweetObject.user.avatars,
        'alt': `Profile image for ${tweetObject.user.name}`
      });
    const $userName = $('<p>')
      .addClass('user-name')
      .text(tweetObject.user.name);
    const $userHandle = $('<p>')
      .addClass('user-handle')
      .text(tweetObject.user.handle);
    const $contentText = $('<p>')
      .addClass('content-text')
      .text(tweetObject.content.text);
    const $article =
    `<article class="tweet">
      <header>
        ${$userImage.prop('outerHTML')}
        ${$userName.prop('outerHTML')}
        ${$userHandle.prop('outerHTML')}
      </header>
      ${$contentText.prop('outerHTML')}
      <footer>
        <p class="tweet-age">${ageOutput}</p>
        <p class="actions">
          <a href="#" title="Report tweet"><i class="fa-solid fa-flag"></i></a>
          <a href="#" title="Retweet"><i class="fa-solid fa-retweet"></i></a>
          <a href="#" title="Save tweet"><i class="fa-solid fa-heart"></i></a>
        </p>
      </footer>
    </article>`;

    return $article;
  };

  /**
   * Function that retrieves tweet data from a pre-configured endpoint,
   * and then generates HTML for each tweet, outputting the HTML to the
   * specified existing output element
   * @param {string} outputElement - The selector of the html element
   * to which you wish to prepend the resulting html. Accepts any valid
   * jQuery selector
   */
  const loadTweets = (outputElement) => {
    $.ajax('/tweets', { method: 'GET' })
      .then((tweets) => {
        renderTweets(tweets, outputElement);
      });
  };
  
  // Pre-populate tweets
  loadTweets('#tweets-container');

});