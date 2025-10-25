const otpTemplate = (otp) => {
  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification - Shell Entertainment</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        .logo {
            width: 80px;
            height: 80px;
            background: rgba(255,255,255,0.2);
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: bold;
        }
        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
            font-weight: 300;
        }
        .content {
            padding: 40px 30px;
            text-align: center;
        }
        .verification-icon {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            border-radius: 50%;
            margin: 0 auto 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
        }
        .otp-container {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 15px;
            padding: 30px;
            margin: 30px 0;
            color: white;
        }
        .otp-code {
            font-size: 36px;
            font-weight: bold;
            letter-spacing: 8px;
            margin: 20px 0;
            font-family: 'Courier New', monospace;
            background: rgba(255,255,255,0.2);
            padding: 15px;
            border-radius: 10px;
            display: inline-block;
        }
        .timer {
            background: #ff6b6b;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 600;
            margin: 20px 0;
            display: inline-block;
        }
        .security-tips {
            background: #f8f9ff;
            border-radius: 15px;
            padding: 25px;
            margin: 30px 0;
            text-align: left;
        }
        .security-tips h3 {
            color: #667eea;
            margin-bottom: 15px;
            text-align: center;
        }
        .security-tips ul {
            list-style: none;
            padding: 0;
        }
        .security-tips li {
            padding: 8px 0;
            padding-left: 25px;
            position: relative;
        }
        .security-tips li:before {
            content: '🔒';
            position: absolute;
            left: 0;
        }
        .footer {
            background: #f8f9ff;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #eee;
        }
        @media (max-width: 600px) {
            .email-container { margin: 10px; }
            .header, .content, .footer { padding: 20px; }
            .otp-code { font-size: 28px; letter-spacing: 4px; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">S</div>
            <h1>Shell Entertainment</h1>
            <p>Secure Account Verification</p>
        </div>
        
        <div class="content">
            <div class="verification-icon">🔐</div>
            
            <h2 style="color: #667eea; margin-bottom: 20px;">Verify Your Email Address</h2>
            <p style="margin-bottom: 30px; font-size: 16px; color: #666;">
                Welcome to Shell Entertainment! Please use the verification code below to complete your registration.
            </p>
            
            <div class="otp-container">
                <h3 style="margin-bottom: 10px;">Your Verification Code</h3>
                <div class="otp-code">${otp}</div>
                <div class="timer">⏰ Valid for 5 minutes</div>
            </div>
            
            <div class="security-tips">
                <h3>🛡️ Security Tips</h3>
                <ul>
                    <li>Never share this code with anyone</li>
                    <li>Shell Entertainment will never ask for your OTP via phone</li>
                    <li>This code expires in 5 minutes for your security</li>
                    <li>If you didn't request this, please ignore this email</li>
                </ul>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #e8f4fd; border-radius: 10px;">
                <h4 style="color: #667eea; margin-bottom: 10px;">Need Help?</h4>
                <p style="margin-bottom: 10px;">Our support team is available 24/7</p>
                <p>📧 <a href="mailto:support@shellentertainment.com" style="color: #667eea;">support@shellentertainment.com</a></p>
                <p>📞 +91 9876543210</p>
            </div>
        </div>
        
        <div class="footer">
            <p style="color: #666; font-size: 14px; margin-bottom: 10px;">
                This is an automated message. Please do not reply to this email.
            </p>
            <p style="color: #666; font-size: 14px;">
                © 2024 Shell Entertainment. All rights reserved.<br>
                MSME Verified | Digital Excellence Partner
            </p>
        </div>
    </div>
</body>
</html>`;
};
module.exports = otpTemplate;
