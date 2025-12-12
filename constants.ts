import {
  ShieldCheck,
  Users,
  Truck,
  Package,
  Lock,
  Building2,
  Wallet,
  UserPlus,
  ShoppingBag,
  HeartPulse,
  CreditCard,
  TrendingDown,
  CalendarClock,
  MapPin,
} from 'lucide-react'
import {
  NavItem,
  ValueProp,
  Step,
  Feature,
  PricingTier,
  Addon,
  Testimonial,
  FAQCategory,
  FooterSection,
  ModalContent,
} from './types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const TRUST_BADGES = [
  'Insured Livestocks',
  'Secured Funds',
  'Vet Certified Rams',
  'Trusted Nationwide',
]

export const VALUE_PROPS: ValueProp[] = [
  {
    title: 'Flexible Savings Plans',
    description: 'Save daily, weekly, or monthly until Sallah. No pressure, just consistency.',
    icon: Wallet,
  },
  {
    title: 'Guaranteed Delivery',
    description: 'We source early to avoid festive price hikes and guarantee availability.',
    icon: Truck,
  },
  {
    title: 'Secure & Insured',
    description: 'Your funds are completely protected, and our livestock are fully insured.',
    icon: ShieldCheck,
  },
  {
    title: 'Live Ram or Meat Pack',
    description: 'Choose between a live ram delivered to your door or a shared meat pack.',
    icon: Package,
  },
]

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: 'Create an Account',
    description:
      'Sign up as an Individual, Business, or Ajo/Group Admin. Onboarding takes less than 2 minutes.',
    icon: UserPlus,
  },
  {
    title: 'Choose What You Want',
    description:
      'Select Small, Medium, or Large rams. Choose between Live Ram or Meat Pack options.',
    icon: ShoppingBag,
  },
  {
    title: 'Choose How to Pay',
    description:
      'One-time payment or flexible savings (Daily/Weekly/Monthly) via our virtual account.',
    icon: CreditCard,
  },
  {
    title: 'Procurement & Quality',
    description: 'We select, vet-check, feed, and insure your ram 2 months before delivery.',
    icon: HeartPulse,
  },
  {
    title: 'Delivery to You',
    description:
      'Receive live ram or meat pack at your doorstep with insured transit and tracking.',
    icon: Truck,
  },
]

export const FEATURES_GRID: Feature[] = [
  {
    title: 'Save Towards a Ram',
    icon: Wallet,
    items: ['Flexible savings plans', 'Real-time savings progress', 'Automated reminders'],
  },
  {
    title: 'Business Bulk Purchase',
    icon: Building2,
    items: [
      'Buy for staff',
      'Upload employee list (CSV)',
      'Multiple delivery addresses',
      'Custom branding',
    ],
  },
  {
    title: 'Ajo Group Savings',
    icon: Users,
    items: [
      'Create group & add members',
      'Track contributions',
      'Automatic or manual split',
      'Group leader dashboard',
    ],
  },
  {
    title: 'Meat Pack Option',
    icon: Package,
    items: [
      'Slaughtering & Hygienic packaging',
      'Cold-chain delivery',
      'Custom split (equal or custom)',
      'Name labels for recipients',
    ],
  },
  {
    title: 'Delivery Management',
    icon: Truck,
    items: [
      'Track deliveries',
      'Multiple addresses',
      'Insurance coverage',
      'Verified logistics partners',
    ],
  },
  {
    title: 'Secure Payments',
    icon: Lock,
    items: ['Virtual account', 'Instant settlements', 'Full financial history'],
  },
  {
    title: 'Guaranteed Quality',
    icon: ShieldCheck,
    items: ['Vet inspections', 'Proper feeding', 'Quality grading', 'Live weight checks'],
  },
]

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Small Ram',
    price: '₦ 200,000',
    weight: 'Approx. 25-30kg (~140+ meat pieces)',
    features: [
      'Procurement included',
      'Goods-in-Transit Insurance',
      'Vet Health Check',
      'Feeding & Care',
    ],
  },
  {
    name: 'Medium Ram',
    price: '₦ 270,000',
    weight: 'Approx. 35-45kg (~220+ meat pieces)',
    highlight: true,
    features: [
      'Procurement included',
      'Goods-in-Transit Insurance',
      'Vet Health Check',
      'Feeding & Care',
      'Most Popular Choice',
    ],
  },
  {
    name: 'Large Ram',
    price: '₦ 410,000',
    weight: 'Approx. 50-65kg (~330+ meat pieces)',
    features: [
      'Procurement included',
      'Goods-in-Transit Insurance',
      'Vet Health Check',
      'Feeding & Care',
    ],
  },
]

