var config = {
    style: 'mapbox://styles/xy6au/ck2133qjediqo1cq9axo9beuo',
    accessToken: 'pk.eyJ1IjoieHk2YXUiLCJhIjoiY2sxdXlwejk5MGZ5aTNncXV3MGx0Y3JmcCJ9.2LvX99rC6vL08hPV1pVhxg',
    showMarkers: true,
    theme: 'light',
    alignment: 'right',
    title: 'New York City: A Surveillance Camera Town',
    subtitle: 'Smile, you are on camera.',
    byline: '',
    footer: 'Source: NYC Surveillance Camera Project.',
    chapters: [
        {
            id: 'chapter-1',
            title: 'Video cameras in NYC',
            image: './images/security-cameras1.jpg',
            description: 'Police here have access to more than 9,000 camera feeds in Lower Manhattan alone.',
            location: {
                center: [-73.876586, 40.757838],
                zoom: 10.72,
                pitch: 0.46,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-2',
            title: 'GREENWICH VILLAGE',
            image: './images/plan-01.jpg',
            description: 'The private cameras may be inside an alcove and pointed out, above a garage door or affixed to the wall of a private building and pointed down a block. ',
            location: {
                center: [-74.001253, 40.726320],
                zoom: 17.94,
                pitch: 59.00,
                bearing: 28.80
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-3',
            title: 'UNION SQUARE',
            image: './images/plan-02.jpg',
            description: 'The public cameras may be on traffic or streetlight poles or affixed to a public building.',
            location: {
                center: [-73.988743, 40.735500],
                zoom: 17.23,
                pitch: 60.00,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
      
    ]
};
