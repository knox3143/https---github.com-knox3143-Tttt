import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Funky Music',
  description: 'Terms of Service for Funky Music Discord Bot.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container py-12 md:py-20 fade-in-up">
      <div className="prose prose-invert mx-auto max-w-4xl">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-gradient-primary">
          Terms of Service
        </h1>
        <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Agreement to Terms</h2>
        <p>
          By inviting and using the Funky Music Discord bot ("Bot"), you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree to these Terms, do not use the Bot. You also agree to abide by Discord's Terms of Service.
        </p>

        <h2>2. Use of the Bot</h2>
        <p>
          Funky Music is provided for your personal, non-commercial use on the Discord platform. You agree not to use the Bot for any purpose that is illegal or prohibited by these Terms. Prohibited activities include, but are not limited to:
        </p>
        <ul>
          <li>Using the Bot in a way that violates Discord's Terms of Service.</li>
          <li>Attempting to decompile, reverse engineer, or otherwise attempt to obtain the source code of the Bot.</li>
          <li>Using the Bot to distribute spam, unsolicited messages, or content that is abusive, harassing, or hateful.</li>
          <li>Using automation to interact with the Bot in a way that is not intended, such as creating an excessive number of requests.</li>
          <li>Playing content that infringes on copyright laws. You are responsible for the content you request the Bot to play.</li>
        </ul>

        <h2>3. Service Availability</h2>
        <p>
          We strive to provide a reliable and available service. However, we cannot guarantee that the Bot will be available at all times, be uninterrupted, or be error-free. We reserve the right to modify, suspend, or discontinue the Bot at any time without notice.
        </p>

        <h2>4. Premium Services</h2>
        <p>
          We may offer premium features for a fee. These services are subject to their own terms and conditions, which will be presented to you at the time of purchase. All payments are final and non-refundable except as required by law.
        </p>

        <h2>5. Disclaimer of Warranties</h2>
        <p>
          The Bot is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Bot will meet your requirements or that its operation will be uninterrupted or error-free.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, Funky Music and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your use of the Bot.
        </p>

        <h2>7. Changes to These Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will provide notice of any significant changes by announcing them on our official Discord server. Your continued use of the Bot after such changes constitutes your acceptance of the new Terms.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us on our Discord support server.
        </p>
      </div>
    </div>
  );
}
