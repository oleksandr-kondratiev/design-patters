"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

class ThirdPartyChartData {
  generateBarData(data: number[]) {
    return data.map((value, index) => ({
      name: `Data ${index + 1}`,
      value: value,
    }));
  }

  generatePieData(segments: number[]) {
    return segments.map((value, index) => ({
      name: `Segment ${index + 1}`,
      value: value,
    }));
  }
}

interface ChartRenderer {
  renderBarChart(data: number[], color: string): JSX.Element;
  renderPieChart(data: number[], backgroundColor: string): JSX.Element;
}

class ChartRendererAdapter implements ChartRenderer {
  private thirdPartyChart: ThirdPartyChartData;

  constructor() {
    this.thirdPartyChart = new ThirdPartyChartData();
  }

  renderBarChart(data: number[], color: string): JSX.Element {
    const chartData = this.thirdPartyChart.generateBarData(data);

    return (
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <Tooltip />
          <Bar dataKey="value" fill={color} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  renderPieChart(data: number[], backgroundColor: string): JSX.Element {
    const chartData = this.thirdPartyChart.generatePieData(data);

    return (
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Tooltip />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            fill={backgroundColor}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export const Adapter = () => {
  const chartData = [30, 45, 25, 60, 40];
  const chartRenderer = new ChartRendererAdapter();

  return (
    <div className="w-full space-y-4">
      <Card className="p-4">
        <h3 className="mb-4 text-sm font-medium">Bar Chart</h3>
        {chartRenderer.renderBarChart(chartData, "#2563eb")}
      </Card>
      <Card className="p-4">
        <h3 className="mb-4 text-sm font-medium">Pie Chart</h3>
        {chartRenderer.renderPieChart(chartData, "#2563eb")}
      </Card>
    </div>
  );
};
