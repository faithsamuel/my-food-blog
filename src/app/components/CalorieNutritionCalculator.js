"use client";
import React from 'react'
import { Line } from '@ant-design/plots';

export default function CalorieNutritionCalculator() {
    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
      ];
      const config = {
        data,
        xField: 'year',
        yField: 'value',
        point: {
          shapeField: 'square',
          sizeField: 4,
        },
        interaction: {
          tooltip: {
            marker: false,
          },
        },
        style: {
          lineWidth: 2,
        },
      };

  return (
    <div className='p-12'>
        <h1 className="text-2xl font-bold text-gray-900 mb-4 ">
                🔥 Daily Calorie Intake
            </h1>

            {/* Chart Card */}

            <div>
             <Line {...config} />

                <div>
                    <p>Daily Calories:2100 / 2200 </p>
                    <p>⚠️ Increase Calorie Intake</p>
                </div>
            </div>
      
    </div>
  )
}
