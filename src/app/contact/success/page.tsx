import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-200px)]">
      <h1 className="text-4xl font-bold text-green-400 mb-4">Thank You!</h1>
      <p className="text-lg mb-8">Your message has been sent successfully. We will get back to you shortly.</p>
      <Link href="/" className="text-lemon-green hover:underline">
        &larr; Back to Homepage
      </Link>
    </div>
  );
};

export default ThankYouPage;
