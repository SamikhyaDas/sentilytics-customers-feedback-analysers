
import { ThumbsUp, Minus, ThumbsDown } from 'lucide-react';

interface SentimentDisplayProps {
  sentiment: 'positive' | 'neutral' | 'negative';
}

const SentimentDisplay = ({ sentiment }: SentimentDisplayProps) => {
  const sentimentConfig = {
    positive: {
      icon: ThumbsUp,
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100',
      label: 'Positive',
    },
    neutral: {
      icon: Minus,
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      label: 'Neutral',
    },
    negative: {
      icon: ThumbsDown,
      gradient: 'from-rose-500 to-rose-600',
      bgGradient: 'from-rose-50 to-rose-100',
      label: 'Negative',
    },
  };

  const config = sentimentConfig[sentiment];
  const Icon = config.icon;

  return (
    <div className="text-center p-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Sentiment Analysis</h3>
      <div className={`inline-flex items-center justify-center p-8 rounded-full bg-gradient-to-br ${config.bgGradient} transition-transform hover:scale-105`}>
        <div className={`bg-gradient-to-br ${config.gradient} p-4 rounded-full`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      <p className={`mt-4 font-medium bg-gradient-to-br ${config.gradient} bg-clip-text text-transparent`}>
        {config.label}
      </p>
    </div>
  );
};

export default SentimentDisplay;
