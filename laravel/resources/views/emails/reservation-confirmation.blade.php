<!DOCTYPE html>
<html>
<head>
    <title>Confirm Your Reservation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f4f8;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #007bff;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .header img {
            width: 48px;
            height: auto;
        }
        .header h1 {
            margin: 10px 0 0;
            font-size: 24px;
            color: white;
        }
        .header .brand-name {
            font-size: 32px;
            font-weight: bold;
        }
        .header .sub-name {
            font-size: 24px;
        }
        .content {
            padding: 20px;
        }
        .content h1 {
            color: #333333;
        }
        .content p {
            color: #666666;
        }
        .button-container {
            text-align: center;
            margin-top: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            
            background-color: #c0c5ca;
            text-decoration: none;
            border-radius: 5px;
        }
        .footer {
            background-color: #f0f4f8;
            color: #666666;
            text-align: center;
            padding: 10px;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1><span class="brand-name">LA BONNE</span> <span class="sub-name">ADRESSE</span></h1>
        </div>
        <div class="content">
            <h1>Confirm Your Reservation</h1>
            <p>Thank you for making a reservation. Please click the button below to confirm your reservation:</p>
            <div class="button-container">
                <a href="{{ $url }}" class="button">Confirm Reservation</a>
            </div>
            <p>If you did not make this reservation, please ignore this email.</p>
        </div>
        <div class="footer">
            <p>&copy; {{ date('Y') }} LaBonneAdresse. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
