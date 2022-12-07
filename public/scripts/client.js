/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const tweetHTML = {
    user: {
      name: $('article.tweet header .user-name'),
      handle: $('article.tweet header .user-handle'),
      avatar: $('article.tweet header .user-image'),
    },
    content: {
      text: $('article.tweet .content-text')
    }
  }

  const createTweetElement  = (tweetObject) => {
    $(tweetHTML.user.name).text(tweetObject.user.name);
    $(tweetHTML.user.handle).text(tweetObject.user.handle);
    $(tweetHTML.user.avatar).attr({
      'src': tweetObject.user.avatars,
      'alt': `Profile image for ${tweetObject.user.name}`
    });
    $(tweetHTML.content.text).text(tweetObject.content.text);
  }

  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); 
});

