<?php

if ($data->mtd=="CEKEMAIL")
	{
		$sql = "SELECT * FROM wp_sponsor WHERE email='".$data->email."'";
		$result = mysqli_query($con,$sql);
		$rowCount = mysqli_num_rows($result);
		if($rowCount>0)
        {
// 			$row = mysqli_fetch_array($result);
			//             $response['sukses'] = "OK";
			if ($row['paymentstatus']='PAY') {
				$response['sukses'] = "OKPAY";

			} else {
				$response['sukses'] = "OK";
			}
			$json_response = json_encode($response);

		} else {
            $response['sukses'] = "FAIL";
            $response['sql'] = $sql;
            $json_response = json_encode($response);
        }
		echo $json_response;

	}

	if ($data->mtd=="HAPUSEMAIL")
	{

		$sql = "DELETE wp_sponsor WHERE email='".$data->email."'";
		$result = mysqli_query($con,$sql);
		$sql = "DELETE wp_daftarpeserta WHERE email='".$data->email."'";
		$result = mysqli_query($con,$sql);
		if($result)
       	        {
            		$response['sukses'] = "OK";
			$json_response = json_encode($response);
		} else {
			$response['sukses'] = "FAIL";
            		$response['sql'] = $sql;
            		$json_response = json_encode($response);
        	}
		echo $json_response;
	}


  ?>
