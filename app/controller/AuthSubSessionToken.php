<?php

class AuthSession
{

	private $requestURL = "http://finance.yahoo.com/d/quotes.csv?s=";
	
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
	
    function upgradeToken($token) {
        
        $response = $this->sendGetMethod("https://www.google.com/accounts/AuthSubSessionToken", $token);
 
        return $response;
    }	

}

$authSession = new AuthSession();
print $authSession->upgradeToken($_GET['token']);



    
?>    