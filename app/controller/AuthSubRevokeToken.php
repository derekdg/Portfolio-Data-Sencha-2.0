<?php
class AuthSession{	public function sendGetMethod($requestURL, $token)	{
        $curl = curl_init();         	curl_setopt($curl, CURLOPT_URL, $requestURL);        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);          curl_setopt($curl, CURLOPT_FAILONERROR, true);          curl_setopt($curl, CURLOPT_HTTPHEADER, array(                "Authorization: AuthSub token=\"$token\"")          );           $result = curl_exec($curl);        curl_close($curl);        return $result;  	}

    function revokeToken($token) {        $response = $this->sendGetMethod("https://www.google.com/accounts/AuthSubRevokeToken", $token);        return $response;    }	}
$authSession = new AuthSession();print $authSession->revokeToken($_GET['token']);
?>    