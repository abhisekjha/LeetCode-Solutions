<?php
$category = $_GET['category'];
$problems = array_filter(glob($category . '/*', GLOB_ONLYDIR), 'is_dir');
foreach ($problems as $problem) {
    echo '<li>' . $problem . '</li>';
}
?>
