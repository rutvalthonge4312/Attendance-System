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
    public function addStudent($roll, $name, $division)
    {
        return $this->insert("insert into student (roll,Name,division) values ($roll,'$name','$division')");
    }

    public function removeStudent($roll)
    {
        return $this->delete("delete FROM student where roll='$roll'");
    }
}