import { useState } from "react";

const TIERS = ["ALL", "BEST FIT", "GOOD FIT", "AI FOCUS", "SECTOR 62"];

const companies = [
  // ─── TIER: BEST FIT ────────────────────────────────────────────
  {
    rank: "01", tier: "BEST FIT",
    name: "Wishlink",
    role: "Growth & Strategy Analyst Intern",
    badge: "SERIES B · CREATOR COMMERCE",
    funding: "$27.6M · Gurugram",
    perks: "ESOPs from Day 1 · MacBook · Flexible hours · Direct founder access",
    founder: "Shaurya Gupta", founderTitle: "Co-Founder",
    founderLI: "https://www.linkedin.com/in/shaurya-gupta-wishlink/",
    email: "shaurya@wishlink.com",
    fitScore: "PERFECT",
    fitNote: "You ran creator-brand campaigns manually at Comsofeed. Wishlink automates that loop. You understand the supply, demand and data side of their core product.",
    pitch: `Hi Shaurya — I'm Ayush Khandual, BBA student at IIM Bangalore, writing to apply for a Growth & Strategy Analyst internship at Wishlink.

At Comsofeed I ran creator-brand campaigns end-to-end — sourcing, briefing, and tracking performance metrics (reach, impressions, engagement) across accounts. At AfterQuery I managed structured datasets across 500+ companies, maintaining reporting cadences and synthesising raw data into actionable insights. Both directly feed into Wishlink's growth and creator intelligence functions.

I'm looking to join a team where I can own analysis and strategy work with real accountability — not just support tasks. If there's a fit, I'd love to come in. Happy to share my CV or a work sample. If timing isn't right, I'm equally open to staying in touch.`,
    accentColor: "#FF6B35",
  },
  {
    rank: "02", tier: "BEST FIT",
    name: "TravClan",
    role: "Strategy & Operations Analyst Intern",
    badge: "SEED+ · B2B TRAVEL SAAS",
    funding: "$6.9M · New Delhi",
    perks: "Travel FAM perks · ESOP eligible · Learning budget · Hybrid",
    founder: "Arun Bagaria", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/arun-bagaria/",
    email: "arun@travclan.com",
    fitScore: "PERFECT",
    fitNote: "TravClan's scale-up requires ops analysts who can track account health, pipeline conversion, and produce structured reports. That is exactly your AfterQuery + Comsofeed output.",
    pitch: `Hi Arun — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Strategy & Operations Analyst internship at TravClan.

At AfterQuery I independently managed 4 concurrent analytical workstreams — maintaining reporting cadences, flagging anomalies, and designing Excel-based trackers across datasets. At Comsofeed I tracked account-level conversion rates, deal progression, and weekly performance metrics across a live SaaS pipeline. I understand how to turn multi-account data into clean, decision-ready output.

I want a role where I'm producing work that directly influences how the team moves — not a support function. TravClan's stage is exactly where that kind of contribution matters. If there's a fit, I'd love to start a conversation — or if the timing is off, happy to connect for the future.`,
    accentColor: "#00B4D8",
  },
  {
    rank: "03", tier: "BEST FIT",
    name: "ShareChat / Moj",
    role: "Strategy & Insights Analyst Intern",
    badge: "SERIES H · CREATOR PLATFORM",
    funding: "$1.3B raised · Gurugram",
    perks: "₹80-100K/mo · Relocation support · Gym + wellness · ESOP",
    founder: "Ankush Sachdeva", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/ankush-sachdeva-iit/",
    email: "ankush@sharechat.com",
    fitScore: "PERFECT",
    fitNote: "At this scale, ShareChat needs analysts who can process creator performance data and translate it into strategy. You tracked exactly these metrics at Comsofeed — reach, engagement, impressions — and built reporting around them.",
    pitch: `Hi Ankush — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Strategy & Insights Analyst internship at ShareChat / Moj.

At Comsofeed I tracked weekly performance data across creator campaigns — reach, engagement, and impression trends — and produced structured reports to identify top-performing content and guide strategy. At AfterQuery I built and maintained large-scale datasets with rigorous data hygiene across 500+ companies. I've been working on the analytics side of creator platforms before most people my age have worked at all.

I want to contribute to how Moj thinks about creator performance at scale — that's analysis and strategy work I can do with ownership. Attaching my CV. If the role fits, I'd love to be considered — if not right now, open to staying connected.`,
    accentColor: "#FB5607",
  },
  {
    rank: "04", tier: "BEST FIT",
    name: "Innovaccer",
    role: "Data & Research Analyst Intern",
    badge: "UNICORN · HEALTH AI · $3.45B VAL",
    funding: "$675M · Tiger Global, WestBridge · Noida",
    perks: "₹1-1.5L/mo · US exposure · ESOP · Premium health cover",
    founder: "Abhinav Shashank", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/abhinav-shashank/",
    email: "abhinav@innovaccer.com",
    fitScore: "STRONG",
    fitNote: "Innovaccer's core product is structured health data intelligence. Your AfterQuery work — cleaning, validating, and synthesising 500+ company datasets — is the same function applied to a different domain.",
    pitch: `Hi Abhinav — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Data & Research Analyst internship at Innovaccer.

At AfterQuery I built and maintained financial datasets across 500+ companies — cleaning, validating, and reconciling entries across sources, then synthesising the output into structured problem-solution frameworks for downstream use. I managed 4 concurrent workstreams with independent reporting cadences. The data discipline required is directly transferable to health data intelligence.

Innovaccer is doing work that actually matters at scale — I want to be part of the team that builds that infrastructure, not observing from a peripheral function. My CV is attached. I'm applying directly because I believe there's a real fit — happy to make the case in a call, or to stay connected if the timing isn't right.`,
    accentColor: "#4361EE",
  },
  {
    rank: "05", tier: "BEST FIT",
    name: "Oxyzo Financial",
    role: "Financial Research & Analytics Intern",
    badge: "UNICORN · FINTECH NBFC · $1B VAL",
    funding: "$200M Goldman Sachs led · Gurugram",
    perks: "₹80-120K/mo · ESOP · Finance mentors · Quarterly bonuses",
    founder: "Ruchi Kalra", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/ruchi-kalra-0691941a/",
    email: "ruchi.kalra@oxyzo.in",
    fitScore: "STRONG",
    fitNote: "Oxyzo does data-driven credit for SMEs. Your financial analysis across 500 companies — balance sheets, income statements, variance identification — is exactly the analytical lens their credit team works with.",
    pitch: `Hi Ruchi — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Financial Research & Analytics internship at Oxyzo.

At AfterQuery I conducted structured financial analysis across 500+ companies — examining balance sheets, income statements, and market data to identify sector-level patterns, anomalies, and variances. I also built Excel-based reporting templates and maintained dataset integrity across concurrent workstreams. Financial data rigour at scale is something I've actually done, not just studied.

Oxyzo's credit intelligence function needs exactly this profile at the analyst level. I'm writing directly because I believe my background maps more cleanly to this role than most people applying. CV attached. I'd welcome a conversation — or if the cycle is closed, happy to stay in your network.`,
    accentColor: "#F4A261",
  },
  {
    rank: "06", tier: "BEST FIT",
    name: "INDmoney",
    role: "Financial Data & Strategy Analyst Intern",
    badge: "SERIES D · WEALTHTECH",
    funding: "$75M+ raised · Gurugram",
    perks: "ESOP · Free investment account · ₹70K+/mo · Learning budget",
    founder: "Ashish Kashyap", founderTitle: "Founder & CEO",
    founderLI: "https://www.linkedin.com/in/ashishkashyap/",
    email: "ashish@indmoney.com",
    fitScore: "STRONG",
    fitNote: "INDmoney is built on financial data intelligence. Your work at AfterQuery — 500+ company datasets, anomaly detection, structured frameworks — is the same type of rigour they run internally.",
    pitch: `Hi Ashish — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Financial Data & Strategy Analyst internship at INDmoney.

At AfterQuery I managed large-scale financial datasets across 500+ companies — cleaning, reconciling entries, identifying variances, and synthesising data into structured outputs with consistent reporting cadences. I've also done company valuation and financial modelling work and hold certifications from Columbia GSB and NYIF. INDmoney's product and internal analytics require exactly the kind of structured financial thinking I've been building.

I'm looking for a role with real analytical ownership — not task support. I believe this is a strong fit and I'm applying with that intent. CV attached. Open to a call to discuss — or happy to stay connected if the timing doesn't align.`,
    accentColor: "#3A86FF",
  },
  {
    rank: "07", tier: "BEST FIT",
    name: "Intellemo",
    role: "Founder's Office / GTM Strategy Intern",
    badge: "SEED · AI MARKETING AGENTS",
    funding: "$350K · Inflection Point, Kunal Shah · Gurugram",
    perks: "Founding equity possible · Full ownership · Direct founder access",
    founder: "Saurabh Gupta", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/saurabh-gupta-intellemo/",
    email: "saurabh@intellemo.ai",
    fitScore: "PERFECT",
    fitNote: "Intellemo automates marketing campaign workflows. You ran those workflows manually at Comsofeed. You are their target user AND a potential operator — that is an extremely rare pitch to a founder at seed stage.",
    pitch: `Hi Saurabh — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Founder's Office or GTM Strategy internship at Intellemo.

At Comsofeed I manually ran the exact workflows Intellemo is automating — creator sourcing, campaign briefing, performance tracking across brand accounts. At AfterQuery I built structured data pipelines and maintained reporting across 500+ company datasets. I've operated on both the campaign execution side and the analytics side.

This means I can contribute in two ways most interns can't: I understand what your target customers actually need from the inside, and I can build the structured analysis your GTM requires. I'm applying directly because I think the fit is unusually strong. CV attached. Happy to come in and prove it — or stay connected if the current stage doesn't call for it.`,
    accentColor: "#A855F7",
  },
  {
    rank: "08", tier: "BEST FIT",
    name: "Pixis",
    role: "Market Research & Strategy Analyst Intern",
    badge: "SERIES C · AI MARKETING INFRA",
    funding: "$209M · General Atlantic, Chiratae · Delhi NCR",
    perks: "₹80-100K/mo · ESOP · GA network · Global client exposure",
    founder: "Shubham Mishra", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/shubhammishra01/",
    email: "shubham@pixis.ai",
    fitScore: "STRONG",
    fitNote: "$209M raised, GA-backed. Pixis needs analysts who understand the marketing performance data layer. Your campaign tracking + structured reporting from Comsofeed is directly relevant to their research and strategy function.",
    pitch: `Hi Shubham — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Market Research & Strategy Analyst internship at Pixis.

At Comsofeed I tracked weekly performance data across brand campaigns — monitoring reach, engagement, and impression trends to identify top-performing content and drive strategy adjustments. At AfterQuery I synthesised financial data across 500+ companies into structured analytical frameworks with consistent reporting. Understanding what performance data actually means — and how to act on it — is something I've done in practice.

Pixis is building the intelligence layer for AI-driven marketing at scale. I want to contribute to how that intelligence is researched and structured, not just executed. CV attached. I'm writing directly with intent to join — open to a conversation, or to connect if the timing doesn't work.`,
    accentColor: "#EC4899",
  },

  // ─── TIER: GOOD FIT ────────────────────────────────────────────
  {
    rank: "09", tier: "GOOD FIT",
    name: "CashKaro",
    role: "Growth Analytics & Strategy Intern",
    badge: "SERIES B · AFFILIATE COMMERCE",
    funding: "Kalaari backed · Gurugram",
    perks: "Performance bonuses · Cashback perks · Learning allowance",
    founder: "Swati Bhargava", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/swatibhargava/",
    email: "swati@cashkaro.com",
    fitScore: "GOOD",
    fitNote: "CashKaro's growth requires analysts who can track affiliate performance, spot trends, and produce structured reports. Solid match with your data + tracking background.",
    pitch: `Hi Swati — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Growth Analytics & Strategy internship at CashKaro.

I've managed structured performance tracking across multi-account environments at Comsofeed and built large-scale datasets with rigorous data hygiene at AfterQuery. I know how to turn account-level data into strategy-ready insights with consistency. CashKaro's affiliate and influencer growth function requires exactly this kind of analytical ownership.

I'm applying because I want a role where the analysis I produce actually drives decisions — not a support or coordination role. CV attached. Happy to discuss further or stay connected if the timing isn't right.`,
    accentColor: "#F72585",
  },
  {
    rank: "10", tier: "GOOD FIT",
    name: "OfBusiness",
    role: "Strategy & Financial Analyst Intern",
    badge: "UNICORN · B2B COMMERCE · $5B VAL",
    funding: "$776M raised · Gurugram",
    perks: "₹80-120K/mo · Housing allowance · ESOP · Rapid growth",
    founder: "Asish Mohapatra", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/asish-mohapatra/",
    email: "asish@ofbusiness.in",
    fitScore: "GOOD",
    fitNote: "One of the highest-paying internships in this list. Strategy + financial analysis are both core to OfBusiness's scale operations. Two of your primary skill sets apply directly.",
    pitch: `Hi Asish — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Strategy & Financial Analyst internship at OfBusiness.

At AfterQuery I conducted structured financial analysis across 500+ companies — identifying sector-level variances, maintaining dataset integrity, and producing clean analytical output across 4 concurrent workstreams. At Comsofeed I tracked account performance and pipeline health with consistent reporting. OfBusiness operates at a scale where both of these skills are needed in the same person.

I want to be in a room where the analysis I do shapes how a ₹35,000 Cr company makes decisions. CV attached. Writing directly to you because I think the fit is real — happy to take it from here with a call, or to stay in your network if the timing isn't right.`,
    accentColor: "#06D6A0",
  },
  {
    rank: "11", tier: "GOOD FIT",
    name: "BharatPe",
    role: "Strategy & Analytics Intern",
    badge: "LATE STAGE · FINTECH",
    funding: "$650M+ raised · New Delhi",
    perks: "₹80K+/mo · Free meals · Health insurance · ESOP",
    founder: "Nalin Negi", founderTitle: "CEO",
    founderLI: "https://www.linkedin.com/in/nalin-negi/",
    email: "careers@bharatpe.com",
    fitScore: "GOOD",
    fitNote: "BharatPe's strategy team needs analysts who can process account-level data and produce structured performance reports. Your multi-account tracking + financial analysis background applies well.",
    pitch: `Hi Nalin — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Strategy & Analytics internship at BharatPe.

I've done structured financial analysis across 500+ companies at AfterQuery — examining balance sheets, income statements, and market data — and maintained multi-account performance tracking at Comsofeed. Both gave me a strong foundation in data-driven decision support at scale. BharatPe's strategy function requires exactly this kind of rigour applied to merchant and product performance.

I'm applying directly because I want to contribute to the analytical core of a company at this scale — not a peripheral role. CV attached. Happy to discuss further, or to stay connected for a future cycle.`,
    accentColor: "#7B2FBE",
  },
  {
    rank: "12", tier: "GOOD FIT",
    name: "Jar",
    role: "Growth Strategy & Insights Intern",
    badge: "SERIES C · SAVINGS FINTECH",
    funding: "$85M · Tiger Global, Alkeon · Gurugram",
    perks: "₹80K+/mo · Gold saving account · ESOP · Team retreats",
    founder: "Nishchay AG", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/nishchayag/",
    email: "nishchay@myjar.app",
    fitScore: "GOOD",
    fitNote: "Tiger Global-backed fintech scaling to 50M users. Growth insights and financial strategy are where your AfterQuery + data analysis skills play well.",
    pitch: `Hi Nishchay — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Growth Strategy & Insights internship at Jar.

I've done structured financial analysis across 500+ companies and maintained rigorous data pipelines with consistent reporting cadences at AfterQuery. I understand how to extract signal from messy financial data and build frameworks around it. Jar is solving a real financial access problem at 50M+ user scale — the strategy and insights function at that scale is where I want to contribute.

I'm writing directly with the intent to join. CV attached. Happy to discuss in a call — and equally open to staying connected if the current cycle is closed.`,
    accentColor: "#F9C74F",
  },
  {
    rank: "13", tier: "GOOD FIT",
    name: "Neysa",
    role: "Strategy & Market Intelligence Intern",
    badge: "UNICORN · AI INFRASTRUCTURE",
    funding: "$600M Blackstone · India AI Cloud · Delhi NCR",
    perks: "₹1L+/mo · GPU lab access · ESOP · Blackstone network",
    founder: "Sharad Sanghi", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/sharadsanghi/",
    email: "sharad.sanghi@neysa.ai",
    fitScore: "GOOD",
    fitNote: "$600M Blackstone-backed AI infra. Enterprise strategy requires rigorous market intelligence — your financial analysis + structured research background from AfterQuery applies to their go-to-market intelligence needs.",
    pitch: `Hi Sharad — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Strategy & Market Intelligence internship at Neysa.

At AfterQuery I conducted structured financial and market analysis across 500+ companies — identifying sector-level patterns, anomalies, and variances. I've also done company valuation work and hold certifications from Columbia GSB (Venture & PE) and NYIF (Equity Index & Valuations). Neysa's enterprise go-to-market requires a strategy analyst who can research, synthesise, and build structured intelligence for the team.

This is the most consequential AI infrastructure build in India right now. I want to be part of the strategy function that drives how it scales. CV attached. Writing to you directly — happy to take a call, or to stay in your network if the stage doesn't call for it yet.`,
    accentColor: "#7400B8",
  },
  {
    rank: "14", tier: "GOOD FIT",
    name: "Pocket FM",
    role: "Content Strategy & Analytics Intern",
    badge: "SERIES D · AUDIO ENTERTAINMENT",
    funding: "$103M · Tencent, Lightspeed · Gurugram",
    perks: "Premium audio perks · ₹70K+/mo · Creator community access",
    founder: "Rohan Nayak", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/rohan-nayak-pocketfm/",
    email: "rohan@pocketfm.in",
    fitScore: "GOOD",
    fitNote: "Pocket FM's content strategy needs people who can analyse creator performance and identify what works. Your structured performance tracking + data synthesis from Comsofeed and AfterQuery is relevant here.",
    pitch: `Hi Rohan — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Content Strategy & Analytics internship at Pocket FM.

At Comsofeed I tracked weekly performance metrics across creator campaigns — reach, engagement, impressions — and synthesised the data into structured reports to guide strategy. At AfterQuery I managed 4 concurrent analytical workstreams with rigorous reporting. Understanding what content performs and why, at a data level, is something I've actually done.

Pocket FM is building India's largest audio creator economy. I want to contribute to the strategy and analytics layer of that — where data drives which content wins. CV attached. Happy to discuss directly — or to stay in touch if timing doesn't align.`,
    accentColor: "#9B5DE5",
  },
  {
    rank: "15", tier: "GOOD FIT",
    name: "Addverb Technologies",
    role: "Strategy & Market Research Intern",
    badge: "UNICORN · ROBOTICS · RELIANCE BACKED",
    funding: "$132M+ · $900M val · Noida",
    perks: "₹80-100K/mo · Robotics lab access · ESOP · International deployments",
    founder: "Sangeet Kumar", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/sangeet-kumar-addverb/",
    email: "sangeet.kumar@addverb.in",
    fitScore: "GOOD",
    fitNote: "India's only robotics unicorn scaling enterprise sales globally. Their strategy function needs market research and financial analysis depth — both your core skills from AfterQuery.",
    pitch: `Hi Sangeet — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Strategy & Market Research internship at Addverb.

I've done structured financial and market analysis across 500+ companies at AfterQuery — sector-level pattern recognition, variance analysis, and synthesis into decision-ready frameworks. I hold certifications from Columbia GSB (Venture & PE) and McKinsey Forward. Addverb is doing something no other Indian company is — scaling robotics across 50+ countries — and the strategy function that supports that scale is where I want to contribute.

I'm writing directly because I believe this is a strong fit and I want to be considered. CV attached. Happy to take a call to make the case — or stay connected if the internship cycle isn't open right now.`,
    accentColor: "#2DC653",
  },
  {
    rank: "16", tier: "GOOD FIT",
    name: "Moglix",
    role: "Financial Strategy & Operations Analyst Intern",
    badge: "UNICORN · B2B INDUSTRIAL",
    funding: "$400M+ raised · Noida",
    perks: "₹70-100K/mo · ESOP · Annual bonus · Global exposure",
    founder: "Rahul Garg", founderTitle: "Founder & CEO",
    founderLI: "https://www.linkedin.com/in/rahulgargsays/",
    email: "rahul.garg@moglix.com",
    fitScore: "GOOD",
    fitNote: "Moglix runs a complex B2B commerce operation. Their strategy and operations analysts need financial analysis depth + the ability to track multi-account performance. Both are your core skills.",
    pitch: `Hi Rahul — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Financial Strategy & Operations Analyst internship at Moglix.

At AfterQuery I conducted structured financial analysis across 500+ companies and managed 4 concurrent analytical workstreams — maintaining rigorous data hygiene, producing consistent reporting, and synthesising output into decision frameworks. At Comsofeed I tracked multi-account performance with pipeline-level reporting. Moglix's scale of B2B operations needs analysts who can maintain this quality of output independently.

I want to work somewhere the analysis I produce actually drives procurement and operations strategy at scale. CV attached. Writing to you directly with the intent to join — happy to take it forward with a conversation, or to connect for a future cycle.`,
    accentColor: "#52B788",
  },
  {
    rank: "17", tier: "GOOD FIT",
    name: "JSW One MSME",
    role: "Financial & Market Intelligence Analyst Intern",
    badge: "UNICORN · B2B STEEL COMMERCE",
    funding: "$40M · $902M val · Noida",
    perks: "JSW Group network · ₹80K+/mo · ESOP · Group-level exposure",
    founder: "Aditya Jindal", founderTitle: "Co-Founder",
    founderLI: "https://www.linkedin.com/in/aditya-jindal-jsw/",
    email: "aditya.jindal@jswone.com",
    fitScore: "GOOD",
    fitNote: "Newest unicorn (2025). B2B procurement analytics requires sector-level financial intelligence — your AfterQuery work is almost a direct translation.",
    pitch: `Hi Aditya — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Financial & Market Intelligence Analyst internship at JSW One MSME.

At AfterQuery I examined balance sheets, income statements, and market data across 500+ companies, identifying sector-level patterns and variances. I've also done company valuation work and hold certifications from Columbia GSB and NYIF. JSW One's intelligence layer for SME procurement decisions is exactly the kind of financial analysis function I've been building for.

I want to contribute to the analytical core of a company that's reshaping how Indian SMEs buy. CV attached. Writing directly — happy to discuss, or to stay connected if the internship cycle isn't open yet.`,
    accentColor: "#E76F51",
  },
  {
    rank: "18", tier: "GOOD FIT",
    name: "Inshorts / PublicApp",
    role: "Content Strategy & Data Analyst Intern",
    badge: "SERIES D · NEWS + SOCIAL",
    funding: "$60M+ raised · Noida",
    perks: "Premium news subscriptions · ₹60-80K/mo · Flexible hybrid",
    founder: "Azhar Iqubal", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/azhariqubal/",
    email: "azhar@inshorts.com",
    fitScore: "GOOD",
    fitNote: "PublicApp's content intelligence function needs people who can track performance metrics and derive strategy from them. Your structured data tracking + reporting from Comsofeed maps cleanly.",
    pitch: `Hi Azhar — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Content Strategy & Data Analyst internship at Inshorts / PublicApp.

At Comsofeed I tracked weekly content performance across accounts — monitoring reach, engagement, and impression trends to produce structured reports that guided strategy. At AfterQuery I managed datasets across 500+ companies with rigorous data hygiene. Understanding what content performs and building structured analysis around it is something I've actually done.

I want to be in the team that shapes content strategy using data — not just reports on it after the fact. CV attached. Writing directly to apply — happy to take a call, or to stay in your network if the cycle is closed.`,
    accentColor: "#EF233C",
  },
  {
    rank: "19", tier: "GOOD FIT",
    name: "Doceree",
    role: "Market Research & Analytics Intern",
    badge: "SERIES B · AI HEALTHCARE MARKETING",
    funding: "$64.8M · Creaegis, Eight Roads · Noida",
    perks: "₹70K+/mo · Global pharma exposure · Health cover · ESOP",
    founder: "Harshit Jain", founderTitle: "Founder & Global CEO",
    founderLI: "https://www.linkedin.com/in/harshitjain",
    email: "harshit@doceree.com",
    fitScore: "GOOD",
    fitNote: "Doceree is the first global programmatic platform for healthcare professional marketing. Their market research and analytics function needs people with structured data analysis skills — directly your AfterQuery background.",
    pitch: `Hi Harshit — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Market Research & Analytics internship at Doceree.

At AfterQuery I conducted structured analysis across 500+ companies — examining data patterns, identifying anomalies, and synthesising findings into structured frameworks for downstream use. I've also done financial modelling and hold Columbia GSB and NYIF certifications. Doceree's analytics function — particularly in understanding HCP engagement data — requires the same rigour applied to a new domain.

I want to work where data analysis shapes a globally differentiated product. CV attached. Writing to you directly with the intent to join — open to a call, or to connecting for a future cycle.`,
    accentColor: "#14B8A6",
  },
  {
    rank: "20", tier: "GOOD FIT",
    name: "Leher",
    role: "Founder's Office & Strategy Intern",
    badge: "SERIES A · AUDIO-VIDEO SOCIAL",
    funding: "$8M raised · 3x growth 2025 · Gurugram",
    perks: "Founding equity discussion · Full autonomy · Creator network access",
    founder: "Vikas Malpani", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/vikasmalpani/",
    email: "vikas@leher.app",
    fitScore: "GOOD",
    fitNote: "Small team with 3x growth — you'd have real ownership in a Founder's Office role here. Your data analysis + performance tracking + multi-workstream management makes you a strong generalist for this stage.",
    pitch: `Hi Vikas — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Founder's Office & Strategy internship at Leher.

I've managed 4 concurrent analytical workstreams independently at AfterQuery, tracked multi-account performance at Comsofeed, and run structured financial analysis across 500+ companies. At a 3x-growth stage company, the Founder's Office needs people who can operate across functions without hand-holding — that's how I've been working.

I want real ownership over work that matters at a critical growth moment — not a structured intern programme. CV attached. Writing directly with the intent to be considered — happy to take it forward in a call, or to stay connected if it's not the right moment.`,
    accentColor: "#FF9F1C",
  },

  // ─── AI FOCUS ──────────────────────────────────────────────────
  {
    rank: "21", tier: "AI FOCUS",
    name: "Kaagaz (YC W22)",
    role: "Founder's Office Analyst Intern",
    badge: "YC W22 · AI OFFICE SUITE",
    funding: "YC backed · Gurugram · Founder's Office OPEN",
    perks: "YC network · ESOP from day one · Full ownership · Direct founder mentorship",
    founder: "Gaurav Kushwaha", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/gauravkushwaha/",
    email: "gaurav@kaagaz.app",
    fitScore: "STRONG",
    fitNote: "YC W22, Founder's Office Marketing role open per YC jobs board. Generalist profile needed — your data + operations + multi-workstream experience is exactly the Founder's Office profile.",
    pitch: `Hi Gaurav — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for the Founder's Office Analyst internship at Kaagaz.

I've independently managed 4 concurrent analytical workstreams at AfterQuery, run multi-account operations at Comsofeed, and have experience in structured financial analysis, performance tracking, and Excel-based reporting system design. A Founder's Office role requires someone who can pick up any problem, structure it, and produce output without needing process scaffolding — that's how I've worked across every role I've had.

Kaagaz is building the productivity layer for the next 100M Indian businesses. I want to be in the room where that strategy is shaped. CV attached. I'm applying directly because I believe the fit is there — happy to discuss or to connect for a future cycle.`,
    accentColor: "#0EA5E9",
  },
  {
    rank: "22", tier: "AI FOCUS",
    name: "GroMo (YC W21)",
    role: "Strategy & Research Analyst Intern",
    badge: "YC W21 · AI FINTECH DISTRIBUTION",
    funding: "YC + investors · Gurugram · Strategic Alliances OPEN",
    perks: "YC pedigree · ESOP · ₹60-80K/mo · High ownership",
    founder: "Ankit Khandelwal", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/ankit-khandelwal-gurugram/",
    email: "ankit@gromo.in",
    fitScore: "STRONG",
    fitNote: "YC W21 fintech actively hiring for Strategic Alliances. Your financial analysis + structured data synthesis from AfterQuery is directly useful for their research and strategy function.",
    pitch: `Hi Ankit — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Strategy & Research Analyst internship at GroMo.

I've done structured financial analysis across 500+ companies at AfterQuery — identifying patterns, anomalies, and sector-level variances — and maintained multi-account performance reporting at Comsofeed. I hold certifications from Columbia GSB and NYIF. GroMo's strategy function needs someone who can research financial products, understand agent network dynamics, and produce structured analysis — that's my background.

YC-pedigree fintech solving real distribution problems in India is exactly where I want to be building. CV attached. Writing directly with intent to join — happy to take a call, or to stay connected if this cycle is closed.`,
    accentColor: "#22C55E",
  },
  {
    rank: "23", tier: "AI FOCUS",
    name: "SureBright (YC S24)",
    role: "Founder's Office Generalist Intern",
    badge: "YC S24 · AI WARRANTY PLATFORM",
    funding: "YC S24 · Gurugram · Founder's Office OPEN",
    perks: "YC S24 network · ESOP from day one · ₹60-80K/mo · Founding-level exposure",
    founder: "Aniket Bajpai", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/aniketbajpai/",
    email: "aniket@surebright.com",
    fitScore: "STRONG",
    fitNote: "YC S24, Founder's Office Generalist role open per YC board. This is the exact archetype that suits your multi-workstream independence and generalist analytical depth.",
    pitch: `Hi Aniket — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for the Founder's Office Generalist internship at SureBright.

I independently managed 4 concurrent analytical workstreams at AfterQuery, maintained multi-account operational pipelines at Comsofeed, and designed structured Excel-based reporting systems used across all active workstreams. I'm used to operating without process scaffolding across multiple functions simultaneously — which is exactly what a Founder's Office role at YC stage requires.

SureBright is solving a massive underserved problem in retail warranty. I want to be in the room where the first 100 things get figured out. CV attached. Writing directly to be considered — happy to discuss, or to connect if timing doesn't line up.`,
    accentColor: "#F59E0B",
  },
  {
    rank: "24", tier: "AI FOCUS",
    name: "Zime.ai",
    role: "Revenue Analytics & Strategy Intern",
    badge: "SEED · AI-CRO / SALES AI",
    funding: "Seed · Gurugram · Actively hiring GTM",
    perks: "Early ESOP · Full analytics ownership · Direct founder mentorship · Fast track",
    founder: "Saurav Aggarwal", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/sauravaggarwal-zime/",
    email: "saurav@zime.ai",
    fitScore: "STRONG",
    fitNote: "Zime is building an AI-CRO. Their product IS pipeline and revenue analytics intelligence. Your pipeline tracking + financial analysis skills are their core product domain — rare profile at seed stage.",
    pitch: `Hi Saurav — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Revenue Analytics & Strategy internship at Zime.

At AfterQuery I built structured financial analysis frameworks across 500+ companies — tracking revenue patterns, account-level variances, and reporting consistency. At Comsofeed I maintained a live SaaS pipeline with conversion rates, deal stage tracking, and weekly reporting. Zime's AI-CRO product is essentially the intelligence layer I was building manually. I understand the problem from the inside.

At seed stage, that's a rare thing to say. I want to contribute to the analytical core of how Zime thinks about its own product and market. CV attached. Applying directly — happy to discuss immediately, or to connect if the stage doesn't call for it yet.`,
    accentColor: "#8B5CF6",
  },
  {
    rank: "25", tier: "AI FOCUS",
    name: "Mindcase",
    role: "Research & Intelligence Analyst Intern",
    badge: "SEED · AI MARKET INTELLIGENCE",
    funding: "AJVC backed · Feb 2026 raise · Gurugram",
    perks: "Equity discussion possible · IIM-A founder network · Full ownership",
    founder: "Kritish Puri", founderTitle: "Co-Founder",
    founderLI: "https://www.linkedin.com/in/kritishpuri/",
    email: "kritish@mindcase.in",
    fitScore: "PERFECT",
    fitNote: "Just raised Feb 2026. IIM-A founders = immediate IIM-B receptivity. Their product is turning raw market data into structured enterprise intelligence — you did this manually at AfterQuery for 9 months across 500+ companies. You are the ideal profile for this role.",
    pitch: `Hi Kritish — I'm Ayush Khandual, BBA student at IIM Bangalore, writing to apply for a Research & Intelligence Analyst internship at Mindcase.

At AfterQuery I built and maintained large-scale financial datasets across 500+ companies — cleaning raw data, identifying patterns and anomalies, and synthesising output into structured problem-solution frameworks for downstream enterprise use. I managed 4 concurrent analytical workstreams over 9 months independently. Mindcase is building AI to automate exactly this workflow at scale — which means I've been your target user and your potential analyst simultaneously.

I want to contribute to how Mindcase builds and validates its intelligence layer — and I can do that from day one without a ramp-up period. CV attached. Writing directly to be considered — happy to come in immediately, or to connect if the current stage doesn't call for it yet.`,
    accentColor: "#06AED4",
  },
  {
    rank: "26", tier: "AI FOCUS",
    name: "Macgence",
    role: "AI Data Operations & Research Intern",
    badge: "SERIES A · AI TRAINING DATA",
    funding: "Funded · Gurugram · Human-in-loop AI",
    perks: "₹60-80K/mo · AI lab exposure · ESOP · 300+ language dataset access",
    founder: "Utsav Mamtani", founderTitle: "Founder & CEO",
    founderLI: "https://www.linkedin.com/in/utsavmamtani/",
    email: "utsav@macgence.com",
    fitScore: "GOOD",
    fitNote: "Macgence builds human-in-loop AI training data pipelines. Your data hygiene, validation, and multi-source reconciliation work at AfterQuery is directly transferable to their data ops function.",
    pitch: `Hi Utsav — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for an AI Data Operations & Research internship at Macgence.

At AfterQuery I built and maintained large-scale financial datasets across 500+ companies — rigorous cleaning, validation, and reconciliation across multiple reporting sources, across 4 concurrent workstreams simultaneously. Data quality and consistency were the entire job. Macgence's human-in-loop AI training pipeline requires exactly this kind of structured data operations discipline.

I want to contribute to AI infrastructure work that actually shapes model quality. CV attached. Writing directly with intent to join — happy to discuss, or to stay connected if you're not hiring right now.`,
    accentColor: "#10B981",
  },
  {
    rank: "27", tier: "AI FOCUS",
    name: "Pronto",
    role: "Founder's Office & Operations Analyst Intern",
    badge: "SERIES A · HOME SERVICES",
    funding: "$11M · General Catalyst + Bain · Gurugram",
    perks: "₹60-80K/mo · ESOP eligible · MacBook · Direct founder mentorship",
    founder: "Anjali Sardana", founderTitle: "Founder & CEO",
    founderLI: "https://www.linkedin.com/in/anjali-sardana/",
    email: "anjali@pronto.app",
    fitScore: "GOOD",
    fitNote: "Raised from General Catalyst + Bain. Small team that needs execution-first analysts who can own operations independently — exactly your multi-workstream background.",
    pitch: `Hi Anjali — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Founder's Office & Operations Analyst internship at Pronto.

I independently managed 4 concurrent analytical workstreams at AfterQuery — maintaining reporting cadences, flagging anomalies, and ensuring consistency across all active datasets — without oversight. At Comsofeed I ran a live SaaS pipeline with account-level tracking and structured weekly reporting. At a 50-person company backed by General Catalyst and Bain, the Founder's Office needs someone who can pick up anything and deliver — that's how I've been operating.

I want the accountability that comes with a small, high-growth team. CV attached. Writing directly with the intent to be considered — happy to discuss or to stay in touch for a future cycle.`,
    accentColor: "#FFD60A",
  },
  {
    rank: "28", tier: "AI FOCUS",
    name: "HealthKart",
    role: "Growth Analytics & Research Intern",
    badge: "SERIES G · D2C HEALTH",
    funding: "$135M+ · Sequoia backed · Gurugram",
    perks: "Free supplements · ₹60-80K/mo · Health coverage · Fast-track roles",
    founder: "Sameer Maheshwari", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/sameermaheshwari/",
    email: "careers@healthkart.com",
    fitScore: "GOOD",
    fitNote: "Sequoia-backed, Series G. Growth analytics needs people who can track performance across campaigns and channels and produce structured reports. Your Comsofeed + AfterQuery background applies well.",
    pitch: `Hi Sameer — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Growth Analytics & Research internship at HealthKart.

At Comsofeed I tracked weekly performance metrics across brand campaigns — monitoring reach, engagement, and impression trends across accounts and producing structured reports to identify what drives results. At AfterQuery I managed large-scale datasets with rigorous data hygiene and consistent reporting across 4 concurrent workstreams. HealthKart's growth analytics function needs exactly this combination of performance tracking and data rigour.

I want a role where I'm producing analysis that shapes actual growth strategy — not summarising it. CV attached. Writing to you directly with the intent to join — happy to discuss, or to connect if the timing doesn't work right now.`,
    accentColor: "#E63946",
  },

  // ─── SECTOR 62 ─────────────────────────────────────────────────
  {
    rank: "S1", tier: "SECTOR 62",
    name: "Xcelore",
    role: "AI Strategy & Client Research Intern",
    badge: "AI DEV COMPANY · ET AWARDS 2025",
    funding: "Self-funded · Stellar IT Park, Sector 62, Noida",
    perks: "AI lab access · Flexible hybrid · Global client exposure",
    founder: "Anuj Sharma", founderTitle: "Founder & CEO",
    founderLI: "https://www.linkedin.com/in/anuj-sharma-xcelore/",
    email: "anuj@xcelore.com",
    fitScore: "GOOD",
    fitNote: "ET Business Awards 2025 winner. Builds Exei (AI CX agents) and Xcelight (AI video analytics). Strategy and client research need people who can analyse market data and structure client intelligence — your core skills.",
    pitch: `Hi Anuj — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for an AI Strategy & Client Research internship at Xcelore.

At AfterQuery I conducted structured analysis across 500+ companies — examining financial data, identifying sector patterns, and producing decision-ready frameworks. At Comsofeed I maintained multi-account performance reporting with consistent weekly cadences. Xcelore's AI product portfolio — Exei and Xcelight — needs a strategy and research analyst who can structure market intelligence and client analysis. I'm based near Sector 62 and can start immediately.

CV attached. Writing directly to be considered for this role — happy to come in for a conversation, or to connect if the current cycle isn't open.`,
    accentColor: "#F97316",
  },
  {
    rank: "S2", tier: "SECTOR 62",
    name: "Valiance Solutions",
    role: "Data Analytics & Research Intern",
    badge: "AI + DATA ENGINEERING · SERIES A",
    funding: "Series A · Green Boulevard B-9, Sector 62, Noida",
    perks: "₹50-70K/mo · AI/ML project exposure · Data engineering mentorship",
    founder: "Rahul Gupta", founderTitle: "Founder & CEO",
    founderLI: "https://www.linkedin.com/in/rahulgupta-valiance/",
    email: "rahul@valiancesolutions.com",
    fitScore: "GOOD",
    fitNote: "Valiance does AI + data engineering for enterprise clients. Your AfterQuery data hygiene + multi-source reconciliation + structured analytical output is directly what they do for clients.",
    pitch: `Hi Rahul — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Data Analytics & Research internship at Valiance Solutions.

At AfterQuery I built and maintained financial datasets across 500+ companies — cleaning, validating, and reconciling entries across multiple reporting sources. I designed Excel-based trackers and reporting templates to monitor dataset quality across 4 concurrent workstreams. Valiance's data engineering work for enterprise clients requires exactly this kind of structured data discipline. I'm located near Sector 62 Noida and available to start quickly.

CV attached. Writing directly with intent to join — happy to discuss in a call, or to connect if the current internship cycle is closed.`,
    accentColor: "#6366F1",
  },
  {
    rank: "S3", tier: "SECTOR 62",
    name: "Trackier (CloudStuff)",
    role: "Product Analytics & Strategy Intern",
    badge: "SAAS · PARTNER MARKETING",
    funding: "Bootstrapped · $5M+ ARR · Noida Sector 62",
    perks: "ESOP options · ₹50-70K/mo · Global SaaS client exposure",
    founder: "Udit Verma", founderTitle: "Co-Founder & CEO",
    founderLI: "https://www.linkedin.com/in/uditverma/",
    email: "udit@cloudstuff.tech",
    fitScore: "STRONG",
    fitNote: "$5M+ ARR bootstrapped SaaS used by ICICI Bank, Flipkart, Dentsu. Their product is partner performance analytics — you tracked exactly these metrics at Comsofeed. You are their power user.",
    pitch: `Hi Udit — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Product Analytics & Strategy internship at Trackier.

At Comsofeed I tracked weekly performance metrics across multi-account brand campaigns — monitoring reach, engagement, and conversion data, and producing structured reports to guide strategy. That's essentially what Trackier's platform does for its clients, at a product level. At AfterQuery I maintained large-scale datasets with rigorous data hygiene and reporting consistency. I've been a power user of the problem Trackier solves — that gives me an unusual angle for product analytics.

I'm based near Sector 62 Noida and available to start immediately. CV attached. Applying directly — happy to discuss in person or on a call, or to stay in touch if the cycle isn't open right now.`,
    accentColor: "#EC4899",
  },
  {
    rank: "S4", tier: "SECTOR 62",
    name: "Adeptia",
    role: "Enterprise Analytics & Research Intern",
    badge: "ENTERPRISE DATA INTEGRATION · AI",
    funding: "Series B · The Corenthum, Tower B, Sector 62, Noida",
    perks: "₹50-60K/mo · US company exposure · Enterprise AI projects",
    founder: "Srinivasagopalan Ramamurthy", founderTitle: "VP India Operations",
    founderLI: "https://www.linkedin.com/in/srinivasagopalan/",
    email: "careers@adeptia.com",
    fitScore: "GOOD",
    fitNote: "Adeptia does AI-powered enterprise data integration for Fortune 500 clients. Your data hygiene + structured analytical output from AfterQuery translates directly into their analytics and research function.",
    pitch: `Hi — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for an Enterprise Analytics & Research internship at Adeptia.

At AfterQuery I maintained large-scale financial datasets across 500+ companies — cleaning, validating, and reconciling entries across sources, with structured output and consistent reporting cadences across 4 concurrent workstreams. Adeptia's data integration work for Fortune 500 clients requires exactly this kind of structured data discipline at an enterprise scale. I'm located near Sector 62 Noida and can start quickly.

CV attached. Writing directly with the intent to be considered — happy to discuss further, or to stay connected if the internship cycle isn't currently open.`,
    accentColor: "#0EA5E9",
  },
  {
    rank: "S5", tier: "SECTOR 62",
    name: "IBM India R&D",
    role: "Technology Strategy & Analytics Intern",
    badge: "FORTUNE 500 · AI + CLOUD",
    funding: "Candor Tech Space, Block B, Sector 62, Noida",
    perks: "₹60-80K/mo · IBM certification · Global mentors · Strong alumni network",
    founder: "Sandip Patel", founderTitle: "MD, IBM India & South Asia",
    founderLI: "https://www.linkedin.com/in/sandip-patel-ibm/",
    email: "sandip.patel@ibm.com",
    fitScore: "GOOD",
    fitNote: "IBM Sector 62 is a major R&D and consulting hub. Watson AI + consulting projects. Your structured financial analysis + data framework building from AfterQuery makes you competitive for their technology consulting intern track.",
    pitch: `Hi Sandip — I'm Ayush Khandual, IIM Bangalore BBA student, writing to apply for a Technology Strategy & Analytics internship at IBM India (Sector 62).

I've done structured financial analysis across 500+ companies at AfterQuery — identifying sector-level patterns, building analytical frameworks, and maintaining rigorous data quality across concurrent workstreams. I hold certifications from Columbia GSB (Venture & PE) and McKinsey Forward, and have financial modelling and company valuation experience. IBM's strategy and consulting function at the Sector 62 office requires exactly this combination of structured analysis and framework thinking.

I'm based near Sector 62 and available immediately. CV attached. Writing directly to be considered for this role — happy to take a formal application through IBM's process, discuss further here, or connect if the current cycle is closed.`,
    accentColor: "#1D4ED8",
  },
];

