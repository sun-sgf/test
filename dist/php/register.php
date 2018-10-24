<?php 
	// header("Content-type:text/html;charset=utf-8");

	//1.链接数据库
	// $link = mysql_connect("localhost",'root','123456');
	//2.判断是否链接成功
	/*if(!$link){
		echo "链接数据库失败";
		exit;//退出当前程序
	}*/
	//3.设置字符集
	// mysql_set_charset("utf8");
	//4.选择shujuku
	// mysql_select_db("huawei");
	//区分登陆还是注册
	// $type = $_GET["type"];
	/*if($type == "login"){
		//登陆
		$ophone = $_POST['ophone'];
		$opassword = $_POST['opassword'];
		//准备sql语句
		$sql = "SELECT * from huawei where username='{$ophone}' and password = '{$opassword}'";
		//6.发送sql语句
		$res = mysql_query($sql);
		//7.处理结果集
		$row = mysql_fetch_assoc($res);
		if($row){
			echo "登陆成功";
			exit;
		}else{
			echo "登陆失败";
			exit;
		}

	}else{*/
		/*//注册
		$ophone = $_POST['ophone'];
		$opassword = $_POST['opassword'];
		//判断是否之前注册过
		$sql = "SELECT * from huawei where username='{$ophone}'";
		$res = mysql_query($sql);
		$row = mysql_fetch_assoc($res);
		if($row){
			echo "该用户已被注册";
			exit;
		}

		//5.准备sql语句
		$sql = "INSERT INTO huawei(username,password) Values('{$ophone}','{$opassword}')";
		//6.发送sql语句
		$res = mysql_query($sql);
		if($res){
			echo "注册成功";
			exit;
		}else{
			echo "注册失败";
			exit 		}*/
	// }
?>