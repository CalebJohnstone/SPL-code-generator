<html>
<body>
<?php
    session_start();

    if(isset($_SESSION['view'])){
        $_SESSION['view']++;
    }else{
        $_SESSION['view'] = 1;
    }

    //input current practical number
    $currentPrac = 3;

    //store in input text file for processing
    //$storeFile = fopen("../$currentPrac/generated_".$_SESSION['view'].".txt", "w");//for: if want to store all files created
    $storeFile = fopen("../$currentPrac/input.txt", "w");//for: so not many files stored, just override input.txt
    fwrite($storeFile, $_POST["inputFileText"]);
    fclose($storeFile);

    //go back to generator screen
    echo "<script>window.history.back();</script>";
?>

</body>
</html>