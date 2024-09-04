"use client";

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { StoryblokCMS } from '@/utils/cms';

//Uses config set global components for the layout
export default function Layout({ children }) {
    const [navigation, setNavigation] = useState([]);

    useEffect(() => {
        // Hämta navigationsdata från Storyblok
        const fetchNavigation = async () => {
            try {
                const config = await StoryblokCMS.getConfig();
                const navItems = config.content.navigation;
                setNavigation(navItems);
            } catch (error) {
                console.error('Error fetching navigation data:', error);
            }
        };

        fetchNavigation();
    }, []);

    //Create at least a header and footer component
    //Use console.log to determine blok object structure if unsure...
    return (
        <>
            <header>
                <Navbar navigation={navigation} />
            </header>
            <main className="px-4 md:px-8 lg:px-16">{children}</main>
            <footer></footer>
        </>
    );
}