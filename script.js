let job = {
    warrior: {
        attributes: [
            "Strong",
            "Lots of Health",
            "Uses Swords and Axes",
            "Gets a cape"
        ]
    },

    wizard: {
        attributes: [
            "Smart",
            "Makes Explosions with Magic",
            "Uses Staves and Wands",
            "Dude it's Magic what else do you want"
        ]
    },

    thief: {
        attributes: [
            "Sneaky",
            "No one sees them",
            "Uses Daggers and Bows",
            "Can steal from the rich"
        ]
    },

    priest: {
        attributes: [
            "Saintly",
            "Has the power of god AND anime",
            "Uses Maces and Staves",
            "Can destroy undead with holy magic"
        ]
    }
}

const chooseClass = (hero) => {
    if(hero === "warrior"){
        console.log(job.warrior.attributes);
    } else if (hero === "wizard"){
        console.log(job.wizard.attributes);
    } else if(hero === "thief"){
        console.log(job.thief.attributes);
    } else {
        console.log(job.priest.attributes);
    }
}

