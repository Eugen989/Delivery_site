import React, { useState } from 'react';

const cities = {
    "Брянск": { x: -2, y: -4 },
    "Москва": { x: 3, y: 4 },
    "СПБ": { x: 0, y: 2 },
    "Минск": { x: 5, y: -1 },
    "Орёл": { x: 16, y: 4 },
    "Кыргистан": { x: 0, y: 7 },
    "Литва": { x: -5, y: -1 }
};

const calculateDistance = (cityA, cityB) => {
    const deltaX = cityA.x - cityB.x;
    const deltaY = cityA.y - cityB.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
};

const findShortestPath = (startCity, endCity) => {
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
};

const findLongestPath = (startCity, endCity) => {
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
};

const Map = () => {
    const [startCity, setStartCity] = useState('');
    const [endCity, setEndCity] = useState('');
    const [shortestPath, setShortestPath] = useState([]);
    const [longestPath, setLongestPath] = useState([]);

    const handleCityClick = (city) => {
        if (!startCity) {
            setStartCity(city);
        } else {
            setEndCity(city);
            const shortest = findShortestPath(startCity, endCity);
            const longest = findLongestPath(startCity, endCity);
            setShortestPath(shortest);
            setLongestPath(longest);
        }
    };

    return (
        <div>
            <canvas id="mapCanvas" width="800" height="600"></canvas>
            {Object.keys(cities).map((city) => (
                <div
                    key={city}
                    style={{
                        position: 'absolute',
                        left: (cities[city].x + 2) * 30,
                        top: (cities[city].y + 4) * 30,
                        backgroundColor: 'red',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        textAlign: 'center',
                        lineHeight: '20px',
                        color: 'black',
                        position: 'absolute'
                    }}
                    onClick={() => handleCityClick(city)}
                >
                    {city}
                </div>
            ))}
            {shortestPath.length > 0 && (
                <div>
                    <p>Kратчайший путь: {shortestPath.join(" -> ")}</p>
                </div>
            )}
            {longestPath.length > 0 && (
                <div>
                    <p>Длинный путь: {longestPath.join(" -> ")}</p>
                </div>
            )}
        </div>
    );
};

export default Map;