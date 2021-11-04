<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript"
            src="https://app.midtrans.com/snap/snap.js"
            data-client-key="Mid-client-k3d0DKnFFbO2M7qd"></script>
  </head>
  <body>
    <img src="https://primavisiglobalindo.net/demo/conference1/wp-content/uploads/2019/05/Logo-atas.png" width="200px" />
	<div style="text-align:center;margin-top:100px;">
        <button id="pay-button" style="height:30px;color:white;background-color:green;">Silakan klik di sini untuk bayar/cek</button>
	</div>
    <script type="text/javascript">
      var payButton = document.getElementById('pay-button');
      payButton.addEventListener('click', function () {
        snap.pay('<?php echo $_GET['snap']; ?>');
      });
    </script>
  </body>
</html>
