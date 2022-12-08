$(document).ready(function() {
  
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