$(document).ready(function () {
  //KARTICE - dodajem dogadaj za skrivanje i prikazivanje
  //pozivam class naziv:
  $(".zaglavlje")
    .eq(0)
    .click(function () {
      $(".podnozje").eq(0).slideToggle("slow");
    });

  $(".zaglavlje")
    .eq(1)
    .click(function () {
      $(".podnozje").eq(1).slideToggle("slow");
    });

  $(".zaglavlje")
    .eq(2)
    .click(function () {
      $(".podnozje").eq(2).slideToggle("slow");
    });

  //kvadratic na dnu
  //pozivam id naziv
  $("#oglas p").eq(1).hide();
  $("#oglas").mouseenter(function () {
    var animirana_sekcija = $("#oglas");
    var paragraf1 = $("#oglas p").eq(0);
    var paragraf2 = $("#oglas p").eq(1);

    paragraf1.fadeOut(1000);

    animirana_sekcija.animate(
      {
        width: "300px",
        height: "200px",
        fontSize: "36px",
        color: "#FFFFDF",
        backgroundColor: "#447AA8",
      },
      1500,
      function () {
        paragraf2.show();
      }
    );
  });
});
