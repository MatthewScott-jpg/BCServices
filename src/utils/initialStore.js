/* sample data store*/
//things specific to each building: building name, size, quantity, rating, service date, status
const values = {
    current: "Maloney",
    buildings: [
        {
            name: "66",
            data:[
                    //name, size, quantity, rating, last date serviced, completed/functioning
                    {
                        name: "Filter Replacement",
                        size: "20x20x2", 
                        quantity: "66", 
                        rating: "3",
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Belt Replacement", 
                        size: "Bx56", 
                        quantity: "2", 
                        rating: "3", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Lubricate Motor/Bearings", 
                        size: "10", 
                        quantity: "90", 
                        rating: "6", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Clean Cooling/Heating Coils", 
                        size: "60", 
                        quantity: "15", 
                        rating: "5", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Clean Drain Pan/Drain Lines", 
                        size: "5x5x5", 
                        quantity: "10", 
                        rating: "1", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Flush Coils", 
                        size: "100x1", 
                        quantity: "4", 
                        rating: "10", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Heating/Cooling Valves", 
                        size: "50x2", 
                        quantity: "45", 
                        rating: "7", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Blower Assembly Service", 
                        size: "9x3", 
                        quantity: "20", 
                        rating: "2",
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Air Handler Console Service", 
                        size: "90x5", 
                        quantity: "45", 
                        rating: "9", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Electric Connections", 
                        size: "75x5x5", 
                        quantity: "5", 
                        rating: "6", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    }
                ]
        },
        {
            name: "90 St. Thomas More",
            data:
                [
                    {
                        name: "Filter Replacement", 
                        size: "10x10x2", 
                        quantity: "90", 
                        rating: "3", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "2021-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Belt Replacement", 
                        size: "Bx56", 
                        quantity: "2", 
                        rating: "3", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Lubricate Motor/Bearings", 
                        size: "10", 
                        quantity: "90", 
                        rating: "6", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Clean Cooling/Heating Coils", 
                        size: "60", 
                        quantity: "15", 
                        rating: "5", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Clean Drain Pan/Drain Lines", 
                        size: "5x5x5", 
                        quantity: "10", 
                        rating: "1", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Flush Coils", 
                        size: "100x1", 
                        quantity: "4", 
                        rating: "10", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Heating/Cooling Valves", 
                        size: "50x2", 
                        quantity: "45", 
                        rating: "7", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Blower Assembly Service", 
                        size: "9x3", 
                        quantity: "20", 
                        rating: "2", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Air Handler Console Service", 
                        size: "90x5", 
                        quantity: "45", 
                        rating: "9", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Electric Connections", 
                        size: "75x5x5", 
                        quantity: "5", 
                        rating: "6", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    }
                ]
        },
        {
            name: "2150",
            data:
                [
                    {
                        name: "Filter Replacement", 
                        size: "30x30x2", 
                        quantity: "2150", 
                        rating: "3", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Belt Replacement", 
                        size: "Bx56", 
                        quantity: "2", 
                        rating: "3", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Lubricate Motor/Bearings", 
                        size: "10", 
                        quantity: "90", 
                        rating: "6", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Clean Cooling/Heating Coils", 
                        size: "60", 
                        quantity: "15", 
                        rating: "5", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Clean Drain Pan/Drain Lines", 
                        size: "5x5x5", 
                        quantity: "10", 
                        rating: "1", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Flush Coils", 
                        size: "100x1", 
                        quantity: "4", 
                        rating: "10", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Heating/Cooling Valves", 
                        size: "50x2", 
                        quantity: "45", 
                        rating: "7", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Blower Assembly Service", 
                        size: "9x3", 
                        quantity: "20", 
                        rating: "2", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Air Handler Console Service", 
                        size: "90x5", 
                        quantity: "45", 
                        rating: "9", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Electric Connections", 
                        size: "75x5x5", 
                        quantity: "5", 
                        rating: "6", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    }
                ]
        },
        {
            name: "Gasson",
            data:
                [
                    {
                        name: "Filter Replacement", 
                        size: "40x40x2", 
                        quantity: "Gas", 
                        rating: "3", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false},
                    {
                        name: "Belt Replacement", 
                        size: "Bx56", 
                        quantity: "2", 
                        rating: "3", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Lubricate Motor/Bearings", 
                        size: "10", 
                        quantity: "90", 
                        rating: "6", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Clean Cooling/Heating Coils", 
                        size: "60", 
                        quantity: "15", 
                        rating: "5", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Clean Drain Pan/Drain Lines", 
                        size: "5x5x5", 
                        quantity: "10", 
                        rating: "1", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Flush Coils", 
                        size: "100x1", 
                        quantity: "4", 
                        rating: "10", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Heating/Cooling Valves", 
                        size: "50x2", 
                        quantity: "45", 
                        rating: "7", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Blower Assembly Service", 
                        size: "9x3", 
                        quantity: "20", 
                        rating: "2", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Air Handler Console Service", 
                        size: "90x5", 
                        quantity: "45", 
                        rating: "9", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Electric Connections", 
                        size: "75x5x5", 
                        quantity: "5", 
                        rating: "6", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    }
                ]
        },
        {
            name: "Maloney",
            data:
                [
                    {
                        name: "Filter Replacement", 
                        size: "50x50x2", 
                        quantity: "Mal", 
                        rating: "3", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Belt Replacement", 
                        size: "Bx56", 
                        quantity: "2", 
                        rating: "3", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Lubricate Motor/Bearings", 
                        size: "10", 
                        quantity: "90", 
                        rating: "6", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Clean Cooling/Heating Coils", 
                        size: "60", 
                        quantity: "15", 
                        rating: "5", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Clean Drain Pan/Drain Lines", 
                        size: "5x5x5", 
                        quantity: "10", 
                        rating: "1", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Flush Coils", 
                        size: "100x1", 
                        quantity: "4", 
                        rating: "10", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Heating/Cooling Valves", 
                        size: "50x2", 
                        quantity: "45", 
                        rating: "7", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Blower Assembly Service", 
                        size: "9x3", 
                        quantity: "20", 
                        rating: "2", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Air Handler Console Service", 
                        size: "90x5", 
                        quantity: "45", 
                        rating: "9", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Electric Connections", 
                        size: "75x5x5", 
                        quantity: "5", 
                        rating: "6", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    }
                ]
        
        },
        {
            name: "Walsh",
            data:
                [
                    {
                        name: "Filter Replacement", 
                        size: "60x60x2", 
                        quantity: "Wal", 
                        rating: "3", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Belt Replacement", 
                        size: "Bx56", 
                        quantity: "2", 
                        rating: "3", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Lubricate Motor/Bearings", 
                        size: "10", 
                        quantity: "90", 
                        rating: "6", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Clean Cooling/Heating Coils", 
                        size: "60", 
                        quantity: "15", 
                        rating: "5", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Clean Drain Pan/Drain Lines", 
                        size: "5x5x5", 
                        quantity: "10", 
                        rating: "1", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Flush Coils", 
                        size: "100x1", 
                        quantity: "4", 
                        rating: "10", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Heating/Cooling Valves", 
                        size: "50x2", 
                        quantity: "45", 
                        rating: "7", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Blower Assembly Service", 
                        size: "9x3", 
                        quantity: "20", 
                        rating: "2", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: false
                    },
                    {
                        name: "Air Handler Console Service", 
                        size: "90x5", 
                        quantity: "45", 
                        rating: "9", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    },
                    {
                        name: "Electric Connections", 
                        size: "75x5x5", 
                        quantity: "5", 
                        rating: "6", 
                        ldos: "1970-01-01T00:00:00",
                        ndos: "1970-04-01T00:00:00", 
                        status: true
                    }
                ]
        }],
    headers: ["Item","Tasks", "Size", "Quantity", "Rating", "Last Date Serviced","Recommended Next Service", "Completed/Functioning"],
 }

export default values;