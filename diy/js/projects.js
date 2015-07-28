$(document).ready(function() {

    project_images = [{
        title: 'Recipe Rejoice',
        cover_image: '84',
        images: ['84', '81', '82', '83', '85', '86']
    }, {
        title: 'CarolHub',
        cover_image: 'b1',
        images: ['b1', 'b3', 'b4', 'b2']
    }, {
        title: 'Spin A Web',
        cover_image: 'c1',
        images: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16']
    }, {
        title: 'MeteorTube',
        cover_image: '91',
        images: []
    }, {
        title: 'Mercury',
        cover_image: '14',
        images: []
    }, {
        title: 'Cars',
        cover_image: '31',
        images: []
    }, {
        title: 'Vienna Chemicals',
        cover_image: '41',
        images: []
    }, {
        title: 'Pixellate',
        cover_image: '51',
        images: []
    }, {
        title: 'Billboard',
        cover_image: '22',
        images: []
    }, {
        title: 'LookManagers',
        cover_image: '61',
        images: []
    }, {
        title: 'Musejam',
        cover_image: '71',
        images: []
    }, {
        title: 'Hukumnama',
        cover_image: 'a1',
        images: []
    }, {
        title: 'GTBIT Website',
        cover_image: 'd1',
        images: []
    }, {
        title: 'JQuery Quiz',
        cover_image: 'e1',
        images: []
    }, {
        title: 'MingleBox',
        cover_image: 'f1',
        images: []
    }];

    $grid_item_template = $('#grid-item-template').html();

    $grid_item_template_rendered = Mustache.render($grid_item_template, {
        photos: project_images
    });

    $('.grid').html($grid_item_template_rendered);

    // Masonry
    var $progress, $status;
    var supportsProgress;
    var loadedImageCount = 0,
        imageCount;

    var $grid = $('.grid').imagesLoaded(function() {
        imageCount = $grid.find('.img').length;
    }).progress(function(imgLoad, image) {
        var $grid_item = $(image.img).parent().parent();
        $grid_item.removeClass('is-loading');
        if (!image.isLoaded) {
            $grid_item.addClass('is-broken');
        }
        loadedImageCount++;        
    }).done(function() {
        $grid.masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            percentPosition: true
        });

        $grid.sliphover();
    });

})