export const PRICING_ADDONS: Addon[] = [
  { name: 'Slaughtering Fee', price: '₦ 5,000 - ₦ 8,000 depending on ram size' },
  { name: 'Meat Packaging Fee', price: '₦ 2,500' },
  { name: 'Delivery Fee (Location based)', price: 'Varies' },
  { name: 'Branding (Logo/Tags)', price: 'On Request' },
  { name: 'Meat Splitting', price: 'Included in Pack' },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ahmed Musa',
    role: 'Individual Saver',
    content:
      'Last year, Sallah ram prices doubled a week before. With Ramify, I had locked down my price months ago. The ram was delivered healthy and on time.',
    avatar: 'https://picsum.photos/100/100?random=1',
  },
  {
    name: 'TechPoint Solutions',
    role: 'Business Account',
    content:
      'We used Ramify to distribute meat packs to our 50 staff members. The CSV upload feature made it incredibly easy. Highly recommended for corporate gifting.',
    avatar: 'https://picsum.photos/100/100?random=2',
  },
  {
    name: 'Market Women Union',
    role: 'Ajo Group Lead',
    content:
      'Our Ajo group saved together. The transparency was key; everyone could see the progress. We got 10 large rams delivered without stress.',
    avatar: 'https://picsum.photos/100/100?random=3',
  },
]

export const WHY_RAMIFY_REASONS = [
  {
    title: 'Beat Inflation',
    desc: 'Festival ram prices skyrocket 50-80% every year. We lock in your price months in advance.',
    icon: TrendingDown,
  },
  {
    title: 'Zero Pressure',
    desc: 'Last-minute market rushes are stressful and expensive. Flexible savings remove that burden.',
    icon: CalendarClock,
  },
  {
    title: 'Guaranteed Quality',
    desc: 'No skinny or sick animals. Our vets certify every ram before it is tagged for you.',
    icon: ShieldCheck,
  },
  {
    title: 'Doorstep Delivery',
    desc: 'We handle the logistics. Whether one ram or fifty, we deliver to your specified location.',
    icon: MapPin,
  },
]

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    category: 'Savings & Payments',
    items: [
      {
        question: 'How do I save for a ram?',
        answer: 'Choose daily, weekly, or monthly plan through your virtual account.',
      },
      {
        question: 'Can I withdraw anytime?',
        answer:
          'Once you start saving for a ram, no withdrawals will be allowed. This policy ensures that your spot for the ram is fully secured. By committing your savings, you are guaranteed that a ram will be allocated to you during the festive period.\n\nThis approach helps us plan procurement and logistics efficiently, preventing last-minute cancellations or changes that could affect other savers. Essentially, your savings act as a reservation — securing your ram and making the entire process smoother and more reliable for everyone involved.',
      },
      {
        question: "So what happens if i don't meet up with my savings?",
        answer:
          'Since withdrawals aren’t allowed once you start saving, you have two options:\n\n (1) Roll over your savings to the next festive period – your contributions will remain secure and count toward your next ram purchase.\n\n (2) Use your savings toward a meat pack – if the amount you’ve saved reaches a substantial value, you can redeem it for a meat pack equivalent to your saved amount.\n\n (3) If your saved amount isn’t enough to qualify for a meat pack, it will automatically roll over to the next festive period, ensuring your money is never lost and your spot is still secured.',
      },
    ],
  },
  {
    category: 'Delivery',
    items: [
      {
        question: 'How does delivery work?',
        answer: 'We offer doorstep delivery during specific festival windows.',
      },
      {
        question: 'Can I choose my delivery date?',
        answer:
          'No — we deliver according to routes and locations to deliver efficiently and accordingly.',
      },
      {
        question: 'What if I am not available?',
        answer: 'Our rider will call. A second attempt may require a small re-delivery fee.',
      },
    ],
  },
  {
    category: 'Meat Packs',
    items: [
      {
        question: 'How does meat splitting work?',
        answer: 'You choose equal or custom split options, with packaging included.',
      },
      {
        question: 'Can I send packs to multiple addresses?',
        answer: 'Yes — add addresses manually or upload a CSV file.',
      },
    ],
  },
  {
    category: 'Business & Ajo',
    items: [
      {
        question: 'Can businesses buy in bulk?',
        answer: 'Yes — with multiple delivery addresses and custom branding options.',
      },
      {
        question: 'How do Ajo groups work?',
        answer: 'Group leader sets rules; members contribute until the full amount is met.',
      },
    ],
  },
  {
    category: 'Quality & Insurance',
    items: [
      {
        question: 'Are the rams checked?',
        answer: 'Yes — full vet inspection and feeding program is included.',
      },
      {
        question: 'Is delivery insured?',
        answer: 'Yes — Goods-in-transit insurance covers accidents, loss, or death.',
      },
    ],
  },
  {
    category: 'General Questions',
    items: [
      {
        question: 'When does Ramify open for savings?',
        answer: 'Ramify opens for savings Early 2026.',
      },
    ],
  },
]

