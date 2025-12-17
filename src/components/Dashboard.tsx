

const MetricCard = ({ title, value, subtext }: { title: string, value: string, subtext: string }) => (
    <div className="glass-panel p-6 hover:border-white/20 transition-colors">
        <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
        <div className="text-3xl font-bold mt-2 text-white">{value}</div>
        <div className="text-xs text-neonBlue mt-1">{subtext}</div>
    </div>
)

export default function Dashboard() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard title="Total Requests" value="2.4M" subtext="+12% from last week" />
                <MetricCard title="Avg Latency" value="850ms" subtext="-5% improvement" />
                <MetricCard title="Est. Cost" value="$420.50" subtext="Under budget" />
                <MetricCard title="User Sentiment" value="Positive" subtext="89% satisfaction" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 glass-panel p-6 h-96 flex flex-col justify-center items-center">
                    <h3 className="text-gray-400 self-start mb-4">Real-time Traffic Volume</h3>
                    <div className="text-gray-600 animate-pulse">Chart Placeholder</div>
                </div>
                <div className="glass-panel p-6 h-96">
                    <h3 className="text-gray-400 mb-4">Recent Alerts</h3>
                    <ul className="space-y-3">
                        {[1, 2, 3].map(i => (
                            <li key={i} className="flex items-center gap-3 p-2 rounded hover:bg-white/5">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="text-sm">High Latency detected on Model B</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
