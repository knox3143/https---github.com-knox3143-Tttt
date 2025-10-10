import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Funky Music',
  description: 'Privacy Policy for Funky Music Discord Bot.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-20 fade-in-up">
      <div className="prose prose-invert mx-auto max-w-4xl">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-gradient-primary">
          Privacy Policy
        </h1>
        <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Introduction</h2>
        <p>
          Welcome to Funky Music ("we", "our", "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Discord bot, Funky Music (the "Bot"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not use the Bot.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect via the Bot includes:
        </p>
        <ul>
          <li><strong>Discord User ID:</strong> To identify users and save user-specific settings and playlists.</li>
          <li><strong>Discord Server ID:</strong> To save server-specific settings like prefix and DJ roles.</li>
          <li><strong>Command Usage Data:</strong> We collect data on which commands are used and how frequently to help us improve the Bot. This data is anonymized and not linked to specific users.</li>
          <li><strong>Playlist Data:</strong> If you use the playlist feature, we store the song information you add to your playlists.</li>
        </ul>
        <p>
          We do NOT collect or store any personally identifiable information (PII) such as your email address, password, or messages you send in servers.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>
          Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Bot to:
        </p>
        <ul>
          <li>Save and retrieve your server and user settings.</li>
          <li>Manage your playlists.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Bot.</li>
          <li>Diagnose and fix technology problems.</li>
        </ul>

        <h2>4. Disclosure of Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your information. Your data is stored securely and is only accessible by the core development team of Funky Music for the purposes of operating and improving the Bot. We may disclose your information if we are required by law to do so.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your information. While we have taken reasonable steps to secure the information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2>6. Your Data Rights</h2>
        <p>
          You have the right to request access to the data we hold about you. You can also request that we delete your data. To do so, please join our support server and contact a developer. Deleting your data will remove all your saved playlists and settings.
        </p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us on our Discord support server.
        </p>
      </div>
    </div>
  );
}
