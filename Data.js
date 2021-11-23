const apiUrl = 'https://api.mozambiquehe.re/bridge?version=5&platform=PC&player=SVYSLF&auth=IAVq4tQPCgKt9WC8IOew';

fetch(apiUrl).then(response => {
    console.log('reolved', response);
    return response.json()
}).then (data => {
    console.log(data);
}).catch(err => {
    console.log('rejected', err);
});
//Left Column objects
let name = document.getElementById('playerName')
let level = document.getElementById('playerLevel')
let overallKills = document.getElementsByClassName('overallKills')
let overallWins = document.getElementsByClassName('overallWins')
let overallDamage = document.getElementsByClassName('overallDamage')

//First row objects
let playerRank = document.getElementsByClassName("playerRank")
let totalRp = document.getElementsByClassName("totalRp")
//Second row objects

//Thierd row objects

//images
let rankBadges = document.getElementsByClassName('rankBadge')




let playerData = {
    "global": {
        "name": "SVYSLF",
        "uid": 1005211206381,
        "avatar": "",
        "platform": "PC",
        "level": 664,
        "toNextLevelPercent": 67,
        "internalUpdateCount": 16396,
        "bans": {
            "isActive": false,
            "remainingSeconds": 0,
            "last_banReason": "COMPETITIVE_DODGE_COOLDOWN"
        },
        "rank": {
            "rankScore": 6221,
            "rankName": "Platinum",
            "rankDiv": 2,
            "ladderPosPlatform": -1,
            "rankImg": "https://api.mozambiquehe.re/assets/ranks/platinum2.png",
            "rankedSeason": "season11_split_1"
        },
        "arena": {
            "rankScore": 3805,
            "rankName": "Gold",
            "rankDiv": 3,
            "ladderPosPlatform": -1,
            "rankImg": "https://api.mozambiquehe.re/assets/ranks/gold3.png",
            "rankedSeason": "arenas11_split_1"
        },
        "battlepass": {
            "level": "-1",
            "history": {
                "season1": -1,
                "season2": -1,
                "season3": 0,
                "season4": -1,
                "season5": -1,
                "season6": -1,
                "season7": -1,
                "season8": -1,
                "season9": -1,
                "season10": -1
            }
        },
        "badges": [
            {
                "name": "You're Tiering Me Apart: Ranked Season 9",
                "value": 10
            },
            {
                "name": "You're Tiering Me Apart: Ranked Season 8",
                "value": 10
            },
            {
                "name": "Suicide Awareness",
                "value": 0
            }
        ]
    },
    "realtime": {
        "lobbyState": "open",
        "isOnline": 0,
        "isInGame": 0,
        "canJoin": 0,
        "partyFull": 0,
        "selectedLegend": "Wattson",
        "currentState": "offline",
        "currentStateSinceTimestamp": -1,
        "currentStateAsText": "Offline"
    },
    "legends": {
        "selected": {
            "LegendName": "Wattson",
            "data": [
                {
                    "name": "Special event kills",
                    "value": 965,
                    "key": "specialEvent_kills"
                },
                {
                    "name": "Special event wins",
                    "value": 60,
                    "key": "specialEvent_wins"
                },
                {
                    "name": "Damage",
                    "value": 366774,
                    "key": "damage"
                }
            ],
            "gameInfo": {
                "skin": "Haute Drop",
                "skinRarity": "Legendary",
                "frame": "Electric Feels",
                "frameRarity": "Legendary",
                "pose": "Inside Voice",
                "poseRarity": "Epic",
                "intro": "Be careful",
                "introRarity": "Rare",
                "badges": [
                    {
                        "name": "You're Tiering Me Apart: Ranked Season 8",
                        "value": 10,
                        "category": "Account Badges"
                    },
                    {
                        "name": "Wattson's Wrath",
                        "value": 3,
                        "category": "Wattson"
                    },
                    {
                        "name": "You're Tiering Me Apart: Ranked Season 9",
                        "value": 10,
                        "category": "Account Badges"
                    }
                ]
            },
            "ImgAssets": {
                "icon": "https://api.mozambiquehe.re/assets/icons/wattson.png",
                "banner": "https://api.mozambiquehe.re/assets/banners/wattson.jpg"
            }
        },
        "all": {
            "Revenant": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/revenant.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/revenant.jpg"
                }
            },
            "Crypto": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/crypto.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/crypto.jpg"
                }
            },
            "Horizon": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/horizon.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/horizon.jpg"
                }
            },
            "Gibraltar": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/gibraltar.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/gibraltar.jpg"
                }
            },
            "Wattson": {
                "data": [
                    {
                        "name": "Damage",
                        "value": 366774,
                        "key": "damage"
                    },
                    {
                        "name": "Special event kills",
                        "value": 965,
                        "key": "specialEvent_kills"
                    },
                    {
                        "name": "Special event wins",
                        "value": 60,
                        "key": "specialEvent_wins"
                    }
                ],
                "gameInfo": {
                    "badges": [
                        {
                            "name": "Wattson's Wrath",
                            "value": 3
                        },
                        {
                            "name": "Apex Wattson",
                            "value": 5
                        }
                    ]
                },
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/wattson.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/wattson.jpg"
                }
            },
            "Fuse": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/fuse.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/fuse.jpg"
                }
            },
            "Bangalore": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/bangalore.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/bangalore.jpg"
                }
            },
            "Wraith": {
                "data": [
                    {
                        "name": "Special event kills",
                        "value": 3148,
                        "key": "specialEvent_kills"
                    },
                    {
                        "name": "Special event damage",
                        "value": 1200447,
                        "key": "specialEvent_damage"
                    },
                    {
                        "name": "Special event wins",
                        "value": 139,
                        "key": "specialEvent_wins"
                    }
                ],
                "gameInfo": {
                    "badges": [
                        {
                            "name": "Wraith's Arena",
                            "value": 3
                        },
                        {
                            "name": "Wraith's Wrath",
                            "value": 3
                        }
                    ]
                },
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/wraith.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/wraith.jpg"
                }
            },
            "Octane": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/octane.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/octane.jpg"
                }
            },
            "Bloodhound": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/bloodhound.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/bloodhound.jpg"
                }
            },
            "Caustic": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/caustic.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/caustic.jpg"
                }
            },
            "Lifeline": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/lifeline.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/lifeline.jpg"
                }
            },
            "Pathfinder": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/pathfinder.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/pathfinder.jpg"
                }
            },
            "Loba": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/loba.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/loba.jpg"
                }
            },
            "Mirage": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/mirage.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/mirage.jpg"
                }
            },
            "Rampart": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/rampart.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/rampart.jpg"
                }
            },
            "Valkyrie": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/valkyrie.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/valkyrie.jpg"
                }
            },
            "Seer": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/seer.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/seer.jpg"
                }
            },
            "Ash": {
                "ImgAssets": {
                    "icon": "https://api.mozambiquehe.re/assets/icons/ash.png",
                    "banner": "https://api.mozambiquehe.re/assets/banners/ash.jpg"
                }
            }
        }
    },
    "mozambiquehere_internal": {
        "isNewToDB": false,
        "claimedBy": "1632376081",
        "APIAccessType": "BASIC",
        "ClusterID": "3",
        "rate_limit": {
            "max_per_second": 3,
            "current_req": "1"
        },
        "clusterSrv": "MAIN-CLUSTER"
    },
    "total": {
        "damage": {
            "name": "Damage",
            "value": 366774
        },
        "specialEvent_kills": {
            "name": "Special event kills",
            "value": 4113
        },
        "specialEvent_wins": {
            "name": "Special event wins",
            "value": 199
        },
        "specialEvent_damage": {
            "name": "Special event damage",
            "value": 1200447
        },
        "kd": {
            "value": "-1",
            "name": "KD"
        }
    }
}
