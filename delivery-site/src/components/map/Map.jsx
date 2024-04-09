import React, { useState, useEffect } from 'react';

const cities = {
    "Брянск": { x: -2, y: -4 },
    "Москва": { x: 3, y: 4 },
    "СПБ": { x: 0, y: 2 },
    "Минск": { x: 5, y: -1 },
    "Орёл": { x: 16, y: 4 },
    "Кыргистан": { x: 0, y: 7 },
    "Литва": { x: -5, y: -1 }
};

const MapComponent = () => {
    const [startCity, setStartCity] = useState('');
    const [endCity, setEndCity] = useState('');
    let minX, maxX, minY, maxY, scaleX, scaleY;

    useEffect(() => {
        const canvas = document.getElementById('mapCanvas');
        const ctx = canvas.getContext('2d');
        const padding = 10;

        minX = Infinity;
        maxX = -Infinity;
        minY = Infinity;
        maxY = -Infinity;

        for (const city in cities) {
            minX = Math.min(minX, cities[city].x);
            maxX = Math.max(maxX, cities[city].x);
            minY = Math.min(minY, cities[city].y);
            maxY = Math.max(maxY, cities[city].y);
        }

        minX -= padding;
        maxX += padding;
        minY -= padding;
        maxY += padding;

        scaleX = 760 / (maxX - minX);
        scaleY = 560 / (maxY - minY);

        ctx.beginPath();
        ctx.moveTo((0 - minX) * scaleX, 0);
        ctx.lineTo((0 - minX) * scaleX, 600);
        ctx.moveTo(0, (0 - minY) * scaleY);
        ctx.lineTo(800, (0 - minY) * scaleY);
        ctx.stroke();

        for (const city in cities) {
            const x = (cities[city].x - minX) * scaleX;
            const y = (cities[city].y - minY) * scaleY;

            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = 'black';
            ctx.fillText(city, x + 12, y - 10);
        }

        const handleClick = (event) => {
            const rect = canvas.getBoundingClientRect();
            const clickX = event.clientX - rect.left;
            const clickY = event.clientY - rect.top;

            for (const city in cities) {
                const x = (cities[city].x - minX) * scaleX;
                const y = (cities[city].y - minY) * scaleY;

                if (clickX >= x - 10 && clickX <= x + 10 && clickY >= y - 10 && clickY <= y + 10) {
                    if (startCity === '') {
                        setStartCity(city);
                    } else if (endCity === '') {
                        if (city !== startCity) {
                            setEndCity(city);
                        }
                    }
                }
            }
        };

        canvas.addEventListener('click', handleClick);

        return () => {
            canvas.removeEventListener('click', handleClick);
        };

    }, []);

    function calculateDistance(cityA, cityB) {
        const deltaX = cityA.x - cityB.x;
        const deltaY = cityA.y - cityB.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }


    function findShortestPath(startCity, endCity) {
        const distances = {};
        const previousCities = {};
        const visitedCities = [];
        let currentCity = startCity;

        for (const city in cities) {
            distances[city] = city === startCity ? 0 : Infinity;
        }

        while (currentCity !== endCity) {
            visitedCities.push(currentCity);

            for (const neighbor in cities) {
                if (neighbor !== currentCity && !visitedCities.includes(neighbor)) {
                    const distance = calculateDistance(cities[currentCity], cities[neighbor]);
                    if (distances[currentCity] + distance < distances[neighbor]) {
                        distances[neighbor] = distances[currentCity] + distance;
                        previousCities[neighbor] = currentCity;
                    }
                }
            }

            let nextCity = null;
            let shortestDistance = Infinity;
            for (const city in distances) {
                if (!visitedCities.includes(city) && distances[city] < shortestDistance) {
                    nextCity = city;
                    shortestDistance = distances[city];
                }
            }

            if (!nextCity) {
                break;
            }

            currentCity = nextCity;
        }

        const shortestPath = [endCity];
        let prevCity = endCity;
        while (prevCity !== startCity) {
            prevCity = previousCities[prevCity];
            shortestPath.unshift(prevCity);
        }

        return shortestPath;
    }

    function findLongestPath(startCity, endCity) {
        const distances = {};
        const previousCities = {};
        const visitedCities = [];
        let currentCity = startCity;

        for (const city in cities) {
            distances[city] = city === startCity ? 0 : -Infinity;
        }

        while (currentCity !== endCity) {
            visitedCities.push(currentCity);

            for (const neighbor in cities) {
                if (neighbor !== currentCity && !visitedCities.includes(neighbor)) {
                    const distance = calculateDistance(cities[currentCity], cities[neighbor]);
                    if (distances[currentCity] + distance > distances[neighbor]) {
                        distances[neighbor] = distances[currentCity] + distance;
                        previousCities[neighbor] = currentCity;
                    }
                }
            }

            let nextCity = null;
            let longestDistance = -Infinity;
            for (const city in distances) {
                if (!visitedCities.includes(city) && distances[city] > longestDistance) {
                    nextCity = city;
                    longestDistance = distances[city];
                }
            }

            if (!nextCity) {
                break;
            }

            currentCity = nextCity;
        }

        const longestPath = [endCity];
        let prevCity = endCity;
        while (prevCity !== startCity) {
            prevCity = previousCities[prevCity];
            longestPath.unshift(prevCity);
        }

        return longestPath;
    }

    function handleClick(event) {
        const rect = event.target.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        for (const city in cities) {
            const x = (cities[city].x - minX) * scaleX;
            const y = (cities[city].y - minY) * scaleY;

            if (clickX >= x - 10 && clickX <= x + 10 && clickY >= y - 10 && clickY <= y + 10) {
                if (startCity === '') {
                    setStartCity(city);
                } else {
                    setEndCity(city);
                }
            }
        }
    }

    function drawPath(path, color) {
        const canvas = document.getElementById('mapCanvas');
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo((cities[path[0]].x - minX) * scaleX, (cities[path[0]].y - minY) * scaleY);
        ctx.strokeStyle = color;

        for (let i = 1; i < path.length; i++) {
            const city = cities[path[i]];
            ctx.lineTo((city.x - minX) * scaleX, (city.y - minY) * scaleY);
        }

        ctx.lineWidth = 3;
        ctx.stroke();
    }

    useEffect(() => {
        if (startCity !== '' && endCity !== '') {
            const shortestPath = findShortestPath(startCity, endCity);
            const longPath = findLongestPath(startCity, endCity);
            drawPath(shortestPath, 'red');
            drawPath(longPath, 'blue');
        }
    }, [startCity, endCity]);

    return <canvas id="mapCanvas" width="800" height="600"></canvas>;
};

export default MapComponent;