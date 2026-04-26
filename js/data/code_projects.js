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
                        media: {
                            type: "icon",
                            src: "https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/lightbulb.svg",
                            alt: "Idea icon",
                            fit: "contain"
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
                        layout: "media-only",
                        media: {
                            type: "video",
                            src: "../../videos/GameAssetMaker.mp4",
                            alt: "Game Asset Maker demo",
                            controls: false,
                            autoplay: true,
                            muted: true,
                            loop: true
                        }
                    },
                    {
                        layout: "text-only",
                        content: [
                            {
                                type: "heading",
                                text: {
                                    en: "Why optimize the model?",
                                    de: "Warum das Modell optimieren?"
                                }
                            },
                            {
                                type: "subheading",
                                text: {
                                    en: "Game Engine Compatibility",
                                    de: "Kompatibilität mit Game-Engines"
                                }
                            },
                            {
                                type: "list",
                                items: [
                                    {
                                        en: "Complex Blender materials may not display correctly in game engines -> bake them into 2D image textures",
                                        de: "Komplexe Blender-Materialien werden in Game-Engines oft nicht korrekt dargestellt -> in 2D-Bildtexturen umwandeln"
                                    },
                                    {
                                        en: "Textures need to know where they belong on the model -> create UV maps",
                                        de: "Texturen müssen wissen, wo sie auf dem Modell liegen sollen -> UV-Maps erstellen"
                                    },
                                    {
                                        en: "Too many material slots make the asset harder to use -> combine materials",
                                        de: "Zu viele Material-Slots machen das Asset unübersichtlich -> Materialien zusammenfassen"
                                    }
                                ]
                            },
                            {
                                type: "subheading",
                                text: {
                                    en: "Real-Time Performance",
                                    de: "Echtzeit-Performance"
                                }
                            },
                            {
                                type: "list",
                                items: [
                                    {
                                        en: "Too many polygons slow down the game -> reduce geometry",
                                        de: "Zu viele Polygone verlangsamen das Spiel -> Geometrie reduzieren"
                                    },
                                    {
                                        en: "Distant objects do not need full detail -> generate LOD models",
                                        de: "Weit entfernte Objekte brauchen nicht alle Details -> LOD-Modelle generieren"
                                    },
                                    {
                                        en: "Small surface details do not need real geometry -> use normal maps",
                                        de: "Kleine Oberflächendetails brauchen keine echte Geometrie -> Normal-Maps verwenden"
                                    },
                                    {
                                        en: "Many loose objects are harder to process -> merge them into one asset",
                                        de: "Viele lose Einzelobjekte sind schwerer zu verarbeiten -> zu einem Asset zusammenfügen"
                                    },
                                    {
                                        en: "Procedural materials can be expensive to render -> bake them into textures",
                                        de: "Prozedurale Materialien können teuer zu rendern sein -> in Texturen backen"
                                    },
                                    {
                                        en: "Many greyscale textures use extra memory -> pack them into one RGB texture",
                                        de: "Viele Graustufen-Texturen verbrauchen zusätzlichen Speicher -> in eine RGB-Textur packen"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        layout: "text-only",
                        content: [
                            {
                                type: "heading",
                                text: {
                                    en: "Core Features",
                                    de: "Kernfunktionen"
                                }
                            },
                            {
                                type: "list",
                                items: [
                                    {
                                        en: "Select Blender objects and export them as a game asset with one click",
                                        de: "Blender-Objekte auswählen und mit einem klick als ein Game- Asset exportieren"
                                    },
                                    {
                                        en: "Reduce topology and triangulate the model",
                                        de: "Topologie reduzieren und das Modell triangulieren"
                                    },
                                    {
                                        en: "Utilizing Blender's built-in automatic uv-unwrapping and packaging",
                                        de: "Verwendung der integrierten automatischen UV-Unwrapping und Packing-Funktionen von Blender"
                                    },
                                    {
                                        en: "Bake multiple materials into a single texture map",
                                        de: "Mehere Materialien in eine einzigen Textur-Map überführen"
                                    },
                                    {
                                        en: "Bake high-poly details into normal maps",
                                        de: "Details in Normal-Maps überführen"
                                    },
                                    {
                                        en: "Pack multiple greyscale maps into one RGB texture",
                                        de: "Mehrere Graustufen-Maps in eine RGB-Textur packen"
                                    },
                                    {
                                        en: "Generate up to 10 LOD models",
                                        de: "Bis zu 10 LOD-Modelle generieren"
                                    },
                                    {
                                        en: "Export the final asset for use in game engines",
                                        de: "Finales Asset für Game-Engines exportieren"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        layout: "media-text",
                        media: {
                            type: "image",
                            src: "../../images/code/chest.png",
                            alt: "Example of a game asset created with the add-on",
                        },
                        content:[
                            {
                                type: "heading",
                                text:{
                                    en: "Use Cases",
                                    de: "Anwendungsfälle"
                                }
                            },
                            {
                                type: "subheading",
                                text: {
                                    en: "Target Audience",
                                    de: "Zielgruppe"
                                }
                            },
                            {
                                type: "list",
                                items: [
                                    {
                                        en: "Game developers without experience with Blender",
                                        de: "Spielentwickler ohne Erfahrung mit Blender"
                                    },
                                    {
                                        en: "3D artists for indie games who need to create many assets quickly",
                                        de: "3D-Künstler für Indie-Spiele, die schnell viele Assets erstellen müssen"
                                    }
                                ]
                            },
                            {
                                type: "subheading",
                                text: {
                                    en: "Suitable for",
                                    de: "Geeignet für"
                                }
                            },
                            {
                                type: "list",
                                items: [
                                    {
                                            en: "Creating unique hero assets for video games",
                                            de: "Das erstellen von einzigartige Hero-Assets für Videospiele"
                                        
                                    },
                                    {
                                            en: "Generating LODs for game assets",
                                            de: "die generierung von LOD-Stufen für Game-Assets"
                                        
                                    },
                                    {
                                            en: "Exporting seamless PBR textures",
                                            de: "Das Exportieren von nahtlosen PBR-Texturen"
                                        
                                    }
                                ]
                            },
                            {
                                type: "subheading",
                                text: {
                                    en: "Not optimal for",
                                    de: "Nicht geeignet für"
                                }
                            },
                            {
                                type: "list",
                                items: [
                                    {
                                        en: "Repeatatvie patterns like walls or floors that can be made with tiling textures",
                                        de: "Sich wiederholende Muster wie Wände oder Böden, die mit natlosen Texturen erstellt werden können"
                                    },
                                    {
                                        en: "Animations and rigged characters",
                                        de: "Animierte Charaktere"
                                    }
                                ]
                            },
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