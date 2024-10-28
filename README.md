# Ust-Kamenogorsk Street Renaming Visualisation

This project visualizes the semantic aspects of street renaming in Ust-Kamenogorsk, Kazakhstan. Leveraging geospatial technologies and data analysis, the visualization explores the impact of cultural and political changes, specifically focusing on *De-communization* and *Kazakhtization* processes that influenced recent street name changes in the city.

## Project Overview

This project seeks to provide insights into the historical and cultural factors behind street renamings in Ust-Kamenogorsk. The interactive visualization offers:
- A color-coded map to indicate the reasons for renaming, such as *De-communization* (removal of Soviet symbols) and *Kazakhtization* (aligning names with Kazakh culture).
- An informative timeline of renamings for future expansion.

## Features

- **Data Source**: Uses data from the State Archive of East Kazakhstan Region and other online sources to create a dataset of street renamings (2019–2023).
- **Interactive Map**: Built with Leaflet and D3.js, allowing users to hover over streets for name details.
- **Semantic Analysis**: Each renaming is annotated with semantic tags to indicate motivations behind the name change.
- **Legend and Timeline**: A visual legend provides context on the reasons behind each renaming, while a timeline (planned) will allow users to explore changes by year.

## Technologies Used

- **OpenStreetMap**: Provides the base map data.
- **Leaflet**: JavaScript library for interactive maps, used to render the map and street layers.
- **D3.js**: Used to dynamically update and manipulate timeline elements on the web page.

## Dataset

The dataset consists of an XML document detailing 37 renaming events classified by year and reason. The key reasons for renaming include:
- *De-communization*: Removal of Soviet-influenced names.
- *Kazakhtization*: Renaming to align with local language and culture.

## Future Enhancements

- **Expanded Timeline**: A fully functional timeline to explore changes year by year.
- **Yearly Renaming Statistics**: The legend will dynamically update to show renaming reasons by year, with percentage indicators.
- **Enhanced Dataset**: Additional data from earlier years for a more comprehensive historical overview.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ust-kamenogorsk-renaming-visualisation.git
   cd ust-kamenogorsk-renaming-visualisation
   ```
2. Open `index.html` in your preferred web browser to view the visualization.

## References

- State Archive of East Kazakhstan Region: [link](http://e-arhiv.vko.gov.kz/ru/Page/Index/1696/uka)
- OpenStreetMap: [link](https://www.openstreetmap.org/#map=16/49.9503/82.6249)
- Leaflet Library: [link](https://leafletjs.com/)