export const FOOTER_LINKS: FooterSection[] = [
  {
    category: 'About Ramify',
    items: [
      { label: 'What Ramify Is', key: 'what-is-ramify' },
      { label: 'How Ramify Works', key: 'how-it-works-footer' },
      { label: 'Why Save Early', key: 'why-save-early' },
      { label: 'Our Procurement Process', key: 'procurement-process' },
      { label: 'Vet & Quality Assurance', key: 'vet-qa' },
      { label: 'Festival Delivery Timelines', key: 'delivery-timelines' },
      { label: 'Ram Sizes Explained', key: 'ram-sizes' },
    ],
  },
  // {
  //     category: 'Partnerships',
  //     items: [
  //         { label: 'Leadway Insurance (Transit Protection)', key: 'partner-leadway', type: 'partner' },
  //         { label: 'Moniepoint (Payment Infrastructure)', key: 'partner-moniepoint', type: 'partner' },
  //     ]
  // },
  {
    category: 'Policies',
    items: [
      { label: 'Privacy Policy', key: 'privacy-policy' },
      { label: 'Terms & Conditions', key: 'terms-conditions' },
      { label: 'Refund Policy', key: 'refund-policy' },
      { label: 'Delivery Policy', key: 'delivery-policy' },
      { label: 'Insurance Coverage Policy', key: 'insurance-policy' },
      { label: 'Data Protection & Security Policy', key: 'data-security' },
    ],
  },
  {
    category: 'Support',
    items: [
      { label: 'WhatsApp Support', key: 'whatsapp-support' },
      { label: 'Email Support', key: 'email-support' },
      { label: 'Frequently Asked Questions', key: 'faq-support' },
      { label: 'Customer Protection Notice', key: 'customer-protection' },
      { label: 'Contact Hours', key: 'contact-hours' },
    ],
  },
]

