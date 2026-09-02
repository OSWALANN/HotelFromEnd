import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { profitsData } from "../../data/hotelData.js";

function ProfitsChart() {
  return (
    <div className="report-card">
      <div className="report-card-header">
        <h2>Profit distribution</h2>
      </div>

      <div className="profit-chart">
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={profitsData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label
            >
              {profitsData.map((entry, index) => (
                <Cell key={`cell-${index}`} />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ProfitsChart;