$(document).ready(function() {
    // Fetch the categories
    $.get('categories.php', function(categories) {
        $('#categories').html('<h2>Categories</h2><ul>' + categories + '</ul>');
    });

    // Function to fetch and display problems based on category
    function showProblems(category) {
        $.get(category + '/problems.php', function(problems) {
            $('#problems').html('<h2>' + category + '</h2><ul>' + problems + '</ul>');
        });
    }

    // Event listener for clicking on a category
    $('#categories').on('click', 'li', function() {
        var category = $(this).text().trim();
        showProblems(category);
    });
});
