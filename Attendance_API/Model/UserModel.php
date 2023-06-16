<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
class UserModel extends Database
{
    public function getUsers($limit)
    {
        return $this->select("SELECT * FROM student ORDER BY roll ASC LIMIT ?", ["i", $limit]);
    }

    public function checkCredentials($username, $password)
    {
        return $this->select("SELECT * FROM usersignup where username='$username' and password='$password' limit 1");
    }
    public function addStudent($name, $roll, $division, $totalAttendance)
    {
        return $this->insert("insert into student values ('$name',$roll,'$division',$totalAttendance)");
    }


}