
interface KeywordCloudProps {
  keywords: Array<{ text: string; count: number }>;
}

const KeywordCloud = ({ keywords }: KeywordCloudProps) => {
  const maxCount = Math.max(...keywords.map(k => k.count));
  
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">Top Keywords</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {keywords.map(({ text, count }) => {
          const size = Math.max(1, Math.min(2, count / maxCount + 0.8));
          return (
            <span
              key={text}
              className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full"
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
