# Pokémon Type Distribution Visualizer

## Overview

The **Pokémon Type Distribution Visualizer** is a React application that fetches data from the PokéAPI to visualize the distribution of Pokémon types for the first 151 Pokémon (Generation 1). This application presents the distribution in a bar chart, allowing users to easily see which types are most common. The project includes features such as data fetching, transformation, charting, loading states, error handling, and more.

## Demo

- [Netlify](https://pokemon-types-chart.netlify.app/)
- [Cloudflare](https://pokemon-type-chart.pages.dev/)

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Running the Project](#running-the-project)
5. [File Structure](#file-structure)
6. [Approach and Solution](#approach-and-solution)
   - [Data Fetching](#data-fetching)
   - [Data Transformation](#data-transformation)
   - [Charting](#charting)
   - [Styling](#styling)
   - [Additional Features](#additional-features)
7. [Bonus Features](#bonus-features)
8. [Challenges Faced](#challenges-faced)
9. [Future Improvements](#future-improvements)
10. [License](#license)

---

## Features

- Fetches Pokémon data for the first 151 Pokémon from the PokéAPI.
- Transforms the data to calculate the count of Pokémon for each type.
- Displays a bar chart of Pokémon type distribution using a charting library.
- Supports a toggle to display type counts or percentages.
- Responsive design for a seamless experience across different screen sizes.
- Implements a loading state while fetching data and error handling in case of API failures.
- Light and Dark mode functionality

---

## Technologies Used

- **[React.js](https://react.dev/)**: JavaScript library for building user interfaces.
- **[Recharts](https://recharts.org/en-US/)**: Charting library for data visualization.
- **CSS / [Material UI (MUI)](https://mui.com/)**: For styling the UI and ensuring responsiveness.
- **[PokéAPI](https://pokeapi.co/)**: The source of Pokémon data.
- **[TypeScript](https://www.typescriptlang.org/)**: For typechecking, application logic and data transformation.
- **[Axios](https://axios-http.com/docs/intro)**: To make API call.
- **[Framer](https://www.framer.com/motion/)**: React Animation Library.
- **[Vite](https://vitejs.dev/)**: Tool for Installing Frontend Frameworks and libraries.
- **[ESLint](https://eslint.org/)**: To find bugs early and enforce best practices.

---

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```javascript
   git clone https://github.com/EBEREGIT/pokemon-type-chart

   cd pokemon-type-chart
   ```

2. Install dependencies:

   ```javascript
   npm install
   ```

3. Create an `.env` file in the root directory if you want to add any environment variables. However, no specific environment variables are required for this project.

---

## Running the Project

To start the development server, use the following command:

```javascript
npm run dev
```

This will run the app in development mode. Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

The page will reload if you make edits, and you will also see any lint errors in the console.

To create a production build:

```javascript
npm run build
```

---

## File Structure

```javascript

├── src
│   ├── constants
│   │   └── index.ts
│   ├── assets
│   │   └── types.ts
│   ├── hooks
│   │   ├── useGetPokemonSingleVsDualTypes.tsx
│   │   └── useGetPokemonTypes.tsx
│   ├── pages
│   │   ├── home
│   │   │   ├── Reports
│   │   │   ├── SearchResults
│   │   │   ├── sectionHeading
│   │   │   ├── heading.tsx
│   │   │   └── index.ts
│   │   └── NotFound
│   ├── stateManager
│   │   ├── General.tsx
│   │   ├── Pokemon.tsx
│   │   ├── Theme.tsx
│   │   └── variable.tsx
│   ├── components
│   │   ├── Buttons
│   │   ├── Feedback
│   │   ├── Footer
│   │   ├── General
│   │   ├── Grid
│   │   └── nav
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── utils
│   │   └── helpers.ts
│   └── styles.css
├── package.json
└── README.md
```

---

## Approach and Solution

### Data Fetching

I used the PokéAPI to fetch the first 151 Pokémon. Since each Pokémon’s types are in their individual detail objects, multiple API requests were required. I handled this efficiently using `Promise.all` to fetch the details for all Pokémon in parallel.

```javascript
  const getPokemons = async () => {
    setIsLoading(true);

    try {
      // get all pokemons
      const response = await axios.get(`${BaseUrl}?limit=151`);

      // get details for each pokemon
      const output = await Promise.all(
        response?.data?.results?.map((element: BasicPokemon) => {
          return axios.get(element?.url);
        })
      );

      // setup pokemons
      for (const pokemon of output) {
        setPokemons((previousState) => [...previousState, pokemon.data]);
      }

      setIsSuccessful(true);
    } catch (error: unknown) {
      setIsError(true);
      throw new Error(error as string);
    } finally {
      reset();
    }
  };
```

### Data Transformation

The Pokémon data was transformed to count how many Pokémon belonged to each type. If a Pokémon had multiple types, I incremented the count for each type. This logic was put in a hook to keep the code modular. The hook also called other utility functions defined in the `helpers.ts` file to help separate concerns.

```javascript
import { useContext, useMemo } from "react";
import { Variable } from "../stateManager/variable";
import {
  getPokemonTypesCount,
  setupPokemonTypes,
  sortPokemonObject,
} from "../utils/helpers";

export default function useGetSortedPokemonTypes() {
  const { pokemons } = useContext(Variable);

  const pokemonMap: Record<string, number> = getPokemonTypesCount(pokemons);

  const pokemonMapEntries: Array<[string, number]> =
    sortPokemonObject(pokemonMap);

  const sortedPokemonTypes = useMemo(
    () => setupPokemonTypes(pokemonMapEntries),
    [pokemonMapEntries]
  );

  return sortedPokemonTypes;
}
```

### Charting

I used **Recharts** to create the bar chart. The chart data was sorted in descending order of Pokémon count. The chart also supports a toggle to switch between displaying raw counts and percentages. It was designed for reusability.

```javascript
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SortedPokemon } from "../../../../assets/types";
import Heading from "../../heading";
import Layout from "../../../../components/General/Layout";
import { useContext } from "react";
import { Variable } from "../../../../stateManager/variable";
import { ThemeManager } from "../../../../stateManager/Theme";

export default function BarChartComponent(props: {
  data: SortedPokemon[],
  label: string,
}) {
  const { data, label } = props;
  const { showPercentage } = useContext(Variable);
  const { theme, mode } = useContext(ThemeManager);

  return (
    <Layout
      content={
        <>
          {/* chart title */}
          <Heading
            label={label}
            typographyStyles={{ fontWeight: 500 }}
            variant="body1"
            styles={{ mb: 2 }}
          />

          {/* chart body */}
          <ResponsiveContainer width={"100%"} height={400}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />

              {/* display each bar cel with its unique color */}
              <Bar dataKey={showPercentage ? "percentage" : "count"}>
                {data.map((entry) => (
                  <Cell
                    cursor="pointer"
                    fill={entry.color}
                    stroke={
                      mode
                        ? theme.palette.primary.dark
                        : theme.palette.secondary.light
                    }
                    key={`cell-${entry}`}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </>
      }
    />
  );
}
```

### Styling

CSS and **Material UI (MUI)** were used to style the app, ensuring a visually appealing and responsive layout. Unique colors were also auto generated and assigned to each Pokémon type to make the chart more engaging.

```javascript
export const generateRandomColors = (num: number) => {
  const colors: string[] = [];

  // loop until colors are equal to the num
  while (colors.length < num) {
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    if (!colors.includes(newColor)) {
      colors.push(newColor);
    }
  }

  return [...new Set(colors)];
};
```

### Additional Features

- **Loading Spinner**: A spinner is displayed while data is being fetched.
- **Error Handling**: If the API call fails, a user-friendly error message is shown.
- **Count vs. Percentage Toggle**: Users can switch between seeing raw counts or percentages for each type.
- **Mode Switch**: Added a button that is used to switch the UI between `light` and `dark` mode. By default, it takes the user's system setting.

---

## Bonus Features

- **Single-type vs Dual-type Chart**: I implemented a second chart showing the distribution of single-type and dual-type Pokémon. Here is the data transformation hook:

```javascript
import { useContext, useMemo } from "react";
import { Variable } from "../stateManager/variable";
import {
  getPokemonSingleVsDualTypesCount,
  setupPokemonTypes,
  sortPokemonObject,
} from "../utils/helpers";

export default function useGetPokemonSingleVsDualTypes() {
  const { pokemons } = useContext(Variable);

  const pokemonMap: Record<string, number> =
    getPokemonSingleVsDualTypesCount(pokemons);

  const pokemonMapEntries: Array<[string, number]> =
    sortPokemonObject(pokemonMap);

  const sortedPokemonSingleVsDualTypes = useMemo(
    () => setupPokemonTypes(pokemonMapEntries),
    [pokemonMapEntries]
  );

  return sortedPokemonSingleVsDualTypes;
}
```

The code above calls other utility functions in the `helpers.ts` file.

- **Search Functionality**: i added a search bar that allows users to filter Pokémon by name. The following code is the search algorithm:

```javascript
const searchItems = () => {
  if (!search) return setSearchResult([]);

  if (!pokemons?.length) {
    setSearch("");
    return alert("No items to search");
  }

  setSearchResult([]);

  const results = pokemons.filter((pokemon) =>
    pokemon.name
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(search.toLowerCase().replace(/\s+/g, ""))
  );

  setSearchResult(results);
};
```

---

## Challenges Faced

- **API Rate Limits**: The PokéAPI has rate limits and I needed to retrieve data for 151 pokemons. To solve this problem, I optimized API calls using `Promise.all` and handled possible errors gracefully. This saved time of execution and avoided possible timeout.
- **Data Transformation**: Handling Pokémon with multiple types while ensuring accurate counting for each type was a challenge but I overcame it using data structures.
- **Design Challenges**: Coming up with the right design, font, and color was another challenge. To solve this, I sketch out wireframes or mockups using tools like Figma and sketch pad before diving into implementation. It helped clarify my vision and identify potential issues early. I also reviewed existing design systems and UI kits to provide inspiration and guidance.
- **Deprecation of MUI Components**: Since it was the first time using MUI v6, I noticed that some component has been deprecated or will soon be. So I checked the MUI migration guide and documentation for updates and recommended replacements. I also checked community forums and GitHub issues related to what I was facing.
- **Recharts X-axis and Y-axis Issues**: The chart component was throwing error in the console relating to the both axis. So I consulted the library’s documentation and examples. Finally, I checked community forums and GitHub issues related to what I was facing.

---

## Future Improvements

- Implement unit tests for the data transformation logic using **Jest**.
- Add animations to the chart for a more dynamic user experience.
- Improve accessibility by adding ARIA labels and screen reader support.

---

## License

This project is licensed under the MIT License.
