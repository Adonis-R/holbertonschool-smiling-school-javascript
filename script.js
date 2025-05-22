      $(document).ready(function () {
        const quotesCarousel = $("#quotes-carousel");
        const loader = $(".loader");
        const carousel = $("#carouselExampleControls");

        // Afficher le loader avant la requête
        loader.show();

        // Requête AJAX pour récupérer les citations
        $.ajax({
          url: "https://smileschool-api.hbtn.info/quotes",
          method: "GET",
          success: function (data) {
            data.forEach((quote, index) => {
              const activeClass = index === 0 ? "active" : "";
              const quoteItem = `
                <div class="carousel-item ${activeClass}">
                  <div class="row mx-auto align-items-center">
                    <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                      <img
                        src="${quote.pic_url}"
                        class="d-block align-self-center"
                        alt="${quote.name}"
                      />
                    </div>
                    <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                      <div class="quote-text">
                        <p class="text-white">
                          « ${quote.text}
                        </p>
                        <h4 class="text-white font-weight-bold">${quote.name}</h4>
                        <span class="text-white">${quote.title}</span>
                      </div>
                    </div>
                  </div>
                </div>`;
              quotesCarousel.append(quoteItem);
            });
            loader.hide(); // Masquer le loader après le chargement
            carousel.removeClass("d-none"); // Afficher le carousel
          },
          error: function () {
            loader.hide(); // Masquer le loader en cas d'erreur
            alert("Impossible de charger les citations. Veuillez réessayer plus tard.");
          },
        });
      });