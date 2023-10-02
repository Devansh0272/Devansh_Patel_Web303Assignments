// Function to load data using $.getJSON method
function loadDataWithGetJSON() {
    $.getJSON('team.json', function(data) {
        var teamHtml = '';
        $.each(data, function (index, member) {
                teamHtml += '<h2>' + member.name + '</h2>';
                teamHtml += '<h5>' + member.position + '</h5>';
                teamHtml += '<p>' + member.bio + '</p>';
            });
        $('#team').html(teamHtml);
    });
}

// Function to load data using $.ajax method
function loadDataWithAjax() {
    $.ajax({
        url: 'team.json',
        type: 'GET',
        dataType: 'json',
        beforeSend: function() {
            $('#team').html('Loading...');
        },
        error: function() {
            $('#team').html('The content could not be retrieved.');
        },
        success: function(data) {
            var teamHtml = '';
            $.each(data, function(index, member) {
                teamHtml += '<h2>' + member.name + '</h2>';
                teamHtml += '<h5>' + member.position + '</h5>';
                teamHtml += '<p>' + member.bio + '</p>';
            });
            $('#team').html(teamHtml);
        }
    });
}

// Document ready function to call one of the above functions
$(document).ready(function() {
    // Calling loadDataWithGetJSON function to load and display data
    loadDataWithGetJSON();
    // Alternatively, you can call loadDataWithAjax function
    // loadDataWithAjax();
});
