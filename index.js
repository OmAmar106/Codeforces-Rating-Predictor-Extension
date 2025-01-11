function func() {
    // alert("breh");
    console.log("hi");
    document.body.innerHTML = '';
    document.body.innerHTML = `
        <h1>New Page Content</h1>
        <p>This is the new content replacing everything on the page.</p>
        <button onclick="alert('Button clicked!')">Click Me</button>
    `;
    return false

}