export const FOOTER_MODAL_CONTENT: Record<string, ModalContent> = {
  'what-is-ramify': {
    title: 'What Ramify Is',
    content: `Ramify is Nigeria's premier agritech and fintech platform dedicated to simplifying festival celebrations.

We bridge the gap between financial planning and agricultural procurement. By allowing individuals, businesses, and groups to save small amounts over time, we enable them to purchase high-quality rams and meat packs for Sallah without the financial strain of last-minute market prices.

Our mission is to make celebration affordable, guaranteed, and stress-free for every Nigerian household.`,
  },
  'how-it-works-footer': {
    title: 'How Ramify Works',
    content: `1. **Create an Account:** Sign up in minutes using your phone number or email. You can choose an Individual, Business, or Ajo Group profile.

2. **Select Your Product:** Browse our selection of verified rams (Small, Medium, Large, Premium) or meat packs.

3. **Start Saving:** Fund your wallet daily, weekly, or monthly. You can also make a one-time outright payment. Your funds are held securely by Moniepoint.

4. **Procurement & Tagging:** Once your savings target is reached, a ram is procured from our partner farms, tagged with your ID, and managed until delivery.

5. **Delivery:** We deliver your live ram or packaged meat to your doorstep 2-5 days before the festival.`,
  },
  'why-save-early': {
    title: 'Why Save Early?',
    content: `Saving early with Ramify offers three major benefits:

**1. Price Locking:** Ram prices in Nigerian markets often increase by 50-80% in the weeks leading up to Sallah. By saving and booking early, you lock in a far lower rate.

**2. Guaranteed Quality:** Early procurement allows us to select the healthiest livestock from our partner farms before the market rush depletes quality stock.

**3. Zero Financial Pressure:** Spreading the cost over 3-6 months makes the expense manageable, rather than spending a lump sum during a financially demanding period.`,
  },
  'procurement-process': {
    title: 'Our Procurement Process',
    content: `Our procurement team works year-round to ensure quality:

1. **Farm Vetting:** We only partner with farms that meet strict hygiene and feed standards in the North and South-West regions.
2. **Selection:** Veterinary experts inspect animals for weight, health, and age appropriateness for sacrifice.
3. **Tagging:** Selected animals are ear-tagged and mapped to specific customer orders.
4. **Fattening:** Animals are kept in feedlots on a specialized diet to ensure they maintain or gain weight before delivery.`,
  },
  'vet-qa': {
    title: 'Vet & Quality Assurance',
    content: `Every animal processed through Ramify undergoes a strict 3-point veterinary check:

1. **Point of Selection:** Vets check for physical defects, clear eyes, and general alertness.
2. **Quarantine:** Animals are observed for 48 hours before entering the main feedlot to prevent disease spread.
3. **Pre-Delivery:** A final health check is conducted 48 hours before dispatch to ensure you receive a healthy, compliant animal.`,
  },
  'delivery-timelines': {
    title: 'Festival Delivery Timelines',
    content: `**Live Rams:**
Deliveries for live rams commence 7 days before Sallah and conclude 2 days before the celebration. You will receive an SMS and App notification with your estimated delivery slot.

**Meat Packs:**
Meat packs are processed 48 hours before delivery to ensure freshness. They are delivered in frozen/chilled vans 1-3 days before Sallah.

**Note:** We operate strict delivery routes. Changes to delivery addresses must be made at least 14 days before the festival.`,
  },
  'ram-sizes': {
    title: 'Ram Sizes Explained',
    content: `We categorize our rams by weight to ensure transparency:

* **Small Ram (25kg - 30kg):** Suitable for small families.
* **Medium Ram (35kg - 45kg):** Our most popular option, good balance of size and cost.
* **Large Ram (50kg - 65kg):** Impressive size, suitable for large gatherings.
* **Premium/Balami (75kg+):** The largest breed available, distinct white coat and large horns.

*Weights are approximate live weights at the time of delivery.*`,
  },
  // Partnerships
  'partner-leadway': {
    title: 'Partnership: Leadway Assurance',
    content: `Ramify is proud to partner with **Leadway Assurance**, Nigeria's foremost insurance provider.

This partnership provides **Goods-in-Transit Insurance** for every order. This means:
* If your ram is lost, stolen, or dies during transit to your home, you are fully refunded or provided with an immediate replacement.
* Your investment is protected from farm to doorstep.

We pay the premium so you can have peace of mind.`,
  },
  'partner-moniepoint': {
    title: 'Partnership: Moniepoint',
    content: `Your financial security is our top priority. We partner with **Moniepoint Microfinance Bank** to power our wallet system.

* **Secure Accounts:** Every Ramify user gets a dedicated virtual account for savings.
* **Regulatory Compliance:** Funds are managed in compliance with CBN regulations.
* **Reliability:** High transaction success rates ensure your savings are updated instantly.`,
  },
  // Policies
  'privacy-policy': {
    title: 'Privacy Policy',
    content: `**Effective Date: January 1, 2025**

**1. Information We Collect**
We collect personal information such as your name, phone number, delivery address, and payment details to facilitate your savings and delivery.

**2. How We Use Your Data**
* To process your orders and manage your account.
* To communicate updates regarding your savings and delivery.
* To comply with legal obligations.

**3. Data Sharing**
We do not sell your data. We share necessary details with logistics partners (for delivery) and Moniepoint (for payments) only.

**4. Your Rights**
You have the right to request access to or deletion of your data at any time by contacting support.`,
  },
  'terms-conditions': {
    title: 'Terms & Conditions',
    content: `**1. Acceptance of Terms**
By using Ramify, you agree to these terms.

**2. Savings & Payments**
Funds deposited are specifically for the purchase of livestock. Ramify is not an investment platform; we do not pay interest on savings.

**3. Price Locking**
Prices are locked only after you have saved at least 50% of the target amount or if you purchase outright.

**4. User Conduct**
You agree to provide accurate delivery information. Ramify is not liable for failed deliveries due to incorrect addresses.`,
  },
  'refund-policy': {
    title: 'Refund Policy',
    content: `If Ramify fails to deliver your order, you are entitled to a **100% refund** including service fees, processed within 24 hours.`,
  },
  'delivery-policy': {
    title: 'Delivery Policy',
    content: `**1. Locations**
We currently deliver to Lagos, Ogun, Oyo, Abuja, and Port Harcourt.

**2. Delivery Fees**
Delivery fees are calculated based on your location and are separate from the ram price. This fee must be paid before the cut-off date.

**3. Receipt**
The recipient must be present to receive the live animal. We will not leave live animals unattended. If the recipient is unavailable, the animal will be returned to the holding center, and a re-delivery fee will apply.`,
  },
  'insurance-policy': {
    title: 'Insurance Coverage Policy',
    content: `**Scope of Cover (Underwritten by Leadway Assurance):**

**Covered Risks:**
* Death of animal due to accident during transit.
* Theft of animal during transit.
* Death of animal due to illness while in Ramify's custody.

**Exclusions:**
* Death of animal after successful delivery to the customer.
* Escape of animal after successful delivery.

**Claim Process:**
Claims are processed automatically by Ramify. If an incident occurs, we replace the animal immediately from our reserve stock.`,
  },
  'data-security': {
    title: 'Data Protection & Security',
    content: `We employ bank-grade security measures to protect your data.
* **Encryption:** All data in transit is encrypted via SSL.
* **Access Control:** Strict internal access controls ensure only authorized personnel handle your delivery data.
* **Audits:** Regular security audits are conducted on our infrastructure.`,
  },
  // Support
  'whatsapp-support': {
    title: 'WhatsApp Support',
    content: `Chat with us on WhatsApp for instant assistance.

**Number:** +234 800 RAMIFY NG
**Response Time:** Typically under 5 minutes.

Clicking the button below would normally open WhatsApp.`,
  },
  'email-support': {
    title: 'Email Support',
    content: `For formal inquiries, partnership requests, or complex issues, please email us.

**Email:** hello@ramify.ng
**Response Time:** Within 24 hours.`,
  },
  'faq-support': {
    title: 'Frequently Asked Questions',
    content: `Please refer to the main FAQ section on the homepage for a comprehensive list of questions regarding savings, delivery, and account management.`,
  },
  'customer-protection': {
    title: 'Customer Protection Notice',
    content: `Ramify operates under the strict regulations of the FCCPC (Federal Competition and Consumer Protection Commission).

We are committed to fair trading, transparent pricing, and holding up our end of the contract. If you feel your rights have been violated, you have the right to escalate the issue to our management or relevant authorities.`,
  },
  'contact-hours': {
    title: 'Contact Hours',
    content: `**Monday - Friday:** 8:00 AM - 6:00 PM
**Saturday:** 9:00 AM - 4:00 PM
**Sunday:** Closed (except during Festival Week)

*During the week of Sallah, our support lines are open 24/7.*`,
  },
}
