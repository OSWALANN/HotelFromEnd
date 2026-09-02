import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { investmentData } from "../../data/hotelData.js";
import { useLanguage } from "../../context/useLanguage.js";

function InvestmentChart() {
  const { t } = useLanguage();

  return (
    <div className="report-card">
      <div className="report-card-header">
        <h2>{t("investment")}</h2>
      </div>

      <div className="report-chart">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={investmentData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="payroll"
              name={t("payroll")}
            />

            <Bar
              dataKey="maintenance"
              name={t("maintenance")}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default InvestmentChart;