/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const renderTweets = function(tweets, outputElement) {
    $(outputElement).empty();
    $.each(tweets, (index, tweetObject) => $(outputElement)
      .prepend(createTweetElement(tweetObject))
    );
  };

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
    </article>`

    return $article;
  };

  const loadTweets = (outputElement) => {
    $.ajax('/tweets', { method: 'GET' })
    .then((tweets) => {
      renderTweets(tweets, outputElement);
    });
  };

  loadTweets('#tweets-container');

  const validate = {
    minLength: {
      isValid: false,
      message: null,
      eval: function(input) {
        if (!input) {
          this.isValid = false;
          this.message = 'Please say something in your tweet!';
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
        if (input.length >= maxLength) {
          this.isValid = false;
          this.message = `Tweets cannot exceed ${maxLength} characters`;
          return this.isValid
        }
        this.isValid = true;
        return this.isValid;
      },
    },
    eval: function(input, maxLength) {
      this.minLength.eval(input);
      this.maxLength.eval(input, maxLength);
    },
  };

  Object.defineProperty(validate, 'eval', { enumerable: false });
  Object.defineProperty(validate.minLength, 'eval', { enumerable: false });
  Object.defineProperty(validate.maxLength, 'eval', { enumerable: false });

  const $newTweetForm = $('#new-tweet');
  $newTweetForm.on('submit', (event) => {
    event.preventDefault();
    const tweetData = $newTweetForm.serialize();
    const $tweetInputElement = ('#tweet-text');
    const tweetInputValue = $($tweetInputElement).val();
    validate.eval(tweetInputValue, 140);
    if (validate.minLength.isValid === false) {
      alert(validate.minLength.message);
      return;
    }
    if (validate.maxLength.isValid === false) {
      alert(validate.maxLength.message);
      return;
    }
    $.post('/tweets', tweetData, (response) => {
      console.log('POSTED!')
      loadTweets('#tweets-container');
    });
  });

});