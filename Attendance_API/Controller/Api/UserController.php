<?php
class UserController extends BaseController
{
    /** 
     * "/user/list" Endpoint - Get list of users 
     */
    public function listAction()
    {
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $arrQueryStringParams = $this->getQueryStringParams();
        if (strtoupper($requestMethod) == 'GET') {
            try {
                $userModel = new UserModel();
                $intLimit = 10;
                if (isset($arrQueryStringParams['limit']) && $arrQueryStringParams['limit']) {
                    $intLimit = $arrQueryStringParams['limit'];
                }
                $arrUsers = $userModel->getUsers($intLimit);
                // $responseData = json_encode($arrUsers);
                $responseData = '{"status":200,"message":"List Of Users","data":' . json_encode($arrUsers) . '}';

            } catch (Error $e) {
                $strErrorDesc = $e->getMessage() . 'Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }
        // send output 
        if (!$strErrorDesc) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(
                json_encode(array('error' => $strErrorDesc)),
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }

    public function signinAction()
    {
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        // echo print_r($_SERVER);
        if (strtoupper($requestMethod) == 'POST') {
            try {
                $userModel = new UserModel();
                $password;
                $username;
                if ((isset($_POST['username']) && $_POST['username']) && (isset($_POST['password']) && $_POST['password'])) {
                    $username = $_POST['username'];
                    $password = $_POST['password'];


                    if ($username && $password) {
                        $arrUsers = $userModel->checkCredentials($username, $password);
                        if ($arrUsers) {
                            $responseData = '{"status":200,"message":"User Login Successfully","data":' . json_encode($arrUsers) . '}';
                        } else {
                            $strErrorDesc = 'User Credentials Wrong';
                            $strErrorHeader = 'HTTP/1.1 401 Authentication Failure';
                        }
                    }
                } else {
                    $strErrorDesc = 'Please enter credentials';
                    $strErrorHeader = 'HTTP/1.1 200 OK';
                }
            } catch (Error $e) {
                $strErrorDesc = $e->getMessage() . 'Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }
        // send output 
        if (!$strErrorDesc) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(
                json_encode(array('error' => $strErrorDesc)),
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }

    public function addStudentAction()
    {
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        // echo print_r($_SERVER);
        if (strtoupper($requestMethod) == 'POST') {
            try {
                $userModel = new UserModel();

                if (
                    (isset($_POST['Name']) && isset($_POST['Name'])) &&
                    (isset($_POST['roll']) && isset($_POST['Name'])) &&
                    (isset($_POST['division']) && isset($_POST['Name'])) &&
                    (isset($_POST['totalAttendance']) && isset($_POST['Name']))
                ) {

                    $name = $_POST['Name'];
                    $roll = $_POST['roll'];
                    $division = $_POST['division'];
                    $totalAttendance = $_POST['totalAttendance'];

                    if ($name && $roll && $division && $totalAttendance) {
                        // Call the addStudent() method to insert the student data into the database
                        $insertedStudent = $userModel->addStudent($name, $roll, $division, $totalAttendance);

                        if ($insertedStudent) {
                            $responseData = '{"status":200,"message":"Student Added Successfully","data":' . json_encode($insertedStudent) . '}';
                        } else {
                            $strErrorDesc = 'Failed to add student to the database';
                            $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
                        }
                    }
                } else {

                    $strErrorDesc = 'Please enter all the required credentials';
                    $strErrorHeader = 'HTTP/1.1 200 OK';
                }
            } catch (Error $e) {
                $strErrorDesc = $e->getMessage() . 'Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }

        // Send output
        if (!$strErrorDesc) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(
                json_encode(array('error' => $strErrorDesc)),
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }



}