const fitColors = {
  "PERFECT": { bg: "#052E16", text: "#4ADE80", label: "⚡ PERFECT FIT" },
  "STRONG":  { bg: "#1C1917", text: "#FBBF24", label: "★ STRONG FIT" },
  "GOOD":    { bg: "#0F172A", text: "#94A3B8", label: "✓ GOOD FIT" },
};

const tierColors = {
  "BEST FIT":  "#4ADE80",
  "GOOD FIT":  "#94A3B8",
  "AI FOCUS":  "#A78BFA",
  "SECTOR 62": "#F97316",
};

export default function ColdOutreachKit() {
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);
  const [filter, setFilter]   = useState("ALL");

  const filtered = filter === "ALL" ? companies : companies.filter(c => c.tier === filter);
  const co  = filtered[Math.min(selected, filtered.length - 1)];
  const fit = fitColors[co.fitScore] || fitColors["GOOD"];

  const handleCopy   = () => { navigator.clipboard.writeText(co.pitch); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  const handleFilter = (f) => { setFilter(f); setSelected(0); };

  return (
    <div style={{ fontFamily: "'Georgia', serif", minHeight: "100vh", background: "#060608", color: "#F0ECE4" }}>

      {/* ── Header ── */}
      <div style={{ borderBottom: "1px solid #111", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#08080B" }}>
        <div>
          <div style={{ fontSize: 9, letterSpacing: 4, color: "#444", textTransform: "uppercase", marginBottom: 2, fontFamily: "monospace" }}>Cold Outreach Kit · 28 Companies · Hire-First Pitches</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#F0ECE4", letterSpacing: -0.5 }}>Ayush Khandual · IIM Bangalore · March 2026</div>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {TIERS.map(t => {
            const tc = tierColors[t] || "#F0ECE4";
            const active = filter === t;
            return (
              <button key={t} onClick={() => handleFilter(t)} style={{
                fontSize: 9, letterSpacing: 2,
                color: active ? "#060608" : (t === "ALL" ? "#888" : tc),
                background: active ? (t === "ALL" ? "#F0ECE4" : tc) : "transparent",
                border: `1px solid ${active ? (t === "ALL" ? "#F0ECE4" : tc) : "#222"}`,
                padding: "4px 11px", borderRadius: 20, cursor: "pointer",
                textTransform: "uppercase", fontFamily: "monospace",
                transition: "all 0.15s", fontWeight: active ? 700 : 400,
              }}>
                {t === "SECTOR 62" ? "📍 SEC 62" : t}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", height: "calc(100vh - 55px)" }}>

        {/* ── Sidebar ── */}
        <div style={{ width: 196, borderRight: "1px solid #0f0f0f", overflowY: "auto", flexShrink: 0 }}>
          {filtered.map((c, i) => {
            const tc = tierColors[c.tier] || "#888";
            return (
              <button key={i} onClick={() => setSelected(i)} style={{
                width: "100%", textAlign: "left", padding: "10px 14px",
                background: selected === i ? "#0d0d10" : "transparent",
                border: "none",
                borderLeft: selected === i ? `2px solid ${c.accentColor}` : "2px solid transparent",
                cursor: "pointer", transition: "all 0.1s",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                  <span style={{ fontSize: 8, color: selected === i ? c.accentColor : "#2a2a2a", fontFamily: "monospace", letterSpacing: 1 }}>{c.rank}</span>
                  <span style={{ fontSize: 7, color: tc, fontFamily: "monospace", letterSpacing: 1 }}>{c.tier === "SECTOR 62" ? "SEC62" : c.tier.split(" ")[0]}</span>
                </div>
                <div style={{ fontSize: 12, color: selected === i ? "#F0ECE4" : "#666", fontWeight: selected === i ? 700 : 400, lineHeight: 1.2 }}>{c.name}</div>
                <div style={{ fontSize: 9, color: selected === i ? c.accentColor + "99" : "#222", marginTop: 2, fontFamily: "monospace", lineHeight: 1.3 }}>{c.role}</div>
              </button>
            );
          })}
        </div>

        {/* ── Main ── */}
        <div style={{ flex: 1, overflowY: "auto", padding: "22px 30px", background: "#08080B" }}>

          {/* Company + role header */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <span style={{ fontSize: 10, color: co.accentColor, fontFamily: "monospace", letterSpacing: 2 }}>{co.rank}</span>
              <h1 style={{ fontSize: 24, fontWeight: 900, color: "#F0ECE4", margin: 0, letterSpacing: -0.8 }}>{co.name}</h1>
              <span style={{ fontSize: 8, color: "#060608", background: fit.text, padding: "2px 8px", borderRadius: 20, fontFamily: "monospace", letterSpacing: 1, fontWeight: 700, whiteSpace: "nowrap" }}>{fit.label}</span>
            </div>
            <div style={{ fontSize: 13, color: co.accentColor, fontFamily: "monospace", marginBottom: 2 }}>→ {co.role}</div>
            <div style={{ fontSize: 10, color: "#333", fontFamily: "monospace", letterSpacing: 1 }}>{co.badge} · {co.funding}</div>
          </div>

          {/* Perks */}
          <div style={{ background: `${co.accentColor}0e`, border: `1px solid ${co.accentColor}22`, borderRadius: 6, padding: "9px 14px", marginBottom: 10, display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ fontSize: 13 }}>🎁</span>
            <div>
              <div style={{ fontSize: 8, color: co.accentColor, letterSpacing: 3, textTransform: "uppercase", marginBottom: 2, fontFamily: "monospace" }}>Intern Perks</div>
              <div style={{ fontSize: 12, color: "#aaa" }}>{co.perks}</div>
            </div>
          </div>

          {/* Fit note */}
          <div style={{ background: fit.bg, borderLeft: `3px solid ${fit.text}`, padding: "10px 14px", borderRadius: "0 6px 6px 0", marginBottom: 10 }}>
            <div style={{ fontSize: 8, color: fit.text, letterSpacing: 3, textTransform: "uppercase", marginBottom: 5, fontFamily: "monospace" }}>Why This Fits Your Background</div>
            <p style={{ fontSize: 13, color: "#bbb", lineHeight: 1.7, margin: 0 }}>{co.fitNote}</p>
          </div>

          {/* Founder + email */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
            <div style={{ background: "#0d0d10", border: "1px solid #111", borderRadius: 6, padding: "11px 14px" }}>
              <div style={{ fontSize: 8, color: "#333", letterSpacing: 3, textTransform: "uppercase", marginBottom: 5, fontFamily: "monospace" }}>Send To</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#F0ECE4", marginBottom: 1 }}>{co.founder}</div>
              <div style={{ fontSize: 10, color: "#444", marginBottom: 7 }}>{co.founderTitle}</div>
              <a href={co.founderLI} target="_blank" rel="noreferrer" style={{ fontSize: 10, color: "#3A86FF", textDecoration: "none", fontFamily: "monospace" }}>→ LinkedIn ↗</a>
            </div>
            <div style={{ background: "#0d0d10", border: "1px solid #111", borderRadius: 6, padding: "11px 14px" }}>
              <div style={{ fontSize: 8, color: "#333", letterSpacing: 3, textTransform: "uppercase", marginBottom: 5, fontFamily: "monospace" }}>Email</div>
              <div style={{ fontSize: 12, color: co.accentColor, fontFamily: "monospace", marginBottom: 7, wordBreak: "break-all" }}>{co.email}</div>
              <div style={{ fontSize: 9, color: "#2a2a2a", fontFamily: "monospace" }}>Subject: IIM-B | {co.role}</div>
            </div>
          </div>

          {/* Pitch */}
          <div style={{ background: "#0d0d10", border: "1px solid #111", borderRadius: 6, padding: "14px 17px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <div style={{ fontSize: 8, color: "#333", letterSpacing: 3, textTransform: "uppercase", fontFamily: "monospace" }}>Cold Pitch — Application-Tone · Copy & Send</div>
              <button onClick={handleCopy} style={{
                fontSize: 9, letterSpacing: 1,
                color: copied ? co.accentColor : "#444",
                background: "transparent",
                border: `1px solid ${copied ? co.accentColor : "#1a1a1a"}`,
                padding: "3px 12px", borderRadius: 20, cursor: "pointer",
                transition: "all 0.2s", textTransform: "uppercase", fontFamily: "monospace",
              }}>
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>
            <p style={{ fontSize: 13, color: "#ccc", lineHeight: 1.95, margin: 0, borderLeft: `2px solid ${co.accentColor}44`, paddingLeft: 12, whiteSpace: "pre-line" }}>
              {co.pitch}
            </p>
          </div>

          {/* Nav */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18, paddingTop: 14, borderTop: "1px solid #0f0f0f" }}>
            <button onClick={() => setSelected(Math.max(0, selected - 1))} disabled={selected === 0}
              style={{ fontSize: 10, color: selected === 0 ? "#1a1a1a" : "#555", background: "transparent", border: "1px solid #111", padding: "6px 14px", borderRadius: 5, cursor: selected === 0 ? "default" : "pointer", fontFamily: "monospace" }}>← Prev</button>
            <span style={{ fontSize: 10, color: "#222", alignSelf: "center", fontFamily: "monospace" }}>{selected + 1} / {filtered.length}</span>
            <button onClick={() => setSelected(Math.min(filtered.length - 1, selected + 1))} disabled={selected === filtered.length - 1}
              style={{ fontSize: 10, color: selected === filtered.length - 1 ? "#1a1a1a" : "#555", background: "transparent", border: "1px solid #111", padding: "6px 14px", borderRadius: 5, cursor: selected === filtered.length - 1 ? "default" : "pointer", fontFamily: "monospace" }}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
