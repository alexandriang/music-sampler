$(document).ready(function() {

  function hideAll() {
    $('#image1').hide();
    $('#image2').hide();
    $('#image3').hide();
    $('#image4').hide();
  }


    hideAll();

    $('.albumIcon').click(function() {

      hideAll();

      switch ($(this).attr("id")) {
        case "divide":
          $('#image1').show();
          $('#image2').hide();
          $('#image3').hide();
          $('#image4').hide();
          break;
        case "multiply":
          $('#image2').show();
          $('#image1').hide();
          $('#image3').hide();
          $('#image4').hide();
          break;
        case "plus":
          $('#image3').show();
          $('#image1').hide();
          $('#image2').hide();
          $('#image4').hide();
          break;
        case "orange":
          $('#image4').show();
          $('#image1').hide();
          $('#image2').hide();
          $('#image3').hide();
          break;
      }
    });


});
