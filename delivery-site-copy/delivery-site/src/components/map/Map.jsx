import React, { useState, useEffect } from 'react';

const cities = {
    "Брянск": { x: 50, y: 150 },
    "Москва": { x: 300, y: 50 },
    "СПБ": { x: 250, y: 150 },
    "Минск": { x: 550, y: 200 },
    "Орёл": { x: 150, y: 300 },
    "Кыргистан": { x: 400, y: 300 },
    "Литва": { x: 300, y: 400 }
};

const warehouses = ['Брянск', 'Москва']; // Список городов со складами

const MapComponent = () => {
    const [routes, setRoutes] = useState({});
    const [citySelected, setCitySelected] = useState(false);
    function calculateDistance(cityA, cityB) {
        const deltaX = cityB.x - cityA.x;
        const deltaY = cityB.y - cityA.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }

    function findRoutes(startCity, endCity) {
        let adjustedStartCity = startCity;
        if (warehouses.includes(endCity)) {
            adjustedStartCity = findRandomCity([endCity]); // Начинаем маршруты из другого города, если выбран город-склад
        }

        const shortestRoute = [adjustedStartCity, endCity];
        const mediumRoute = ["Москва", findRandomCity(["Москва", adjustedStartCity]), adjustedStartCity, endCity];
        const longRoute = [adjustedStartCity, "Москва", findRandomCity([adjustedStartCity, "Москва"]), endCity];

        const startCityCoords = cities[startCity];
        const endCityCoords = cities[endCity];

        const shortRouteDistance = calculateDistance(startCityCoords, endCityCoords);
        const mediumRouteDistance = calculateDistance(cities["Москва"], startCityCoords) + calculateDistance(startCityCoords, endCityCoords);
        const longRouteDistance = calculateDistance(startCityCoords, cities["Москва"]) + calculateDistance(cities["Москва"], cities[endCity]) + calculateDistance(cities[endCity], startCityCoords);

        console.log(`Short route distance: ${shortRouteDistance}`);
        console.log(`Medium route distance: ${mediumRouteDistance}`);
        console.log(`Long route distance: ${longRouteDistance}`);

        return { shortestRoute, mediumRoute, longRoute };
    }

    function findRandomCity(excludeCities) {
        const availableCities = Object.keys(cities).filter(city => !excludeCities.includes(city));
        return availableCities[Math.floor(Math.random() * availableCities.length)];
    }

    function drawPath(path, color) {
        const canvas = document.getElementById('mapCanvas');
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;

        for (let i = 0; i < path.length; i++) {
            const city = cities[path[i]];
            if (i === 0) {
                ctx.moveTo(city.x, city.y);
            } else {
                ctx.lineTo(city.x, city.y);
            }
        }
        ctx.stroke();
    }

    function handleClick(event) {
        if (citySelected) {
            return; // Если уже выбран город, игнорируем дополнительные нажатия
        }

        const rect = event.target.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        for (const city in cities) {
            const { x, y } = cities[city];
            if (Math.abs(clickX - x) <= 10 && Math.abs(clickY - y) <= 10) {
                const { shortestRoute, mediumRoute, longRoute } = findRoutes('Брянск', city);
                setRoutes({ shortest: shortestRoute, medium: mediumRoute, long: longRoute });
                drawPath(longRoute, 'rgba(255, 0, 35, 0.37)');
                drawPath(mediumRoute, 'rgba(41, 0, 255, 0.37)');
                drawPath(shortestRoute, 'rgba(255, 217, 0, 0.62)');

                setCitySelected(true); // Устанавливаем флаг выбора города
            }
        }
    }

    useEffect(() => {
        const canvas = document.getElementById('mapCanvas');
        const ctx = canvas.getContext('2d');

        // Draw cities with some padding
        for (const city in cities) {
            const { x, y } = cities[city];
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillText(city, x + 10, y - 10);
        }

        canvas.addEventListener('click', handleClick);

        return () => {
            canvas.removeEventListener('click', handleClick);
        };
    }, [citySelected]);


    return (
        <>
            <canvas id="mapCanvas" width="600" height="500"></canvas>
            <div>
                <h3>Routes:</h3>
                <p>Shortest Route: {routes.shortest && routes.shortest.join(' -> ')}</p>
                <p>Medium Route: {routes.medium && routes.medium.join(' -> ')}</p>
                <p>Long Route: {routes.long && routes.long.join(' -> ')}</p>
            </div>
        </>
    );
};

export default MapComponent;