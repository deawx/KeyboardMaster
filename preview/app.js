
document.body.addKeyBindings({
    seperator: " + ", // If undefined, defaults to this value
    bindings: [
        {
            keyBinding: 'ctrl + shift + :',
            action: (keyBinding) => {
                /**
                 * keyBinding --> "ctrl + shift + :"
                 */


                // Toggle the theme
                let docElement = document.documentElement;
                docElement.setAttribute('theme', docElement.getAttribute('theme') == 'dark' ? 'normal' : 'dark');
            }
        }]
})