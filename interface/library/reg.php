<?php

   
    include('./conn.php');

    

    
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];


    
    $sql = "select * from users where username='$username'";

    
    $resuslt = $mysqli->query($sql);

    
    if($resuslt->num_rows>0){
        echo '<script>alert("用户名已存在");</script>';
        echo '<script>location.href="../../src/html/sign_in.html"</script>';
        $mysqli->close(); 
        die();  
    }

    
    $insertSql = "insert into users (username,password) values ('$username','$password')";
    
    
    $res = $mysqli->query($insertSql);  
    $mysqli->close();

    if($res){
        echo '<script>alert("注册成功");</script>';
        echo '<script>location.href="../../src/html/login.html"</script>';
    }
?>