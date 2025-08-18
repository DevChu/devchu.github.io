character_perks_fh = {
    "BB": {
        "id": "BB",
        "name": "Blinkblade",
        "game": "Frosthaven",
        "masteries": [
            "Declare {FAST} for seven consecutive rounds",
            "Never be targeted by an attack"
        ],
        "perks": [{
                "type": "remove",
                "desc": "Remove one {-2_WHITE} card",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "id": "17"
                    }
                }]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+1_WHITE} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": ["01", "02"]
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} {WOUND.fh} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": ["03", "04"]
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+1_WHITE} {IMMOBILIZE.fh} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": ["05", "06"]
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one “Place this card in your active area. On your next attack, discard this card to add +2{ATTACK.fh}” {AGAIN} card",
                "count": 3,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": ["07", "08", "09"]
                            "delay": true
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace two {+1_WHITE} cards with two {+2_WHITE} cards",
                "count": 1,
                "cards": [{
                        "count": 2,
                        "attackModifier": {
                            "id": "07"
                        }
                    },
                    {
                        "count": 2,
                        "attackModifier": {
                            "id": ["10", "11"]
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add one {-1_WHITE} “Gain 1{TIME_ICON}” card",
                "count": 2,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "id": ["12", "13"]
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add one {+2_WHITE} “{REGENERATE.fh}, self” {AGAIN} card",
                "count": 2,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "id": ["14", "15"]
                    }
                }]
            },
            {
                "type": "add_ch",
                "desc": "Whenever you short rest, you may spend one unspent {SPENT.fh} item for no effect to {RECOVER.fh} a different spent item",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "id": "entropy_transfer"
                    }
                }]
            },
            {
                "type": "add_ch",
                "desc": "At the start of your first turn each scenario, you may perform {MOVE.fh}3",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "id": "head_start"
                    }
                }]
            },
            {
                "type": "add_ch",
                "desc": "Whenever you would gain {IMMOBILIZE.fh}, prevent the condition",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "id": "perpetual_motion"
                    }
                }]
            }
        ]
    },
    "DW": {
        "id": "DW",
        "name": "Deathwalker",
        "game": "Frosthaven",
        "masteries": [
            "Remove seven {SHADOW_ICON} in one round",
            "Place or remove at least one {SHADOW_ICON} each round"
        ],
        "perks": [{
                "type": "remove",
                "desc": "Remove two {-1_WHITE} cards",
                "count": 1,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "id": "12"
                    }
                }]
            },
            {
                "type": "replace",
                "desc": "Replace one {-2_WHITE} card with one {+0_WHITE} card",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "17"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": "01"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+1_WHITE} card",
                "count": 3,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": ["02", "03", "04"]
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+1_WHITE} {CURSE} card",
                "count": 3,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": ["05", "06", "07"]
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add one {+2_WHITE} {DARK} card",
                "count": 2,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "id": ["08", "09"]
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add one {DISARM.fh} {AGAIN} card and one {MUDDLE.fh} {AGAIN} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": ["10", "12"]
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": ["11", "13"]
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add two “{HEAL.fh}1, {TARGET.fh}1 ally” {AGAIN} cards",
                "count": 2,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "id": ["14", "15"]
                    }
                }]
            },
            {
                "type": "custom",
                "desc": "Ignore scenario effects",
                "count": 1,
                "custom": "ignoreNegativeScenario"
            },
            {
                "type": "add_ch",
                "desc": "Whenever you long rest, you may move one {SHADOW_ICON} up to three hexes",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "id": "restless_night"
                    }
                }]
            },
            {
                "type": "add_ch",
                "desc": "Whenever you short rest, you may {DARK_X} to perform {MUDDLE.fh}, {CURSE.fh}, {RANGE.fh}2 as if you were occupying a hex with a {SHADOW_ICON}",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "id": "haunting_dreams"
                    }
                }]
            },
            {
                "type": "add_ch",
                "desc": "While you are occupying a hex with a {SHADOW_ICON}, all attacks targeting you gain disadvantage",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "id": "cloak_of_shadow"
                    }
                }]
            }
        ]
    },
    "BO": {
        "id": "BO",
        "name": "Boneshaper",
        "game": "Frosthaven",
        "masteries": [
            "Kill at least fifteen of your summons",
            "Play a summon action on your first turn, have the summon kill at least six enemies, and keep it alive for the entire scenario"
        ],
        "perks": [{
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} {CURSE.fh} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": ["01", "02"]
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} {POISON.fh} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": ["03", "04"]
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-2_WHITE} card with one {+0_WHITE} card",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "17"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": ["05"]
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+1_WHITE} “Kill the attacking summon to instead add {+4_WHITE}” card",
                "count": 3,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": ["06", "07", "08"]
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add three “{HEAL.fh}1, {TARGET.fh} {BO}” {AGAIN} cards",
                "count": 2,
                "cards": [{
                    "count": 3,
                    "attackModifier": {
                        "id": ["09", "10", "11", "12", "13", "14"]
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add one {+2_WHITE} {EARTH_OR_DARK} card",
                "count": 3,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "id": ["15", "16", "17"]
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Ignore scenario effects and add two {+1_WHITE} cards",
                "count": 1,
                "custom": "ignoreNegativeScenario",
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "id": ["18", "19"]
                    }
                }]
            },
            {
                "type": "add_ch",
                "desc": "Immediately berfore each of your rests, you may kill one of your summons to perform {BLESS.fh}, self",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "reclaimed_essence"
                    }
                }]
            },
            {
                "type": "add_ch",
                "desc": "Once each scenario, when any character ally would become exhausted by suffering {DAMAGE.fh}, you may suffer {DAMAGE.fh}2 to reduce their hit point value to 1 instead",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "soul_pact"
                    }
                }]
            },
            {
                "type": "add_ch",
                "desc": "At the start of each scenario, you may play a level 1 card from your hand to perform a summon action of the card",
                "count": 0.5,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "dead_on_arrival"
                    }
                }]
            }
        ]
    },
    "GE": {
        "id": "GE",
        "name": "Geminate",
        "game": "Frosthaven",
        "masteries": [
            "Switch forms each round",
            "Lose at least one ability card each round"
        ],
        "perks": [{
                "type": "replace",
                "desc": "Replace one {-2_WHITE} card with one {+0_WHITE} card",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "17"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": "01"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} with one {+0_WHITE} “{ANY_X}: {ANY}” card",
                "count": 3,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": ["02", "03", "04"]
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+1_WHITE} {POISON.fh} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": ["05", "06"]
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+1_WHITE} {WOUND.fh} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "id": ["07", "08"]
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace two {+0_WHITE} cards with two {PIERCE.fh}3 {AGAIN} cards",
                "count": 1,
                "cards": [{
                        "count": 2,
                        "attackModifier": {
                            "id": "01"
                        }
                    },
                    {
                        "count": 2,
                        "attackModifier": {
                            "id": ["09", "10"]
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add two {+1_WHITE} {PUSH.fh}3 cards",
                "count": 1,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "id": ["11", "12"]
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add one {2X_WHITE} “{BRITTLE.fh}, self” card",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "id": ["13"]
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add one {+1_WHITE} “{REGENERATE.fh}, self” {AGAIN} card",
                "count": 2,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "id": ["14", "15"]
                    }
                }]
            },
            {
                "type": "custom",
                "desc": "Ignore scenario effects",
                "count": 1,
                "custom": "ignoreNegativeScenario"
            },
            {
                "type": "add_ch",
                "desc": "Whenever you short rest, you may remove one negative condition from one ally within {RANGE.fh}3",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "revitalizing_swarm"
                    }
                }]
            },
            {
                "type": "add_ch",
                "desc": "Once each scenario, when you would give yourself a negative condition, prevent the condition",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "acquired_resistance"
                    }
                }]
            },
            {
                "type": "add_ch",
                "desc": "Whenever you perform an action with a lost icon, you may discard one card to {RECOVER.fh} one card from your discard pile of equal or lower level",
                "count": 0.5,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "unstable_equilibrium"
                    }
                }]
            }
        ]
    }
}

