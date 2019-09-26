if (localStorage.getItem('studyToggle') === null) {
    localStorage.setItem('studyToggle', 'free');
} else {
    $( "input[type='radio']" ).change(function() {
        localStorage.setItem('studyToggle', $('input[name=inlineRadioOptions]:checked').val());
    });
    switch (localStorage.getItem('studyToggle')) {
        case 'Salah':
            $("#Salah").prop("checked", true);
            break;
        case 'Mahmoud':
            $("#Mahmoud").prop("checked", true);
            break;
        default:
            $("#Free").prop("checked", true);
            break;
    }
}

