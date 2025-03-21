// src/app/menu/
'use client'

import { useState } from 'react';
import Hero from '@/components/Hero'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'

// Define types for the menu items
type MenuCategory = 'Starters' | 'Main' | 'Vegetarian' | 'Sides' | 'Lunch' | 'Set Menu' | 'Drinks' | 'Desserts' | 'Takeaway';
type MenuItem = { title: string; description: string; };
type MenuItems = Record<MenuCategory, MenuItem[]>;

// Define the menu items for each category
const menuItems: MenuItems = {
    Starters: [
        { title: 'Starter Item 1', description: 'Description for starter item 1' },
        { title: 'Starter Item 2', description: 'Description for starter item 2' },
    ],
    Main: [
        { title: 'Main Item 1', description: 'Description for main item 1' },
        { title: 'Main Item 2', description: 'Description for main item 2' },
    ],
    Vegetarian: [
        { title: 'Vegetarian Item 1', description: 'Description for vegetarian item 1' },
        { title: 'Vegetarian Item 2', description: 'Description for vegetarian item 2' },
    ],
    Sides: [
        { title: 'Sides Item 1', description: 'Description for sides item 1' },
        { title: 'Sides Item 2', description: 'Description for sides item 2' },
    ],
    Lunch: [
        { title: 'Lunch Item 1', description: 'Description for Lunch item 1' },
        { title: 'Lunch Item 2', description: 'Description for Lunch item 2' },
    ],
    'Set Menu': [
        { title: 'Set Menu Item 1', description: 'Description for set menu item 1' },
        { title: 'Set Menu Item 2', description: 'Description for set menu item 2' },
    ],
    Drinks: [
        { title: 'Drink Item 1', description: 'Description for drink item 1' },
        { title: 'Drink Item 2', description: 'Description for drink item 2' },
    ],
    Desserts: [
        { title: 'Dessert Item 1', description: 'Description for dessert item 1' },
        { title: 'Dessert Item 2', description: 'Description for dessert item 2' },
    ],
    Takeaway: [
        { title: 'Takeaway Item 1', description: 'Description for takeaway item 1' },
        { title: 'Takeaway Item 2', description: 'Description for takeaway item 2' },
    ]
}

export default function MenuPage() {
    const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('Starters')

    return (
        <div>
            <main className='bg-black h-screen text-white'>
                <Hero />

                <div className='flex flex-row items-center justify-center w-full text-center text-4xl mb-8'>
                    <h1> Menu </h1>
                </div>

                {/**  */}

                {/* Category selection section */}
                <div className='flex flex-row items-center justify-center w-full text-center text-2xl mb-8'>
                    <div className='flex flex-wrap justify-center gap-10'>
                        {/* Map through the menu categories and create a link for each */}
                        {Object.keys(menuItems).map(category => (
                            <Link key={category} href="#" className='m-2 hover:bg-[#831843] p-2 rounded-lg' onClick={() => setSelectedCategory(category as MenuCategory)}>
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Menu items display section */}
                <div className='grid grid-cols-2 gap-4 w-[80%] items-center justify-center mx-auto'>
                    {/* Map through the selected category's items and display each */}
                    {menuItems[selectedCategory].map((item, index) => (
                        <div key={index} className='bg-[#1F2937] rounded-lg p-4 transform transition-transform duration-300 hover:scale-105'>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </main>
            <Footer />
        </div>
    )
}
