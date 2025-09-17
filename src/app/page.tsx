export default function Home() {
  const handleAssessmentClick = () => {
    alert('🎯 AI Readiness Assessment wordt geladen...\n\nBinnenkort beschikbaar:\n• AI maturity scoring\n• Compliance readiness check\n• Persoonlijke aanbevelingen');
  };

  const handleWorkshopClick = () => {
    alert('📊 Strategic Agent Roadmap Workshop\n\nContact: info@agentboss.nl\n• Executive workshop\n• Gedetailleerde roadmap\n• Compliance strategie');
  };

  const handlePilotClick = () => {
    alert('🚀 30 Days to First Value Pilot\n\nContact: info@agentboss.nl\n• Gegarandeerde ROI\n• Compliance-ready implementatie\n• Geld terug garantie');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="text-xl font-bold text-gray-900">AgentBoss</span>
                <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">AI Act Ready</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm text-gray-600">Microsoft Partner</span>
              <button 
                onClick={handlePilotClick}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                Start Pilot
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <span className="bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-sm">
                🛡️ AI Act Specialist
              </span>
              <span className="bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-sm">
                ✅ NIS2 Ready
              </span>
              <span className="bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-sm">
                🏆 Microsoft Partner
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Compliance-Ready<br/>
              <span className="text-yellow-400">AI Agents</span><br/>
              in 30 Dagen
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              AgentBoss levert veilige, AI Act-compliant autonome agents met gegarandeerde ROI. 
              <strong className="text-white">De vertrouwde partner</strong> voor enterprise agentic AI in Europa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={handleAssessmentClick}
                className="bg-white text-blue-600 hover:bg-white/90 font-semibold py-3 px-6 rounded-lg cursor-pointer">
                Gratis AI Readiness Check →
              </button>
              <button 
                onClick={() => alert('📥 AgentBoss Index 2025\n\nBinnenkort beschikbaar:\n• Marktonderzoek agentic AI\n• Compliance guidelines\n• ROI calculaties\n\nContact: info@agentboss.nl')}
                className="border border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg cursor-pointer">
                📥 Download AgentBoss Index 2025
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
              <span>✅ Microsoft Azure AI Foundry Partner</span>
              <span>📈 €2.3M Bespaard voor Klanten</span>
              <span>⏱️ 98% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kies je Pad naar AI Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van gratis assessment tot enterprise scaling - elk service is ontworpen 
              voor snelle, veilige en compliant AI agent implementaties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg border-2 hover:border-blue-200 p-6 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">🎯</span>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Most Popular</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Readiness Assessment</h3>
              <div className="flex items-baseline space-x-2 mb-3">
                <span className="text-2xl font-bold text-blue-600">GRATIS</span>
                <span className="text-sm text-gray-500">| 2 minuten</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Automated online assessment tool met AI maturity scoring + compliance readiness (AI Act/NIS2)
              </p>
              <button 
                onClick={handleAssessmentClick}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 cursor-pointer">
                Start Nu - Gratis →
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg border-2 hover:border-blue-200 p-6 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">📊</span>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">High Conversion</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Agent Roadmap</h3>
              <div className="flex items-baseline space-x-2 mb-3">
                <span className="text-2xl font-bold text-blue-600">€8K</span>
                <span className="text-sm text-gray-500">| 1 week</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Executive workshop met AI + compliance experts voor gedetailleerde roadmap ontwikkeling
              </p>
              <button 
                onClick={handleWorkshopClick}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 cursor-pointer">
                Boek Workshop →
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg border-2 hover:border-blue-200 p-6 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">🚀</span>
                </div>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Guaranteed ROI</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">30 Days to First Value</h3>
              <div className="flex items-baseline space-x-2 mb-3">
                <span className="text-2xl font-bold text-blue-600">€65K</span>
                <span className="text-sm text-gray-500">| Geld terug garantie</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Compliance-ready implementatie van één specifieke use case met gegarandeerde ROI
              </p>
              <button 
                onClick={handlePilotClick}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 cursor-pointer">
                Start Pilot →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold">AgentBoss</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              De vertrouwde partner voor compliance-ready agentic AI implementaties in Europa.
            </p>
            <div className="flex justify-center space-x-2 mb-8">
              <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs">✅ AI Act Ready</span>
              <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs">🛡️ NIS2 Compliant</span>
            </div>
            <div className="text-center text-sm text-gray-400">
              <p>&copy; 2025 AgentBoss B.V. Alle rechten voorbehouden.</p>
              <div className="mt-4">
                <span>Microsoft Azure AI Foundry Partner • ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
