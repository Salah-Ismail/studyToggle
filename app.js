$( "input[type='radio']" ).change(function() {
    console.log('yyy');
    localStorage.setItem('studyToggle', $('input[name=inlineRadioOptions]:checked').val());
    $.ajax({
        url: 'http://5d8cd857443e3400143b4b9c.mockapi.io/api/user/1',    //Your api url
        type: 'PUT',   //type is any HTTP method
        data: {
                "id": "1",
                "studyToggle": $('input[name=inlineRadioOptions]:checked').val()
            
        },      //Data as js object
        success: function () {
            console.log('success');
        }
    });
    
});

$.ajax({
    url: "http://5d8cd857443e3400143b4b9c.mockapi.io/api/user/1",
    type: 'GET',
    success: function(res) {
        console.log(res.studyToggle);
        switch (res.studyToggle) {
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
});