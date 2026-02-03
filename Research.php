<?php
$UserResearch = $_POST["BarResearch"];

$Page = "a";
$List = [$Page];

if (in_array($UserResearch, $List)) {
    echo "Value found in array";
    echo $UserResearch;
} else {
    echo "Value NOT found in array";
}
?>
