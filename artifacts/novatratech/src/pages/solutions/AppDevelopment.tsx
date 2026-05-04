import SolutionTemplate, { type SolutionData } from "@/components/SolutionTemplate";
import { Smartphone } from "lucide-react";

const data: SolutionData = {
  icon: Smartphone,
  color: "#f472b6",
  title: "App Development",
  tagline: "Mobile-first solutions that users return to",
  heroDescription:
    "Mobile experiences built with the speed and polish of a senior product team. Whether iOS, Android, or cross-platform, we ship apps that users actually love, with performance and reliability that earns reviews and retention.",
  whatThisIs:
    "A great mobile app is a product, not a feature list. It needs a clear purpose, an intuitive flow, and a technical foundation that handles real usage without crashing. We build mobile apps that pass the harshest judge of all: actual users. From first wireframe to App Store approval, we own the entire product lifecycle, so you don't have to juggle designers, developers, and QA across three continents.",
  whatYouGet: [
    {
      title: "React Native Cross-Platform Development",
      detail: "One codebase that ships flawlessly on both iOS and Android without compromise. React Native delivers near-native performance and full device API access at a fraction of the cost of building two separate apps, letting you move faster and iterate with confidence.",
      bullets: [
        "Single codebase for iOS and Android from day one",
        "Near-native performance with optimized rendering pipeline",
        "Full device API access: camera, GPS, biometrics, sensors",
        "Expo or bare React Native based on project requirements",
      ],
    },
    {
      title: "Native iOS & Android Development",
      detail: "For performance-critical applications where native is non-negotiable. We build Swift for iOS and Kotlin for Android, giving you full access to platform-specific features, native UI components, and the highest possible performance ceiling.",
      bullets: [
        "Swift (iOS) and Kotlin (Android) native development",
        "Native UI components for platform-consistent experience",
        "Deep OS integration: widgets, shortcuts, live activities",
        "Full compliance with Apple and Google platform guidelines",
      ],
    },
    {
      title: "Offline Support & Background Sync",
      detail: "Apps that work even without a network connection. We implement intelligent caching, offline data persistence, and background sync so users never hit a dead end due to poor connectivity, and their data is always safe and current when they reconnect.",
      bullets: [
        "Offline-first architecture with SQLite or MMKV storage",
        "Background sync with conflict resolution strategies",
        "Queue-based offline action management and replay",
        "Network state detection and graceful UI feedback",
      ],
    },
    {
      title: "Push Notifications",
      detail: "The right message to the right user at the right moment. We implement local, remote, and in-app push notifications with full segmentation, scheduling, and deep-link routing so every notification drives a meaningful action.",
      bullets: [
        "Firebase Cloud Messaging (FCM) and APNs setup",
        "Segmented and personalized notification delivery",
        "Rich push notifications with images, actions, and badges",
        "Deep link routing directly from notification tap",
      ],
    },
    {
      title: "Deep Linking & Navigation Architecture",
      detail: "Seamless navigation from any entry point, whether it's a web URL, a shared social link, or a push notification tap. We engineer deep linking architecture that handles every user flow, including deferred linking for new user installs.",
      bullets: [
        "Universal Links (iOS) and App Links (Android)",
        "Custom URL scheme routing and parameter handling",
        "Deferred deep linking for new user install flows",
        "Navigation stack management and state persistence",
      ],
    },
    {
      title: "App Store & Play Store Submission",
      detail: "We manage the entire submission process from app signing and metadata preparation to review compliance and release management. You stay focused on the product while we handle the operational complexity of getting it live.",
      bullets: [
        "App signing, provisioning profiles, and certificate management",
        "App Store and Play Store metadata and ASO optimization",
        "Review compliance and guideline adherence review",
        "Phased rollout strategy and release management",
      ],
    },
    {
      title: "Analytics & Crash Reporting",
      detail: "Full visibility into how users interact with your app and exactly where it breaks. We integrate behavioral analytics and real-time crash monitoring so every decision about your product roadmap is backed by real user data.",
      bullets: [
        "Event tracking and funnel analytics via Firebase or Mixpanel",
        "Real-time crash and error reporting via Sentry or Crashlytics",
        "User session analysis and behavioral flow visualization",
        "Retention, churn, and engagement metric dashboards",
      ],
    },
    {
      title: "Ongoing Maintenance & Feature Iteration",
      detail: "Apps require continuous maintenance as iOS and Android release new operating system versions. We provide ongoing compatibility updates, performance improvements, bug fixes, and new feature development to keep your app growing.",
      bullets: [
        "iOS and Android OS update compatibility maintenance",
        "Bug triage, hotfix releases, and patch management",
        "Feature development aligned to your product roadmap",
        "Performance profiling, memory optimization, and audits",
      ],
    },
  ],
  useCases: [
    { title: "Consumer Apps", desc: "Lifestyle, fitness, finance, and productivity apps built for millions of daily active users." },
    { title: "Field Service Apps", desc: "Mobile tools for field teams: job management, photo capture, digital signatures." },
    { title: "On-Demand Platforms", desc: "Delivery, booking, and marketplace apps with real-time location and payments." },
    { title: "B2B Mobile Tools", desc: "Custom enterprise apps replacing paper workflows and legacy mobile systems." },
    { title: "E-Commerce Apps", desc: "Native shopping experiences with cart, checkout, and push-notification re-engagement." },
    { title: "Social & Community", desc: "User-generated content platforms, communities, and social networking applications." },
  ],
  whyItMatters:
    "Mobile users now account for 60% of all digital traffic. A subpar mobile experience doesn't just lose sales, it destroys brand trust. In an era where users will uninstall an app after one bad experience, every interaction has to count. We engineer mobile products that people return to, recommend, and rely on.",
  whyMetric: { value: "60%+", label: "of traffic is mobile" },
};

export default function AppDevelopment() {
  return <SolutionTemplate data={data} />;
}
