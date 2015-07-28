var timelineEvents = [{
        title: "Corona 2k12",
        description: "Scored second position in Web Designing at the Annual Tech Fest Corona 2k12 of Bhagwan Parshuram Institute of Technology (BPIT), a college of IPU, Delhi.",
        date: "April '12"
    }, {
        title: "Troika 2k13",
        description: "Scored first position in Web Designing at the Annual Tech Fest Troika 2k13 of Delhi Technical University (DTU)",
        date: "Jan 13"
    }, {
        title: "Meliora 2k13",
        description: "Scored first position in Web Designing at the Annual Tech Fest Meliora 2k13 of Delhi Technical University (DTU)",
        date: "Jan 13"
    }, {
        title: "Cynosure 13",
        description: "Scored first position in Web Designing at the Annual Tech Fest Cynosure '13 of Jagannath Institute of Management and Sciences (JIMS), Rohini.",
        date: "March 13"
    }, {
        title: "Corona 2k13",
        description: "Scored first position in Web Designing at the Annual Tech Fest Corona 2k13 of Bhagwan Parshuram Institute of Technology (BPIT), a college of IPU, Delhi.",
        date: "April 13"
    }, {
        title: "CSI Convention",
        description: "Scored first position in Web Designing at the CSI Convention at Bharti Vidyapeeth Institute (BVP)",
        date: "September 13"
    }, {
        title: "Troika 14",
        description: "Scored second position in Web Designing at the Annual Tech Fest Troika 2k14 of Delhi Technical University (DTU)",
        date: "Jan 14"
    }, {
        title: "Amity Youth Festival",
        description: "Scored first position in Q Head Challenge at the Amity Youth Festival '14 of Amity Noida",
        date: "Jan 14"
    }, {
        title: "Exurberance 2k14",
        description: "Scored second position in Web Designing at the Annual Tech Fest Exurberance 2k14 of Asia Pacific Institute of Management, Jasola",
        date: "Feb 14"
    }, {
        title: "Corona 2k14",
        description: "Scored second position in Web Designing at the Annual Tech Fest Corona 2k12 of Bhagwan Parshuram Institute of Technology (BPIT), a college of IPU, Delhi.",
        date: "Feb 14"
    }, {
        title: "Cython 2k14",
        description: "Scored first position in Web Designing at the Annual Tech Fest Cython 2k14 of Sri Guru Gobind Singh College of Commerce, Pitampura (SGGSCC)",
        date: "March 14"
    }, {
        title: "Gates 2k14",
        description: "Scored first position in Java Beans Challenge at the Annual Tech Fest Gates 2k14 of Guru Tegh Bahadur Institute of Technology, Rajouri Garden (GTBIT)",
        date: "April 14"
    }

];

$timeline_item_template = $('#timeline-item-template').html();

$timeline_item_template_rendered = Mustache.render($timeline_item_template, {
    events: timelineEvents
});

$('#cd-timeline').html($timeline_item_template_rendered);
