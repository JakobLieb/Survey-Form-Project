document.addEventListener('DOMContentLoaded', function () {
    // Calls showSection to show the first fieldset only by default
    showSection('section1');
});

function showSection(sectionID) {
    // Hides all fieldsets
    document.querySelectorAll('fieldset').forEach((fieldset) => {
        fieldset.style.display = 'none';
    });

    // Shows selected section
    document.getElementById(sectionID).style.display = 'block';

    // Updates visibility of previous/next buttons
    updateButtonVisibility(sectionID);
}

function updateButtonVisibility(currentSection) {
    const previous = document.getElementById('previous');
    const next = document.getElementById('next');
    const submit = document.getElementById('submit');

    // Hides the previous button on first section
    if (currentSection === 'section1') {
        previous.style.display = 'none';
    } else {
        previous.style.display = 'block';
    }

    // Hides next button on the last section
    if (currentSection === 'section9') {
        next.style.display = 'none';
    } else {
        next.style.display = 'block';
    }

    //Hides submit button until final section
    if (currentSection != 'section9') {
        submit.style.display = 'none';
    } else {
        submit.style.display = 'block';
    }
}

function nextSection() {
    // Moves to the next section
    const currentSection = getCurrentSection();
    const nextSection = getNextSection(currentSection);

    // Shows next section
    showSection(nextSection);
}

function prevSection() {
    // Moves to the previous section
    const currentSection = getCurrentSection();
    const prevSection = getPrevSection(currentSection);

    // Shows previous section
    showSection(prevSection);
}

function getCurrentSection() {
    //Identifies currently visible section
    const visibleSection = document.querySelector('fieldset[style="display: block;"]');
    return visibleSection ? visibleSection.id : null;
}

function getNextSection(currentSection) {
    /* Implements logic to determine next section based off of current section
       Returns ID of next section */
    switch (currentSection) {
        case 'section1':
            return 'section2';
        case 'section2':
            return 'section3';
        case 'section3':
            return 'section4';
        case 'section4':
            return 'section5';
        case 'section5':
            return 'section6';
        case 'section6':
            return 'section7';
        case 'section7':
            return 'section8';
        case 'section8':
            return 'section9';
        default:
            return currentSection;
    }
}

function getPrevSection(currentSection) {
    //Implements logic to determine previous section based on the current one
    //Also returns ID of previous section
    switch (currentSection) {
        case 'section2':
            return 'section1';
        case 'section3':
            return 'section2';
        case 'section4':
            return 'section3';
        case 'section5':
            return 'section4';
        case 'section6':
            return 'section5';
        case 'section7':
            return 'section6';
        case 'section8':
            return 'section7';
        case 'section9':
            return 'section8';
        default:
            return currentSection;
    }
}