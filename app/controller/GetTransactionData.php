<?php
class GetPositionData{	public function sendGetMethod($requestURL, $token)	{
        $curl = curl_init();         	curl_setopt($curl, CURLOPT_URL, $requestURL);        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);          curl_setopt($curl, CURLOPT_FAILONERROR, true);          curl_setopt($curl, CURLOPT_HTTPHEADER, array(          "Authorization: AuthSub token=\"$token\"")      );       $result = curl_exec($curl);    curl_close($curl);    return $result;  
	}
    function checkToken($token, $position) {		$response = $this->sendGetMethod($position . "/transactions?alt=json&returns=true", $token);        return $response;    }	
}$authSession = new GetPositionData();print $authSession->checkToken($_GET['token'], $_GET['position_id']);
?>    