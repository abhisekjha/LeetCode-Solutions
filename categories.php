<?php
$categories = array_filter(glob('*', GLOB_ONLYDIR), 'is_dir');
foreach ($categories as $category) {
    echo '<li>' . $category . '</li>';
}
?>
