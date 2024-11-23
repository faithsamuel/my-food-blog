import React from 'react';
import { Check, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const DietaryPreferences = () => {
  const dietaryCategories = [
    {
      title: 'Diet Types',
      preferences: [
        { id: 'vegetarian', label: 'Vegetarian', description: 'No meat products' },
        { id: 'vegan', label: 'Vegan', description: 'No animal products' },
        { id: 'pescatarian', label: 'Pescatarian', description: 'Fish but no meat' },
        { id: 'keto', label: 'Keto', description: 'Low-carb, high-fat' }
      ]
    },
    // {
    //   title: 'Allergies & Restrictions',
    //   preferences: [
    //     { id: 'gluten', label: 'Gluten-Free', description: 'No wheat products' },
    //     { id: 'dairy', label: 'Dairy-Free', description: 'No milk products' },
    //     { id: 'nuts', label: 'Nut-Free', description: 'No tree nuts or peanuts' },
    //     { id: 'shellfish', label: 'Shellfish-Free', description: 'No shellfish' }
    //   ]
    // }
  ];

  const ingredients = [
    'Eggs', 'Milk', 'Peanuts', 'Tree Nuts', 'Soy', 'Wheat', 'Fish', 'Shellfish'
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Dietary Preferences</h1>
        <p className="text-gray-600">
          Customize your dietary preferences to receive personalized recipe recommendations
        </p>
      </div>

      <div className="space-y-6">
        {dietaryCategories.map((category) => (
          <Card key={category.title}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {category.preferences.map((pref) => (
                <div key={pref.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{pref.label}</p>
                    <p className="text-sm text-gray-500">{pref.description}</p>
                  </div>
                  <Switch />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle>Ingredients to Avoid</CardTitle>
            <CardDescription>
              Select ingredients you want to exclude from your recipes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {ingredients.map((ingredient) => (
                <button
                  key={ingredient}
                  className="flex items-center justify-between p-3 rounded border hover:bg-gray-50"
                >
                  <span>{ingredient}</span>
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              ))}
            </div>
            {/* Input form */}
            <div className="flex w-full max-w-sm items-center space-x-2 pt-4">
                <Input type="email" placeholder="Enter other ingredients to avoid" />
                <Button type="submit">Add</Button>
           </div>
          </CardContent>
          
        </Card>
      </div>
    </div>
  );
};

export default DietaryPreferences;