var gridster;

$(function () {
    /*
    $('.gridster player-revert>a').click(function (e) {
        e.preventDefault();
        $(this).parent().removeClass("player-revert");
    });
    */
    gridster = $(".gridster > ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140],
        min_cols: 6,
        resize: {
            enabled: true
        }
    }).data('gridster');

    // var collection = [
    //     ['<li><div class="title">drag</div>Widget content</li>', 1, 2],
    //     ['<li><div class="title">drag</div>Widget content</li>', 5, 2],
    //     ['<li><div class="title">drag</div>Widget content</li>', 3, 2],
    //     ['<li><div class="title">drag</div>Widget content</li>', 2, 1],
    //     ['<li><div class="title">drag</div>Widget content</li>', 4, 1],
    //     ['<li><div class="title">drag</div>Widget content</li>', 1, 2],
    //     ['<li><div class="title">drag</div>Widget content</li>', 2, 1],
    //     ['<li><div class="title">drag</div>Widget content</li>', 3, 2],
    //     ['<li><div class="title">drag</div>Widget content</li>', 1, 1],
    //     ['<li><div class="title">drag</div>Widget content</li>', 2, 2],
    //     ['<li><div class="title">drag</div>Widget content</li>', 1, 3],
    // ];

    // $.each(collection, function(i, widget){
    //     gridster.add_widget.apply(gridster, widget)
    // });

});