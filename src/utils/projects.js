const projects = {
    heading: `Things I've Worked on`,
    list: [
        {
            image: '/assets/projects/gooddeed.png',
            label: 'Featured Project',
            title: 'GoodDeed – Community Volunteering Platform',
            bgColor: '#FFE566',
            accentColor: '#3b82f6',
            imageFit: 'cover',
            imagePosition: 'center',
            description: 'GoodDeed is a full-stack Android application that bridges the gap between volunteers and organizations by creating a unified platform for social impact initiatives. The application enables organizations to create and manage community events while allowing volunteers to discover opportunities, register for activities, track contributions, and earn recognition through a gamified engagement system.',
            whatItDoes: 'The mission of GoodDeed is to encourage social responsibility by connecting individuals with organizations that are working toward meaningful causes. The platform simplifies volunteer management, event participation, community engagement, and impact tracking through an intuitive mobile experience.',
            features: [
                'Role-Based Authentication (Volunteer & Organization)',
                'Event Creation & Management',
                'Community Feed with CRUD Operations',
                'Real-Time Notifications',
                'Google Maps Integration',
                'Volunteer Participation Tracking',
                'Badge & Achievement System',
                'Image Upload & Management'
            ],
            techs: [
                'Kotlin',
                'Jetpack Compose',
                'Firebase',
                'Cloud Firestore',
                'Firebase Storage',
                'Google Maps API',
                'MVVM'
            ],
            link: 'https://github.com/krishrathi08/GoodDeedApp',
            whyItMatters: 'GoodDeed empowers local communities by turning volunteering into an interactive and rewarding experience. By simplifying the management overhead for organizations, it helps them focus on making a real difference.'
        },
        {
            image: '/assets/projects/vaidya.png',
            label: 'Featured Project',
            title: 'Vaidya – Smart Health Manager',
            bgColor: '#d6ffcd',
            accentColor: '#005014',
            imageFit: 'cover',
            imagePosition: 'center',
            description: 'Vaidya is an AI-powered healthcare management platform designed to help patients, caregivers, and healthcare professionals manage medicines, appointments, and emergency situations through a unified digital experience. The application combines intelligent health assistance, medication tracking, emergency response features, and digital patient records to make healthcare more accessible, organized, and proactive.',
            whatItDoes: 'The mission of Vaidya is to simplify healthcare management by providing users with smart medicine reminders, AI-powered health guidance, emergency assistance, and secure access to patient records. By leveraging modern mobile technologies and artificial intelligence, Vaidya helps users stay consistent with treatments, make informed health decisions, and access critical medical information whenever needed.',
            features: [
                'AI Health Assistant powered by Gemini/OpenAI',
                'Smart Medicine Reminders & Dose Tracking',
                'Refill & Medication Management',
                'Appointment Tracking Dashboard',
                'One-Tap Emergency SOS System',
                'Digital Patient Profile with Secure Patient ID',
                'Role-Based Patient & Doctor Experience',
                'Cloud-Synced Healthcare Records',
                'Voice-Assisted & Elderly-Friendly Interface'
            ],
            techs: [
                'Flutter',
                'Dart',
                'Firebase Auth',
                'Cloud Firestore',
                'GetX',
                'Gemini API',
                'OpenAI API',
                'Local Notifications',
                'SharedPreferences',
                'Lottie'
            ],
            link: 'https://github.com/krishrathi08/Vaidya-App',
            whyItMatters: 'Vaidya addresses the fragmentation of personal healthcare management. By packing critical clinical tracking tools, smart AI guidance, and one-tap emergency services into an elderly-friendly interface, it makes managing personal health accessible to everyone.'
        },
        {
            image: '/assets/projects/ledger_bank.png',
            label: 'Featured Project',
            title: 'Ledger Bank – Digital Transaction Console',
            bgColor: '#C3B1FF',
            accentColor: '#7b60f4',
            imageFit: 'cover',
            imagePosition: 'center',
            description: 'Ledger Bank is a high-polish, full-stack digital banking workspace designed to manage retail accounts, manual transfers, automated payment schedules, and administrative controls. The application combines a premium, glassmorphic cybersecurity-themed dashboard with deep transactional audit trails and advanced verification layers, making everyday financial operations highly secure, visible, and responsive.',
            whatItDoes: 'The mission of Ledger Bank is to secure and simplify digital wealth management by providing users with reliable transaction execution, real-time risk monitoring, and automated recurring payment rails. By leveraging a double-entry ledger database architecture, real-time email verification codes, and robust security middleware, Ledger Bank ensures absolute financial integrity, threat mitigation, and a premium user experience.',
            features: [
                'Double-Entry Ledger Database ensuring 100% financial transaction write accuracy.',
                'Glassmorphic Cyber-HUD Dashboard running at a hardware-accelerated 60 FPS.',
                '6-Digit Email OTP Verification securing manual transfer operations.',
                'Collapsible Timeline Audit Filters searching history by date and amount ranges.',
                'Dynamic PDF Passbook Generator streaming custom styled bank statements on-the-fly.',
                'Automated Recurring Payments managing scheduled weekly/monthly transaction queues.',
                'Brute-Force Rate Limiting Middleware shielding critical auth and payment endpoints.',
                'Role-Based Onboarding Dashboard separating Customer, Admin, and Operator panels.'
            ],
            techs: [
                'React.js',
                'Node.js',
                'Express.js',
                'MongoDB Atlas',
                'Mongoose',
                'Vanilla CSS',
                'Nodemailer',
                'PDFKit',
                'Google OAuth',
                'Vite',
                'Render',
                'Vercel'
            ],
            link: 'https://github.com/krishrathi08/Bank_Transaction_System',
            whyItMatters: 'Ledger Bank addresses the visibility and trust gaps of standard personal finance platforms. By packing database-enforced double-entry safety, visual history audit filters, and multi-factor transaction authorization into an engaging desktop dashboard, it makes managing personal money movement secure, transparent, and accessible.'
        }
    ]
}

export default projects