/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . Also make any necessary adjustments to make this app accessible. */

function getDataFromApi(artist, title, callback) {
$.getJSON(`https://api.lyrics.ovh/v1/${artist}/${title}`, callback)
  }
  
  function displaySearchData(data) {
   $('.js-search-results').html(`${data.lyrics}`);
  }
  
  function watchSubmit() {
  $('.js-search-form').submit(function(event){
      event.preventDefault();
      let query1 = $(event.currentTarget).find('.js-query-artist');
      let query2 = $(event.currentTarget).find('.js-query-title');
      let qVal1 = query1.val();
      let qVal2 = query2.val();
      query1.val("");
      query2.val("");
      getDataFromApi(qVal1, qVal2, displaySearchData);
  })
  }
  
  $(watchSubmit);