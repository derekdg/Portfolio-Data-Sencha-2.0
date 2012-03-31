<?php

class AuthSubTokenInfo
{

	public function sendGetMethod($requestURL, $token)
	{
					
          $curl = curl_init();  
        	curl_setopt($curl, CURLOPT_URL, $requestURL);
          curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);  
          curl_setopt($curl, CURLOPT_FAILONERROR, true);  
 
          curl_setopt($curl, CURLOPT_HTTPHEADER, array(  
              "Authorization: AuthSub token=\"$token\"")  
          );   
 
          $result = curl_exec($curl);
          curl_close($curl);
 
          return $result;  
	}
	
    function checkToken($token) {
        
        $response = $this->sendGetMethod("https://www.google.com/accounts/AuthSubTokenInfo", $token);
 
        return $response;
    }	

}

$authSession = new AuthSubTokenInfo();
print $authSession->checkToken($_GET['token']);
   
?>    