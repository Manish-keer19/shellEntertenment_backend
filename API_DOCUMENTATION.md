# Shell Entertainment Backend API Documentation

## Course Management & Payment Integration

### 🚀 Quick Start Guide

#### 1. Course Creation Flow (Admin Only)

**Step 1: Create Course**
```
POST /api/v1/course/createCourse
Headers: Authorization: Bearer <admin_token>
Body: FormData
- courseName: "Course Title"
- courseDescription: "Course Description"
- whatYouWillLearn: "Learning outcomes"
- price: 999
- tag: ["tag1", "tag2"]
- category: "category_id"
- thumbnailImage: <file>
- status: "Published" (optional, defaults to "Draft")
- instructions: ["instruction1", "instruction2"] (optional)
```

**Step 2: Add Section to Course**
```
POST /api/v1/course/addSection
Headers: Authorization: Bearer <admin_token>
Body: JSON
{
  "sectionName": "Introduction",
  "courseId": "course_id_from_step1"
}
```

**Step 3: Add Subsection to Section**
```
POST /api/v1/course/addSubSection
Headers: Authorization: Bearer <admin_token>
Body: FormData
- sectionId: "section_id_from_step2"
- title: "Lecture Title"
- description: "Lecture Description"
- videoFile: <video_file>
- courseId: "course_id_from_step1"
```

#### 2. Payment Integration with Razorpay

**Step 1: Capture Payment**
```
POST /api/v1/payment/capturePayment
Headers: Authorization: Bearer <student_token>
Body: JSON
{
  "courses": ["course_id1", "course_id2"]
}
Response: { orderId, currency, amount }
```

**Step 2: Verify Payment (After Razorpay Payment)**
```
POST /api/v1/payment/verifyPayment
Headers: Authorization: Bearer <student_token>
Body: JSON
{
  "razorpay_payment_id": "pay_xxx",
  "razorpay_order_id": "order_xxx", 
  "razorpay_signature": "signature_xxx",
  "courses": ["course_id1", "course_id2"]
}
```

**Step 3: Send Success Email**
```
POST /api/v1/payment/sendPaymentSuccessEmail
Headers: Authorization: Bearer <student_token>
Body: JSON
{
  "amount": 99900,
  "paymentId": "pay_xxx",
  "orderId": "order_xxx"
}
```

### 📊 Student Enrollment Endpoints

**Get User's Enrolled Courses**
```
GET /api/v1/course/getUserEnrolledCourses
Headers: Authorization: Bearer <student_token>
```

**Get Enrolled Students (Admin Only)**
```
POST /api/v1/course/getEnrolledStudents
Headers: Authorization: Bearer <admin_token>
Body: JSON
{
  "courseId": "course_id"
}
```

**Manual Enrollment (Alternative to Payment)**
```
POST /api/v1/payment/enrollStudent
Headers: Authorization: Bearer <student_token>
Body: JSON
{
  "courseId": "course_id"
}
```

### 🔍 Course Information Endpoints

**Get All Courses**
```
GET /api/v1/course/getAllCourses
```

**Get Course Details**
```
POST /api/v1/course/getCourseDetails
Body: JSON
{
  "courseId": "course_id"
}
```

**Get Full Course Details (Enrolled Students)**
```
POST /api/v1/course/getFullCourseDetails
Headers: Authorization: Bearer <student_token>
Body: JSON
{
  "courseId": "course_id"
}
```

**Search Courses**
```
POST /api/v1/course/searchCourse
Body: JSON
{
  "searchQuery": "search_term"
}
```

**Get Course Structure**
```
POST /api/v1/course/getCourseStructure
Body: JSON
{
  "courseId": "course_id"
}
```

### 🛠️ Course Management (Admin Only)

**Edit Course**
```
POST /api/v1/course/editCourse
Headers: Authorization: Bearer <admin_token>
Body: FormData (same fields as createCourse)
- courseId: "course_id"
```

**Delete Course**
```
DELETE /api/v1/course/deleteCourse
Headers: Authorization: Bearer <admin_token>
Body: JSON
{
  "courseId": "course_id"
}
```

**Update Section**
```
POST /api/v1/course/updateSection
Headers: Authorization: Bearer <admin_token>
Body: JSON
{
  "sectionId": "section_id",
  "sectionName": "Updated Section Name",
  "courseId": "course_id"
}
```

**Delete Section**
```
POST /api/v1/course/deleteSection
Headers: Authorization: Bearer <admin_token>
Body: JSON
{
  "sectionId": "section_id",
  "courseId": "course_id"
}
```

**Update Subsection**
```
POST /api/v1/course/updateSubSection
Headers: Authorization: Bearer <admin_token>
Body: FormData
- SubsectionId: "subsection_id"
- title: "Updated Title" (optional)
- description: "Updated Description" (optional)
- videoFile: <new_video_file> (optional)
- courseId: "course_id"
```

**Delete Subsection**
```
POST /api/v1/course/deleteSubSection
Headers: Authorization: Bearer <admin_token>
Body: JSON
{
  "subSectionId": "subsection_id",
  "sectionId": "section_id",
  "courseId": "course_id"
}
```

### 📈 Progress Tracking

**Mark Lecture as Complete**
```
POST /api/v1/course/updateCourseProgress
Headers: Authorization: Bearer <student_token>
Body: JSON
{
  "courseId": "course_id",
  "subSectionId": "subsection_id",
  "userId": "user_id"
}
```

### 🎯 Helper Endpoints

**Get Course Creation Flow Guide**
```
GET /api/v1/course/getCourseCreationFlow
```

### ⚠️ Important Notes

1. **Section Creation**: You MUST create a section before creating subsections
2. **Payment Flow**: Use Razorpay's test keys for development
3. **File Uploads**: Use FormData for endpoints that require file uploads
4. **Authentication**: All protected routes require valid JWT tokens
5. **Admin vs Student**: Some endpoints are restricted to specific user types

### 🔧 Environment Variables Required

```
RAZORPAY_KEY=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret
```

### 📝 Error Handling

All endpoints return standardized error responses:
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

### 🎉 Success Responses

All successful endpoints return:
```json
{
  "success": true,
  "message": "Success description",
  "data": { /* response data */ }
}
```