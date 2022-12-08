$(() => {
  
  const $newTweetForm = $('#new-tweet');
  $newTweetForm.on('submit', (event) => {
    event.preventDefault();
    const tweetData = $newTweetForm.serialize();
    $.post('/', tweetData, (response) => {
      console.log(response);
    });
  });
  
});