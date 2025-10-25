exports.paymentSuccess = (amount, paymentId, orderId, name, lastname) => {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Successful - Shell Entertainment</title>
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
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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
        .content {
            padding: 40px 30px;
            text-align: center;
        }
        .success-icon {
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
        .amount-display {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            border-radius: 15px;
            padding: 30px;
            margin: 30px 0;
            color: white;
        }
        .amount {
            font-size: 36px;
            font-weight: bold;
            margin: 15px 0;
        }
        .transaction-details {
            background: #f8f9ff;
            border-radius: 15px;
            padding: 25px;
            margin: 30px 0;
            text-align: left;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #eee;
        }
        .detail-value {
            font-family: 'Courier New', monospace;
            background: #e8f4fd;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 14px;
        }
        .footer {
            background: #f8f9ff;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #eee;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">S</div>
            <h1>Shell Entertainment</h1>
            <p>Payment Confirmation</p>
        </div>
        
        <div class="content">
            <div class="success-icon">✅</div>
            
            <h2 style="color: #4facfe; margin-bottom: 20px;">Payment Successful!</h2>
            <p style="margin-bottom: 30px;">Thank you ${name} ${lastname}! Your payment has been processed successfully.</p>
            
            <div class="amount-display">
                <h3>Amount Paid</h3>
                <div class="amount">₹${amount}</div>
            </div>
            
            <div class="transaction-details">
                <h3 style="color: #667eea; margin-bottom: 20px; text-align: center;">Transaction Details</h3>
                <div class="detail-row">
                    <span><strong>Payment ID:</strong></span>
                    <span class="detail-value">${paymentId}</span>
                </div>
                <div class="detail-row">
                    <span><strong>Order ID:</strong></span>
                    <span class="detail-value">${orderId}</span>
                </div>
                <div class="detail-row">
                    <span><strong>Date:</strong></span>
                    <span class="detail-value">${new Date().toLocaleDateString()}</span>
                </div>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #f8f9ff; border-radius: 10px;">
                <h4 style="color: #667eea;">Need Help?</h4>
                <p>📧 <a href="mailto:payments@shellentertainment.com" style="color: #667eea;">payments@shellentertainment.com</a></p>
            </div>
        </div>
        
        <div class="footer">
            <p style="color: #666; font-size: 14px;">
                © 2024 Shell Entertainment. All rights reserved.<br>
                MSME Verified | Digital Excellence Partner
            </p>
        </div>
    </div>
</body>
</html>`;
};