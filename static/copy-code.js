// copy-code.js
document.addEventListener("DOMContentLoaded", async () => {
    let copyIcon = "";
    try {
        const res = await fetch("/icons/copy.svg");
        copyIcon = await res.text();
    } catch (err) {
        console.error("Failed to load copy icon", err);
        copyIcon = "<p>Copy</p>"; // Fallback text if icon fails to load
    }

    document.querySelectorAll("pre").forEach((preBlock) => {
        // Create the copy button
        const button = document.createElement("button");
        button.ariaLabel = "Copy code to clipboard";
        button.innerHTML = copyIcon;
        // button.innerText = "Copy";
        button.className = "copy-btn";

        // Insert button before the code block
        preBlock.style.position = "relative";
        preBlock.insertBefore(button, preBlock.firstChild);

        button.addEventListener("click", async () => {
            try {
                // Extract text from the code block
                const codeElement = preBlock.querySelector("code");
                const text = codeElement.innerText; // Works with Zola's span-wrapped code

                await navigator.clipboard.writeText(text);

                // Feedback to user
                button.innerText = "Copied!";
                setTimeout(() => (button.innerHTML = copyIcon), 2000);
            } catch (err) {
                console.error("Copy failed", err);
                button.innerHTML = "Error";
            }
        });
    });
});
