exports.passwordUpdated = (email, name) => {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Updated - Shell Entertainment</title>
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
        .security-icon {
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
        .success-message {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            border-radius: 15px;
            padding: 30px;
            margin: 30px 0;
            color: white;
        }
        .account-info {
            background: #f8f9ff;
            border-radius: 15px;
            padding: 25px;
            margin: 30px 0;
            text-align: left;
        }
        .account-info h3 {
            color: #667eea;
            margin-bottom: 15px;
            text-align: center;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }
        .info-row:last-child {
            border-bottom: none;
        }
        .security-alert {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            text-align: left;
        }
        .security-alert h4 {
            color: #856404;
            margin-bottom: 10px;
        }
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            margin: 20px 0;
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
            .info-row { flex-direction: column; align-items: flex-start; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">S</div>
            <h1>Shell Entertainment</h1>
            <p>Account Security Update</p>
        </div>
        
        <div class="content">
            <div class="security-icon">🔒</div>
            
            <h2 style="color: #667eea; margin-bottom: 20px;">Password Successfully Updated</h2>
            
            <div class="success-message">
                <h3 style="margin-bottom: 15px;">✅ Security Update Complete</h3>
                <p>Hi ${name}, your account password has been successfully updated!</p>
            </div>
            
            <div class="account-info">
                <h3>📊 Account Details</h3>
                <div class="info-row">
                    <span><strong>Account Email:</strong></span>
                    <span>${email}</span>
                </div>
                <div class="info-row">
                    <span><strong>Updated On:</strong></span>
                    <span>${new Date().toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}</span>
                </div>
                <div class="info-row">
                    <span><strong>Security Level:</strong></span>
                    <span style="color: #28a745; font-weight: bold;">✓ High</span>
                </div>
            </div>
            
            <div class="security-alert">
                <h4>⚠️ Didn't make this change?</h4>
                <p style="margin-bottom: 15px;">If you didn't update your password, your account may be compromised. Please take immediate action:</p>
                <ul style="margin-left: 20px; margin-bottom: 15px;">
                    <li>Contact our security team immediately</li>
                    <li>Review your recent account activity</li>
                    <li>Enable two-factor authentication</li>
                </ul>
                <a href="mailto:security@shellentertainment.com" class="cta-button">🚨 Report Security Issue</a>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #e8f4fd; border-radius: 10px;">
                <h4 style="color: #667eea; margin-bottom: 10px;">Security Tips</h4>
                <ul style="text-align: left; margin-left: 20px;">
                    <li>Use a strong, unique password</li>
                    <li>Enable two-factor authentication</li>
                    <li>Never share your login credentials</li>
                    <li>Log out from shared devices</li>
                </ul>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #f8f9ff; border-radius: 10px;">
                <h4 style="color: #667eea; margin-bottom: 10px;">Need Help?</h4>
                <p style="margin-bottom: 10px;">Our support team is here to assist you</p>
                <p>📧 <a href="mailto:support@shellentertainment.com" style="color: #667eea;">support@shellentertainment.com</a></p>
                <p>📞 +91 9876543210</p>
            </div>
        </div>
        
        <div class="footer">
            <p style="color: #666; font-size: 14px; margin-bottom: 10px;">
                This is an automated security notification. Please do not reply to this email.
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