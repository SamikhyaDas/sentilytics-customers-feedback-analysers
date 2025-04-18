
interface KeywordCloudProps {
  keywords: Array<{ text: string; count: number }>;
}

const KeywordCloud = ({ keywords }: KeywordCloudProps) => {
  const maxCount = Math.max(...keywords.map(k => k.count));
  
  const getGradientColor = (count: number) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-emerald-500 to-emerald-600',
      'from-violet-500 to-violet-600',
      'from-pink-500 to-pink-600',
      'from-amber-500 to-amber-600'
    ];
    return colors[count % colors.length];
  };
  
  return (
    <div className="p-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Popular Keywords</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {keywords.map(({ text, count }) => {
          const size = Math.max(1, Math.min(2, count / maxCount + 0.8));
          
          return (
            <span
              key={text}
              className={`inline-block px-3 py-1.5 rounded-full transition-all hover:scale-105 bg-gradient-to-br ${getGradientColor(count)} text-white shadow-sm`}
              style={{
                fontSize: `${size}rem`,
                opacity: 0.6 + (count / maxCount) * 0.4,
              }}
            >
              {text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default KeywordCloud;
