$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox({
                  alwaysShowClose: true,
                  showArrows: true,
                  height: 100,
                });
            });
