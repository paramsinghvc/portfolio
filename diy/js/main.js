$(document).ready(function() {
    $('.menu a').on('click', function() {
        $('#menu-checkbox').trigger('click');
    });

    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'skills', 'projects', 'certifications', 'achievements', 'contact'],
        controlArrows: true,
        scrollBar: true,
        scrollOverflow: true,
        afterRender: function() {
            window.sr = new scrollReveal();
        }
    });

    var skills = [
        'HTML 5',
        'CSS 3',
        'Bootstrap',
        'Foundation',
        'JQuery',
        'JavaScript',
        'Titanium',
        'AngularJS',
        'BackboneJS',
        'RequireJS',
        'ProtractorJS',
        'UnderscoreJS',
        'NodeJS',
        'Laravel',
        'AMD',
        'Nginx',
        'Git',
        'Grunt',
        'Selenium',
        'Jasmine',
        'MySQL',
        'Mixpanel',
        'Google Analytics',
        'Mongoose',
        'REST APIs',
        'ApiDoc',
        'Heroku',
        'Amazon Services',
        'Jade', 'Handlebars', 'Mustache', 'Mandrill',
        'SEO',
        'Visual Basic',
        'C',
        'C++',
        'C#',
        'Java',
        'JSP/Servlets',
        'Shell Scripting',
        'WPF',
        'Sass',
        'Less',
        'MATLAB',
        'AutoCAD',
        'Android',
        'Linux'
    ];



    $.each(skills, function(index, value) {

        $('#pillsWrapper').append('<div class="pill">' + value + '</div>');
    });

   
});
