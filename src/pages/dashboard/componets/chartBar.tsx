import React from 'react'
import {
     ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
  } from '@/components'
  import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
  
  
  
  
  const chartData = [
    { month: "Janero", desktop: 186, mobile: 80 },
    { month: "Fevereiro", desktop: 305, mobile: 200 },
    { month: "Março", desktop: 237, mobile: 120 },
    { month: "Abril", desktop: 73, mobile: 190 },
    { month: "Maio", desktop: 209, mobile: 130 },
    { month: "Junho", desktop: 214, mobile: 140 },
  ]
  
  const chartConfig = {
    desktop: {
      label: "Doenças",
      color: "#2563eb",
    },
    mobile: {
      label: "Consultas",
      color: "#60a5fa",
    },
  } satisfies ChartConfig
function ChartBar() {
  return (
    <React.Fragment>
        <ChartContainer config={chartConfig} className="min-h-full w-full">
                  <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                  </BarChart>
                </ChartContainer>
    </React.Fragment>
  )
}

export  {ChartBar}