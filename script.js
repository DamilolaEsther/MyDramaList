$(document).ready(function () {
    // When mouse hovers over a card, show the plot summary
    $(".card").on("mouseover", function () {
      const plot = $(this).data("plot");
      $(this).find("p").html(`<strong>Plot:</strong><br>${plot}`);
      $(this).css("background-color", "#ffe4e1"); // soft pink
    });
  
    // When the card is clicked, show the genre
    $(".card").on("click", function () {
      const genre = $(this).data("genre");
      $(this).find("p").html(`<strong>Genre:</strong><br>${genre}`);
      $(this).css("background-color", "#e0f7fa"); // light teal
    });
  
    // When the mouse leaves the card, reset to title + actor
    $(".card").on("mouseout", function () {
      const title = $(this).data("title");
      const actor = $(this).data("actor");
      $(this).find("p").html(`${title}<br><span>${actor}</span>`);
      $(this).css("background-color", "white");
    });
  });
  