"use client";
import React from 'react'
import { Switch } from 'antd';
import { Button, Input, Select, Space } from 'antd';
const { Search } = Input;

export default function DietaryPreferences() {

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className='p-12'>
       <h1 className="text-2xl font-bold text-gray-900  ">
                Dietary Preferences 
            </h1>
            {/* body */}
            <h1 className='text-1xl font-bold text-gray-900 mt-4'>Diet Type</h1>
            <div className='flex items-center justify-between mt-4'>
              <div>
                <p className='font-medium'>Vegetarian</p>
                <p className='ext-sm text-gray-500'>No Meat products</p>
              </div>
              <Switch defaultChecked onChange={onChange} />
            </div>

            <div className='flex items-center justify-between mt-4'>
              <div>
                <p className='font-medium'>Vegan</p>
                <p className='ext-sm text-gray-500'>No Animal products</p>
              </div>
              <Switch defaultChecked onChange={onChange} />
            </div>

            <div className='flex items-center justify-between mt-4'>
              <div>
                <p className='font-medium'>Keto</p>
                <p className='ext-sm text-gray-500'>Low-carb,high fat</p>
              </div>
              <Switch defaultChecked onChange={onChange} />
            </div>

            <div className='flex items-center justify-between mt-4'>
              <div>
                <p className='font-medium'>Halal</p>
                <p className='ext-sm text-gray-500'>No pork</p>
              </div>
              <Switch defaultChecked onChange={onChange} />
            </div>


            {/* Titlt: Ingredients to Avoid */}
            <h1 className="text-2xl font-bold text-gray-900 mt-12 ">
            Ingredients to Avoid 
            </h1>
            <p className='ext-sm text-gray-500'>Select ingredients you want to exclude from your recipes</p>

            {/* Body: Ingredients to Avoid */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
              <button className='flex items-center justify-between p-3 rounded border hover:bg-gray-50 mt-4'>
                <span>Eggs</span>
                <span className='h-4 w-4 text-gray-400'>X</span>
              </button>

              <button className='flex items-center justify-between p-3 rounded border hover:bg-gray-50 mt-4'>
                <span>Eggs</span>
                <span className='h-4 w-4 text-gray-400'>X</span>
              </button>

              <button className='flex items-center justify-between p-3 rounded border hover:bg-gray-50 mt-4'>
                <span>Eggs</span>
                <span className='h-4 w-4 text-gray-400'>X</span>
              </button>

              <button className='flex items-center justify-between p-3 rounded border hover:bg-gray-50 mt-4'>
                <span>Eggs</span>
                <span className='h-4 w-4 text-gray-400'>X</span>
              </button>

              <button className='flex items-center justify-between p-3 rounded border hover:bg-gray-50 mt-4'>
                <span>Eggs</span>
                <span className='h-4 w-4 text-gray-400'>X</span>
              </button>

              <button className='flex items-center justify-between p-3 rounded border hover:bg-gray-50 mt-4'>
                <span>Eggs</span>
                <span className='h-4 w-4 text-gray-400'>X</span>
              </button>
            </div>

            {/* Input field */}

            <Space.Compact className='w-96 mt-4' >
             <Input defaultValue="Combine input and button" />
             <Button type="primary">Add Ingredients</Button>
           </Space.Compact>



    </div>
  )
}
