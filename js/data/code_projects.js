window.codeProjects = [
    {
        language: {
            en: "Python",
            de: "Python"
        },
        experience: {
            en: "Due to my interest in the 3D software Blender, I have used Python to develop scripts and add-ons. During my bachelor’s degree, I deepened my knowledge of the language in the field of deep learning and also gained initial experience with Flask and Python web development.",
            de: "Durch mein Interesse an der 3D-Software Blender habe ich Python zur Entwicklung von Skripten und Add-ons genutzt. Im Bachelorstudium vertiefte ich die Sprache im Bereich Deep Learning und sammelte zusätzlich erste Erfahrung mit Flask und Python-Webentwicklung."
        },
        projects: [
            {
                title: {
                    en: "Game Asset Maker",
                    de: "Game Asset Maker"
                },
                hint: {
                    en: "Blender add-on for creating game-ready assets",
                    de: "Blender-Add-on zum Erstellen game-ready Assets"
                },
                description: {
                    en: "A Blender add-on designed to transform selected objects into game-ready assets through automation of material baking, topology reduction, UV wrapping, level-of-detail, and model export.",
                    de: "Ein Blender-Add-on, das ausgewählte Objekte durch Automatisierung von Material-Baking, Reduzierung der Topologie, UV-Uwrapping, Level-of-Detail und Modell-Export in ein effizientes Game-Assets verwandeln soll."
                },
                panels: [
                    {
                        layout: "text-media",
                        media:{
                            type: "image",
                            src: "../../images/code/game-asset-maker/overview.jpg",
                            alt: "Game Asset Maker overview"
                        },
                        content:[
                            {
                                type: "heading",
                                text:{
                                    en: "Basic Idea",
                                    de: "Grundgedanke"
                                }
                            },
                            {
                                type: "paragraph",
                                text: {
                                    en: "Manually converting a visually appealing 3D-model into an efficient game-asset can be time-consuming and repetitive. For a video game with hundreds of hero assets, automating this process could save a significant amount of time.",
                                    de: "Der manuelle Weg von einem anschaulichen 3D-Modell bishin zu einem performanten Game-Asset kann langwierig und repetetiv sein. Bei einem Videospiel mit hunderten von Hero-Assets könnte durch eine Automatisierung dieses Vorgangs eine Menge Zeit gespart werden."
                                },
                            }
                        ]
                    },
                    {
                        layout: "text-only",
                        content: [
                            {
                                type: "heading",
                                text: {
                                    en: "Why modify the 3D model?",
                                    de: "Warum das 3D-Modell überarbeiten?"
                                }
                            },
                            {
                                type: "subheading",
                                text: {
                                    en: "Compatibility",
                                    de: "Kompatibilität"
                                }
                            },
                            {
                                type: "paragraph",
                                text: {
                                    en: "Game engines often require cleaner geometry, proper UVs, and simpler materials.",
                                    de: "Game-Engines benötigen oft sauberere Geometrie, korrekte UVs und einfachere Materialien."
                                }
                            },
                            {
                                type: "subheading",
                                text: {
                                    en: "Performance",
                                    de: "Performance"
                                }
                            },
                            {
                                type: "list",
                                items: [
                                    {
                                        en: "Lower triangle count",
                                        de: "Weniger Dreiecke"
                                    },
                                    {
                                        en: "Smaller texture memory usage",
                                        de: "Geringerer Texturspeicherbedarf"
                                    },
                                    {
                                        en: "Better runtime efficiency",
                                        de: "Bessere Laufzeiteffizienz"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                links: {
                    github: "https://github.com/Moritzbrand/Blender-Game-Asset-Maker",
                    project: "https://github.com/Moritzbrand/Blender-Game-Asset-Maker/archive/refs/heads/main.zip",
                    executable: ""
                }
            }
        ]
    }
];