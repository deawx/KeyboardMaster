document.body.addKeyBindings({
    seperator: ' + ', // If ommited, defaults to this value
    bindings: [
        {
            keyBinding: 'ctrl + shift + :',
            action: () => {
                // Toggle the theme
                let docElement = document.documentElement;
                docElement.setAttribute('theme', docElement.getAttribute('theme') == 'dark' ? 'normal' : 'dark');
            }
        }, {
            keyBinding: 'shift + tab',
            action: () => {
                console.log('shift + tab pressed');
            }
        }
    ]
})