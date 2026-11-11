/**
 * Demo MPCS - Multi-Language Translation Dictionary (English, Sinhala, Tamil)
 * Default Language: English (en)
 */

const translations = {
  en: {
    // Top Bar & Meta
    "topbar.hotline": "Hotline / Complaints:",
    "topbar.office": "Head Office: +94 31 222 3456",
    "topbar.email": "info@demompcs.lk",
    "topbar.hours": "Mon - Fri: 8:30 AM - 4:30 PM | Sat: 8:30 AM - 12:30 PM",
    "brand.name": "Demo MPCS",
    "brand.sub": "Multi-Purpose Co-operative Society Ltd.",
    "brand.reg": "Reg No: WP/GM/248 | Est. 1972",

    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.rates": "Rates & Calculators",
    "nav.welfare": "Member Welfare",
    "nav.branches": "Branches",
    "nav.news": "News & Tenders",
    "nav.contact": "Contact Us",
    "nav.member_portal": "Member Portal",
    "nav.become_member": "Join as Member",

    // Hero Section
    "hero.badge": "50+ Years of Trusted Community Service",
    "hero.title": "Empowering Local Lives & Economy Through Co-operative Strength",
    "hero.subtitle": "Rural banking services, quality Co-op City supermarkets, 24/7 fuel & energy supply, and lifelong member welfare under one trusted roof.",
    "hero.btn_rates": "View Bank Rates",
    "hero.btn_branch": "Find Nearest Branch",
    "hero.btn_member": "Become a Member",
    "hero.card1_title": "Co-op Rural Bank",
    "hero.card1_desc": "High yield deposits, instant pawning & micro-credit loans.",
    "hero.card2_title": "Co-op City Chain",
    "hero.card2_desc": "Fair priced groceries, fresh farm produce & wholesale goods.",
    "hero.card3_title": "Fuel & Energy",
    "hero.card3_desc": "24/7 Ceypetco filling stations & authorized gas agency.",
    "hero.card4_title": "Member Benefits",
    "hero.card4_desc": "Annual dividends, death aid fund & school scholarships.",

    // Quick Stats
    "stat.members": "Active Member Families",
    "stat.branches": "CRB Rural Bank Branches",
    "stat.coopcity": "Co-op City Supermarkets",
    "stat.fuel": "Fuel & Energy Stations",
    "stat.years": "Years of Continuous Service",

    // Home Sections
    "home.services_title": "Our Key Service Divisions",
    "home.services_subtitle": "Serving over 35,000 families across Negombo & surrounding regions with integrity, care, and economic empowerment.",
    "home.rates_title": "Competitive Deposit & Pawning Rates",
    "home.rates_subtitle": "Enjoy government-regulated security and maximum return on your hard-earned savings.",
    "home.welfare_title": "Comprehensive Member Welfare",
    "home.welfare_subtitle": "We exist for our members. Every profit we make returns to empower our people.",
    "home.news_title": "Latest News & Active Tenders",
    "home.news_subtitle": "Stay informed with official notifications, general meetings, and procurement opportunities.",

    // Division Card Titles
    "div.crb": "Co-operative Rural Bank (CRB)",
    "div.crb_desc": "Providing safe savings, fixed deposits, affordable self-employment loans, and confidential gold pawning with state vault protection.",
    "div.retail": "Consumer & Retail Chain (Co-op City)",
    "div.retail_desc": "Delivering essential dry rations at government controlled prices, fresh farm produce, and official Aswesuma welfare distribution.",
    "div.energy": "Fuel & Energy Services",
    "div.energy_desc": "Operating 2 fully-automated Ceypetco fuel stations 24/7 and serving as authorized distributors for Litro and Laugfs domestic gas.",
    "div.commercial": "Commercial & Special Enterprises",
    "div.commercial_desc": "Air-conditioned 400-seat reception hall for weddings and events, wholesome Co-op bakery, and community pharmacy.",

    // Common Buttons & Labels
    "btn.learn_more": "Learn More",
    "btn.view_all": "View All",
    "btn.apply_now": "Apply Now",
    "btn.calculate": "Calculate Returns",
    "btn.download_form": "Download Application",
    "btn.call_now": "Call Now",
    "btn.get_directions": "Get Directions",
    "btn.submit": "Submit Message",
    "btn.filter_all": "All",
    "btn.filter_crb": "Rural Bank",
    "btn.filter_retail": "Co-op City",
    "btn.filter_fuel": "Fuel & Gas",
    "btn.filter_commercial": "Commercial",

    // Rates Table & Highlights
    "table.scroll_hint": "Swipe sideways to view all rates & features",
    "rate.account": "Account / Deposit Type",
    "rate.term": "Tenure / Basis",
    "rate.aer": "Annual Interest Rate (AER)",
    "rate.note": "Key Features",
    "rate.reg_saving": "Regular Savings Account",
    "rate.reg_saving_term": "On Daily Balance",
    "rate.reg_saving_note": "Minimum opening balance Rs. 500/-",
    "rate.kids_saving": "Kekulu Children's Savings",
    "rate.kids_saving_term": "On Monthly Balance",
    "rate.kids_saving_note": "Includes gifts, school supplies & exam awards",
    "rate.senior_saving": "Senior Citizens' Savings",
    "rate.senior_saving_term": "On Monthly Balance",
    "rate.senior_saving_note": "For valued members aged 55 years and above",
    "rate.fd_3m": "Fixed Deposit (3 Months)",
    "rate.fd_3m_term": "At Maturity (3M)",
    "rate.fd_3m_note": "Ideal for short-term liquidity & safe growth",
    "rate.fd_6m": "Fixed Deposit (6 Months)",
    "rate.fd_6m_term": "At Maturity (6M)",
    "rate.fd_6m_note": "Option for monthly interest pay-out",
    "rate.fd_12m": "Fixed Deposit (12 Months)",
    "rate.fd_12m_term": "At Maturity (1 Year)",
    "rate.fd_12m_note": "Maximum return backed by Co-operative Dept.",
    "rate.pawning": "Instant Gold Pawning (Ran Naya)",
    "rate.pawning_term": "Up to 12 Months",
    "rate.pawning_aer": "From Rs. 1.15 per Rs. 100/mo",
    "rate.pawning_note": "Maximum advance for 22/24k gold, confidential & safe",

    // Calculator Section
    "calc.title": "Interactive Deposit & Returns Calculator",
    "calc.subtitle": "Plan your investment and see how much your savings will grow with Demo MPCS Rural Bank.",
    "calc.amount_label": "Deposit Amount (LKR):",
    "calc.tenure_label": "Deposit Tenure:",
    "calc.result_label": "Estimated Maturity Value:",
    "calc.interest_earned": "Total Interest Earned:",
    "calc.monthly_payout": "Estimated Monthly Payout:",

    // Loan Calculator
    "calc.loan_title": "Quick Loan EMI Calculator",
    "calc.loan_amount": "Loan Amount (LKR):",
    "calc.loan_rate": "Annual Interest Rate (%):",
    "calc.loan_period": "Loan Period (Months):",
    "calc.monthly_emi": "Estimated Monthly Installment:",

    // Member Welfare Details
    "welfare.dividend_title": "Annual Dividends",
    "welfare.dividend_desc": "Direct return of the society's annual net surplus back to our shareholding members.",
    "welfare.death_title": "Death Donation Fund (අවමංගල්‍යාධාර)",
    "welfare.death_desc": "Immediate financial relief of Rs. 50,000/- upon demise of a member, and Rs. 25,000/- for registered dependents.",
    "welfare.scholarship_title": "Scholarships & Educational Awards",
    "welfare.scholarship_desc": "Merit scholarships and cash awards for children passing Grade 5 Scholarship, GCE O/L, and GCE A/L examinations.",
    "welfare.medical_title": "Medical & Critical Illness Relief",
    "welfare.medical_desc": "Direct grant assistance for specialized cardiac surgeries, cancer therapy, and cataract lens replacements.",

    // About Us Page
    "about.title": "About Demo MPCS",
    "about.subtitle": "Rooted in Community, Driven by Co-operative Principles since 1972.",
    "about.history_title": "Our Heritage & Background",
    "about.history_p1": "Established under the Co-operative Societies Law No. 5 of 1972 during the national co-operative restructuring, the Demo Multi-Purpose Co-operative Society Ltd. was born from the unification of several village co-operatives.",
    "about.history_p2": "Over five decades of devoted service, our society has expanded into a community anchor: 14 Co-operative Rural Bank branches, 18 Co-op City supermarkets, 2 modern automated fuel filling stations, a 400-seat reception banquet hall, and an extensive social welfare network serving over 35,000 member households.",
    "about.vision_title": "Our Vision",
    "about.vision_desc": "To be the foremost model co-operative movement that elevates the economic, social, and cultural standards of our members and community through collaborative solidarity.",
    "about.mission_title": "Our Mission",
    "about.mission_desc": "Adhering strictly to international co-operative values, to provide dependable, highly efficient financial, commercial, and welfare solutions that guarantee maximum member satisfaction and enduring financial stability.",
    "about.values_title": "Our Core Values",
    "about.val_transparency": "Transparency & Public Audit",
    "about.val_transparency_desc": "All financial transactions and administrative decisions remain open to democratic member audit.",
    "about.val_equality": "Democratic Equality",
    "about.val_equality_desc": "One Member, One Vote principle ensures every voice carries equal weight regardless of share volume.",
    "about.val_community": "Community Commitment",
    "about.val_community_desc": "Reinvesting local wealth into education, healthcare, and livelihood support.",
    "about.val_reliability": "50+ Years Reliability",
    "about.val_reliability_desc": "Endorsed and regulated by the Department of Co-operative Development.",

    // Leadership
    "about.gov_title": "Board of Directors & Governance",
    "about.gov_subtitle": "Elected democratically by our general assembly to steward the society's growth and protect member assets.",
    "about.mgmt_title": "Executive Management Team",
    "about.chairperson": "Mr. K. A. Jayantha Perera",
    "about.chairperson_role": "President / Chairman of the Board",
    "about.vice_chair": "Mr. M. S. Karunaratne",
    "about.vice_chair_role": "Vice Chairman",
    "about.secretary": "Mrs. P. D. De Silva",
    "about.secretary_role": "Honorary Secretary",
    "about.treasurer": "Mr. T. H. Gunasekera",
    "about.treasurer_role": "Honorary Treasurer",
    "about.gm": "Mr. R. M. Bandara",
    "about.gm_role": "General Manager (B.Com, MBA, FCA)",
    "about.crb_manager": "Mr. W. S. Fernando",
    "about.crb_manager_role": "Manager - CRB Banking Division",
    "about.retail_manager": "Mr. K. L. Wickramasinghe",
    "about.retail_manager_role": "Manager - Consumer & Retail Division",
    "about.accountant": "Mrs. N. A. Siriwardena",
    "about.accountant_role": "Chief Accountant",

    // 7 Principles
    "about.principles_title": "The 7 Universal Co-operative Principles",
    "about.p1": "1. Voluntary & Open Membership",
    "about.p2": "2. Democratic Member Control",
    "about.p3": "3. Member Economic Participation",
    "about.p4": "4. Autonomy & Independence",
    "about.p5": "5. Education, Training & Information",
    "about.p6": "6. Co-operation among Co-operatives",
    "about.p7": "7. Concern for Community",

    // Services Page
    "services.hero_title": "Comprehensive Community Services",
    "services.hero_subtitle": "Discover our multi-faceted enterprise wings: from grassroots rural banking and retail supermarkets to energy distribution and celebratory spaces.",
    "services.tab_crb": "Rural Bank (CRB)",
    "services.tab_retail": "Co-op City Retail",
    "services.tab_energy": "Fuel & Gas",
    "services.tab_commercial": "Special Commercial",

    // News & Tenders Page
    "news.hero_title": "Official News, Notices & Tenders",
    "news.hero_subtitle": "Official procurement opportunities, annual general meetings, and community service updates.",
    "news.tenders_title": "Active Tender Notices",
    "news.tenders_subtitle": "Open tenders for registered contractors, suppliers, and service providers.",
    "news.t1_no": "Tender No: MPCS/NEG/2026/T-08",
    "news.t1_title": "Supply of Nadu, Samba & Kekulu Rice for Co-op City Network (Year 2027)",
    "news.t1_deadline": "Bid Closing: November 30, 2026 at 2:00 PM",
    "news.t1_desc": "Sealed bids are invited from registered rice millers and wholesale suppliers for the bulk supply of certified rice varieties for retail distribution.",
    "news.t2_no": "Tender No: MPCS/NEG/2026/T-09",
    "news.t2_title": "Procurement & Installation of IP CCTV Surveillance for Main Warehouse & HQ",
    "news.t2_deadline": "Bid Closing: December 15, 2026 at 3:00 PM",
    "news.t2_desc": "Proposals invited from certified security and electronics vendors for a complete high-definition IP camera surveillance system with off-site monitoring.",
    "news.agm_title": "Notice of 52nd Annual General Meeting (AGM)",
    "news.agm_date": "Date: December 18, 2026 at 9:30 AM | Main Co-op Reception Hall",
    "news.agm_desc": "All active shareholding members are cordially invited to attend the 52nd AGM. Distribution of annual dividend vouchers and election of committee delegates will take place.",

    // Branches Page
    "branches.hero_title": "Branch Network & Service Centers",
    "branches.hero_subtitle": "Conveniently located across Negombo, Katunayake, Kochchikade and suburban centers to serve you better.",
    "branches.search_placeholder": "Search branch name, town, or service...",

    // Contact Page
    "contact.hero_title": "Contact Us & Public Grievance Desk",
    "contact.hero_subtitle": "We are here to listen. Inquire about services, lodge suggestions, or reach our emergency hotline.",
    "contact.form_title": "Send Us an Inquiry or Feedback",
    "contact.name": "Full Name",
    "contact.phone": "Phone Number",
    "contact.email": "Email Address",
    "contact.branch": "Relevant Branch / Division",
    "contact.category": "Inquiry Type",
    "contact.cat_general": "General Inquiry",
    "contact.cat_banking": "Rural Banking & Rates",
    "contact.cat_coopcity": "Co-op City & Supermarket",
    "contact.cat_fuel": "Fuel & Gas Supply",
    "contact.cat_welfare": "Member Welfare & Claims",
    "contact.cat_complaint": "Public Grievance / Complaint",
    "contact.message": "Your Message / Details",
    "contact.submit_btn": "Send Message",
    "contact.operating_hours": "Operational Hours",
    "contact.hq_hours": "Head Office & Administration",
    "contact.hq_timing": "Mon - Fri: 8:30 AM - 4:30 PM | Sat: 8:30 AM - 12:30 PM",
    "contact.bank_hours": "CRB Rural Bank Branches",
    "contact.bank_timing": "Mon - Sat: 8:30 AM - 3:00 PM",
    "contact.retail_hours": "Co-op City Supermarkets",
    "contact.retail_timing": "Open Daily: 8:00 AM - 8:00 PM",
    "contact.fuel_hours": "Filling Stations",
    "contact.fuel_timing": "Open 24 Hours / 7 Days a Week",

    // Footer
    "footer.desc": "Demo MPCS is a premier community co-operative dedicated to socio-economic upliftment, providing trusted rural banking, fair consumer retail, energy, and welfare benefits.",
    "footer.quick_links": "Quick Links",
    "footer.divisions": "Our Divisions",
    "footer.legal": "Legal & Registration",
    "footer.reg_text": "Registered under Co-operative Societies Act No. 5 of 1972. Governed by the Department of Co-operative Development, Western Province.",
    "footer.rights": "All Rights Reserved. Demo MPCS Ltd.",
    "footer.credit": "Official Demonstration Portal | Designed for Community Empowerment"
  },

  si: {
    // Top Bar & Meta
    "topbar.hotline": "ක්ෂණික ඇමතුම් / පැමිණිලි:",
    "topbar.office": "ප්‍රධාන කාර්යාලය: +94 31 222 3456",
    "topbar.email": "info@demompcs.lk",
    "topbar.hours": "සඳුදා - සිකු: පෙ.ව. 8:30 - ප.ව. 4:30 | සෙන: පෙ.ව. 8:30 - ප.ව. 12:30",
    "brand.name": "Demo MPCS",
    "brand.sub": "විවිධ සේවා සමූපකාර සමිතිය",
    "brand.reg": "ලියාපදිංචි අංකය: බස්/ගම්/248 | පිහිටුවීම: 1972",

    // Navigation
    "nav.home": "මුල් පිටුව",
    "nav.about": "අප ගැන",
    "nav.services": "සේවා අංශ",
    "nav.rates": "පොලී අනුපාත හා ගණක",
    "nav.welfare": "සාමාජික සුබසාධන",
    "nav.branches": "ශාඛා ජාලය",
    "nav.news": "පුවත් සහ ටෙන්ඩර්",
    "nav.contact": "සම්බන්ධ වන්න",
    "nav.member_portal": "සාමාජික පිවිසුම",
    "nav.become_member": "සාමාජිකයෙකු වන්න",

    // Hero Section
    "hero.badge": "වසර 50කට අධික අඛණ්ඩ ප්‍රජා විශ්වාසය",
    "hero.title": "ප්‍රජා සත්කාරය පෙරදැරි කරගත් විශ්වාසනීය සමූපකාර සේවාව",
    "hero.subtitle": "ග්‍රාමීය බැංකු සේවා, විශ්වාසනීය පාරිභෝගික සුපිරි වෙළඳසැල්, ඉන්ධන සැපයුම සහ සාමාජික සුබසාධනය එකම වහලක් යටින්.",
    "hero.btn_rates": "පොලී අනුපාත බලන්න",
    "hero.btn_branch": "ළඟම ශාඛාව සොයන්න",
    "hero.btn_member": "සාමාජිකයෙකු වන්න",
    "hero.card1_title": "සමූපකාර ග්‍රාමීය බැංකුව",
    "hero.card1_desc": "ආකර්ෂණීය තැන්පතු, ක්ෂණික රන් ණය සහ සහනදායී ණය යෝජනා.",
    "hero.card2_title": "කෝප් සිටි වෙළඳ ජාලය",
    "hero.card2_desc": "පාලන මිලට වියලි සලාක, නැවුම් එළවළු සහ තොග බෙදාහැරීම්.",
    "hero.card3_title": "ඉන්ධන සහ බලශක්ති",
    "hero.card3_desc": "පැය 24 පුරා Ceypetco ඉන්ධන පිරවුම්හල් සහ ගෘහස්ථ ගෑස්.",
    "hero.card4_title": "සාමාජික සුබසාධන",
    "hero.card4_desc": "වාර්ෂික ලාභාංශ, අවමංගල්‍යාධාර අරමුදල සහ අධ්‍යාපන ශිෂ්‍යත්ව.",

    // Quick Stats
    "stat.members": "සාමාජික පවුල් සංඛ්‍යාව",
    "stat.branches": "ග්‍රාමීය බැංකු ශාඛා",
    "stat.coopcity": "කෝප් සිටි සුපිරි වෙළඳසැල්",
    "stat.fuel": "ඉන්ධන පිරවුම්හල්",
    "stat.years": "වසරක අඛණ්ඩ සේවය",

    // Home Sections
    "home.services_title": "අපගේ ප්‍රධාන සේවා අංශ",
    "home.services_subtitle": "මීගමුව සහ ඒ අවට 35,000කට අධික සාමාජික පවුල් වෙත අවංකභාවය හා කාර්යක්ෂමතාවයෙන් යුතුව සේවය සලසමු.",
    "home.rates_title": "ආකර්ෂණීය තැන්පතු සහ රන් ණය පොලී අනුපාත",
    "home.rates_subtitle": "රජයේ අනුමැතිය සහ පූර්ණ සුරක්ෂිතභාවය සහිතව ඔබේ ඉතිරිකිරීම් වලට උපරිම ප්‍රතිලාභ ලබාගන්න.",
    "home.welfare_title": "විශේෂ සාමාජික සුබසාධන ප්‍රතිලාභ",
    "home.welfare_subtitle": "අපගේ පැවැත්ම සාමාජික ඔබ වෙනුවෙනි. අප ලබන සෑම ලාභාංශයක්ම ආපසු ජනතාවගේ යහපතට යොදවමු.",
    "home.news_title": "නවතම පුවත්, නිවේදන සහ ටෙන්ඩර්",
    "home.news_subtitle": "වාර්ෂික මහා සභා රැස්වීම්, නිල නිවේදන සහ ව්‍යාපාරික ටෙන්ඩර් තොරතුරු මෙතැනින් දැනගන්න.",

    // Division Card Titles
    "div.crb": "සමූපකාර ග්‍රාමීය බැංකු අංශය (CRB)",
    "div.crb_desc": "සුරක්ෂිත ඉතිරිකිරීම්, ස්ථාවර තැන්පතු, ස්වයං රැකියා ණය සහ රහස්‍යභාවය සුරැකි ක්ෂණික රන් ණය සේවාව.",
    "div.retail": "පාරිභෝගික සහ සිල්ලර වෙළඳාම (Co-op City)",
    "div.retail_desc": "අත්‍යවශ්‍ය භාණ්ඩ රජයේ පාලන මිලට, දේශීය ගොවි නිෂ්පාදන සහ නිල අස්වැසුම සහනාධාර බෙදාහැරීම.",
    "div.energy": "ඉන්ධන සහ ගෑස් සැපයුම් අංශය",
    "div.energy_desc": "පැය 24 පුරා ක්‍රියාත්මක Ceypetco ඉන්ධන පිරවුම්හල් සහ ලිට්‍රෝ/ලාෆ්ස් ගෘහස්ථ ගෑස් නියෝජිත සේවාව.",
    "div.commercial": "වාණිජ සහ විශේෂ සේවා අංශය",
    "div.commercial_desc": "ආසන 400කින් යුත් වායුසමනය කළ උත්සව ශාලාව, ප්‍රමිතිගත බේකරි නිෂ්පාදන සහ සමූපකාර ඖෂධ සැල.",

    // Common Buttons & Labels
    "btn.learn_more": "වැඩිදුර විස්තර",
    "btn.view_all": "සියල්ල බලන්න",
    "btn.apply_now": "අයදුම් කරන්න",
    "btn.calculate": "ප්‍රතිලාභ ගණනය කරන්න",
    "btn.download_form": "අයදුම්පත බාගත කරන්න",
    "btn.call_now": "අමතන්න",
    "btn.get_directions": "මාර්ග සිතියම",
    "btn.submit": "පණිවිඩය එවන්න",
    "btn.filter_all": "සියලු ශාඛා",
    "btn.filter_crb": "ග්‍රාමීය බැංකු",
    "btn.filter_retail": "කෝප් සිටි",
    "btn.filter_fuel": "ඉන්ධන හා ගෑස්",
    "btn.filter_commercial": "වාණිජ සේවා",

    // Rates Table & Highlights
    "table.scroll_hint": "සම්පූර්ණ පොලී අනුපාත බැලීමට වමට/දකුණට අදින්න",
    "rate.account": "ගිණුම් / තැන්පතු වර්ගය",
    "rate.term": "කාල සීමාව / පදනම",
    "rate.aer": "වාර්ෂික පොලී අනුපාතය (AER)",
    "rate.note": "විශේෂ සටහන",
    "rate.reg_saving": "සාමාන්‍ය ඉතිරිකිරීම් ගිණුම",
    "rate.reg_saving_term": "දිනපතා ශේෂය මත",
    "rate.reg_saving_note": "අවම ආරම්භක තැන්පතුව රු. 500/-",
    "rate.kids_saving": "කැකුළු ළමා ඉතිරිකිරීම්",
    "rate.kids_saving_term": "මාසික ශේෂය මත",
    "rate.kids_saving_note": "ත්‍යාග, පාසල් උපකරණ සහ විභාග ශිෂ්‍යත්ව හිමිකම",
    "rate.senior_saving": "ජ්‍යෙෂ්ඨ පුරවැසි ගිණුම",
    "rate.senior_saving_term": "මාසික ශේෂය මත",
    "rate.senior_saving_note": "වයස අවුරුදු 55ට වැඩි සාමාජිකයින් සඳහා විශේෂ පොලී",
    "rate.fd_3m": "ස්ථාවර තැන්පතු (මාස 03)",
    "rate.fd_3m_term": "කල්පිරීමේදී (මාස 03)",
    "rate.fd_3m_note": "කෙටි කාලීන ආයෝජන සඳහා වඩාත් යෝග්‍යයි",
    "rate.fd_6m": "ස්ථාවර තැන්පතු (මාස 06)",
    "rate.fd_6m_term": "කල්පිරීමේදී (මාස 06)",
    "rate.fd_6m_note": "මාසිකව පොලී ලබාගැනීමේ පහසුකම සහිතයි",
    "rate.fd_12m": "ස්ථාවර තැන්පතු (වසර 01)",
    "rate.fd_12m_term": "කල්පිරීමේදී (වසර 01)",
    "rate.fd_12m_note": "සමූපකාර දෙපාර්තමේන්තුවේ අනුමත උපරිම ප්‍රතිලාභ",
    "rate.pawning": "ක්ෂණික රන් ණය සේවාව",
    "rate.pawning_term": "මාස 12 දක්වා",
    "rate.pawning_aer": "රු. 100කට මසකට රු. 1.15 සිට",
    "rate.pawning_note": "කැරට් 22/24 රන් සඳහා ඉහළම අත්තිකාරම් මුදල සහ රහස්‍යභාවය",

    // Calculator Section
    "calc.title": "තැන්පතු සහ පොලී ගණක යන්ත්‍රය",
    "calc.subtitle": "ඔබේ ඉතිරිකිරීම් සඳහා ලැබෙන ආකර්ෂණීය ප්‍රතිලාභ මෙතැනින් නිවැරදිව ගණනය කරගන්න.",
    "calc.amount_label": "තැන්පතු මුදල (රුපියල්):",
    "calc.tenure_label": "තැන්පතු කාල සීමාව:",
    "calc.result_label": "කල්පිරීමේදී සම්පූර්ණ වටිනාකම:",
    "calc.interest_earned": "ලැබෙන මුළු පොලිය:",
    "calc.monthly_payout": "ඇස්තමේන්තුගත මාසික පොලිය:",

    // Loan Calculator
    "calc.loan_title": "ක්ෂණික ණය වාරික ගණකය (EMI)",
    "calc.loan_amount": "ණය මුදල (රුපියල්):",
    "calc.loan_rate": "වාර්ෂික පොලී අනුපාතය (%):",
    "calc.loan_period": "ආපසු ගෙවීමේ කාලය (මාස):",
    "calc.monthly_emi": "ඇස්තමේන්තුගත මාසික වාරිකය:",

    // Member Welfare Details
    "welfare.dividend_title": "වාර්ෂික ලාභාංශ බෙදාදීම",
    "welfare.dividend_desc": "සමිතියේ වාර්ෂික ශුද්ධ ලාභයෙන් කොටස් ප්‍රාග්ධනය මත සාමාජිකයින්ට ගෙවනු ලබන වාර්ෂික ප්‍රතිලාභය.",
    "welfare.death_title": "අවමංගල්‍යාධාර අරමුදල",
    "welfare.death_desc": "සාමාජිකයෙකුගේ වියෝවකදී රු. 50,000/- ක් සහ යැපෙන්නෙකුගේ වියෝවකදී රු. 25,000/- ක මූල්‍ය ආධාර.",
    "welfare.scholarship_title": "ශිෂ්‍යත්ව සහ අධ්‍යාපන සම්මාන",
    "welfare.scholarship_desc": "5 ශ්‍රේණිය, අ.පො.ස. සා/පෙළ සහ උ/පෙළ විශිෂ්ට සාමාර්ථ්‍ය ලබන දූ දරුවන්ට මුදල් ත්‍යාග හා ශිෂ්‍යත්ව.",
    "welfare.medical_title": "වෛද්‍ය සහ හදිසි ආපදා ආධාර",
    "welfare.medical_desc": "හෘද සැත්කම්, පිළිකා ප්‍රතිකාර සහ අක්ෂි කාච බද්ධ කිරීම් සඳහා මූල්‍ය ප්‍රතිපාදන.",

    // About Us Page
    "about.title": "Demo MPCS අප ගැන",
    "about.subtitle": "1972 සිට ප්‍රජා විශ්වාසය පෙරදැරිව සමූපකාර ප්‍රතිපත්ති ඔස්සේ ගොඩනැගුණු අභිමානවත් ගමන.",
    "about.history_title": "අපගේ ඉතිහාසය සහ පසුබිම",
    "about.history_p1": "1972 අංක 5 දරන සමූපකාර සමිති පනත යටතේ සිදුකළ විවිධ සේවා සමූපකාර ප්‍රතිසංවිධානය සමගින්, කුඩා ග්‍රාමීය සමිති කිහිපයක ඒකාබද්ධතාවයෙන් මීගමුව විවිධ සේවා සමූපකාර සමිතිය ආරම්භ විය.",
    "about.history_p2": "වසර 50කට අධික ගමනක ප්‍රතිඵලයක් ලෙස අද වන විට ග්‍රාමීය බැංකු ශාඛා 14ක්, කෝප් සිටි සුපිරි වෙළඳසැල් 18ක්, ඉන්ධන පිරවුම්හල් 2ක් සහ උත්සව ශාලා සංකීර්ණයක් මගින් 35,000කට අධික සාමාජික පවුල් ප්‍රමාණයකට සිය සේවය අඛණ්ඩව ලබා දෙයි.",
    "about.vision_title": "අපගේ දැක්ම",
    "about.vision_desc": "ප්‍රජා මූලික සහයෝගිතාව තුළින් සාමාජික ජනතාවගේ සහ සමස්ත ප්‍රජාවගේ ආර්ථික, සමාජීය හා සංස්කෘතික ජීවන මට්ටම ඉහළ නංවන ප්‍රමුඛතම සමූපකාර ව්‍යාපාරය වීම.",
    "about.mission_title": "අපගේ මෙහෙවර",
    "about.mission_desc": "සමූපකාර ප්‍රතිපත්තිවලට අනුගත වෙමින්, ඉහළ කාර්යක්ෂමතාවයකින් යුතු මූල්‍ය හා වෙළඳ සේවාවන් ලබා දෙමින් සාමාජික ප්‍රජාවගේ උපරිම තෘප්තිය සහ ආර්ථික ස්ථාවරත්වය තහවුරු කිරීම.",
    "about.values_title": "අපගේ මූලික අගයන්",
    "about.val_transparency": "විනිවිදභාවය සහ වගවීම",
    "about.val_transparency_desc": "සියලුම මූල්‍ය හා පරිපාලන කටයුතු ප්‍රජා විගණනයට විවෘතයි.",
    "about.val_equality": "ප්‍රජාතන්ත්‍රවාදී සමානාත්මතාවය",
    "about.val_equality_desc": "කොටස් ප්‍රමාණය කුමක් වුවත් 'එක් සාමාජිකයෙකුට එක් ඡන්දයක්' යන ප්‍රජාතන්ත්‍රවාදී පදනම.",
    "about.val_community": "ප්‍රජා සත්කාරය",
    "about.val_community_desc": "සාමාජිකයින්ගේ සුබසාධනය සහ සමාජ සංවර්ධනය කෙරෙහි නිරන්තර කැපවීම.",
    "about.val_reliability": "වසර 50ක විශ්වාසනීයත්වය",
    "about.val_reliability_desc": "සමූපකාර සංවර්ධන දෙපාර්තමේන්තුවේ අධීක්ෂණය සහ නීතිමය පිළිගැනීම.",

    // Leadership
    "about.gov_title": "අධ්‍යක්ෂ මණ්ඩලය සහ පාලනාධිකාරිය",
    "about.gov_subtitle": "මහා සභාව විසින් ප්‍රජාතන්ත්‍රවාදීව තෝරාපත් කරගන්නා ලද ගරු අධ්‍යක්ෂ මණ්ඩලය.",
    "about.mgmt_title": "විධායක කළමනාකාරීත්වය",
    "about.chairperson": "කේ. ඒ. ජයන්ත පෙරේරා මහතා",
    "about.chairperson_role": "සභාපති",
    "about.vice_chair": "එම්. එස්. කරුණාරත්න මහතා",
    "about.vice_chair_role": "උප සභාපති",
    "about.secretary": "පී. ඩී. ද සිල්වා මහත්මිය",
    "about.secretary_role": "ගරු ලේකම්",
    "about.treasurer": "ටී. එච්. ගුණසේකර මහතා",
    "about.treasurer_role": "භාණ්ඩාගාරික",
    "about.gm": "ආර්. එම්. බණ්ඩාර මහතා",
    "about.gm_role": "සාමාන්‍යාධිකාරී (B.Com, MBA, FCA)",
    "about.crb_manager": "ඩබ්. එස්. ප්‍රනාන්දු මහතා",
    "about.crb_manager_role": "ග්‍රාමීය බැංකු කළමනාකරු",
    "about.retail_manager": "කේ. එල්. වික්‍රමසිංහ මහතා",
    "about.retail_manager_role": "පාරිභෝගික අංශ ප්‍රධානී",
    "about.accountant": "එන්. ඒ. සිරිවර්ධන මිය",
    "about.accountant_role": "ප්‍රධාන ගණකාධිකාරී",

    // 7 Principles
    "about.principles_title": "ජාත්‍යන්තර සමූපකාර ප්‍රතිපත්ති 07",
    "about.p1": "1. ස්වේච්ඡා සහ විවෘත සාමාජිකත්වය",
    "about.p2": "2. සාමාජිකයින්ගේ ප්‍රජාතන්ත්‍රවාදී පාලනය",
    "about.p3": "3. සාමාජික ආර්ථික සහභාගීත්වය",
    "about.p4": "4. ස්වාධීනත්වය සහ ස්වයංපාලනය",
    "about.p5": "5. අධ්‍යාපනය, පුහුණුව සහ තොරතුරු සැපයීම",
    "about.p6": "6. සමූපකාර අතර අන්‍යෝන්‍ය සහයෝගීතාවය",
    "about.p7": "7. ප්‍රජාව කෙරෙහි ඇති සැලකිල්ල",

    // Services Page
    "services.hero_title": "විවිධ සේවා සමූපකාර සේවාවන්",
    "services.hero_subtitle": "ග්‍රාමීය බැංකු සේවාවේ සිට සුපිරි වෙළඳසැල්, ඉන්ධන සැපයුම සහ උත්සව ශාලා දක්වා ඔබගේ එදිනෙදා ජීවිතය සවිමත් කරන සේවාවන්.",
    "services.tab_crb": "ග්‍රාමීය බැංකුව (CRB)",
    "services.tab_retail": "කෝප් සිටි සිල්ලර ජාලය",
    "services.tab_energy": "ඉන්ධන සහ ගෑස්",
    "services.tab_commercial": "වාණිජ සේවා",

    // News & Tenders Page
    "news.hero_title": "පුවත්, නිවේදන සහ ටෙන්ඩර්",
    "news.hero_subtitle": "වාර්ෂික මහා සභා තොරතුරු, ව්‍යාපාරික ටෙන්ඩර් නිවේදන සහ සමාජ සත්කාරක පුවත්.",
    "news.tenders_title": "සක්‍රීය ටෙන්ඩර් නිවේදන",
    "news.tenders_subtitle": "ලියාපදිංචි සැපයුම්කරුවන් සහ කොන්ත්‍රාත්කරුවන් සඳහා වන විවෘත ලංසු කැඳවීම්.",
    "news.t1_no": "ටෙන්ඩර් අංකය: MPCS/NEG/2026/T-08",
    "news.t1_title": "කෝප් සිටි ශාඛා සඳහා 2027 වසරට සහල් තොග සැපයීම",
    "news.t1_deadline": "අවසන් දිනය: 2026 නොවැම්බර් 30 ප.ව. 2.00",
    "news.t1_desc": "නාඩු, සම්බා සහ කැකුළු සහල් තොග සැපයීම සඳහා ලියාපදිංචි මෝල් හිමියන්ගෙන් සහ තොග සැපයුම්කරුවන්ගෙන් මුද්‍රා තැබූ ලංසු කැඳවනු ලැබේ.",
    "news.t2_no": "ටෙන්ඩර් අංකය: MPCS/NEG/2026/T-09",
    "news.t2_title": "ප්‍රධාන ගබඩාව සහ මුලස්ථානය සඳහා IP CCTV කැමරා පද්ධතියක් සවිකිරීම",
    "news.t2_deadline": "අවසන් දිනය: 2026 දෙසැම්බර් 15 ප.ව. 3.00",
    "news.t2_desc": "නවීනතම අධි-විභේදන IP ආරක්ෂක කැමරා සහ දුරස්ථ නිරීක්ෂණ පද්ධතියක් සැපයීම හා ස්ථාපනය සඳහා ලංසු කැඳවීම.",
    "news.agm_title": "52 වන වාර්ෂික මහා සභා රැස්වීම පිළිබඳ නිවේදනය",
    "news.agm_date": "දිනය: 2026 දෙසැම්බර් 18 පෙ.ව. 9.30 | ප්‍රධාන කෝප් උත්සව ශාලාව",
    "news.agm_desc": "සියලුම ගරු සාමාජිකයින්ට මෙයින් සාදරයෙන් ආරාධනා කෙරේ. වාර්ෂික ලාභාංශ වවුචර්පත් බෙදාහැරීම එදින සිදුකෙරේ.",

    // Branches Page
    "branches.hero_title": "ශාඛා ජාලය සහ සේවා මධ්‍යස්ථාන",
    "branches.hero_subtitle": "මීගමුව, කටුනායක, කොච්චිකඩේ ඇතුළු ප්‍රදේශ රැසක ඔබට පහසුවෙන් ළඟාවිය හැකි අපගේ ශාඛා ජාලය.",
    "branches.search_placeholder": "ශාඛාවේ නම, ප්‍රදේශය හෝ සේවාව සොයන්න...",

    // Contact Page
    "contact.hero_title": "සම්බන්ධ වන්න සහ පැමිණිලි අංශය",
    "contact.hero_subtitle": "ඔබගේ ගැටළු, සේවා විමසීම් සහ අදහස් අප වෙත පහසුවෙන් යොමු කරන්න.",
    "contact.form_title": "අප වෙත පණිවිඩයක් එවන්න",
    "contact.name": "සම්පූර්ණ නම",
    "contact.phone": "දුරකථන අංකය",
    "contact.email": "විද්‍යුත් තැපෑල",
    "contact.branch": "අදාළ ශාඛාව / අංශය",
    "contact.category": "විමසීම් කාණ්ඩය",
    "contact.cat_general": "සාමාන්‍ය විමසීම්",
    "contact.cat_banking": "ග්‍රාමීය බැංකු සහ පොලී",
    "contact.cat_coopcity": "කෝප් සිටි සුපිරි වෙළඳසැල්",
    "contact.cat_fuel": "ඉන්ධන සහ ගෑස් සැපයුම",
    "contact.cat_welfare": "සාමාජික සුබසාධන",
    "contact.cat_complaint": "පැමිණිලි සහ යෝජනා",
    "contact.message": "ඔබගේ පණිවිඩය හෝ විස්තරය",
    "contact.submit_btn": "පණිවිඩය යොමු කරන්න",
    "contact.operating_hours": "සේවා වේලාවන්",
    "contact.hq_hours": "පරිපාලන ප්‍රධාන කාර්යාලය",
    "contact.hq_timing": "සඳුදා - සිකුරාදා: පෙ.ව. 8.30 - ප.ව. 4.30 | සෙනසුරාදා: පෙ.ව. 8.30 - ප.ව. 12.30",
    "contact.bank_hours": "සමූපකාර ග්‍රාමීය බැංකු ශාඛා",
    "contact.bank_timing": "සඳුදා - සෙනසුරාදා: පෙ.ව. 8.30 - ප.ව. 3.00",
    "contact.retail_hours": "කෝප් සිටි වෙළඳසැල්",
    "contact.retail_timing": "දිනපතා: පෙ.ව. 8.00 - ප.ව. 8.00 දක්වා",
    "contact.fuel_hours": "ඉන්ධන පිරවුම්හල්",
    "contact.fuel_timing": "පැය 24 පුරා අඛණ්ඩව ක්‍රියාත්මකයි",

    // Footer
    "footer.desc": "Demo MPCS යනු සාමාජික ප්‍රජාවගේ ආර්ථික සහ සමාජීය දියුණුව උදෙසා විශ්වාසනීය බැංකු, පාරිභෝගික සිල්ලර වෙළඳ සහ බලශක්ති සේවා සපයන පුරෝගාමී සමූපකාර සමිතියකි.",
    "footer.quick_links": "ක්ෂණික සබැඳි",
    "footer.divisions": "අපගේ සේවා අංශ",
    "footer.legal": "නීතිමය ලියාපදිංචිය",
    "footer.reg_text": "1972 අංක 5 දරන සමූපකාර සමිති පනත යටතේ ලියාපදිංචි කර ඇත. බස්නාහිර පළාත් සමූපකාර සංවර්ධන දෙපාර්තමේන්තුවේ අධීක්ෂණය යටතේ පාලනය වේ.",
    "footer.rights": "සියලුම හිමිකම් ඇවිරිණි. Demo MPCS Ltd.",
    "footer.credit": "නිල ආදර්ශන වෙබ් අඩවිය | ප්‍රජා සවිබලගැන්වීම උදෙසා නිර්මාණය කරන ලදී"
  },

  ta: {
    // Top Bar & Meta
    "topbar.hotline": "துரித அழைப்பு / முறைப்பாடுகள்:",
    "topbar.office": "தலைமை அலுவலகம்: +94 31 222 3456",
    "topbar.email": "info@demompcs.lk",
    "topbar.hours": "திங்கள் - வெள்ளி: மு.ப 8:30 - பி.ப 4:30 | சனி: மு.ப 8:30 - பி.ப 12:30",
    "brand.name": "Demo MPCS",
    "brand.sub": "பல்நோக்கு கூட்டுறவுச் சங்கம்",
    "brand.reg": "பதிவு இலக்கம்: WP/GM/248 | ஆரம்பம்: 1972",

    // Navigation
    "nav.home": "முகப்பு",
    "nav.about": "எங்களைப் பற்றி",
    "nav.services": "சேவைகள்",
    "nav.rates": "வட்டி விகிதங்கள்",
    "nav.welfare": "உறுப்பினர் நலன்புரி",
    "nav.branches": "கிளைகள்",
    "nav.news": "செய்திகள் & டெண்டர்",
    "nav.contact": "தொடர்புகளுக்கு",
    "nav.member_portal": "உறுப்பினர் தளம்",
    "nav.become_member": "உறுப்பினராக இணைதல்",

    // Hero Section
    "hero.badge": "50+ ஆண்டுகால சமூக நம்பிக்கை",
    "hero.title": "சமூக அக்கறையுடன் கூடிய நம்பகமான கூட்டுறவுச் சேவை",
    "hero.subtitle": "கிராமிய வங்கிச் சேவைகள், கோப் சிட்டி பல்பொருள் அங்காடிகள், எரிபொருள் வழங்கல் மற்றும் உறுப்பினர் நலன்புரி ஒரே கூரையின் கீழ்.",
    "hero.btn_rates": "வட்டி விபரங்கள்",
    "hero.btn_branch": "அருகிலுள்ள கிளை",
    "hero.btn_member": "உறுப்பினராக சேரவும்",
    "hero.card1_title": "கிராமிய கூட்டுறவு வங்கி",
    "hero.card1_desc": "உயர் சேமிப்பு வட்டி, உடனடி நகை அடகு மற்றும் சுயதொழில் கடன்கள்.",
    "hero.card2_title": "கோப் சிட்டி வலையமைப்பு",
    "hero.card2_desc": "நியாய விலையில் அத்தியாவசியப் பொருட்கள், பண்ணைப் பழங்கள் & காய்கறிகள்.",
    "hero.card3_title": "எரிபொருள் & எரிவாயு",
    "hero.card3_desc": "24 மணி நேர Ceypetco எரிபொருள் நிரப்பு நிலையம் மற்றும் காஸ் முகவர்.",
    "hero.card4_title": "உறுப்பினர் நலன்கள்",
    "hero.card4_desc": "வருடாந்த பங்கு இலாபம், மரண உதவி நிதி மற்றும் கல்வி புலமைப்பரிசில்கள்.",

    // Quick Stats
    "stat.members": "செயலில் உள்ள குடும்பங்கள்",
    "stat.branches": "கிராமிய வங்கிக் கிளைகள்",
    "stat.coopcity": "கோப் சிட்டி அங்காடிகள்",
    "stat.fuel": "எரிபொருள் நிலையங்கள்",
    "stat.years": "வருட தொடர் சேவை",

    // Home Sections
    "home.services_title": "எமது முக்கிய சேவைப் பிரிவுகள்",
    "home.services_subtitle": "நீர்கொழும்பு மற்றும் சுற்றுப்புறப் பகுதிகளில் 35,000க்கும் மேற்பட்ட குடும்பங்களுக்கு நேர்மையுடன் சேவையாற்றுகிறோம்.",
    "home.rates_title": "வைப்புத்தொகை மற்றும் அடகு வட்டி விகிதங்கள்",
    "home.rates_subtitle": "அரசாங்க ஒழுங்குமுறை மற்றும் முழுப் பாதுகாப்புடன் உங்கள் சேமிப்புக்கு அதிகபட்ச வருமானத்தைப் பெறுங்கள்.",
    "home.welfare_title": "முழுமையான உறுப்பினர் நலன்புரி",
    "home.welfare_subtitle": "நாம் எமது உறுப்பினர்களுக்காகவே இயங்குகிறோம். நாம் ஈட்டும் இலாபம் மீண்டும் மக்களுக்கே சென்றடைகிறது.",
    "home.news_title": "சமீபத்திய செய்திகள் & டெண்டர்கள்",
    "home.news_subtitle": "வருடாந்த பொதுக்கூட்டம், உத்தியோகபூர்வ அறிவிப்புகள் மற்றும் கொள்முதல் டெண்டர் விபரங்கள்.",

    // Division Card Titles
    "div.crb": "கிராமிய கூட்டுறவு வங்கி (CRB)",
    "div.crb_desc": "பாதுகாப்பான சேமிப்பு, நிலையான வைப்புகள், சுயதொழில் கடன்கள் மற்றும் இரகசியமான உடனடி தங்க நகைக் கடன் சேவை.",
    "div.retail": "நுகர்வோர் சில்லறை வணிகம் (Co-op City)",
    "div.retail_desc": "அரச கட்டுப்பாட்டு விலையில் அத்தியாவசியப் பொருட்கள், உள்ளூர் பண்ணை உற்பத்திகள் மற்றும் அஸ்வெசும விநியோகம்.",
    "div.energy": "எரிபொருள் & எரிசக்தி பிரிவு",
    "div.energy_desc": "24 மணி நேர Ceypetco எரிபொருள் நிரப்பு நிலையங்கள் மற்றும் லிட்ரோ / லாஃவ்ஸ் காஸ் விநியோக சேவை.",
    "div.commercial": "வணிக & சிறப்பு சேவைகள்",
    "div.commercial_desc": "400 இருக்கைகள் கொண்ட குளிரூட்டப்பட்ட வரவேற்பு மண்டபம், தரமான வெதுப்பக உற்பத்திகள் மற்றும் கூட்டுறவு மருந்தகம்.",

    // Common Buttons & Labels
    "btn.learn_more": "மேலும் அறிய",
    "btn.view_all": "அனைத்தையும் பார்க்க",
    "btn.apply_now": "விண்ணப்பிக்கவும்",
    "btn.calculate": "கணக்கிட",
    "btn.download_form": "விண்ணப்ப படிவம்",
    "btn.call_now": "அழைக்க",
    "btn.get_directions": "வழிகாட்டி வரைபடம்",
    "btn.submit": "அனுப்பவும்",
    "btn.filter_all": "அனைத்தும்",
    "btn.filter_crb": "வங்கி",
    "btn.filter_retail": "கோப் சிட்டி",
    "btn.filter_fuel": "எரிபொருள்",
    "btn.filter_commercial": "வணிகம்",

    // Rates Table & Highlights
    "table.scroll_hint": "முழு வட்டி விகிதங்களைக் காண பக்கவாட்டில் நகர்த்தவும்",
    "rate.account": "கணக்கு / வைப்பு வகை",
    "rate.term": "காலம் / அடிப்படை",
    "rate.aer": "வருடாந்த வட்டி விகிதம் (AER)",
    "rate.note": "விசேட குறிப்பு",
    "rate.reg_saving": "சாதாரண சேமிப்புக் கணக்கு",
    "rate.reg_saving_term": "நாளாந்த மீதி மீது",
    "rate.reg_saving_note": "குறைந்தபட்ச ஆரம்ப வைப்பு ரூ. 500/-",
    "rate.kids_saving": "கெக்குளு சிறுவர் சேமிப்பு",
    "rate.kids_saving_term": "மாதாந்த மீதி மீது",
    "rate.kids_saving_note": "பரிசுகள், பாடசாலை உபகரணங்கள் மற்றும் புலமைப்பரிசில்கள்",
    "rate.senior_saving": "சிரேஷ்ட பிரஜைகள் சேமிப்பு",
    "rate.senior_saving_term": "மாதாந்த மீதி மீது",
    "rate.senior_saving_note": "55 வயதுக்கு மேற்பட்ட உறுப்பினர்களுக்கு விசேட வட்டி",
    "rate.fd_3m": "நிலையான வைப்பு (03 மாதங்கள்)",
    "rate.fd_3m_term": "முதிர்வில் (03 மாதங்கள்)",
    "rate.fd_3m_note": "குறுகிய கால முதலீடுகளுக்கு சிறந்தது",
    "rate.fd_6m": "நிலையான வைப்பு (06 மாதங்கள்)",
    "rate.fd_6m_term": "முதிர்வில் (06 மாதங்கள்)",
    "rate.fd_6m_note": "மாதாந்த வட்டி பெறும் வசதியுடன்",
    "rate.fd_12m": "நிலையான வைப்பு (01 வருடம்)",
    "rate.fd_12m_term": "முதிர்வில் (01 வருடம்)",
    "rate.fd_12m_note": "கூட்டுறவு திணைக்கள அங்கீகாரத்துடன் கூடிய பாதுகாப்பு",
    "rate.pawning": "உடனடி தங்க நகைக் கடன் (அடகு)",
    "rate.pawning_term": "12 மாதங்கள் வரை",
    "rate.pawning_aer": "ரூ. 100க்கு மாதம் ரூ. 1.15 முதல்",
    "rate.pawning_note": "22/24 கரட் தங்க நகைகளுக்கு அதிகபட்ச முன்பணம் மற்றும் பாதுகாப்பு",

    // Calculator Section
    "calc.title": "வைப்பு மற்றும் வட்டி கணிப்பான்",
    "calc.subtitle": "Demo MPCS கிராமிய வங்கியில் உங்கள் சேமிப்பு எவ்வாறு வளரும் என்பதை எளிதாக கணக்கிடுங்கள்.",
    "calc.amount_label": "வைப்புத்தொகை (ரூபாய்):",
    "calc.tenure_label": "முதலீட்டுக் காலம்:",
    "calc.result_label": "முதிர்வுத் தொகை (மதிப்பீடு):",
    "calc.interest_earned": "மொத்த வட்டி வருமானம்:",
    "calc.monthly_payout": "மதிப்பிடப்பட்ட மாதாந்த வட்டி:",

    // Loan Calculator
    "calc.loan_title": "கடன் தவணை கணிப்பான் (EMI)",
    "calc.loan_amount": "கடன் தொகை (ரூபாய்):",
    "calc.loan_rate": "வருடாந்த வட்டி (%):",
    "calc.loan_period": "திருப்பிச் செலுத்தும் காலம் (மாதங்கள்):",
    "calc.monthly_emi": "மதிப்பிடப்பட்ட மாதாந்த தவணை:",

    // Member Welfare Details
    "welfare.dividend_title": "வருடாந்த பங்கு இலாபப் பகிர்வு",
    "welfare.dividend_desc": "சங்கத்தின் வருடாந்த நிகர இலாபத்திலிருந்து பங்கு மூலதனத்தின் அடிப்படையில் உறுப்பினர்களுக்கு வழங்கப்படும் இலாபம்.",
    "welfare.death_title": "மரண உதவி நிதி",
    "welfare.death_desc": "உறுப்பினர் ஒருவரின் மறைவின் போது ரூ. 50,000/- மற்றும் தங்கியிருப்பவரின் மறைவில் ரூ. 25,000/- நிவாரணம்.",
    "welfare.scholarship_title": "கல்வி புலமைப்பரிசில்கள்",
    "welfare.scholarship_desc": "தரம் 5 புலமைப்பரிசில், க.பொ.த சா/த மற்றும் உ/த பரீட்சைகளில் சித்தியடையும் பிள்ளைகளுக்கு பணப்பரிசு & உதவித்தொகை.",
    "welfare.medical_title": "மருத்துவ மற்றும் அவசர நிவாரண நிதி",
    "welfare.medical_desc": "இதய அறுவை சிகிச்சை, புற்றுநோய் சிகிச்சை மற்றும் கண் வில்லை மாற்று சிகிச்சைகளுக்கான நிதி உதவி.",

    // About Us Page
    "about.title": "Demo MPCS பற்றி",
    "about.subtitle": "1972 முதல் சமூக நம்பிக்கையுடன் கூட்டுறவுக் கொள்கைகளின் வழிநடத்தலில் பெருமிதமான பயணம்.",
    "about.history_title": "எமது வரலாறு & பின்னணி",
    "about.history_p1": "1972 ஆம் ஆண்டின் 5 ஆம் இலக்க கூட்டுறவுச் சங்கங்கள் சட்டத்தின் கீழ் மேற்கொள்ளப்பட்ட மறுசீரமைப்பின் மூலம் கிராமிய சங்கங்கள் ஒருங்கிணைக்கப்பட்டு தோற்றுவிக்கப்பட்டது.",
    "about.history_p2": "ஐந்து தசாப்த கால சேவையில் இன்று 14 கிராமிய வங்கிக் கிளைகள், 18 கோப் சிட்டி அங்காடிகள், 2 நவீன எரிபொருள் நிரப்பு நிலையங்கள் மற்றும் மண்டபத் தொகுதி மூலம் 35,000 க்கும் மேற்பட்ட குடும்பங்களுக்கு தொடர் சேவை வழங்குகிறது.",
    "about.vision_title": "எமது நோக்கு",
    "about.vision_desc": "கூட்டுறவு ஒற்றுமை மூலம் உறுப்பினர்களதும் சமூகத்தினதும் பொருளாதார, சமூக மற்றும் கலாச்சார வாழ்வாதாரத்தை மேம்படுத்தும் முன்னோடி இயக்கமாக திகழ்தல்.",
    "about.mission_title": "எமது பணி",
    "about.mission_desc": "கூட்டுறவுக் கொள்கைகளுக்கு அமைவாக, வினைத்திறனான நிதி மற்றும் வணிகச் சேவைகளை வழங்கி உறுப்பினர்களின் திருப்தியையும் பொருளாதார ஸ்திரத்தன்மையையும் உறுதிசெய்தல்.",
    "about.values_title": "எமது அடிப்படைக் கொள்கைகள்",
    "about.val_transparency": "வெளிப்படைத்தன்மையும் பொறுப்புக்கூறலும்",
    "about.val_transparency_desc": "அனைத்து நிதி மற்றும் நிர்வாக நடவடிக்கைகள் வெளிப்படையான கணக்காய்வுக்கு உட்பட்டவை.",
    "about.val_equality": "ஜனநாயக சமத்துவம்",
    "about.val_equality_desc": "பங்குத் தொகை எதுவாயினும் 'ஒரு உறுப்பினருக்கு ஒரு வாக்கு' என்ற மக்களாட்சி முறை.",
    "about.val_community": "சமூக அக்கறை",
    "about.val_community_desc": "உறுப்பினர்களின் நலன்புரி மற்றும் சமூக மேம்பாட்டுக்கான தொடர் அர்ப்பணிப்பு.",
    "about.val_reliability": "50+ ஆண்டுகால நம்பகத்தன்மை",
    "about.val_reliability_desc": "கூட்டுறவு அபிவிருத்தி திணைக்களத்தின் வழிகாட்டலும் கண்காணிப்பும்.",

    // Leadership
    "about.gov_title": "பணிப்பாளர் சபை மற்றும் நிர்வாகம்",
    "about.gov_subtitle": "மகா சபையினால் ஜனநாயக முறையில் தேர்ந்தெடுக்கப்பட்ட கௌரவ பணிப்பாளர் சபை.",
    "about.mgmt_title": "நிறைவேற்று நிர்வாகக் குழு",
    "about.chairperson": "திரு. கே. ஏ. ஜயந்த பெரேரா",
    "about.chairperson_role": "தலைவர்",
    "about.vice_chair": "திரு. எம். எஸ். கருணாரத்ன",
    "about.vice_chair_role": "உப தலைவர்",
    "about.secretary": "திருமதி. பி. டி. டி சில்வா",
    "about.secretary_role": "கௌரவ செயலாளர்",
    "about.treasurer": "திரு. டி. எச். குணசேகர",
    "about.treasurer_role": "பொருளாளர்",
    "about.gm": "திரு. ஆர். எம். பண்டார",
    "about.gm_role": "பொது முகாமையாளர் (B.Com, MBA, FCA)",
    "about.crb_manager": "திரு. டபிள்யூ. எஸ். பெர்னாண்டோ",
    "about.crb_manager_role": "முகாமையாளர் - கிராமிய வங்கிப் பிரிவு",
    "about.retail_manager": "திரு. கே. எல். விக்கிரமசிங்க",
    "about.retail_manager_role": "முகாமையாளர் - நுகர்வோர் பிரிவு",
    "about.accountant": "திருமதி. என். ஏ. சிரிவர்தன",
    "about.accountant_role": "பிரதம கணக்காளர்",

    // 7 Principles
    "about.principles_title": "சர்வதேச கூட்டுறவுக் கொள்கைகள் 07",
    "about.p1": "1. தன்னார்வ மற்றும் வெளிப்படையான அங்கத்துவம்",
    "about.p2": "2. உறுப்பினர்களின் ஜனநாயகக் கட்டுப்பாடு",
    "about.p3": "3. உறுப்பினர்களின் பொருளாதாரப் பங்களிப்பு",
    "about.p4": "4. சுயாட்சியும் சுதந்திரமும்",
    "about.p5": "5. கல்வி, பயிற்சி மற்றும் தகவல் பரப்புரை",
    "about.p6": "6. கூட்டுறவுகளுக்கிடையிலான பரஸ்பர ஒத்துழைப்பு",
    "about.p7": "7. சமூகம் மீதான கரிசனை",

    // Services Page
    "services.hero_title": "விரிவான சமூக சேவைகள்",
    "services.hero_subtitle": "கிராமிய வங்கிச் சேவைகள் முதல் சில்லறை அங்காடிகள், எரிபொருள் மற்றும் விசேட நிகழ்வு மண்டபம் வரையிலான எமது சேவைகள்.",
    "services.tab_crb": "கிராமிய வங்கி (CRB)",
    "services.tab_retail": "கோப் சிட்டி அங்காடி",
    "services.tab_energy": "எரிபொருள் & காஸ்",
    "services.tab_commercial": "வணிகச் சேவைகள்",

    // News & Tenders Page
    "news.hero_title": "அதிகாரபூர்வ செய்திகள் & டெண்டர்கள்",
    "news.hero_subtitle": "வருடாந்த பொதுக்கூட்டம், கொள்முதல் டெண்டர் விபரங்கள் மற்றும் சமூக நலன்புரி அறிவிப்புகள்.",
    "news.tenders_title": "செயலில் உள்ள டெண்டர் அறிவிப்புகள்",
    "news.tenders_subtitle": "பதிவு செய்யப்பட்ட விநியோகஸ்தர்களுக்கான கேள்விப்பத்திர கோரல்கள்.",
    "news.t1_no": "டெண்டர் இலக்கம்: MPCS/NEG/2026/T-08",
    "news.t1_title": "கோப் சிட்டி கிளைகளுக்கு 2027 ஆம் ஆண்டுக்கான அரிசி விநியோகம்",
    "news.t1_deadline": "முடிவுத் திகதி: 30 நவம்பர் 2026 பி.ப 2.00",
    "news.t1_desc": "நாடு, சம்பா மற்றும் கெக்குளு அரிசிகளை மொத்தமாக விநியோகிப்பதற்காக பதிவு செய்யப்பட்ட ஆலை உரிமையாளர்களிடமிருந்து முத்திரையிடப்பட்ட விலைமனுக்கள் கோரப்படுகின்றன.",
    "news.t2_no": "டெண்டர் இலக்கம்: MPCS/NEG/2026/T-09",
    "news.t2_title": "பிரதான களஞ்சியம் மற்றும் தலைமையகத்திற்கு IP CCTV கண்காணிப்பு கட்டமைப்பு",
    "news.t2_deadline": "முடிவுத் திகதி: 15 டிசம்பர் 2026 பி.ப 3.00",
    "news.t2_desc": "உயர் தெளிவுத்திறன் கொண்ட நவீன IP கெமரா மற்றும் தொலைதூர கண்காணிப்பு அமைப்பை பொருத்துவதற்கான விலைமனுக்கள்.",
    "news.agm_title": "52வது வருடாந்த பொதுக்கூட்ட அறிவித்தல்",
    "news.agm_date": "திகதி: 18 டிசம்பர் 2026 மு.ப 9.30 | பிரதான கூட்டுறவு மண்டபம்",
    "news.agm_desc": "அனைத்து கௌரவ உறுப்பினர்களும் அழைக்கப்படுகின்றனர். வருடாந்த பங்கு இலாப வவுச்சர்கள் அன்றைய தினம் வழங்கப்படும்.",

    // Branches Page
    "branches.hero_title": "கிளை வலையமைப்பு & சேவை நிலையங்கள்",
    "branches.hero_subtitle": "நீர்கொழும்பு, கட்டுநாயக்க, கொச்சிக்கடை மற்றும் புறநகர்ப் பகுதிகளில் உங்கள் அருகிலுள்ள கிளைகள்.",
    "branches.search_placeholder": "கிளையின் பெயர், நகரம் அல்லது சேவையைத் தேடவும்...",

    // Contact Page
    "contact.hero_title": "தொடர்புகொள்ள & முறைப்பாட்டுப் பிரிவு",
    "contact.hero_subtitle": "உங்கள் ஆலோசனைகள், கேள்விகள் மற்றும் முறைப்பாடுகளை இலகுவாக எமக்கு சமர்ப்பியுங்கள்.",
    "contact.form_title": "எமக்கு செய்தி அனுப்பவும்",
    "contact.name": "முழுப் பெயர்",
    "contact.phone": "தொலைபேசி இலக்கம்",
    "contact.email": "மின்னஞ்சல் முகவரி",
    "contact.branch": "தொடர்புடைய கிளை / பிரிவு",
    "contact.category": "விசாரணை வகை",
    "contact.cat_general": "பொதுவான விசாரணை",
    "contact.cat_banking": "கிராமிய வங்கி & வட்டி",
    "contact.cat_coopcity": "கோப் சிட்டி பல்பொருள் அங்காடி",
    "contact.cat_fuel": "எரிபொருள் மற்றும் காஸ்",
    "contact.cat_welfare": "உறுப்பினர் நலன்புரி",
    "contact.cat_complaint": "முறைப்பாடு / ஆலோசனைகள்",
    "contact.message": "உங்கள் செய்தி அல்லது விபரம்",
    "contact.submit_btn": "செய்தியை அனுப்பவும்",
    "contact.operating_hours": "சேவை நேரங்கள்",
    "contact.hq_hours": "தலைமை அலுவலகம்",
    "contact.hq_timing": "திங்கள் - வெள்ளி: மு.ப 8.30 - பி.ப 4.30 | சனி: மு.ப 8.30 - பி.ப 12.30",
    "contact.bank_hours": "கிராமிய வங்கிக் கிளைகள்",
    "contact.bank_timing": "திங்கள் - சனி: மு.ப 8.30 - பி.ப 3.00",
    "contact.retail_hours": "கோப் சிட்டி அங்காடிகள்",
    "contact.retail_timing": "தினமும்: மு.ப 8.00 - பி.ப 8.00 வரை",
    "contact.fuel_hours": "எரிபொருள் நிரப்பு நிலையங்கள்",
    "contact.fuel_timing": "24 மணி நேரமும் தொடர்ச்சியாக இயங்கும்",

    // Footer
    "footer.desc": "Demo MPCS என்பது சமூகத்தின் பொருளாதார, சமூக மேம்பாட்டுக்காக இயங்கும் முன்னணி பல்நோக்கு கூட்டுறவுச் சங்கமாகும்.",
    "footer.quick_links": "துரித இணைப்புகள்",
    "footer.divisions": "எமது பிரிவுகள்",
    "footer.legal": "சட்டப்பூர்வ பதிவு",
    "footer.reg_text": "1972 ஆம் ஆண்டின் 5 ஆம் இலக்க கூட்டுறவுச் சங்கங்கள் சட்டத்தின் கீழ் பதிவு செய்யப்பட்டது. மேல் மாகாண கூட்டுறவு அபிவிருத்தி திணைக்களத்தின் கீழ் இயங்குகிறது.",
    "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. Demo MPCS Ltd.",
    "footer.credit": "உத்தியோகபூர்வ மாதிரி இணையதளம் | சமூக மேம்பாட்டுக்காக உருவாக்கப்பட்டது"
  }
};

// Language Switcher Logic
function getCurrentLanguage() {
  return localStorage.getItem('mpcs_lang') || 'en';
}

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  localStorage.setItem('mpcs_lang', lang);
  document.documentElement.lang = lang;
  
  // Update all text nodes with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update titles / tooltips
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('title', translations[lang][key]);
    }
  });

  // Update active states on switcher buttons/dropdown
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.value = lang;
  }

  // Dispatch custom event for page-specific widgets
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = getCurrentLanguage();
  setLanguage(savedLang);

  // Attach event listeners to language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });

  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
});
