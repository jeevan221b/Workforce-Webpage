//EventListener for the toggling of navbar when the hamburger button is clicked

const navIcon = document?.querySelector('.nav-icon');
const navContent = document?.querySelector('.nav-contents');

navIcon.addEventListener('click', function () {
    navContent.classList.toggle('visible');
});

//Function for dynamically implementing the graph interface

const bootstrapData = document?.getElementById('bootstrap-value').innerHTML;
const bootstrapGraph = document?.getElementById('bootstrap-graph');
bootstrapGraph.style.width = bootstrapData;


const htmlData = document?.getElementById('html-value').innerHTML;
const htmlGraph = document?.getElementById('html-graph');
htmlGraph.style.width = htmlData;


const wordpressData = document?.getElementById('wordpress-value').innerHTML;
const wordpressGraph = document?.getElementById('wordpress-graph');
wordpressGraph.style.width = wordpressData;


//Function for turning the navbar to solid upon scrolling
let nav = document?.getElementById('nav');

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.classList.add("nav-colored");
    }
    else {
        nav.classList.remove("nav-colored");
    }
}
//Function for highlighting the selected portfolio button
const btnDefaults = document?.querySelectorAll('.portfolio-button');

btnDefaults.forEach(function (btnDefault) {
    btnDefault.addEventListener('click', function () {
        btnDefaults.forEach(function (btn) {
            btn.classList.remove('button-highlight');
        });
        this.classList.add('button-highlight');
    });
});

//Function for displaying the selected portfolio images according to the button clicked

function filterImage(buttonType) {
    const elements = document?.querySelectorAll('.img-wrap');
    elements.forEach(element => {
        const isAllFilter = buttonType === 'all';
        const shouldShow = isAllFilter || element.classList.contains(buttonType);

        if (!shouldShow) {
            element.classList.add("image-disappear");
        }
        else {
            element.classList.remove("image-disappear");

        }

        setTimeout(() => {
            element.style.display = shouldShow ? 'block' : 'none';
        }, 500);
    });
}

//Event Listener for all the Portfolio Filtering Buttons

document?.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', function () {
        const buttonType = this.getAttribute('data-filter');
        filterImage(buttonType);
    });
});

//Event Listener for the submit button containing the function for validation

const submitButton = document?.getElementById('submit');
console.log(submitButton);
submitButton.addEventListener('click', function () {
    console.log(submitButton);
    const requiredInputs = document?.querySelectorAll('.input-default');
    requiredInputs.forEach(input => {
        //Check whether the mandatory input is empty or not
        if (input.value == '') {
            input.classList.add('input-invalid');
            let id = input.id;
            const errorMessage = document?.getElementById(`error-empty-${id}`);
            errorMessage.style.display = 'block';
        }
        else {
            if (input.classList.contains('input-invalid')) {
                input.classList.remove('input-invalid');
            }
            let id = input.id;
            const errorMessage = document?.getElementById(`error-empty-${id}`);
            errorMessage.style.display = 'none';
            //Check if the email is written in the correct format
            if (input.id === 'email') {
                const pattern = new RegExp("^[a-z0-9._/-]+@[a-z0-9._/-]+\.[a-z]{2,4}$")
                if (!input.value.match(pattern)) {
                    input.classList.add('input-invalid');
                    let id = input.id;
                    const errorMessage = document?.getElementById(`error-invalid-${id}`);
                    errorMessage.style.display = 'block';
                }
                else {
                    if (input.classList.contains('input-invalid')) {
                        input.classList.remove('input-invalid');
                    }
                    let id = input.id;
                    const errorMessage = document?.getElementById(`error-invalid-${id}`);
                    errorMessage.style.display = 'none';
                }
            }
        }


    });
    //Check if the message is more than 100 characters
    const inputMessage = document?.getElementById('message');
    if (inputMessage.value.length > 100) {
        inputMessage.classList.add('input-invalid');
        let id = inputMessage.id;
        const errorMessage = document?.getElementById(`errorOverflow-${id}`);
        errorMessage.style.display = 'block';
    }
    else{
        if (inputMessage.classList.contains('input-invalid')) {
            inputMessage.classList.remove('input-invalid');
        }
        let id = inputMessage.id;
        const errorMessage = document?.getElementById(`errorOverflow-${id}`);
        errorMessage.style.display = 'none';
    }
    
});