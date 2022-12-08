/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const renderTweets = function(tweets, outputElement) {
    $(outputElement).empty();
    $.each(tweets, (index, tweetObject) => $('#tweets-container')
      .append(createTweetElement(tweetObject))
    );
  };

  const createTweetElement  = (tweetObject) => {
    // const tweetAgeInDays = calculateDateDiff('days', Date.now(), new Date(tweetObject.created_at));
    // const ageOutput = tweetAgeInDays <= 1 ? 'Today' : `${tweetAgeInDays} days ago`;
    const ageOutput = timeago.format(tweetObject.created_at);
    
    const $article = 
    `<article class="tweet">
      <header>
        <img src='${tweetObject.user.avatars}' alt='Profile image for ${tweetObject.user.name}' class="user-image" />
        <p class="user-name">${tweetObject.user.name}</p>
        <p class="user-handle">${tweetObject.user.handle}</p>
      </header>
      <p class="content-text">${tweetObject.content.text}</p>
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

  // renderTweets(data, '#tweets-container');

});

