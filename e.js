document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
    const totalEl = document.getElementById("total");

    const updateTotal = () => {
        let total = 0;
        products.forEach(prod => {
            const qty = parseInt(prod.querySelector(".qty").value) || 0;
            const price = parseFloat(prod.dataset.price);
            total += qty * price;
        });
        totalEl.textContent = total.toFixed(2);
    };

    products.forEach(product => {
        const decreaseBtn = product.querySelector(".decrease");
        const increaseBtn = product.querySelector(".increase");
        const qtyInput = product.querySelector(".qty");

        decreaseBtn.addEventListener("click", () => {
            const currentQty = parseInt(qtyInput.value) || 0;
            if (currentQty > 0) qtyInput.value = currentQty - 1;
            updateTotal();
        });

        increaseBtn.addEventListener("click", () => {
            const currentQty = parseInt(qtyInput.value) || 0;
            qtyInput.value = currentQty + 1;
            updateTotal();
        });

        qtyInput.addEventListener("input", updateTotal);
    });

    document.getElementById("checkout").addEventListener("click", () => {
        let emailBody = "Order Summary:\n\n";
        products.forEach(prod => {
            const productName = prod.querySelector("h3").textContent;
            const qty = parseInt(prod.querySelector(".qty").value) || 0;
            const price = parseFloat(prod.dataset.price);
            if (qty > 0) {
                emailBody += `${productName}: ${qty} x $${price.toFixed(2)} = $${(qty * price).toFixed(2)}\n`;
            }
        });
        emailBody += `\nTotal: $${totalEl.textContent}`;

        const mailtoLink = `mailto:hasanmobin154@gmail.com?subject=Order%20Details&body=${encodeURIComponent(emailBody)}`;

        // Add animation to checkout button before sending the email
        const checkoutButton = document.getElementById("checkout");
        checkoutButton.style.transform = "scale(1.1)";
        checkoutButton.style.transition = "transform 0.2s ease";

        setTimeout(() => {
            window.location.href = mailtoLink;
        }, 200); // Delay to allow the animation to play
    });
});
