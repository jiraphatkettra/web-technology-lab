/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Prompt', 'Kanit', 'sans-serif'],
      },
      colors: {
        // 🌿 สีเขียวประจำมหาวิทยาลัยแม่โจ้ (Maejo Green)
        mju: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          500: '#16a34a',
          600: '#15803d', // สีเขียวแม่โจ้หลัก
          700: '#166534',
          800: '#14532d',
          900: '#052e16',
        },
        // 🌾 สีทองรวงข้าวแม่โจ้ (Maejo Gold / Yellow)
        gold: {
          300: '#fde047',
          400: '#facc15',
          500: '#eab308', // สีทองแม่โจ้หลัก
          600: '#ca8a04',
          700: '#a16207',
        },
        // 🏢 สีพื้นหลังระบบ Reg (สำหรับ Card, Table, Background)
        reg: {
          bg: '#f8fafc',
          card: '#ffffff',
          darkbg: '#0a140d',
          darkcard: '#122216',
          border: '#e2e8f0',
        }
      },
      boxShadow: {
        'mju': '0 10px 25px -5px rgba(21, 128, 61, 0.15)',
        'gold-glow': '0 0 20px rgba(234, 179, 8, 0.3)',
      }
    },
  },
  plugins: [],
}