character_perks_fh_TODO = {
    "DF": {
        "id": "DF",
        "name": "Drifter",
        "expansion": "Frosthaven",
        "masteries": [
            "End a scenario with your character tokens on the last slots of four persistent abilities",
            "Never perform a move ability or attack with a value less than 4, and perform at least one move or attack ability each round"
        ],
        "perks": [{
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+1_WHITE} card",
                "count": 3,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus1"
                            "id": "07"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-2_WHITE} card with one {+0_WHITE} card",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus2"
                            "id": "17"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+1_WHITE} card with two {+0_WHITE} “Move one of your character tokens backward one slot” cards",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus1"
                            "id": "07"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_subtrack"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace two {+0_WHITE} cards with two {PIERCE.fh}3 {AGAIN} cards",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_pierce3_rolling"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace two {+0_WHITE} cards with two {PUSH.fh}2 {AGAIN} cards",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_push2_rolling"
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add one {+3_WHITE} card",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus3"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add one {+2_WHITE} {IMMOBILIZE.fh} card",
                "count": 2,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus2_immobilize"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add two “{HEAL.fh}1, self” {AGAIN} cards",
                "count": 1,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "plus0_heal1self_rolling"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Ignore scenario effects and add one {+1_WHITE} card",
                "count": 1,
                "custom": "ignoreNegativeScenario",
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        //"type": "plus1"
                        "id": "07"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Ignore item {-1} effects and add one {+1_WHITE} card",
                "count": 1,
                "custom": "ignoreNegativeItem",
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        //"type": "plus1"
                        "id": "07"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you long rest, you may move one of your character tokens backward one slot",
                "count": 0.5,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "persistence"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "You may bring one additional {ONE-HAND} item into each scenario",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "expanded_arsenal"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "At the end of each scenario, you may discard up to two loot cards, except Random Item, to draw that many new loot cards",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "scavenger"
                    }
                }]
            }
        ]
    },

    "BN": {
        "id": "BN",
        "name": "Banner Spear",
        "game": "Frosthaven",
        "masteries": [
            "Attack at least three enemies with each of three different area of effect attack abilities",
            "Perform a {BANNER} summon ability on your first turn, keep the banner alive and within {RANGE.fh}3 of you for the entire scenario"
        ],
        "perks": [{
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one “{SHIELD.fh}1” {AGAIN} card",
                "count": 3,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_shield1_rolling"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+1_WHITE} “Add +1{ATTACK.fh} for each ally adjacent to the target” card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus1_plus1ally"
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add one {+1_WHITE} {DISARM.fh} card",
                "count": 2,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus1_disarm"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add one {+2_WHITE} {PUSH.fh}1 card",
                "count": 2,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus2_push1"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add two {+1_WHITE} {AGAIN} cards",
                "count": 2,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "plus1_rolling"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add two “{HEAL.fh}1, self” {AGAIN} cards",
                "count": 2,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "plus0_heal1self_rolling"
                    }
                }]
            },
            {
                "type": "remove",
                "desc": "Ignore item {-1} effects and remove one {-1_WHITE} card",
                "count": 1,
                "custom": "ignoreNegativeItem",
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        //"type": "minus1"
                        "id": "12"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "At the end of each of your long rests, grant one ally within {RANGE.fh}3: {MOVE.fh}2",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "tireless_leadership"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you open a door with a move ability, add +3{MOVE.fh}",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "into_the_breach"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Once each scenario, during your turn, gain {SHIELD.fh}2 for the round",
                "count": 0.5,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "iron_will"
                    }
                }]
            }
        ]
    },

    "IF": {
        "id": "IF",
        "name": "Infuser",
        "game": "Frosthaven",
        "masteries": [
            "Have five active {INFUSION_ICON} bonuses",
            "Kill at least four enemies, but never attack"
        ],
        "perks": [{
                "type": "replace",
                "desc": "Replace one {-2_WHITE} card with one {-1_WHITE} card and one {-1_WHITE} {WIND} {EARTH} {DARK} card",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus2"
                            "id": "17"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "minus1_wind_earth_dark"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} {WIND_OR_EARTH} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_wind_or_earth"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} {WIND_OR_DARK} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_wind_or_dark"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} {EARTH_OR_DARK} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_earth_or_dark"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+2_WHITE} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus2"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with three “Move one waning element to strong” {AGAIN} cards",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 3,
                        "attackModifier": {
                            "type": "plus0_wax_rolling"
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add two “+1{ATTACK.fh} for each pair of active {INFUSION_ICON}” {AGAIN} cards",
                "count": 2,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "plus0_plus1infuse_rolling"
                    }
                }]
            },
            {
                "type": "replace",
                "desc": "Ignore scenario effects",
                "count": 1,
                "custom": "ignoreNegativeScenario"
            },
            {
                "type": "add",
                "desc": "Ignore item {-1} effects. Whenever you become exhausted, keep all your active bonuses in play, with your summons acting on initiative 99 each round",
                "count": 0.5,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "sustained_animation"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you short rest, you may {ANY_X} to {RECOVER.fh} one spent {ONE-HAND} or {TWO-HANDS} item",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "elemental_tempering"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Once each scenario, during ordering of initiative, after all ability cards have been revealed, {ANY}",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "radiant_boon"
                    }
                }]
            }
        ]
    },
    "PY": {
        "id": "PY",
        "name": "Pyroclast",
        "game": "Frosthaven",
        "masteries": [
            "Create or destroy at least one obstacle or hazardous terrain tile each round",
            "Move enemies through six diffrerent hexes of hazardous terrain you created in one turn"
        ],
        "perks": [{
                "type": "remove",
                "desc": "Remove two {-1_WHITE} cards",
                "count": 1,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        //"type": "minus1"
                        "id": "12"
                    }
                }]
            },
            {
                "type": "remove",
                "desc": "Remove one {-2_WHITE} card",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        //"type": "minus2"
                        "id": "17"
                    }
                }]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+1_WHITE} {WOUND.fh} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus1_wound"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} “Create one 1-hex hazardous terrain tile in a featureless hex adjacent to the target” card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_hazard1"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace two {+0_WHITE} cards with two {PUSH.fh}2 {AGAIN} cards",
                "count": 2,
                "cards": [{
                        "count": 2,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 2,
                        "attackModifier": {
                            "type": "plus0_push2_rolling"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace two {+1_WHITE} cards with two {+2_WHITE} cards",
                "count": 1,
                "cards": [{
                        "count": 2,
                        "attackModifier": {
                            //"type": "plus1"
                            "id": "07"
                        }
                    },
                    {
                        "count": 2,
                        "attackModifier": {
                            "type": "plus2"
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add two {+1_WHITE} {FIRE_OR_EARTH} cards",
                "count": 2,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "plus1_fire_or_earth"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add two {+1_WHITE} {MUDDLE.fh} {AGAIN} cards",
                "count": 1,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "plus1_muddle_rolling"
                    }
                }]
            },
            {
                "type": "custom",
                "desc": "Ignore scenario effects",
                "count": 1,
                "custom": "ignoreNegativeScenario"
            },
            {
                "type": "add",
                "desc": "Whenever you long rest, you may destroy one adjacent obstacle to gain {WARD.fh}",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "improvised_armour"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you short rest, you may {FIRE_X} to perform {WOUND.fh}, {TARGET.fh}1 enemy occupying or adjacent to hazardous terrain",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "spitting_magma"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "You and all allies are unaffected by hazardous terrain you create",
                "count": 0.3,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "dormant_peace"
                    }
                }]
            }
        ]
    },
    "SH": {
        "id": "SH",
        "name": "Shattersong",
        "game": "Frosthaven",
        "masteries": [
            "Always have 0 {RESONANCE_ICON} directly before you gain {RESONANCE_ICON} at the end of each of your turns",
            "Spend 5 {RESONANCE_ICON} on each of five different {WAVE} abilities"
        ],
        "perks": [{
                "type": "remove",
                "desc": "Remove four {+0_WHITE} cards",
                "count": 1,
                "cards": [{
                    "count": 4,
                    "attackModifier": {
                        //"type": "plus0"
                        "id": "01"
                    }
                }]
            },
            {
                "type": "replace",
                "desc": "Replace two {-1_WHITE} cards with two {+0_WHITE} “Reveal the top card of the target's monster ability deck” cards",
                "count": 2,
                "cards": [{
                        "count": 2,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 2,
                        "attackModifier": {
                            "type": "plus0_reveal"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-2_WHITE} card with one {-1_WHITE} {STUN.fh} card",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus2"
                            "id": "17"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "minus1_stun"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+0_WHITE} {BRITTLE.fh} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_brittle"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace two {+1_WHITE} cards with two {+2_WHITE} {WIND_OR_LIGHT} card",
                "count": 2,
                "cards": [{
                        "count": 2,
                        "attackModifier": {
                            //"type": "plus1"
                            "id": "07"
                        }
                    },
                    {
                        "count": 2,
                        "attackModifier": {
                            "type": "plus2_wind_or_light"
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add one “{HEAL.fh}2, {BLESS.fh}, {TARGET.fh}1 ally” {AGAIN} card",
                "count": 2,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus0_heal2blessally_rolling"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add one {+1_WHITE} “Gain 1 {RESONANCE_ICON}” card",
                "count": 3,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus1_resonance1"
                    }
                }]
            },
            {
                "type": "replace",
                "desc": "Ignore scenario effects",
                "count": 1,
                "custom": "ignoreNegativeScenario"
            },
            {
                "type": "add",
                "desc": "Whenever you short rest, you may {WIND_X} to perform {STRENGTHEN.fh}, {RANGE.fh}3 and {LIGHT_X} to perform {BLESS.fh}, {RANGE.fh}3",
                "count": 0.5,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "profound_note"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "At the start of each scenario, you may gain {BRITTLE.fh} to gain 2 {RESONANCE_ICON}",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "hyperresonance"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever a new room is revealed, you may reveal the top card of both the monster attack modifier deck and all allies' attack modifier decks",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "precognition"
                    }
                }]
            }
        ]
    },
    "TA": {
        "id": "TA",
        "name": "Trapper",
        "game": "Frosthaven",
        "masteries": [
            "Have one {HEAL.fh} trap on the map with a value of at least 20",
            "Move enemies through seven or more traps with one ability"
        ],
        "perks": [{
                "type": "remove",
                "desc": "Remove one {-2_WHITE} card",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        //"type": "minus2"
                        "id": "17"
                    }
                }]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} “Create one {HEAL.fh}2 trap in an empty hex adjacent to the target” card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_heal2trap"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} “Create one {DAMAGE.fh}1 trap in an empty hex adjacent to the target” card",
                "count": 3,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_suffer1trap"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace two {+0_WHITE} cards with two {+0_WHITE} “Add {DAMAGE.fh}2 or {HEAL.fh}2 to a trap within {RANGE.fh}2 of you” cards",
                "count": 3,
                "cards": [{
                        "count": 2,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 2,
                        "attackModifier": {
                            "type": "plus0_plus2trap"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace two {+1_WHITE} cards with two {+2_WHITE} {IMMOBILIZE.fh} cards",
                "count": 2,
                "cards": [{
                        "count": 2,
                        "attackModifier": {
                            //"type": "plus1"
                            "id": "07"
                        }
                    },
                    {
                        "count": 2,
                        "attackModifier": {
                            "type": "plus2_immobilize"
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add two “Add {PUSH.fh}2 or {PULL.fh}2” {AGAIN} cards",
                "count": 3,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "plus0_pushpull2_rolling"
                    }
                }]
            },
            {
                "type": "custom",
                "desc": "Ignore scenario effects",
                "count": 1,
                "custom": "ignoreNegativeScenario"
            },
            {
                "type": "add",
                "desc": "Whenever you long rest, you may create one {DAMAGE.fh}1 trap in an adjacent emty hex",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "idle_hands"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you enter a hex with a trap, you may choose to not spring the trap",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "careful_footing"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "At the start of each scenario, you may create one {DAMAGE.fh}2 trap in an adjacent empty hex",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "always_be_prepared"
                    }
                }]
            }
        ]
    },
    "PC": {
        "id": "PC",
        "name": "Pain Conduit",
        "game": "Frosthaven",
        "masteries": [
            "Cause other figures to suffer a total of at least {DAMAGE.fh}40 in one round",
            "Start a turn with {WOUND.fh}, {BRITTLE.fh}, {BANE.fh}, {POISON.fh}, {IMMOBILIZE.fh}, {DISARM.fh}, {STUN.fh} and {MUDDLE.fh}"
        ],
        "perks": [{
                "type": "remove",
                "desc": "Remove two {-1_WHITE} cards",
                "count": 2,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        //"type": "minus1"
                        "id": "12"
                    }
                }]
            },
            {
                "type": "replace",
                "desc": "Replace one {-2_WHITE} card with one {+2_WHITE} {CURSE.fh} {CURSE.fh} card",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus2"
                            "id": "17"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "minus2_curse2"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} {DISARM.fh} card",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_disarm"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+1_WHITE} {FIRE_OR_WIND} card",
                "count": 3,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus1_fire_or_wind"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+2_WHITE} card",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus2"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace three {+1_WHITE} cards with three {+1_WHITE} {CURSE.fh} cards",
                "count": 1,
                "cards": [{
                        "count": 3,
                        "attackModifier": {
                            //"type": "plus1"
                            "id": "07"
                        }
                    },
                    {
                        "count": 3,
                        "attackModifier": {
                            "type": "plus1_curse"
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add three “{HEAL.fh}1, self” {AGAIN} cards",
                "count": 2,
                "cards": [{
                    "count": 3,
                    "attackModifier": {
                        "type": "plus0_heal1self_rolling"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add one {+0_WHITE} “Add +1{ATTACK.fh} for each negative condition you have” card",
                "count": 2,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus0_plus1condition"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Ignore scenario effects and add two {+1_WHITE} cards",
                "count": 1,
                "custom": "ignoreNegativeScenario",
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "mis"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Each round in which you long rest, you may ignore all negative conditions you have. If you do, they cannot be removed that round",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "extended_torment"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you become exhausted, first perform {CURSE.fh}, {TARGET} all, {RANGE.fh}3",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "last_laugh"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Increase your maximum hit point value by 5",
                "count": 0.5,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "scar_tissue"
                    }
                }]
            }
        ]
    },
    "SD": {
        "id": "SD",
        "name": "Snowdancer",
        "game": "Frosthaven",
        "masteries": [
            "Cause at least one ally or enemy to move each round",
            "Ensure the first ally to suffer {DAMAGE.fh} each round, directly before suffering the {DAMAGE.fh}, has at least one condition you applied"
        ],
        "perks": [{
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} “{HEAL.fh}1, {TARGET.fh}1 ally” card",
                "count": 3,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_heal1ally"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} {IMMOBILIZE.fh} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_immobilize"
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add two {+1_WHITE} {ICE_OR_WIND} cards",
                "count": 2,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "plus1_ice_or_wind"
                    }
                }]
            },
            {
                "type": "replace",
                "desc": "Replace two {+0_WHITE} cards with two “If this action forces the target to move, it suffers {DAMAGE.fh}1” {AGAIN} cards",
                "count": 2,
                "cards": [{
                        "count": 2,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 2,
                        "attackModifier": {
                            "type": "plus0_suffer1move_rolling"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+1_WHITE} “{STRENGTHEN.fh}, {TARGET.fh}1 ally” card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus1_strengthenally"
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add one “{HEAL.fh}1, {WARD.fh}, {TARGET.fh}1 ally” {AGAIN} card",
                "count": 2,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus0_heal1wardally_rolling"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you long rest, you may {ICE_OR_WIND}",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "heart_of_the_storm"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you short rest, you may {ICE_X} to perform {REGENERATE.fh}, {RANGE.fh}3 and {WIND_X} tp perform {WARD.fh}, {RANGE.fh}3",
                "count": 0.5,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "winters_breath"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "At the start of each scenario, all enemies gain {MUDDLE.fh}. Whenever a new room is revealed, all enemies in the newly revealed room gain {MUDDLE.fh}",
                "count": 0.5,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "blinding_flurries"
                    }
                }]
            }
        ]
    },
    "FF": {
        "id": "FF",
        "name": "Frozen Fist",
        "game": "Frosthaven",
        "masteries": [
            "{RECOVER.fh} at least one card from your discard pile each round",
            "Enter at least ten different hexes with one move ability, then cause one enemy to suffer at least {DAMAGE.fh}10 with one attack ability in the same turn"
        ],
        "perks": [{
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} {DISARM.fh} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_disarm"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+1_WHITE} card",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus1"
                            "id": "07"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-2_WHITE} card with one {+0_WHITE} card",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus2"
                            "id": "17"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+1_WHITE} “{SHIELD.fh}1” {AGAIN} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus1_shield1_rolling"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+1_WHITE} {ICE_OR_EARTH} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus1_ice_or_earth"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+2_WHITE} “Create one 1-hex icy terrain tile in a featureless hex adjacent to the target” card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus2_icy1"
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add one {+3_WHITE} card",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus3"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add two “{HEAL.fh}1, self” {AGAIN} cards",
                "count": 3,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "plus0_heal1self_rolling"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Ignore item {-1} effects, and, whenever you enter icy terrain with a move ability, you may ignore the effect to add +1{MOVE.fh}",
                "count": 1,
                "custom": "ignoreNegativeItem",
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "sure_footing"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you heal from a long rest, you may {ICE_OR_EARTH_X} to add +2{HEAL.fh}",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "the_mountains_boon"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Once each scenario, when you would suffer {DAMAGE.fh}, you may negate the {DAMAGE.fh}",
                "count": 0.5,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "thick_skinned"
                    }
                }]
            }
        ]
    },
    "HV": {
        "id": "HV",
        "name": "HIVE",
        "game": "Frosthaven",
        "masteries": [
            "{TRANSFER_ICON} each round",
            "{TRANSFER_ICON} into four different summons in one round"
        ],
        "perks": [{
                "type": "remove",
                "desc": "Remove one {-2_WHITE} card and one {+1_WHITE} card",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus1"
                            "id": "07"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} “After this attack ability, grant one of your summons: {MOVE.fh}2” card",
                "count": 3,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_move2summon"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+1_WHITE} “After this attack ability, {TRANSFER_ICON}” card",
                "count": 3,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus1_transfer"
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add one {+1_WHITE} “{HEAL.fh}1, self” card",
                "count": 3,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus1_heal1self"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add one {+2_WHITE} {MUDDLE.fh} card",
                "count": 2,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus2_muddle"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add two {POISON.fh} {AGAIN} cards",
                "count": 1,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "plus0_poison_rolling"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add two {WOUND.fh} {AGAIN} cards",
                "count": 1,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "plus0_wound_rolling"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you long rest, you may do so on any initiative value, choosing your initiative after all ability cards have been revealed, and you decide how your summons perform their abilities for the round",
                "count": 0.5,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "remote_override"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "At the end of each of your short rests, you may {TRANSFER_ICON}",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "adaptive_programming"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you would gain {WOUND.fh}, prevent the condition",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "galvanized_frame"
                    }
                }]
            }
        ]
    },
    "ME": {
        "id": "ME",
        "name": "Metal Mosaic",
        "game": "Frosthaven",
        "masteries": [
            "Never attack",
            "For four consecutive rounds, move the pressure gague up or down three levels from where it started the round ({PRESSURE_LOW_ICON} to {PRESSURE_HIGH_ICON}, or vice versa)"
        ],
        "perks": [{
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} “{PRESSURE_UP_ICON} or {PRESSURE_DOWN_ICON}” card",
                "count": 3,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_pressure"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one “{SHIELD.fh}1” {AGAIN} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_shield1_rolling"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+0_WHITE} “The target and all enemies adjacent to it suffer {DAMAGE.fh}1” card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_suffer1"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace two {+0_WHITE} cards with one {PIERCE.fh}3 {AGAIN} and one “{RETALIATE.fh}2” {AGAIN} card",
                "count": 2,
                "cards": [{
                        "count": 2,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_pierce3_rolling"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_retaliate2_rolling"
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add one {+1_WHITE} “{HEAL.fh}2, self” card",
                "count": 2,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus1_heal2self"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add one {+3_WHITE} card",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus3"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Ignore item {-1} effects and add two {+1_WHITE} cards",
                "count": 1,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        //"type": "plus1"
                        "id": "07"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you long rest, you may {PRESSURE_UP_ICON} or {PRESSURE_DOWN_ICON}",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "valve_adjustment"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you would gain {POISON.fh}, you may suffer {DAMAGE.fh}1 to prevent the condition",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "synthetic_resistance"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Once each scenario, when you would become exhausted, instead gain {BRITTLE.fh} and {INVISIBLE.fh}, lose all your cards, {RECOVER.fh} four lost cards, and then discard the recovered cards",
                "count": 0.3,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "emergency_reboot"
                    }
                }]
            }
        ]
    },
    "DT": {
        "id": "DT",
        "name": "Deepwraith",
        "game": "Frosthaven",
        "masteries": [
            "Perform all your attacks with advantage",
            "Infuse {DARK} each round"
        ],
        "perks": [{
                "type": "remove",
                "desc": "Remove two {-1_WHITE} cards",
                "count": 1,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        //"type": "minus1"
                        "id": "12"
                    }
                }]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} {DISARM.fh} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_disarm"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-2_WHITE} card with one {+1_WHITE} {STUN.fh} card",
                "count": 1,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus2"
                            "id": "17"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "minus1_stun"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+0_WHITE} “{INVISIBLE.fh}, self” card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_invisible"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace two {+0_WHITE} cards with two {PIERCE.fh}3 {AGAIN} cards",
                "count": 1,
                "cards": [{
                        "count": 2,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 2,
                        "attackModifier": {
                            "type": "plus0_pierce3_rolling"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace two {+1_WHITE} cards with two {+2_WHITE} cards",
                "count": 1,
                "cards": [{
                        "count": 2,
                        "attackModifier": {
                            //"type": "plus1"
                            "id": "07"
                        }
                    },
                    {
                        "count": 2,
                        "attackModifier": {
                            "type": "plus2"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace three {+1_WHITE} cards with three {+1_WHITE} {CURSE.fh} cards",
                "count": 1,
                "cards": [{
                        "count": 3,
                        "attackModifier": {
                            //"type": "plus1"
                            "id": "07"
                        }
                    },
                    {
                        "count": 3,
                        "attackModifier": {
                            "type": "plus1_curse"
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add two {+1_WHITE} “Gain 1{TROPHY_ICON}” cards",
                "count": 3,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "plus1_trophy1"
                    }
                }]
            },
            {
                "type": "remove",
                "desc": "Ignore scenario effects and remove two {+0_WHITE} cards",
                "count": 1,
                "custom": "ignoreNegativeScenario",
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        //"type": "plus0"
                        "id": "01"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you long rest, you may {LOOT.fh}1 one adjacent hex. If you gain any loot tokens, gain 1 {TROPHY_ICON}",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "grisly_claim"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "At the start of each scenario, gain 2 {TROPHY_ICON}",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "decorated_veteran"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "While you have {INVISIBLE.fh}, gain advantage on all your attacks",
                "count": 0.3,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "unseen_predator"
                    }
                }]
            }
        ]
    },
    "CR": {
        "id": "CR",
        "name": "Crashing Tide",
        "game": "Frosthaven",
        "masteries": [
            "Never suffer damage from attacks, and be targeted by at least five attacks",
            "At the start of each of your rests, have more active {TIDE_ICON} than cards in your discard pile"
        ],
        "perks": [{
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with two {PIERCE.fh}3 {AGAIN} cards",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 2,
                        "attackModifier": {
                            "type": "plus0_pierce3_rolling"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {-1_WHITE} card with one {+0_WHITE} “+1{TARGET.fh}” card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "minus1"
                            "id": "12"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus0_addtarget"
                        }
                    }
                ]
            },
            {
                "type": "replace",
                "desc": "Replace one {+0_WHITE} card with one {+1_WHITE} “{SHIELD.fh}1” {AGAIN} card",
                "count": 2,
                "cards": [{
                        "count": 1,
                        "attackModifier": {
                            //"type": "plus0"
                            "id": "01"
                        }
                    },
                    {
                        "count": 1,
                        "attackModifier": {
                            "type": "plus1_shield1_rolling"
                        }
                    }
                ]
            },
            {
                "type": "add",
                "desc": "Add two {+1_WHITE} “If you performed a {TIDE_ICON} action this round, {+2_WHITE} instead” cards",
                "count": 2,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "plus1_plus2tide"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add one {+2_WHITE} {MUDDLE.fh} card",
                "count": 2,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus2_muddle"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add one {+1_WHITE} {DISARM.fh} card",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "plus1_disarm"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Add two “{HEAL.fh}1, self” {AGAIN} cards",
                "count": 2,
                "cards": [{
                    "count": 2,
                    "attackModifier": {
                        "type": "plus0_heal1self_rolling"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Ignore item {-1} effects, and, whenever you would gain {IMPAIR.fh}, prevent the condition",
                "count": 1,
                "custom": "ignoreNegativeItem",
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "resilient_shell"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Whenever you declare a long rest during card selection, gain {SHIELD.fh}1 for the round",
                "count": 1,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "curl_up"
                    }
                }]
            },
            {
                "type": "add",
                "desc": "Gain advantage on all your attacks performed while occupying or targeting enemies occupying water hexes",
                "count": 0.3,
                "cards": [{
                    "count": 1,
                    "attackModifier": {
                        "type": "aquatic_predator"
                    }
                }]
            }
        ]
    }
}