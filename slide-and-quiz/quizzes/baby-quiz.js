quiz = {
    "info": {
        "name":    "",
        "main":    "",
        /*
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
        */
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What is the placenta?",
            "a": [
                {"option": "An organ attached to the lining of the womb", "correct": true},
                {"option": "A ring of muscle at the lower end of the womb which keeps the baby in place during pregnancy", "correct": false},
                {"option": "A ball of cells formed from a fertilised egg",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</p>",
            "incorrect": "<p><span>:(</span> Go through the slides again </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What does the placenta do? (choose all that apply)",
            "a": [
                {"option": "Grows into the wall of the womb and is joined to the fetus by the umbilical cord", "correct": true},
                {"option": "Provides nutrients and oxygen to the growing baby and removes waste substances", "correct": true},
                {"option": "Protects the baby against most infections", "correct": true},
                {"option": "Protects the baby against the effects of smoking and alcohol", "correct": false},
                {"option": "Produces hormones which support the pregnancy", "correct": true} // no comma here
            ],
            "select_all": true,
            "correct": "<p><span>That's right!</p>",
            "incorrect": "<p><span>:(</span> Go through the slides again </p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "How to keep the placenta healthy? (choose all that apply)",
            "a": [
                {"option": "By taking medicines to improve the function of the placenta", "correct": false},
                {"option": "By consulting a doctor before taking any medicines or supplements", "correct": true},
                {"option": "By attending antenatal check-ups regularly", "correct": true},
                {"option": "By avoiding smoking, drinking alcohol and using illegal drugs", "correct": true} // no comma here
            ],
            "select_all": true,
            "correct": "<p><span>That's right!</p>",
            "incorrect": "<p><span>:(</span> Go through the slides again </p>" // no comma here
        },
        { // Question 4
            "q": "What forms the baby’s side of the placenta?",
            "a": [
                {"option": "Cells from the embryo", "correct": true},
                {"option": "Cells from the lining of the womb",  "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</p>",
            "incorrect": "<p><span>:(</span> Go through the slides again </p>" // no comma here
        },
        { // Question 5
            "q": "What can pass the placenta from the mother to the baby? (choose all that apply)",
            "a": [
                {"option": "Most bacteria",    "correct": false},
                {"option": "Some viruses",    "correct": true},
                {"option": "Nutrients and oxygen",    "correct": true},
                {"option": "Nicotine",    "correct": false},
                {"option": "Stress hormones",    "correct": true},
                {"option": "Antibodies",     "correct": true} // no comma here
            ],
            "select_all": true,
            "correct": "<p><span>That's right!</p>",
            "incorrect": "<p><span>:(</span> Go through the slides again </p>" // no comma here
        } // no comma here
    ]
};
