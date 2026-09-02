import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { seasonData } from "../../data/hotelData.js";
import { useLanguage } from "../../context/useLanguage.js";

function SeasonChart() {
  const { t } = useLanguage();

  return (
    <div className="report-card">
      <div className="report-card-header">
        <h2>{t("season")}</h2>
      </div>

      <div className="report-chart">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={seasonData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />

            <Tooltip
              formatter={(value) => `${value}%`}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="occupancy"
              name={t("occupancy")}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SeasonChart;