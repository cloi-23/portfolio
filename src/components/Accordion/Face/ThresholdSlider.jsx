export default function ThresholdSlider({ threshold, setThreshold }) {
  return (
    <div className="px-6">
      <label>
        Threshold: {threshold.toFixed(2)}
        <input
          type="range"
          min="0.3"
          max="0.6"
          step="0.01"
          value={threshold}
          onChange={(e) => setThreshold(parseFloat(e.target.value))}
          style={{ marginLeft: "10px" }}
        />
      </label>
    </div>
  );
}
