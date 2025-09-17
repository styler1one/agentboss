import './globals.css'

export const metadata = {
  title: 'AgentBoss.nl - Compliance-Ready AI Agents in 30 Dagen',
  description: 'AgentBoss levert veilige, AI Act-compliant autonome agents met gegarandeerde ROI. De vertrouwde partner voor enterprise agentic AI in Europa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
