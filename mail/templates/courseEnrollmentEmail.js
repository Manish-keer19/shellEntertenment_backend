exports.courseEnrollmentEmail = (courseName, name) => {
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Course Enrollment Confirmation - Shell Entertainment</title>
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
            .header p {
                font-size: 16px;
                opacity: 0.9;
            }
            .content {
                padding: 40px 30px;
            }
            .welcome {
                text-align: center;
                margin-bottom: 30px;
            }
            .welcome h2 {
                color: #667eea;
                font-size: 24px;
                margin-bottom: 10px;
            }
            .course-card {
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                border-radius: 15px;
                padding: 25px;
                margin: 25px 0;
                color: white;
                text-align: center;
            }
            .course-card h3 {
                font-size: 20px;
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
                transition: transform 0.3s ease;
            }
            .features {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            .feature {
                text-align: center;
                padding: 20px;
                background: #f8f9ff;
                border-radius: 10px;
            }
            .feature-icon {
                width: 50px;
                height: 50px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 50%;
                margin: 0 auto 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 20px;
            }
            .footer {
                background: #f8f9ff;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #eee;
            }
            .social-links {
                margin: 20px 0;
            }
            .social-links a {
                display: inline-block;
                width: 40px;
                height: 40px;
                background: #667eea;
                color: white;
                border-radius: 50%;
                margin: 0 10px;
                text-decoration: none;
                line-height: 40px;
            }
            @media (max-width: 600px) {
                .email-container { margin: 10px; }
                .header, .content, .footer { padding: 20px; }
                .features { grid-template-columns: 1fr; }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <div class="logo">S</div>
                <h1>Shell Entertainment</h1>
                <p>Your Gateway to Digital Excellence</p>
            </div>
            
            <div class="content">
                <div class="welcome">
                    <h2>🎉 Welcome Aboard, ${name}!</h2>
                    <p>You've successfully enrolled in an amazing learning journey</p>
                </div>
                
                <div class="course-card">
                    <h3>📚 ${courseName}</h3>
                    <p>Your course is now ready and waiting for you!</p>
                </div>
                
                <div class="features">
                    <div class="feature">
                        <div class="feature-icon">🎯</div>
                        <h4>Expert-Led</h4>
                        <p>Learn from industry professionals</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">⏰</div>
                        <h4>Lifetime Access</h4>
                        <p>Learn at your own pace</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">🏆</div>
                        <h4>Certificate</h4>
                        <p>Get certified upon completion</p>
                    </div>
                </div>
                
                <div style="text-align: center;">
                    <a href="#" class="cta-button">🚀 Start Learning Now</a>
                </div>
                
                <div style="margin-top: 30px; padding: 20px; background: #f8f9ff; border-radius: 10px; text-align: center;">
                    <h4 style="color: #667eea; margin-bottom: 10px;">Need Help?</h4>
                    <p>Our support team is here to help you succeed!</p>
                    <p>📧 <a href="mailto:support@shellentertainment.com" style="color: #667eea;">support@shellentertainment.com</a></p>
                </div>
            </div>
            
            <div class="footer">
                <div class="social-links">
                    <a href="#">📘</a>
                    <a href="#">📷</a>
                    <a href="#">🐦</a>
                    <a href="#">💼</a>
                </div>
                <p style="color: #666; font-size: 14px;">
                    © 2024 Shell Entertainment. All rights reserved.<br>
                    MSME Verified | Digital Excellence Partner
                </p>
            </div>
        </div>
    </body>
    </html>`;
};