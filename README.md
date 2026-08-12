# ระบบบริการการศึกษา มหาวิทยาลัยแม่โจ้ (Maejo University Education Services System)

เว็บไซต์ระบบบริการการศึกษา ออกแบบสไตล์ Modern Pastel Minimalist UX/UI Responsive Web Application

## 📁 โครงสร้างไฟล์ในโครงการ (Project Structure)

```text
RegProject/
├── index.html            # หน้าหลักระบบสารสนเทศข่าวสารและบริการ
├── profile.html          # หน้าประวัตินักศึกษา (Student Profile)
├── registration.html     # หน้าลงทะเบียนเรียน / เพิ่ม-ถอนรายวิชา
├── package.json          # ไฟล์จัดการ Dependencies และ Build Scripts
├── tailwind.config.js    # กำหนดค่า Theme สี และ Custom Utilities
├── src/
│   └── input.css         # ไฟล์ Custom CSS หลักสำหรับ Tailwind
├── dist/
│   └── output.css        # ไฟล์ Compiled CSS สำหรับใช้งานจริงบนหน้าเว็บ
└── image/                # โฟลเดอร์เก็บไฟล์รูปภาพ โลโก้ และโปสเตอร์ข่าว
```

## 🛠️ วิธีการติดตั้งและรันโครงการ (Getting Started)

1. **ติดตั้ง Dependencies:**
   ```bash
   npm install
   ```

2. **Rebuild CSS (Tailwind):**
   ```bash
   npm run build
   ```

3. **เปิดใช้งาน Watch mode สำหรับพัฒนาต่อเนื่อง:**
   ```bash
   npm run watch
   ```
