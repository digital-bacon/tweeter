/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const calculateDateDiff = (returnMeasurement, date1, date2) => {
    const calculations = {
      milliseconds: function() {
        return date1 - date2;
      },
      seconds: function() {
        return Math.floor(this.milliseconds() / 1000);
      },
      minutes: function() {
        return Math.floor(this.seconds() / 60);
      },
      hours: function() {
        return Math.floor(this.minutes() / 60);
      },
      days: function() {
        return Math.floor(this.hours() / 24);
      },
      years: function() {
        return Math.floor(this.days() / 365);
      },
    }
    const output = calculations[returnMeasurement.toLowerCase()]();
    return output;
  }

  // Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

  const renderTweets = function(tweets, outputElement) {
    $(outputElement).empty();
    $.each(tweets, (index, tweetObject) => $('#tweets-container')
      .append(createTweetElement(tweetObject))
    );
  };

  const createTweetElement  = (tweetObject) => {
    const $article = $('<article>');
    const $header = $('<header>');
    const $footer = $('<footer>');
    const $userImage = $('<img>');
    const $userName = $('<p>');
    const $userHandle = $('<p>');
    const $contentText = $('<p>');
    const $tweetAge = $('<p>');
    const $actions = $('<p>');
    const $actionReportTweet = $('<a>');
    const $actionRetweet = $('<a>');
    const $actionSaveTweet = $('<a>');

    $($article).append($header);
    $($article).append($contentText);
    $($article).append($footer);
    $($header).append($userImage);
    $($header).append($userName);
    $($header).append($userHandle);
    $($footer).append($tweetAge);
    $($footer).append($actions);
    $($actions).append($actionReportTweet);
    $($actions).append($actionRetweet);
    $($actions).append($actionSaveTweet);

    $($article)
      .addClass('tweet');
    $($userName)
      .addClass('user-name')
      .text(tweetObject.user.name);
    $($userHandle)
      .addClass('user-handle')
      .text(tweetObject.user.handle);
    $($userImage)
      .addClass('user-image')  
      .attr({
        'src': tweetObject.user.avatars,
        'alt': `Profile image for ${tweetObject.user.name}`
      });
    $($contentText)
      .addClass('content-text')  
      .text(tweetObject.content.text);
    const tweetAgeInDays = calculateDateDiff('days', Date.now(), new Date(tweetObject.created_at));
    const ageOutput = tweetAgeInDays <= 1 ? 'Today' : `${tweetAgeInDays} days ago`;
    $($tweetAge)
      .addClass('tweet-age')
      .text(ageOutput);
    $($actions)
      .addClass('actions');
    $($actionReportTweet)
      .attr({
        'href': '#',
        'title': 'Report tweet',
      })
      .html(`<i class='fa-solid fa-flag'></i>`);
    $($actionRetweet)
      .attr({
        'href': '#',
        'title': 'Retweet',
      })
      .html(`<i class='fa-solid fa-retweet'></i>`);
    $($actionSaveTweet)
      .attr({
        'href': '#',
        'title': 'Save Tweet',
      })
      .html(`<i class='fa-solid fa-heart'></i>`);

    return $article;
  }

  renderTweets(data, '#tweets-container');

});

