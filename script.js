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

    // Function to fetch and display a problem's solution
    function showSolution(category, problem) {
        $.get(category + '/' + problem + '/solution.py', function(solution) {
            $('#solution').html('<h2>Solution for ' + problem + '</h2><pre>' + solution + '</pre>');
        });
    }

    // Event listener for clicking on a category
    $('#categories').on('click', 'li', function() {
        var category = $(this).text().trim();
        showProblems(category);
    });

    // Event listener for clicking on a problem
    $('#problems').on('click', 'li', function() {
        var category = $('#categories li.active').text().trim();
        var problem = $(this).text().trim();
        showSolution(category, problem);
    });
});
